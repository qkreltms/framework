import Component from '../utils/components'

export default class Clock extends Component {
  constructor(Parent) {
    super(Parent)
    this.template = this.template.bind(this)
    setInterval(this.onTick.bind(this), 1000)
    this.model.hours = ''
    this.model.minutes = ''
    this.model.seconds = ''
  }

  template() {
    const { hours, minutes, seconds } = this.model

    const html = `
          <span>${hours}</span>:
          <span>${minutes}</span>:
          <span>${seconds}</span>
       `
    return html
  }

  onTick() {
    const now = new Date()
    this.model.hours = now.getHours()
    this.model.minutes = now.getMinutes()
    this.model.seconds = now.getSeconds()
  }
}
