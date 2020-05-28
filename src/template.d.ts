export declare const createDeepProxy: (target: any, handler: ProxyHandler<any>) => any;
export declare class Reload {
    listeners: CallableFunction[];
    fire(): void;
    on(func: () => void): void;
}
declare type TemplateOption<T, V> = {
    render: (payload: {
        s: T;
        context: V;
        reload: Reload;
    }) => string;
    setup: (payload: {
        s: T;
        reload: Reload;
    }) => V;
};
declare type ComponentOption<T, V, W> = {
    render: (payload: {
        s: T;
        context: W;
        props: V;
        reload: Reload;
    }) => string;
    setup: (payload: {
        s: T;
        props: V;
        reload: Reload;
    }) => W;
};
export declare const createComponent: <V, T>(state: V, option: ComponentOption<V, T, any>) => (props: T) => [() => string, Reload];
export declare const createTemplate: <T>(state: T, option: TemplateOption<T, any>) => [() => string, Reload];
export {};
