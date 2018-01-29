import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasonryModule } from 'angular2-masonry';
import { EntryTileComponent } from './entry-tile/entry-tile.component';
import { PlusButtonComponent } from './plus-button/plus-button.component';
import { TabletTileComponent } from './tablet-tile/tablet-tile.component';
import { TemplateTileComponent } from './template-tile/template-tile.component';
import { UserTileComponent } from './user-tile/user-tile.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MasonryModule
    ],
    declarations: [
        EntryTileComponent,
        PlusButtonComponent,
        TabletTileComponent,
        TemplateTileComponent,
        UserTileComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        MasonryModule,

        EntryTileComponent,
        PlusButtonComponent,
        TabletTileComponent,
        TemplateTileComponent,
        UserTileComponent
    ]
})
export class SharedModule { }