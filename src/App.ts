import {Reload} from "./template";

export class App {
    private target: JQuery<HTMLElement>
    private readonly template: () => string


    constructor(selector:string, template: () => string, reload:Reload) {
        this.target = $(selector)
        this.template = template
        this.target.append(this.template())
        reload.on(() => {
            this.target.empty()
            this.target.append(this.template())
        })
    }
}
