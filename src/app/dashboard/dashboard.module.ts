import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NewMessageActionCardComponent } from './new-message-action-card/new-message-action-card.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { Table12Component } from './table12/table12.component';
import { SharedModule } from '../shared/shared.module';
import {AppleSigninModule} from 'ngx-apple-signin';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [DashboardComponent, NewMessageActionCardComponent, UsersTableComponent, Table12Component],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        AppleSigninModule,
        NgbDatepickerModule,
        MatButtonToggleModule
    ]
})
export class DashboardModule { }
