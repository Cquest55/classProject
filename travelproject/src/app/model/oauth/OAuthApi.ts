import {OAuthJSON} from "./OAuthJSON";
import fetch from "node-fetch";
import {response} from "express";

export class OAuthApi implements OAuthJSON {

    private _access_token: string;
    private _application_name: string;
    private _client_id: string;
    private _expires_in: number;
    private _scope: string;
    private _state: string;
    private _token_type: string;
    private _type: string;
    private _username: string;
    //TODO: make property
    private _apiKeyTest: string = "FvyuaGuOJQLm5R5EKUmOvInT23XrVN6V";
    //TODO: make property
    private _apiSecretTest: string = "32kLe2Ed8xX8SI5i";
    private _url: string = "https://test.api.amadeus.com/v1/security/oauth2/token";
    private _grantTypeTest = "client_credentials";


    get access_token(): string {
        return this._access_token;
    }

    set access_token(value: string) {
        this._access_token = value;
    }

    get application_name(): string {
        return this._application_name;
    }

    set application_name(value: string) {
        this._application_name = value;
    }

    get client_id(): string {
        return this._client_id;
    }

    set client_id(value: string) {
        this._client_id = value;
    }

    get expires_in(): number {
        return this._expires_in;
    }

    set expires_in(value: number) {
        this._expires_in = value;
    }

    get scope(): string {
        return this._scope;
    }

    set scope(value: string) {
        this._scope = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get token_type(): string {
        return this._token_type;
    }

    set token_type(value: string) {
        this._token_type = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get apiKeyTest(): string {
        return this._apiKeyTest;
    }

    set apiKeyTest(value: string) {
        this._apiKeyTest = value;
    }

    get apiSecretTest(): string {
        return this._apiSecretTest;
    }

    set apiSecretTest(value: string) {
        this._apiSecretTest = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get grantTypeTest(): string {
        return this._grantTypeTest;
    }

    set grantTypeTest(value: string) {
        this._grantTypeTest = value;
    }


    constructor(access_token: string, application_name: string, client_id: string, expires_in: number, scope: string, state: string, token_type: string, type: string, username: string) {
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

    callAuthorizationApi(){
        return fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
            headers : {
                "Content-Type": 'application/x-www-form-urlencoded',
                "grant_type": {
                    "client_id" : this._client_id,
                    "client_secret": this._apiSecretTest
                }
            },

        }).then(response = JSON.stringify(res))) {
            return response as OAuthJSON; // Cast the response type to our interface
        });
    }
/*
    curl "https://test.api.amadeus.com/v1/security/oauth2/token" \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "grant_type=client_credentials&client_id={client_id}&client_secret={client_secret}"
*/


}