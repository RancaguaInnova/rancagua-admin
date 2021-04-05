import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import firebaseConfig from "../../firebaseConfig";

const _ = require("lodash");



firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const storageRoot = storage.ref();

/**
 * Utility function to upload a file in a Firebase storage bucket
 *
 * @param {File} rawFile the file to upload
 * @param {File} storageRef the storage reference
 * @returns {Promise}  the promise of the URL where the file can be download from the bucket
 */

async function uploadFileToBucket(rawFile, storageRef) {
    try {

        const task = storageRef.put(rawFile);

        const taskResult = storageRef.UploadTaskSnapshot = await new Promise(
            (res, rej) => task.then(res).catch(rej)
        );
        const getDownloadURL = await taskResult.ref.getDownloadURL();
        return getDownloadURL
    } catch (error) {
        throw new Error({message: error.message_, status: 401});
    }
}

function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for (
        objectToInspect = o;
        objectToInspect !== null;
        objectToInspect = Object.getPrototypeOf(objectToInspect)
    ) {
        result = result.concat(Object.entries(objectToInspect));
    }

    return result;
}

const addUploadCapabilities = requestHandler => async (
    type,
    resource,
    params
) => {
    try {
        if (type === "UPDATE" || type === "CREATE") {
            var Properties = listAllProperties(params.data);
            const filesToUpload = [];

            Properties.forEach(keyValuePair => {
                const [key, value] = keyValuePair;
                if (value && typeof value === "object" && value.length) {
                    value.forEach(fileCandidate => {
                        if (_.has(fileCandidate, "rawFile")) {
                            fileCandidate.fieldKey = key;
                            filesToUpload.push(fileCandidate);
                        }
                    });
                }
                if (value && typeof value === "object") {
                    if (_.has(value, "rawFile")) {
                        value.fieldKey = key;
                        filesToUpload.push(value);
                    }
                }
            });

            await createOrUpdateFiles(resource, filesToUpload, uploadFileToBucket);
            return requestHandler(type, resource, params);
        } else {
            return requestHandler(type, resource, params);
        }
    } catch (error) {
        requestHandler(type, resource, params);
    }
    // return requestHandler(type, resource, params);
};

async function createOrUpdateFiles(resource, Files, uploadFile) {
    const promises = Files.map(async item => {
        const urlDownload = await createOrUpdateFile(
            resource,
            item.rawFile,
            uploadFile
        );
        delete item.rawFile;
        item.src = urlDownload;
        return item;
    });
    const files = await Promise.all(promises);
    return files;
}

/**
 * Utility function to create or update a file in Firestore
 *
 * @param {String} resource resource name, will be used as a directory to prevent an awful mess in the bucket
 * @param {File} rawFile the file to upload if it is not already there
 * @param {Function} uploadFile the storage reference
 * @returns {Promise}  the promise of the URL where the file can be download from the bucket
 */

async function createOrUpdateFile(resource, file, uploadFile) {
    try {
        var storageRef = storageRoot.child(resource + "/" + file.name);
        var metadata = await storageRef.getMetadata();

        if (metadata && metadata.size === file.size) {
            const downloadUrl = await storageRef.getDownloadURL();
            return downloadUrl;
        } else {

            const uploaded = await uploadFile(file, storageRef);
            return uploaded;
        }
    } catch (error) {
        const uploaded = await uploadFile(file, storageRef);
        return uploaded;
    }
}


export default addUploadCapabilities;
