(window["webpackJsonp_ember_auto_import_"] = window["webpackJsonp_ember_auto_import_"] || []).push([[3],{

/***/ "./node_modules/@firebase/functions/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/functions/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, '__esModule', { value: true });\n\nfunction _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }\n\nvar firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ \"./node_modules/@firebase/app/dist/index.cjs.js\"));\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/@firebase/functions/node_modules/tslib/tslib.es6.js\");\n\n/**\r\n * @license\r\n * Copyright 2017 Google Inc.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *   http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\n/**\r\n * Standard error codes for different ways a request can fail, as defined by:\r\n * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto\r\n *\r\n * This map is used primarily to convert from a backend error code string to\r\n * a client SDK error code string, and make sure it's in the supported set.\r\n */\r\nvar errorCodeMap = {\r\n    OK: 'ok',\r\n    CANCELLED: 'cancelled',\r\n    UNKNOWN: 'unknown',\r\n    INVALID_ARGUMENT: 'invalid-argument',\r\n    DEADLINE_EXCEEDED: 'deadline-exceeded',\r\n    NOT_FOUND: 'not-found',\r\n    ALREADY_EXISTS: 'already-exists',\r\n    PERMISSION_DENIED: 'permission-denied',\r\n    UNAUTHENTICATED: 'unauthenticated',\r\n    RESOURCE_EXHAUSTED: 'resource-exhausted',\r\n    FAILED_PRECONDITION: 'failed-precondition',\r\n    ABORTED: 'aborted',\r\n    OUT_OF_RANGE: 'out-of-range',\r\n    UNIMPLEMENTED: 'unimplemented',\r\n    INTERNAL: 'internal',\r\n    UNAVAILABLE: 'unavailable',\r\n    DATA_LOSS: 'data-loss'\r\n};\r\n/**\r\n * An explicit error that can be thrown from a handler to send an error to the\r\n * client that called the function.\r\n */\r\nvar HttpsErrorImpl = /** @class */ (function (_super) {\r\n    tslib_1.__extends(HttpsErrorImpl, _super);\r\n    function HttpsErrorImpl(code, message, details) {\r\n        var _this = _super.call(this, message) || this;\r\n        // This is a workaround for a bug in TypeScript when extending Error:\r\n        // tslint:disable-next-line\r\n        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work\r\n        Object.setPrototypeOf(_this, HttpsErrorImpl.prototype);\r\n        _this.code = code;\r\n        _this.details = details;\r\n        return _this;\r\n    }\r\n    return HttpsErrorImpl;\r\n}(Error));\r\n/**\r\n * Takes an HTTP status code and returns the corresponding ErrorCode.\r\n * This is the standard HTTP status code -> error mapping defined in:\r\n * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto\r\n *\r\n * @param status An HTTP status code.\r\n * @return The corresponding ErrorCode, or ErrorCode.UNKNOWN if none.\r\n */\r\nfunction codeForHTTPStatus(status) {\r\n    // Make sure any successful status is OK.\r\n    if (status >= 200 && status < 300) {\r\n        return 'ok';\r\n    }\r\n    switch (status) {\r\n        case 0:\r\n            // This can happen if the server returns 500.\r\n            return 'internal';\r\n        case 400:\r\n            return 'invalid-argument';\r\n        case 401:\r\n            return 'unauthenticated';\r\n        case 403:\r\n            return 'permission-denied';\r\n        case 404:\r\n            return 'not-found';\r\n        case 409:\r\n            return 'aborted';\r\n        case 429:\r\n            return 'resource-exhausted';\r\n        case 499:\r\n            return 'cancelled';\r\n        case 500:\r\n            return 'internal';\r\n        case 501:\r\n            return 'unimplemented';\r\n        case 503:\r\n            return 'unavailable';\r\n        case 504:\r\n            return 'deadline-exceeded';\r\n        default: // ignore\r\n    }\r\n    return 'unknown';\r\n}\r\n/**\r\n * Takes an HTTP response and returns the corresponding Error, if any.\r\n */\r\nfunction _errorForResponse(status, bodyJSON, serializer) {\r\n    var code = codeForHTTPStatus(status);\r\n    // Start with reasonable defaults from the status code.\r\n    var description = code;\r\n    var details = undefined;\r\n    // Then look through the body for explicit details.\r\n    try {\r\n        var errorJSON = bodyJSON && bodyJSON.error;\r\n        if (errorJSON) {\r\n            var status_1 = errorJSON.status;\r\n            if (typeof status_1 === 'string') {\r\n                if (!errorCodeMap[status_1]) {\r\n                    // They must've included an unknown error code in the body.\r\n                    return new HttpsErrorImpl('internal', 'internal');\r\n                }\r\n                code = errorCodeMap[status_1];\r\n                // TODO(klimt): Add better default descriptions for error enums.\r\n                // The default description needs to be updated for the new code.\r\n                description = status_1;\r\n            }\r\n            var message = errorJSON.message;\r\n            if (typeof message === 'string') {\r\n                description = message;\r\n            }\r\n            details = errorJSON.details;\r\n            if (details !== undefined) {\r\n                details = serializer.decode(details);\r\n            }\r\n        }\r\n    }\r\n    catch (e) {\r\n        // If we couldn't parse explicit error data, that's fine.\r\n    }\r\n    if (code === 'ok') {\r\n        // Technically, there's an edge case where a developer could explicitly\r\n        // return an error code of OK, and we will treat it as success, but that\r\n        // seems reasonable.\r\n        return null;\r\n    }\r\n    return new HttpsErrorImpl(code, description, details);\r\n}\n\n/**\r\n * Helper class to get metadata that should be included with a function call.\r\n */\r\nvar ContextProvider = /** @class */ (function () {\r\n    function ContextProvider(app) {\r\n        this.app = app;\r\n    }\r\n    ContextProvider.prototype.getAuthToken = function () {\r\n        return tslib_1.__awaiter(this, void 0, void 0, function () {\r\n            var token, e_1;\r\n            return tslib_1.__generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        _a.trys.push([0, 2, , 3]);\r\n                        return [4 /*yield*/, this.app.INTERNAL.getToken()];\r\n                    case 1:\r\n                        token = _a.sent();\r\n                        if (!token) {\r\n                            return [2 /*return*/, undefined];\r\n                        }\r\n                        return [2 /*return*/, token.accessToken];\r\n                    case 2:\r\n                        e_1 = _a.sent();\r\n                        // If there's any error when trying to get the auth token, leave it off.\r\n                        return [2 /*return*/, undefined];\r\n                    case 3: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ContextProvider.prototype.getInstanceIdToken = function () {\r\n        return tslib_1.__awaiter(this, void 0, void 0, function () {\r\n            var messaging, token, e_2;\r\n            return tslib_1.__generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        _a.trys.push([0, 2, , 3]);\r\n                        // HACK: Until we have a separate instanceId package, this is a quick way\r\n                        // to load in the messaging instance for this app.\r\n                        // eslint-disable-next-line @typescript-eslint/no-explicit-any\r\n                        if (!this.app.messaging) {\r\n                            return [2 /*return*/, undefined];\r\n                        }\r\n                        messaging = this.app.messaging();\r\n                        return [4 /*yield*/, messaging.getToken()];\r\n                    case 1:\r\n                        token = _a.sent();\r\n                        if (!token) {\r\n                            return [2 /*return*/, undefined];\r\n                        }\r\n                        return [2 /*return*/, token];\r\n                    case 2:\r\n                        e_2 = _a.sent();\r\n                        // We don't warn on this, because it usually means messaging isn't set up.\r\n                        // console.warn('Failed to retrieve instance id token.', e);\r\n                        // If there's any error when trying to get the token, leave it off.\r\n                        return [2 /*return*/, undefined];\r\n                    case 3: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    ContextProvider.prototype.getContext = function () {\r\n        return tslib_1.__awaiter(this, void 0, void 0, function () {\r\n            var authToken, instanceIdToken;\r\n            return tslib_1.__generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, this.getAuthToken()];\r\n                    case 1:\r\n                        authToken = _a.sent();\r\n                        return [4 /*yield*/, this.getInstanceIdToken()];\r\n                    case 2:\r\n                        instanceIdToken = _a.sent();\r\n                        return [2 /*return*/, { authToken: authToken, instanceIdToken: instanceIdToken }];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return ContextProvider;\r\n}());\n\n/**\r\n * @license\r\n * Copyright 2017 Google Inc.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *   http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\nvar LONG_TYPE = 'type.googleapis.com/google.protobuf.Int64Value';\r\nvar UNSIGNED_LONG_TYPE = 'type.googleapis.com/google.protobuf.UInt64Value';\r\nfunction mapValues(o, f) {\r\n    var result = {};\r\n    for (var key in o) {\r\n        if (o.hasOwnProperty(key)) {\r\n            result[key] = f(o[key]);\r\n        }\r\n    }\r\n    return result;\r\n}\r\nvar Serializer = /** @class */ (function () {\r\n    function Serializer() {\r\n    }\r\n    // Takes data and encodes it in a JSON-friendly way, such that types such as\r\n    // Date are preserved.\r\n    Serializer.prototype.encode = function (data) {\r\n        var _this = this;\r\n        if (data == null) {\r\n            return null;\r\n        }\r\n        if (data instanceof Number) {\r\n            data = data.valueOf();\r\n        }\r\n        if (typeof data === 'number' && isFinite(data)) {\r\n            // Any number in JS is safe to put directly in JSON and parse as a double\r\n            // without any loss of precision.\r\n            return data;\r\n        }\r\n        if (data === true || data === false) {\r\n            return data;\r\n        }\r\n        if (Object.prototype.toString.call(data) === '[object String]') {\r\n            return data;\r\n        }\r\n        if (Array.isArray(data)) {\r\n            return data.map(function (x) { return _this.encode(x); });\r\n        }\r\n        if (typeof data === 'function' || typeof data === 'object') {\r\n            return mapValues(data, function (x) { return _this.encode(x); });\r\n        }\r\n        // If we got this far, the data is not encodable.\r\n        throw new Error('Data cannot be encoded in JSON: ' + data);\r\n    };\r\n    // Takes data that's been encoded in a JSON-friendly form and returns a form\r\n    // with richer datatypes, such as Dates, etc.\r\n    Serializer.prototype.decode = function (json) {\r\n        var _this = this;\r\n        if (json == null) {\r\n            return json;\r\n        }\r\n        if (json['@type']) {\r\n            switch (json['@type']) {\r\n                case LONG_TYPE:\r\n                // Fall through and handle this the same as unsigned.\r\n                case UNSIGNED_LONG_TYPE: {\r\n                    // Technically, this could work return a valid number for malformed\r\n                    // data if there was a number followed by garbage. But it's just not\r\n                    // worth all the extra code to detect that case.\r\n                    var value = Number(json['value']);\r\n                    if (isNaN(value)) {\r\n                        throw new Error('Data cannot be decoded from JSON: ' + json);\r\n                    }\r\n                    return value;\r\n                }\r\n                default: {\r\n                    throw new Error('Data cannot be decoded from JSON: ' + json);\r\n                }\r\n            }\r\n        }\r\n        if (Array.isArray(json)) {\r\n            return json.map(function (x) { return _this.decode(x); });\r\n        }\r\n        if (typeof json === 'function' || typeof json === 'object') {\r\n            return mapValues(json, function (x) {\r\n                return _this.decode(x);\r\n            });\r\n        }\r\n        // Anything else is safe to return.\r\n        return json;\r\n    };\r\n    return Serializer;\r\n}());\n\n/**\r\n * @license\r\n * Copyright 2017 Google Inc.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *   http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\n/**\r\n * Returns a Promise that will be rejected after the given duration.\r\n * The error will be of type HttpsErrorImpl.\r\n *\r\n * @param millis Number of milliseconds to wait before rejecting.\r\n */\r\nfunction failAfter(millis) {\r\n    return new Promise(function (_, reject) {\r\n        setTimeout(function () {\r\n            reject(new HttpsErrorImpl('deadline-exceeded', 'deadline-exceeded'));\r\n        }, millis);\r\n    });\r\n}\r\n/**\r\n * The main class for the Firebase Functions SDK.\r\n */\r\nvar Service = /** @class */ (function () {\r\n    /**\r\n     * Creates a new Functions service for the given app and (optional) region.\r\n     * @param app_ The FirebaseApp to use.\r\n     * @param region_ The region to call functions in.\r\n     */\r\n    function Service(app_, region_) {\r\n        var _this = this;\r\n        if (region_ === void 0) { region_ = 'us-central1'; }\r\n        this.app_ = app_;\r\n        this.region_ = region_;\r\n        this.serializer = new Serializer();\r\n        this.emulatorOrigin = null;\r\n        this.INTERNAL = {\r\n            delete: function () {\r\n                return _this.deleteService();\r\n            }\r\n        };\r\n        this.contextProvider = new ContextProvider(app_);\r\n        // Cancels all ongoing requests when resolved.\r\n        this.cancelAllRequests = new Promise(function (resolve) {\r\n            _this.deleteService = function () {\r\n                return resolve();\r\n            };\r\n        });\r\n    }\r\n    Object.defineProperty(Service.prototype, \"app\", {\r\n        get: function () {\r\n            return this.app_;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    /**\r\n     * Returns the URL for a callable with the given name.\r\n     * @param name The name of the callable.\r\n     */\r\n    Service.prototype._url = function (name) {\r\n        var projectId = this.app_.options.projectId;\r\n        var region = this.region_;\r\n        if (this.emulatorOrigin !== null) {\r\n            var origin_1 = this.emulatorOrigin;\r\n            return origin_1 + \"/\" + projectId + \"/\" + region + \"/\" + name;\r\n        }\r\n        return \"https://\" + region + \"-\" + projectId + \".cloudfunctions.net/\" + name;\r\n    };\r\n    /**\r\n     * Changes this instance to point to a Cloud Functions emulator running\r\n     * locally. See https://firebase.google.com/docs/functions/local-emulator\r\n     *\r\n     * @param origin The origin of the local emulator, such as\r\n     * \"http://localhost:5005\".\r\n     */\r\n    Service.prototype.useFunctionsEmulator = function (origin) {\r\n        this.emulatorOrigin = origin;\r\n    };\r\n    /**\r\n     * Returns a reference to the callable https trigger with the given name.\r\n     * @param name The name of the trigger.\r\n     */\r\n    Service.prototype.httpsCallable = function (name, options) {\r\n        var _this = this;\r\n        return function (data) {\r\n            return _this.call(name, data, options || {});\r\n        };\r\n    };\r\n    /**\r\n     * Does an HTTP POST and returns the completed response.\r\n     * @param url The url to post to.\r\n     * @param body The JSON body of the post.\r\n     * @param headers The HTTP headers to include in the request.\r\n     * @return A Promise that will succeed when the request finishes.\r\n     */\r\n    Service.prototype.postJSON = function (url, body, headers) {\r\n        return tslib_1.__awaiter(this, void 0, void 0, function () {\r\n            var response, e_1, json, e_2;\r\n            return tslib_1.__generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        headers.append('Content-Type', 'application/json');\r\n                        _a.label = 1;\r\n                    case 1:\r\n                        _a.trys.push([1, 3, , 4]);\r\n                        return [4 /*yield*/, fetch(url, {\r\n                                method: 'POST',\r\n                                body: JSON.stringify(body),\r\n                                headers: headers\r\n                            })];\r\n                    case 2:\r\n                        response = _a.sent();\r\n                        return [3 /*break*/, 4];\r\n                    case 3:\r\n                        e_1 = _a.sent();\r\n                        // This could be an unhandled error on the backend, or it could be a\r\n                        // network error. There's no way to know, since an unhandled error on the\r\n                        // backend will fail to set the proper CORS header, and thus will be\r\n                        // treated as a network error by fetch.\r\n                        return [2 /*return*/, {\r\n                                status: 0,\r\n                                json: null\r\n                            }];\r\n                    case 4:\r\n                        json = null;\r\n                        _a.label = 5;\r\n                    case 5:\r\n                        _a.trys.push([5, 7, , 8]);\r\n                        return [4 /*yield*/, response.json()];\r\n                    case 6:\r\n                        json = _a.sent();\r\n                        return [3 /*break*/, 8];\r\n                    case 7:\r\n                        e_2 = _a.sent();\r\n                        return [3 /*break*/, 8];\r\n                    case 8: return [2 /*return*/, {\r\n                            status: response.status,\r\n                            json: json\r\n                        }];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    /**\r\n     * Calls a callable function asynchronously and returns the result.\r\n     * @param name The name of the callable trigger.\r\n     * @param data The data to pass as params to the function.s\r\n     */\r\n    Service.prototype.call = function (name, data, options) {\r\n        return tslib_1.__awaiter(this, void 0, void 0, function () {\r\n            var url, body, headers, context, timeout, response, error, responseData, decodedData;\r\n            return tslib_1.__generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        url = this._url(name);\r\n                        // Encode any special types, such as dates, in the input data.\r\n                        data = this.serializer.encode(data);\r\n                        body = { data: data };\r\n                        headers = new Headers();\r\n                        return [4 /*yield*/, this.contextProvider.getContext()];\r\n                    case 1:\r\n                        context = _a.sent();\r\n                        if (context.authToken) {\r\n                            headers.append('Authorization', 'Bearer ' + context.authToken);\r\n                        }\r\n                        if (context.instanceIdToken) {\r\n                            headers.append('Firebase-Instance-ID-Token', context.instanceIdToken);\r\n                        }\r\n                        timeout = options.timeout || 70000;\r\n                        return [4 /*yield*/, Promise.race([\r\n                                this.postJSON(url, body, headers),\r\n                                failAfter(timeout),\r\n                                this.cancelAllRequests\r\n                            ])];\r\n                    case 2:\r\n                        response = _a.sent();\r\n                        // If service was deleted, interrupted response throws an error.\r\n                        if (!response) {\r\n                            throw new HttpsErrorImpl('cancelled', 'Firebase Functions instance was deleted.');\r\n                        }\r\n                        error = _errorForResponse(response.status, response.json, this.serializer);\r\n                        if (error) {\r\n                            throw error;\r\n                        }\r\n                        if (!response.json) {\r\n                            throw new HttpsErrorImpl('internal', 'Response is not valid JSON object.');\r\n                        }\r\n                        responseData = response.json.data;\r\n                        // TODO(klimt): For right now, allow \"result\" instead of \"data\", for\r\n                        // backwards compatibility.\r\n                        if (typeof responseData === 'undefined') {\r\n                            responseData = response.json.result;\r\n                        }\r\n                        if (typeof responseData === 'undefined') {\r\n                            // Consider the response malformed.\r\n                            throw new HttpsErrorImpl('internal', 'Response is missing data field.');\r\n                        }\r\n                        decodedData = this.serializer.decode(responseData);\r\n                        return [2 /*return*/, { data: decodedData }];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return Service;\r\n}());\n\n/**\r\n * @license\r\n * Copyright 2017 Google Inc.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *   http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\n/**\r\n * Type constant for Firebase Functions.\r\n */\r\nvar FUNCTIONS_TYPE = 'functions';\r\nfunction factory(app, _unused, region) {\r\n    return new Service(app, region);\r\n}\r\nfunction registerFunctions(instance) {\r\n    var namespaceExports = {\r\n        // no-inline\r\n        Functions: Service\r\n    };\r\n    instance.INTERNAL.registerService(FUNCTIONS_TYPE, factory, namespaceExports, \r\n    // We don't need to wait on any AppHooks.\r\n    undefined, \r\n    // Allow multiple functions instances per app.\r\n    true);\r\n}\r\nregisterFunctions(firebase);\n\nexports.registerFunctions = registerFunctions;\n//# sourceMappingURL=index.cjs.js.map\n\n\n//# sourceURL=webpack://__ember_auto_import__/./node_modules/@firebase/functions/dist/index.cjs.js?");

/***/ }),

