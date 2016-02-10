import BaseComponent from './BaseComponent.ts';
import {Paragraph} from './index.ts';

export default class Title2Component extends BaseComponent {

    clickHandler() {

        console.log('clickHandler');

    }

    makeHandler(key) {

        this[key] && this[key]();

    }

    render(props = {}) {

        return (
            <div
                className='sdfsdf'
                onClick={this.makeHandler('clickHandler')}
            >
                <h1>Test title alala.</h1>
                <Paragraph />
            </div>
        );

    }

}