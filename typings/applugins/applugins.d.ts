declare module 'applugins' {

    export class Plugin {
        init(): any;
        event(): any;
    }

    export function create(config: any)

}