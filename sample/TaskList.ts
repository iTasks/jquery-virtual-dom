import {createComponent} from "../src/template";
import {Task} from './types'

type TaskState = {}
type TaskProps = { tasks: Task[], removeTask: (id: number) => void }

export const TaskComponent = createComponent<TaskState, TaskProps>({}, {
    setup: ({props}) => {
        $(document).on('click', '.task-remove', function () {
            props.removeTask(Number($(this).attr('data-task-id')))
        })
    },
    render: ({props}) => {
        // language=HTML
        return `
            <ul>
              ${props.tasks.map(task => `
                <li>
                  ${task.text} <button class="task-remove" data-task-id="${task.id}">削除</button>
                </li>
              `).join('')}
            </ul>
        `
    }
})
