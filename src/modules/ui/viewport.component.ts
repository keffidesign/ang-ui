import {Injectable, Component, View, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {LearningComponent} from '../learning/learning.component.ts';
import {InfoComponent} from '../info/info.component.ts';
import {AppNav} from './nav.component.ts';
import {DynamicRouteConfigurator} from './DynamicRouteConfigurator.ts';
import {DynamicComponentLoader} from 'angular2/core';

@Component({
    selector: 'ui-root',
    //provider: [DynamicComponentLoader, DynamicRouteConfigurator],
    viewProviders: [DynamicRouteConfigurator],
    directives: [ROUTER_DIRECTIVES, AppNav],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div>
            <h3>Viewport Component</h3>
            <app-nav [routes]="appRoutes"></app-nav>
            <input [(ngModel)]="title" placeholder="name">
            <p>{{title}}</p>
            <button (click)="addRoute()">Update!</button>
            <router-outlet></router-outlet>
        </div>
    `
})

@RouteConfig([
    { path: '/', component: LearningComponent, as: 'Home' }
])

export class ViewportComponent {

    appRoutes: string[][];

    constructor(private dynamicRouteConfigurator: DynamicRouteConfigurator) {

        this.appRoutes = this.getAppRoutes();

    }

    //public addRoute(): void {
    //
    //    let route = { path: '/info', component: InfoComponent, as: 'Info' };
    //    this.dynamicRouteConfigurator.addRoute(this.constructor, route);
    //
    //    this.appRoutes = this.getAppRoutes();
    //
    //}
    //
    private getAppRoutes(): string[][] {

        return this.dynamicRouteConfigurator
            .getRoutes(this.constructor).configs
            .map(route => ({ path: [`/${route.as}`], name: route.as }));

    }

}