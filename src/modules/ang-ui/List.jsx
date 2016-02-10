import BaseComponent from './BaseComponent';
import clone from 'clone';
import React from 'react'

export default class ListComponent extends BaseComponent {

    constructor() {

        super();

        this.componentScope = {
            //elements: []
        };

        this.currentScope;
        const _renderInternal = this.render;

        this.render = ()  => {

        console.log('renderInternal', this.prepareJsx(_renderInternal.call(this), this.state));

        return this.prepareJsx(_renderInternal.call(this), this.state);

    }

        this.state = {

            data: [{id: '1'}, {id: '2'}]

        }

    }



    render() {

        return (
            <ul>
                <li ngFor="#d of data"></li>
                <li ngFor="#d of data" id="#d.id">
                    <a href='#d.href'>#d.id</a>
                </li>
            </ul>
        )

    }

    createElement(type, props, ...children) {

        return {type, props: props || {}, children};

    }

    prepareJsx({props, type, children}, state) {


        if (props.ngFor) {

            const [scopeId, typeOf, dataId] = props.ngFor.split(' ');

        console.log('prepareJsx', props, type, children, state);


            const data = state[dataId];


            if (!data) return null;

            return data.map((d) => {

                const newRoot = {type, props: clone(props), children: children.map((c) => clone(c))};

                state[scopeId] = d;

                this.resolveProps(newRoot, d, scopeId);

                return this.prepareJsx(newRoot, state);

            });

        } else if (props.ngIf) {

            if (state[props.ngIf]) return null;

        }

        return React.createElement(type, props, [].concat(...children.map((c) => this.prepareJsx(c, state))))


    }



    resolveProps({props, children}, d, scopeId) {

        Object.keys(props).forEach((p) => {

            const prop = props[p];

            console.log('prop', prop);

            if (p === 'ngFor') {

               props.ngFor = undefined;

            } else {

                props[p] = prop.startsWith(`${scopeId}.`) ? d[prop.substring(scopeId.length + 1)] : prop;

            }

        });

        if (children.length === 1 && typeof children[0] === 'string') {

            if (children[0].startsWith(`${scopeId}.`)) {

            children[0] = d[children[0].substring(scopeId.length + 1)];

                
            }


        } else {

        children.forEach((c) => this.resolveProps(c, d, scopeId));

        }


    }

}