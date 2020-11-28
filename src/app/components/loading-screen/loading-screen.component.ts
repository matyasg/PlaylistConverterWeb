import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { LoadingScreenService } from '../../services/loading-screen/loading-screen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  @Input() public message: string;
  constructor() {}

  public ngOnInit() {}

}
