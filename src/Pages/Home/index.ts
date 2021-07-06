import Clock from '../../Components/Clock'

class Home {
  container = document.createElement('div')
  constructor(parent) {
    this.render.bind(this)()
  }

  render() {
    return new Clock(this.container)
  }
}

export default Home
