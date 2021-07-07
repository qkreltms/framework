import Clock from '../../Clock'
import InputBox from '../../InputBox'

class Home {
  container = document.createElement('div')
  constructor() {
    this.container.setAttribute('class', 'wrapper')
    this.render.bind(this)()
  }

  render() {
    this.container.appendChild(new Clock().container)
    this.container.appendChild(new Clock().container)
    this.container.appendChild(new Clock().container)
    this.container.appendChild(new InputBox().container)
  }
}

export default Home
