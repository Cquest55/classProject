"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OAuthApi = /** @class */ (function () {
    function OAuthApi() {
        this._apiKeyTest = "FvyuaGuOJQLm5R5EKUmOvInT23XrVN6V";
        this._apiSecretTest = "32kLe2Ed8xX8SI5i";
        this._url = "https://test.api.amadeus.com/v1/security/oauth2/token";
        this._grantTypeTest = "client_credentials";
    }
    Object.defineProperty(OAuthApi.prototype, "access_token", {
        get: function () {
            return this._access_token;
        },
        set: function (value) {
            this._access_token = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "application_name", {
        get: function () {
            return this._application_name;
        },
        set: function (value) {
            this._application_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "client_id", {
        get: function () {
            return this._client_id;
        },
        set: function (value) {
            this._client_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "expires_in", {
        get: function () {
            return this._expires_in;
        },
        set: function (value) {
            this._expires_in = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "token_type", {
        get: function () {
            return this._token_type;
        },
        set: function (value) {
            this._token_type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "apiKeyTest", {
        get: function () {
            return this._apiKeyTest;
        },
        set: function (value) {
            this._apiKeyTest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "apiSecretTest", {
        get: function () {
            return this._apiSecretTest;
        },
        set: function (value) {
            this._apiSecretTest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OAuthApi.prototype, "grantTypeTest", {
        get: function () {
            return this._grantTypeTest;
        },
        set: function (value) {
            this._grantTypeTest = value;
        },
        enumerable: true,
        configurable: true
    });
    OAuthApi.prototype.callAuthorizationApi = function () {
        return "";
    };
    return OAuthApi;
}());
exports.OAuthApi = OAuthApi;
//# sourceMappingURL=OAuthApi.js.map