/***/ "./node_modules/@firebase/functions/node_modules/tslib/tslib.es6.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@firebase/functions/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__extends\", function() { return __extends; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__assign\", function() { return __assign; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__rest\", function() { return __rest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__decorate\", function() { return __decorate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__param\", function() { return __param; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__metadata\", function() { return __metadata; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__awaiter\", function() { return __awaiter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__generator\", function() { return __generator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__exportStar\", function() { return __exportStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__values\", function() { return __values; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__read\", function() { return __read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__spread\", function() { return __spread; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__await\", function() { return __await; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncGenerator\", function() { return __asyncGenerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncDelegator\", function() { return __asyncDelegator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncValues\", function() { return __asyncValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__makeTemplateObject\", function() { return __makeTemplateObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importStar\", function() { return __importStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importDefault\", function() { return __importDefault; });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation. All rights reserved.\r\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\nthis file except in compliance with the License. You may obtain a copy of the\r\nLicense at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\nMERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\nSee the Apache Version 2.0 License for specific language governing permissions\r\nand limitations under the License.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)\r\n            t[p[i]] = s[p[i]];\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\r\n    if (m) return m.call(o);\r\n    return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\n\n//# sourceURL=webpack://__ember_auto_import__/./node_modules/@firebase/functions/node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./node_modules/firebase/functions/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/functions/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/functions */ \"./node_modules/@firebase/functions/dist/index.cjs.js\");\n/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_functions__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\r\n * @license\r\n * Copyright 2017 Google Inc.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *   http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\n//# sourceMappingURL=index.esm.js.map\n\n\n//# sourceURL=webpack://__ember_auto_import__/./node_modules/firebase/functions/dist/index.esm.js?");

/***/ })

}]);