import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { TemplateViewModel } from '../../models/template.model';

@Component({
    selector: 'template-tile',
    templateUrl: 'template-tile.component.html',
    styleUrls: ['template-tile.component.css']
})
export class TemplateTileComponent {

    @Input() public template: TemplateViewModel;

    @Output() public templateClicked = new EventEmitter<TemplateViewModel>();

    private onTileClick(event: Event): void {
        event.preventDefault();
        this.templateClicked.emit(this.template);
    }
}