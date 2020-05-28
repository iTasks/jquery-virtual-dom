export const createDeepProxy = (target: any, handler: ProxyHandler<any>): any => {
    const keys = Object.keys(target)
    keys.forEach(key => {
        if (typeof target[key] === 'object') {
            target[key] = createDeepProxy(target[key], handler)
        }
    })
    return new Proxy(target, handler)
}

export class Reload {
    listeners: CallableFunction[] = []

    fire() {
        this.listeners.forEach(f => f())
    }

    on(func: () => void) {
        this.listeners.push(func)
    }
}

type TemplateOption<T, V> = {
    render: (payload: { s: T, context: V, reload: Reload }) => string,
    setup: (payload: { s: T, reload: Reload }) => V
}

type ComponentOption<T, V, W> = {
    render: (payload: { s: T, context: W, props: V, reload: Reload }) => string,
    setup: (payload: { s: T, props: V, reload: Reload }) => W
}

export const createComponent = <V, T>(state: V, option: ComponentOption<V, T, any>) => (props: T): [() => string, Reload] => {
    const reload = new Reload()
    const s = createDeepProxy(state, {
        set(target: any, p: PropertyKey, value: any, receiver: any): boolean {
            return Reflect.set(target, p, value, receiver)
        }
    })
    const context = option.setup({s, props, reload})
    return [() => option.render({s, context, props, reload}), reload]
}


export const createTemplate = <T>(state: T, option: TemplateOption<T, any>): [() => string, Reload] => {
    const reload = new Reload()
    const s = createDeepProxy(state, {
        set(target: any, p: PropertyKey, value: any, receiver: any): boolean {
            return Reflect.set(target, p, value, receiver)
        }
    })

    const context = option.setup({s, reload})
    return [() => option.render({s, context, reload}), reload]
}
