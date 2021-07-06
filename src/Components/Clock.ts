import Model from '../Models/Clock'

export default class Clock {
  container: HTMLElement = null
  model: Model
  requestRender: number = 0
  renderFunc: () => {}

  constructor(container) {
    this.container = container
    this.model = new Model(this.onChanges.bind(this))
    this.renderFunc = this.render.bind(this)

    setInterval(this.onTick.bind(this), 1000)
  }

  onChanges(property, oldValue, newValue) {
      if(this.requestRender) {
          cancelAnimationFrame(this.requestRender)
      }
      this.requestRender=requestAnimationFrame(this.renderFunc)
  }

  render() {
    const { hours, minutes, seconds } = this.model
    const html = `
        <div id="wrapper">
            <span>${hours}</span>:
            <span>${minutes}</span>:
            <span>${seconds}</span>
        </div>`

    this.container.innerHTML = html
    this.requestRender = 0;
    console.log('render()')
  }

  onTick() {
    const now = new Date()

    this.model.hours = now.getHours()
    this.model.minutes = now.getMinutes()
    this.model.seconds = now.getSeconds()
  }
}
