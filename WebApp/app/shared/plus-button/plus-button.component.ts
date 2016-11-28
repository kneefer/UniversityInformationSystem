import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

declare var module: { id: string; }

@Component({
    moduleId: module.id,
    selector: 'plus-button',
    template: `
    <div (click)="onTabletClick($event)"
         class="panel panel-default plus-button">
        <a href="#">
            <div class="panel-body">
                + Add
            </div>
        </a>
    </div>
    `,
    styleUrls: ['plus-button.css']
})
export class PlusButtonComponent {

    @Output() public click = new EventEmitter();

    private onTabletClick(event: Event): void {
        event.preventDefault();
        this.click.emit();
    }
}