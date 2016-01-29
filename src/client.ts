//TODO move vendor dependencies into separate file and load it before bundle.js
import 'reflect-metadata';

import {bootstrap} from 'angular2/platform/browser';
import {UiComponent} from './modules/ui/ui.component.ts';
import {provide} from 'angular2/core';
import {LocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';

bootstrap(UiComponent, [
    ROUTER_PROVIDERS,
    //provide(LocationStrategy).toClass(HashLocationStrategy)
    provide(APP_BASE_HREF, {useValue : ''})
]);
