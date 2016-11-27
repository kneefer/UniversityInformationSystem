import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MasonryModule } from 'angular2-masonry';

import { UserTileComponent } from './user-tile/user-tile.component';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { TabletTileComponent } from './tablet-tile/tablet-tile.component';
import { PlusButtonComponent } from './plus-button/plus-button.component';
import { UserTabletBindComponent } from './user-tablet-bind/user-tablet-bind.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MasonryModule
    ],
    declarations: [
        UserTileComponent,
        TabletTileComponent,
        UserAddEditComponent,
        PlusButtonComponent,
        UserTabletBindComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        MasonryModule,

        UserTileComponent,
        TabletTileComponent,
        UserAddEditComponent,
        PlusButtonComponent,
        UserTabletBindComponent
    ]
})
export class SharedModule { }