import {Plugin} from 'applugins';
import {InfoComponent} from './info.component.ts';

export default class InfoPlugin extends Plugin {

    init() {

        //console.log('LearningPlugin:init', this, this.event);

    }

    onUi_registerPages() {

        return [
            {
                id: 'Info',
                component: InfoComponent
            }
        ]

    }

}