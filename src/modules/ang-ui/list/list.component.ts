import {Component, View, Input} from 'angular2/core';
import BaseComponent from '../BaseComponent.ts';
import DataDrivenComponent from '../datadriven.component.ts';

@Component({
    selector: 'List'
})

@View({
    template: `
        <ul *ngIf="data">
            <li *ngFor="#d of data">Item {{d.id}}</li>
        </ul>
        <button (click)="clickHandler()">Async Test</button>
    `
})

export class List extends DataDrivenComponent {

    clickHandler() {

        this.emit('patients://listChanged');

    }

}

