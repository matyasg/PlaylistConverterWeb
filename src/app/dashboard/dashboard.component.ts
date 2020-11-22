import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {AppComponent} from '../app.component';
import {getAppComponentPath} from '@nebular/theme/schematics/util';
import * as env from 'config/config';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from '../shared/model';


const querystring = require('querystring');

declare let MusicKit: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent implements OnInit {
  music;
  private isSpotifyLoggedIn = false;
  private isAppleMusicLoggedIn = false;
  playlists = new BehaviorSubject<any[]>(null);
  playlistsObservable$: Observable<any[]> = this.playlists.asObservable();
  userSpotify = new BehaviorSubject<User>(null);
  userSpotifyObservable$: Observable<User> = this.userSpotify.asObservable();
  userAM = new BehaviorSubject<User>(null);
  userAMObservable$: Observable<User> = this.userAM.asObservable();
  constructor() {
    this.music = MusicKit.configure({
      developerToken: env.dev_token,
      app: {
        name: 'music.com.balit.gero',
        build: '2020.4.1'
      }
    });
  }

  ngOnInit(): void {
  }

  loginAppleMusic = (): void => {
    console.log(this.music);
    this.music.authorize().then(musicUserToken => {
      console.log(`Authorized, music-user-token: ${musicUserToken}`);
      const options = {
        headers: {
          Authorization: 'Bearer ' + MusicKit.getInstance().developerToken,
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'music-user-token': '' + MusicKit.getInstance().musicUserToken,
        }
      };
      this.isAppleMusicLoggedIn = true;
      fetch('https://api.music.apple.com/v1/me/library/playlists/', options)
        .then(response => response.json()).then( res => {
        console.log(res);
        let temp = [];
        res.data.forEach(data => {
          temp.push(data.attributes);
        });
        this.playlists.next(temp);
        console.log(this.playlists.getValue());
      }, err => console.log(err));
    });
  }

  loginSpotify = (): void => {
    fetch('http://localhost:8090/api/auth').then(res => res.json().then(result => {
/*      let temp = [];
      result.items.forEach(data => {
        temp.push(data);
      });
      this.playlists.next(temp);*/
      this.isSpotifyLoggedIn = true;
      console.log(result);
      let tempUser = {
        name : result.display_name,
        id : result.id,
        url : result.images[0].url,
      };

      console.log(tempUser);
      this.userSpotify.next(tempUser);
    }));
  }

  generateRandomString = function(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

}
