export function apiBase() {
    var API_BASE_URL = 'http://lab205.jios.org:3335/';
    return API_BASE_URL;
}

export function serviceapi() {
    var SERVICE_API_URL = 'http://lab205.jios.org:3336/';
    return SERVICE_API_URL;
}

import bus from "../static/eventBus"

export function getFiles() {
    var name = '';
    bus.$on("sendUsernameToHome",function (arg) {
        name = arg;
    });
    console.log("bus:"+name);
    return name;
}