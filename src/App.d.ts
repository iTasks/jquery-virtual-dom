import { Reload } from "./template";
export declare class App {
    private target;
    private readonly template;
    constructor(selector: string, template: () => string, reload: Reload);
}
