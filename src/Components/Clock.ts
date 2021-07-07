import Model from '../models/Input'

export default class Clock {
  container: HTMLElement = document.createElement('div')
  model: any
  requestRender: number = 0

  constructor() {
    this.model = new Model(this.onChanges.bind(this))
    this.render = this.render.bind(this)

    setInterval(this.onTick.bind(this), 1000)
  }

  onChanges(property, oldValue, newValue) {
    if (this.requestRender) {
      cancelAnimationFrame(this.requestRender)
    }
    this.requestRender = requestAnimationFrame(this.render)
  }

  render() {
    const { hours, minutes, seconds } = this.model

    const html = `
          <span>${hours}</span>:
          <span>${minutes}</span>:
          <span>${seconds}</span>
       `
    this.container.innerHTML = html
    this.requestRender = 0
    console.log('render()')
  }

  onTick() {
    const now = new Date()

    this.model.hours = now.getHours()
    this.model.minutes = now.getMinutes()
    this.model.seconds = now.getSeconds()
  }
}
