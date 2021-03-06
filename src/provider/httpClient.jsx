import { stringify } from "query-string";
import axios from "axios";
import { getST } from "./Storage";

export const fetchJson = (url, options) => {
  const requestHeaders =
    options.headers ||
    new Headers({
      Accept: "application/json",
    });
  if (
    !requestHeaders.has("Content-Type") &&
    !(options && options.body && options.body instanceof FormData)
  ) {
    requestHeaders["Content-Type"] = "application/json";
  }
  // let token = "";
  /*  try {
   
  } catch (e) {
    console.error(e);
  } */
  let token = getST("token");
  requestHeaders["Authorization"] = `Bearer ${token}`;

  return axios(url, { ...options, headers: requestHeaders }).then(
    (response) => {
      try {
        let { status, statusText, data } = response;
        if (status < 200 || status >= 300) {
          return Promise.reject({
            data: data || statusText,
            status,
          });
        }
        return Promise.resolve(response);
      } catch (error) {
        return Promise.resolve({});
      }
    },
    (error) => {
      if (error.response) {
        let { status, statusText, data } = error.response;
        if (status < 200 || status >= 300) {
          return Promise.reject({
            data: data || statusText,
            status,
          });
        }
      }
    }
  );
};

export const queryParameters = stringify;

const isValidObject = (value) => {
  if (!value) {
    return false;
  }

  const isArray = Array.isArray(value);
  const isBuffer = typeof Buffer !== "undefined" && Buffer.isBuffer(value);
  const isObject = Object.prototype.toString.call(value) === "[object Object]";
  const hasKeys = !!Object.keys(value).length;

  return !isArray && !isBuffer && isObject && hasKeys;
};

export const flattenObject = (value, path = []) => {
  if (isValidObject(value)) {
    return Object.assign(
      {},
      ...Object.keys(value).map((key) =>
        flattenObject(value[key], path.concat([key]))
      )
    );
  } else {
    return path.length ? { [path.join(".")]: value } : value;
  }
};
