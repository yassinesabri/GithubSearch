/**
 * Created by sabri on 4/7/2017.
 */
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  //username:string;
  private client_id:string='42b0eaa350e81cb088a8';
  private client_secret:string='f1bc4c149926c445c21af7c329d04625711879f7';
  constructor(private http:Http){
    //console.log('service ready...');
    //this.username = 'yassinesabri';
  }
  getUser(username:string){
    return this.http.get('http://api.github.com/users/'+username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res=>res.json());
  }
  getRepos(username:string){
    return this.http.get('http://api.github.com/users/'+username+'/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res=>res.json());
  }

}
