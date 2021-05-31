import getEnv from "./getEnv";

const urls = {
  local: `http://${window.location.hostname}:8080`,
  dev: `https://services.smartrancagua.com`,
  prod: "https://services.smartrancagua.com",
};

const env = getEnv();

if (env !== "local" && window.location.protocol !== "https:") {
  window.location.protocol = "https:";
}

export default urls["prod"];
