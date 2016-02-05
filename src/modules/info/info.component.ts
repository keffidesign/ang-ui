import {Component, View} from 'angular2/core';
import {List} from '../ang-ui/list/list.component.ts';

@Component({
    selector: 'info-component'
})

@View({
    template: `
        <h1>Info Component</h1>
        <List [dataFrom]="'patients://list'" [dataDependsOn]="'patients://listChanged'"></List>
    `
    ,
    directives: [List]
})

export class InfoComponent {

}