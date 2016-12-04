import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'plus-button',
    templateUrl: 'plus-button.html',
    styleUrls: ['plus-button.css']
})
export class PlusButtonComponent {

    @Output() public click = new EventEmitter();

    private onTabletClick(event: Event): void {
        event.preventDefault();
        this.click.emit();
    }
}