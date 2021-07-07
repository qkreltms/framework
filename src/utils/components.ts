import Model from '../models/Input'

export default class Component {
  container: HTMLElement = document.createElement('div')
  requestRender: number = 0
  model: any
  constructor() {
    this.model = new Model(this.onChanges.bind(this))
    this.render = this.render.bind(this)
    this.template = this.template.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    this.render()
  }

  componentDidMount() {}

  onChanges(property, oldValue, newValue) {
    if (this.requestRender) {
      cancelAnimationFrame(this.requestRender)
    }
    this.requestRender = requestAnimationFrame(this.render)
  }

  template() {
    return ''
  }

  render() {
    this.container.innerHTML = this.template()
    this.componentDidMount()
    this.requestRender = 0
  }
}
