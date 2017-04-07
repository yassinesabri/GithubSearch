/**
 * Created by sabri on 4/7/2017.
 */
import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({
  moduleId:module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
  providers :[GithubService],
})
export class ProfileComponent  {
  user:string[];
  repos:string[];
  username:string;
  constructor(private githubService:GithubService){
    console.log('profile ready ...');
    this.user=null;
  }
  searchUser(){
    //console.log('it works');
    this.githubService.getUser(this.username).subscribe(user =>{
      //console.log(user);
      this.user = user;
    });
    this.githubService.getRepos(this.username).subscribe(repos =>{
      //console.log(user);
      this.repos = repos;
    })
  }
}
