const firebase = require("firebase");
require("firebase/firestore");
const _ = require("lodash");
firebase.initializeApp({
    apiKey: "AIzaSyCIr3MRJnUs8cGh9Pc_mFB4upW2mS6mzNs",
    authDomain: "soy-pro-1c307.firebaseapp.com",
    databaseURL: "https://soy-pro-1c307.firebaseio.com",
    projectId: 'soy-pro-1c307',
    storageBucket: "gs://soy-pro-1c307.appspot.com",
    messagingSenderId: '1071003900744'
});

var storage = firebase.storage();
var storageRoot = storage.ref();

/**
 * Utility function to upload a file in a Firebase storage bucket
 *
 * @param {File} rawFile the file to upload
 * @param {File} storageRef the storage reference
 * @returns {Promise}  the promise of the URL where the file can be download from the bucket
 */

async function uploadFileToBucket(rawFile, storageRef) {
    try {
        const snapshot = await storageRef.put(rawFile);
        return await snapshot.ref.getDownloadURL();
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
            requestHandler(type, resource, params);
        } else {
            return requestHandler(type, resource, params);
        }
    } catch (error) {
        requestHandler(type, resource, params);
    }
    return requestHandler(type, resource, params);
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
    return await Promise.all(promises);
}

/**
 * Utility function to create or update a file in Firestore
 *
 * @param {String} resource resource name, will be used as a directory to prevent an awful mess in the bucket
 * @param file
 * @param {Function} uploadFile the storage reference
 * @returns {Promise}  the promise of the URL where the file can be download from the bucket
 */

async function createOrUpdateFile(resource, file, uploadFile) {
    try {
        var storageRef = storageRoot.child(resource + "/" + file.name);
        var metadata = await storageRef.getMetadata();
        if (metadata && metadata.size === file.size) {
            return await storageRef.getDownloadURL();
        } else {
            return await uploadFile(file, storageRef);
        }
    } catch (error) {
        return await uploadFile(file, storageRef);
    }
}

export default addUploadCapabilities;
