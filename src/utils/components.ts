import Model from '../models'

export default class Component {
  container: HTMLElement = document.createElement('div')
  requestRender: number = 0
  model: any
  Parent: any
  constructor(Parent) {
    this.Parent = Parent
    this.model = new Model(this.onChanges.bind(this))
    this.render = this.render.bind(this)
    this.template = this.template.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.onCreate = this.onCreate.bind(this) 
    
    this.onCreate()
    this.render()
  }

  componentDidMount() {}
  onCreate() {}

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
