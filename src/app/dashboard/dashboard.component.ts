import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {AppComponent} from '../app.component';
import {getAppComponentPath} from '@nebular/theme/schematics/util';
import * as env from 'config/config';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from '../shared/model';
import {stringify} from 'querystring';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



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
  values = new BehaviorSubject<boolean[]>(null);
  valuesObservable$: Observable<boolean[]> = this.values.asObservable();
  checkedLists = new BehaviorSubject<boolean>(null);
  checkedListsObservable$: Observable<boolean> = this.checkedLists.asObservable();
  lastLoggedService = '';

  constructor(private modalService: NgbModal) {
    this.music = MusicKit.configure({
      developerToken: env.dev_token,
      app: {
        name: 'music.com.balit.gero',
        build: '2020.4.1'
      }
    });
    this.checkedLists.next(false);
  }

  ngOnInit(): void {
  }

  loginAppleMusic = (): void => {
    console.log(this.music);
    this.music.authorize().then(musicUserToken => {
      console.log(`Authorized, music-user-token: ${musicUserToken}`);
      const options = {
        headers: {
          // Authorization: 'Bearer ' + MusicKit.getInstance().developerToken,
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Music-User-Token': '' + MusicKit.getInstance().musicUserToken,
        }
      };
      const tempUser = {
        name : 'User',
        id : 'Logged in to Apple Music',
        url : './assets/images/am_icon.jpg',
      };
      this.userAM.next(tempUser);
      this.isAppleMusicLoggedIn = true;
      fetch('http://localhost:8090/api/am/getPlaylists', options)
        .then(response => response.json()).then( res => {
        console.log(res);
        const temp = [];
        res.playlists[0].forEach(data => {
          temp.push((data).attributes);
        });
        console.log(temp);
        this.playlists.next(temp);
        this.values.next(new Array(this.playlists.getValue().length).fill(false));
        // console.log(this.playlists.getValue());
        this.lastLoggedService = 'am';
      }, err => console.log(err));

    });
  }

  loginSpotify = (): void => {
    fetch('http://localhost:8090/api/spotify/getUser').then(res => res.json().then(result => {
      this.isSpotifyLoggedIn = true;
      // console.log(result);
      const tempUser = {
        name : result.display_name,
        id : "Logged in to Spotify",
        url : result.images[0].url,
      };

      // console.log(tempUser);
      this.userSpotify.next(tempUser);
      fetch('http://localhost:8090/api/spotify/getPlaylists').then( res_ => res_.json().then( result_ => {
        const temp = [];
        console.log(result_);
        result_.playlists[0].forEach(data => {
          temp.push(data);
        });
        this.playlists.next(temp);
        this.values.next(new Array(this.playlists.getValue().length).fill(false));
        // console.log(this.values.getValue());
        this.lastLoggedService = 'sp';
      }));
    }));
  }

  getCoverage = (): void => {
    let url = '';
    switch (this.lastLoggedService) {
      case 'sp': url = 'http://localhost:8090/api/spotify/getCoverage';
      break;
      case 'am': url = 'http://localhost:8090/api/am/getCoverage';
      break;
    }
    fetch(url,
        {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
            'Music-User-Token': '' + this.lastLoggedService === 'am' ? MusicKit.getInstance().musicUserToken : '',
          },
          body: JSON.stringify({'values': this.values.getValue()}),
        }).then( res_ => res_.json().then( result_ => {
      const temp = this.playlists.getValue();
      for (let i = 0; i < temp.length; i++) {
        temp[i]['numOfSongs'] = result_[i].numOfSongs;
        temp[i]['missingSongs'] = result_[i].missingSongs;
        temp[i]['coverage'] = result_[i].coverage;
      }
      this.playlists.next(temp);
      this.checkedLists.next(true);
      // console.log(temp);
    }));
  }

  createPlaylists = (): void => {
    let url = '';
    switch (this.lastLoggedService) {
      case 'sp': url = 'http://localhost:8090/api/spotify/createPlaylists';
        break;
      case 'am': url = 'http://localhost:8090/api/am/createPlaylists';
        break;
    }
    fetch ( url ,
        {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
            'Music-User-Token': '' + this.lastLoggedService === 'sp' ? MusicKit.getInstance().musicUserToken : '',
          },
          body: JSON.stringify({'values': this.values.getValue()}),
        }).then( res_ => res_.json().then( result_ => {
      const temp = this.playlists.getValue();

      // this.playlists.next(temp);
      // this.checkedLists.next(true);
      // console.log(temp);
    }));
  }

  changeValue = (id: number): void => {
    const temp = this.values.getValue();
    temp[id] = !temp[id];
    this.values.next(temp);
    // console.log(this.values.getValue());
  }

}
