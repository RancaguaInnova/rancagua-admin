import {
  AUTH_CHECK,
  AUTH_ERROR,
  AUTH_GET_PERMISSIONS,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from "react-admin";
import url from "../urlprovider";
import { setST, getST } from "../provider/Storage";
import { buildFullAccessFor } from "ra-auth-acl";

export default async (type, params) => {
  try {
    if (type === AUTH_LOGIN) {
      const { username, password } = params;
      let email = username;
      const request = new Request(url + "/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: new Headers({ "Content-Type": "application/json" }),
      });

      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }

      const t = await response.json();
      console.log("t", t);
      setST("token", t.services.authToken);
      setST("user", t.profile);
      setST("role", t.roles);

      return Promise.resolve(true);
    }
    if (type === AUTH_LOGOUT) {
      localStorage.removeItem("token");
      return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
      const status = params.status;
      if (status === 401 || status === 403) {
        localStorage.removeItem("token");

        return Promise.reject();
      }
      return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
      //return Promise.resolve;
      return getST("token")
        ? Promise.resolve()
        : Promise.reject({ redirectTo: "/login" });
    }
    if (type === AUTH_GET_PERMISSIONS) {
      const role = getST("role");
      role.map(function (item, index) {
        return Promise.resolve(permissions[item]);
      });
    }
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

const permissions = {
  admin: {
    ...buildFullAccessFor(["users", "news", "profile"]),
  },
  user: {
    ...buildFullAccessFor(["news", "profile"]),
  },
};
