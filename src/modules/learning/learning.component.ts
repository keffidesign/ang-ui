import {Component, View} from 'angular2/core';
import {Title} from '../ang-ui';
import {List} from '../ang-ui';

@Component({
    selector: 'learning-component'
})

@View({
    template: `
        <h1>Learning Component</h1>
        <title2></title2>
        <list></list>
    `,
    directives: [Title]
})

export class LearningComponent {

    //constructor(public list: any) {}

}