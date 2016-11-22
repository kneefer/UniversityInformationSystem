import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserTileComponent } from './user-tile/user-tile.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        UserTileComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        UserTileComponent
    ]
})
export class SharedModule { }