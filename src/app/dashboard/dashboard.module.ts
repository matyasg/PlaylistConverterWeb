import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NewMessageActionCardComponent } from './new-message-action-card/new-message-action-card.component';
import { NewTasksActionCardComponent } from './new-tasks-action-card/new-tasks-action-card.component';
import { MessageActionCardComponent } from './message-action-card/message-action-card.component';
import { SystemActionCardComponent } from './system-action-card/system-action-card.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { Table12Component } from './table12/table12.component';
import { MessageListComponent } from './message-list/message-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { Table1111Component } from './table1111/table1111.component';
import { SharedModule } from '../shared/shared.module';
import {AppleSigninModule} from 'ngx-apple-signin';


@NgModule({
  declarations: [DashboardComponent, NewMessageActionCardComponent, NewTasksActionCardComponent, MessageActionCardComponent, SystemActionCardComponent, UsersTableComponent, Table12Component, MessageListComponent, TasksComponent, Table1111Component],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        AppleSigninModule
    ]
})
export class DashboardModule { }
