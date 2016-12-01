import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MasonryModule } from 'angular2-masonry';

import { PlusButtonComponent } from './plus-button/plus-button.component';
import { UserTileComponent } from './user-tile/user-tile.component';
import { TabletTileComponent } from './tablet-tile/tablet-tile.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MasonryModule
    ],
    declarations: [
        PlusButtonComponent,
        UserTileComponent,
        TabletTileComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        MasonryModule,

        PlusButtonComponent,
        UserTileComponent,
        TabletTileComponent
    ]
})
export class SharedModule { }