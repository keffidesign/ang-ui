import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {LearningComponent} from '../learning/learning.component.ts';
import {InfoComponent} from '../info/info.component.ts';

@Component({
    selector: 'ui-root'
})

@View({
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div>
            <h1>Ui Component</h1>
             <a [routerLink]="['Learning']">Learning</a>
            <a [routerLink]="['Info']">Info</a>
            <router-outlet></router-outlet>
        </div>
    `
})


@RouteConfig([
    {
        path: '/learning',
        name: 'Learning',
        component: LearningComponent
    },
    {
        path: '/info',
        name: 'Info',
        component: InfoComponent
    }
])

export class UiComponent {

}