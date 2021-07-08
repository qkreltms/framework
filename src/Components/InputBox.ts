import Component from '../utils/components'

export default class InputBox extends Component {
  Parent: any
  constructor(Parent) {
    super(Parent)
    this.Parent = Parent
    this.onKeyDown = this.onKeyDown.bind(this)
    this.model.str=''
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
        this.model.str += (e.target as HTMLInputElement).value
      }
    })
  }

  template() {
    const { str } = this.model
    const html = `
          <input type="text">
          <p>${str}</p>
       `
    return html
  }
}
