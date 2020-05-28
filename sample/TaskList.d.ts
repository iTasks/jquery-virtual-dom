import { Task } from './types';
declare type TaskProps = {
    tasks: Task[];
    removeTask: (id: number) => void;
};
export declare const TaskComponent: (props: TaskProps) => [() => string, import("../src/template").Reload];
export {};
