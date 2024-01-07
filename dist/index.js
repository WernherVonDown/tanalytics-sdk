"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_axios = __toESM(require("axios"));
var API_ENDPOINT = "https://tanalytics.ru/api/v1/events";
var Tanalytics = class {
  constructor(apiKey) {
    this.headers = {};
    if (!apiKey)
      throw Error("requires an apikey");
    this.headers = {
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Api-Key": apiKey
    };
  }
  send(eventType, options) {
    const event = {
      type: eventType,
      userId: options?.userId ?? generateRandomString(),
      message: options?.message
    };
    const config = {
      headers: this.headers,
      body: event
    };
    return import_axios.default.post(API_ENDPOINT, config);
  }
  sendLogin(options) {
    return this.send("login" /* login */, options);
  }
  sendRegister(options) {
    return this.send("register" /* register */, options);
  }
  sendVisit(options) {
    return this.send("visit" /* visit */, options);
  }
  sendMessage(options) {
    return this.send("message" /* message */, options);
  }
};
var src_default = Tanalytics;
