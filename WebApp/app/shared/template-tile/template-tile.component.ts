import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { TemplateViewModel } from '../../models/template.model';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'template-tile',
    templateUrl: 'template-tile.html',
    styleUrls: ['template-tile.css']
})
export class TemplateTileComponent {

    @Input() public template: TemplateViewModel;

    @Output() public templateClicked = new EventEmitter<TemplateViewModel>();

    private onTileClick(event: Event): void {
        event.preventDefault();
        this.templateClicked.emit(this.template);
    }
}