import Component from '../utils/components'

interface Todo {
  text: string
  date: string
  isDeleted: boolean
}

class TodoList extends Component {
  constructor(Parent) {
    super(Parent)
    this.template = this.template.bind(this)
    this.onCreate = this.onCreate.bind(this)
  }

  onCreate() {
    this.model.todos = [
      {
        text: '값을 입력해보아요~',
        isDeleted: false,
        date: new Date().toString(),
      },
    ]
  }

  componentDidMount() {
    this.onKeyDown()
  }

  onKeyDown() {
    this.container.querySelector('input').addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') {
        return
      }

      if (e.target) {
        const todo: Todo = {
          text: (e.target as HTMLInputElement).value,
          date: new Date().toString(),
          isDeleted: false,
        }
        this.model.todos = [...this.model.todos, todo]
      }
    })
  }

  template() {
    const html = `
            ${(this.model.todos || [])
              .filter((todo: Todo) => !todo.isDeleted)
              .reduce((acu: string, todo: Todo) => {
                return acu + `<div>${todo.text}, ${todo.date}</div>`
              }, '')}
              <br/>
              <input type='text'>
        `
    return html
  }
}

export default TodoList
