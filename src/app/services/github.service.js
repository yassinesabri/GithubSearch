"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by sabri on 4/7/2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var GithubService = (function () {
    function GithubService(http) {
        this.http = http;
        //username:string;
        this.client_id = '42b0eaa350e81cb088a8';
        this.client_secret = 'f1bc4c149926c445c21af7c329d04625711879f7';
        //console.log('service ready...');
        //this.username = 'yassinesabri';
    }
    GithubService.prototype.getUser = function (username) {
        return this.http.get('http://api.github.com/users/' + username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(function (res) { return res.json(); });
    };
    GithubService.prototype.getRepos = function (username) {
        return this.http.get('http://api.github.com/users/' + username + '/repos' + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(function (res) { return res.json(); });
    };
    return GithubService;
}());
GithubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GithubService);
exports.GithubService = GithubService;
//# sourceMappingURL=github.service.js.map