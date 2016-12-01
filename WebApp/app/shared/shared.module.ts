import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MasonryModule } from 'angular2-masonry';

import { PlusButtonComponent } from './plus-button/plus-button.component';

import { UserTileComponent } from './user-tile/user-tile.component';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UserTabletBindComponent } from './user-tablet-bind/user-tablet-bind.component';

import { TabletTileComponent } from './tablet-tile/tablet-tile.component';
import { TabletAddEditComponent } from './tablet-add-edit/tablet-add-edit.component';
import { TabletUserBindComponent } from './tablet-user-bind/tablet-user-bind.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MasonryModule
    ],
    declarations: [
        PlusButtonComponent,

        UserTileComponent,
        UserAddEditComponent,
        UserTabletBindComponent,
        
        TabletTileComponent,
        TabletAddEditComponent,
        TabletUserBindComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        MasonryModule,

        PlusButtonComponent,

        UserTileComponent,
        UserAddEditComponent,
        UserTabletBindComponent,

        TabletTileComponent,
        TabletAddEditComponent,
        TabletUserBindComponent
    ]
})
export class SharedModule { }