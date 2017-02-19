import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'plus-button',
    templateUrl: 'plus-button.component.html',
    styleUrls: ['plus-button.component.css']
})
export class PlusButtonComponent {

    @Output() public click = new EventEmitter();

    private onTabletClick(event: Event): void {
        event.preventDefault();
        this.click.emit();
    }
}