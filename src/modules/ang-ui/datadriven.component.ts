import {Input} from 'angular2/core';
import BaseComponent from './BaseComponent.ts';

export default class DataDrivenComponent extends BaseComponent {

    @Input() dataFrom: String;
    @Input() dataDependsOn: String;

    constructor() {

        super();

        const {dataDependsOn} = this;

        this.addEventListener(dataDependsOn, this.setData);

        console.log('DataDrivenComponent:constructor', this);

    }

    ngOnInit() {

        const {dataFrom} = this;

        if (dataFrom) {

            console.log(`DD: ${dataFrom}.`);

            this.event(dataFrom).action((err, result) => {

                this.setData(result);

            });

        }

    }

    responseHandler(err, data) {

        if (err) return this.setError(err);

        if (!data) return this.setError(new Error('There is no data'));

        this.setData(data);

    }

    setError(err) {

        this.error = err;

    }

    setData(data) {

        this.data = data;

    }

}