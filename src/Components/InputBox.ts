import Component from '../utils/components'

export default class InputBox extends Component {
  constructor() {
    super()
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentDidMount() {
    this.onKeyDown()
  }

  onKeyDown() {
    this.container.querySelector('input').addEventListener('keydown', (e) => {
      // TODO: 키 입력시 바로 적용되게 하려면??
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
