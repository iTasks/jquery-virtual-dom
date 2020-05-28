import {createTemplate} from "../src/template";
import {App} from "../src/App";

import {TaskComponent} from "./TaskList"

const state = {
    text: '',
    tasks: [{
        id: 1,
        text: 'サンプル'
    }] as Task[],
    id: 2
}

type Task = {
    id: number,
    text: string
}

const [template, reload] = createTemplate(state, {
    setup: ({s}) => {

        const [taskTemplate, taskReload] = TaskComponent({
            tasks: state.tasks,
            removeTask: id => {
                const idx = state.tasks.findIndex(v => v.id === id)
                state.tasks.splice(idx, 1)
                taskReload.fire()
            }
        })
        taskReload.on(() => {
            const taskList = $('#js-task-list')
            taskList.empty()
            taskList.append(taskTemplate())
        })

        $(document).on('input', '#js-task_input', () => {
            const input = $('#js-task_input')
            s.text = String(input.val())
        })
        $(document).on('click', '.add_button', () => {
            s.tasks.push({
                id: s.id,
                text: s.text
            })
            s.id++
            $('#js-task_input').val('')
            s.text = ''
            taskReload.fire()
        })

        return {
            taskList: taskTemplate
        }
    },
    render: ({context}) => {
        // language=HTML
        return `
            <div>
              <div id="js-task-list">
                ${context.taskList()}              
              </div>
              <input id="js-task_input"">
              <button class="add_button">追加</button>
            </div>
        `
    }
})

new App('#app', template, reload)
