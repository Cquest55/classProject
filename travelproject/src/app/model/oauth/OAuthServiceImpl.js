"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthServiceImpl = void 0;
class OAuthServiceImpl {
    constructor(access_token, application_name, client_id, expires_in, scope, state, token_type, type, username) {
        //TODO: make property
        this._apiKeyTest = "FvyuaGuOJQLm5R5EKUmOvInT23XrVN6V";
        //TODO: make property
        this._apiSecretTest = "32kLe2Ed8xX8SI5i";
        this._url = "https://test.api.amadeus.com/v1/security/oauth2/token";
        this._grantTypeTest = "client_credentials";
        this._access_token = access_token;
        this._application_name = application_name;
        this._client_id = client_id;
        this._expires_in = expires_in;
        this._scope = scope;
        this._state = state;
        this._token_type = token_type;
        this._type = type;
        this._username = username;
    }
    get access_token() {
        return this._access_token;
    }
    set access_token(value) {
        this._access_token = value;
    }
    get application_name() {
        return this._application_name;
    }
    set application_name(value) {
        this._application_name = value;
    }
    get client_id() {
        return this._client_id;
    }
    set client_id(value) {
        this._client_id = value;
    }
    get expires_in() {
        return this._expires_in;
    }
    set expires_in(value) {
        this._expires_in = value;
    }
    get scope() {
        return this._scope;
    }
    set scope(value) {
        this._scope = value;
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    get token_type() {
        return this._token_type;
    }
    set token_type(value) {
        this._token_type = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get apiKeyTest() {
        return this._apiKeyTest;
    }
    set apiKeyTest(value) {
        this._apiKeyTest = value;
    }
    get apiSecretTest() {
        return this._apiSecretTest;
    }
    set apiSecretTest(value) {
        this._apiSecretTest = value;
    }
    get url() {
        return this._url;
    }
    set url(value) {
        this._url = value;
    }
    get grantTypeTest() {
        return this._grantTypeTest;
    }
    set grantTypeTest(value) {
        this._grantTypeTest = value;
    }
}
exports.OAuthServiceImpl = OAuthServiceImpl;
//# sourceMappingURL=OAuthServiceImpl.js.map