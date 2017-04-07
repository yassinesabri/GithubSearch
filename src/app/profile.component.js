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
var github_service_1 = require("./services/github.service");
var ProfileComponent = (function () {
    function ProfileComponent(githubService) {
        this.githubService = githubService;
        console.log('profile ready ...');
        this.user = null;
    }
    ProfileComponent.prototype.searchUser = function () {
        var _this = this;
        //console.log('it works');
        this.githubService.getUser(this.username).subscribe(function (user) {
            //console.log(user);
            _this.user = user;
        });
        this.githubService.getRepos(this.username).subscribe(function (repos) {
            //console.log(user);
            _this.repos = repos;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'profile',
        templateUrl: 'profile.component.html',
        providers: [github_service_1.GithubService],
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map