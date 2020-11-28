import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {AppComponent} from '../app.component';
import {getAppComponentPath} from '@nebular/theme/schematics/util';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from '../shared/model';
import {stringify} from 'querystring';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {LoadingScreenService} from '../services/loading-screen/loading-screen.service';
import {environment} from '../../environments/environment';

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
  isCheckable = new BehaviorSubject<boolean>(false);
  isCheckableObservable$: Observable<boolean> = this.isCheckable.asObservable();
  lastLoggedService = new BehaviorSubject<string>('');
  lastLoggedServiceObservable$: Observable<string> = this.lastLoggedService.asObservable();

  constructor(private modalService: NgbModal, private _snackBar: MatSnackBar, private loadingService: LoadingScreenService,
              private http: HttpClient) {
    this.music = MusicKit.configure({
      developerToken: environment.dev_token,
      app: {
        name: 'music.com.balit.gero',
        build: '2020.4.1'
      }
    });
    this.checkedLists.next(false);
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    config.politeness = 'polite';
    config.panelClass = ['background-red'];
    this._snackBar.open(message, null, config);
  }

  loginAppleMusic = (): void => {
    console.log(this.music);
    this.music.authorize().then(musicUserToken => {
      console.log(`Authorized, music-user-token: ${musicUserToken}`);
      const tempUser = {
        name : 'User',
        id : 'Logged in to Apple Music',
        url : './assets/images/am_icon.webp',
      };
      this.userAM.next(tempUser);
      this.isAppleMusicLoggedIn = true;
    });
  }

  getAMPlaylist = (): void => {
    // this.loadingService.show('');
    const options = {
      headers: {
        // Authorization: 'Bearer ' + MusicKit.getInstance().developerToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Music-User-Token': '' + MusicKit.getInstance().musicUserToken,
      }
    };
    this.http.get('http://localhost:8090/api/am/getPlaylists', options)
        .toPromise().then( res => {
      console.log(res);
      const temp = [];
      res.playlists[0].forEach(data => {
        temp.push((data).attributes);
      });
      console.log(temp);
      this.playlists.next(temp);
      this.values.next(new Array(this.playlists.getValue().length).fill(false));
      // console.log(this.playlists.getValue());
      this.lastLoggedService.next('am');
      this.checkedLists.next(false);
      // this.loadingService.hide();
    }, err => console.log(err));
  }

  loginSpotify = (): void => {
    // this.loadingService.show('');
    this.http.get('http://localhost:8090/api/spotify/getUser').toPromise().then(result => {
      this.isSpotifyLoggedIn = true;
      // console.log(result);
      const tempUser = {
        name : result.display_name,
        id : 'Logged in to Spotify',
        url : result.images[0].url,
      };
      // console.log(tempUser);
      this.userSpotify.next(tempUser);
      // this.loadingService.hide();
    });
  }

  getSpotifyPlaylist = (): void => {
    // this.loadingService.show('');
    this.http.get('http://localhost:8090/api/spotify/getPlaylists').toPromise().then( result_ => {
      const temp = [];
      console.log(result_);
      result_.playlists[0].forEach(data => {
        temp.push(data);
      });
      this.playlists.next(temp);
      this.values.next(new Array(this.playlists.getValue().length).fill(false));
      // console.log(this.values.getValue());
      this.lastLoggedService.next('sp');
      this.checkedLists.next(false);
      // this.loadingService.hide();
    });
  }

  getCoverage = (): void => {
    let url = '';
    switch (this.lastLoggedService.getValue()) {
      case 'sp': url = 'http://localhost:8090/api/spotify/getCoverage';
      break;
      case 'am': url = 'http://localhost:8090/api/am/getCoverage';
      break;
    }
    this.http.post(url, { values: this.values.getValue()},
        {
          headers: {
            'Content-Type': 'application/json',
            'Music-User-Token': MusicKit.getInstance().musicUserToken,
          }
        }).toPromise().then( result_ => {
      const temp = this.playlists.getValue();
      for (let i = 0; i < temp.length; i++) {
        temp[i]['numOfSongs'] = result_[i].numOfSongs;
        temp[i]['missingSongs'] = result_[i].missingSongs;
        temp[i]['coverage'] = result_[i].coverage;
      }
      this.playlists.next(temp);
      this.checkedLists.next(true);
      this.loadingService.hide();
    });
  }

  createPlaylists = (): void => {
    const otherPlatform = this.lastLoggedService.getValue() !== 'sp' ? 'Spotify' : 'Apple Music';
    if (this.isAppleMusicLoggedIn && this.isSpotifyLoggedIn) {
    let url = '';
    switch (this.lastLoggedService.getValue()) {
      case 'sp': url = 'http://localhost:8090/api/spotify/createPlaylists';
        break;
      case 'am': url = 'http://localhost:8090/api/am/createPlaylists';
        break;
    }
    this.http.post ( url , { values: this.values.getValue()},
        {
          headers: {
            'Content-Type': 'application/json',
            'Music-User-Token': MusicKit.getInstance().musicUserToken,
          }
        }).toPromise().then( result_ => {
      const temp = this.playlists.getValue();
      this.openSnackBar('Playlist created in your ' +  otherPlatform + ' account' , 'Ok');
    });
    }
    else {
      this.openSnackBar('Please register and then log in to the '+ otherPlatform +' service as well.', 'Ok');
    }
  }

  changeValue = (id: number): void => {
    console.log(this.values.getValue());
    let existChecked = false;
    const temp = this.values.getValue();
    temp[id] = !temp[id];
    temp.forEach(item => {
      if (item) {
        existChecked = true;
      }
    });
    this.values.next(temp);
    if (existChecked && (this.lastLoggedService.getValue() === 'sp' || this.lastLoggedService.getValue() === 'am')){
      this.isCheckable.next(true);
    }
    else {
      this.isCheckable.next(false);
    }
    // console.log(this.values.getValue());
  }

}
