import Clock from '../../Clock'
import InputBox from '../../InputBox'
import Component from '../../../utils/components'

class Home extends Component {
  constructor(Parent) {
    super(Parent)
    this.container.setAttribute('class', 'wrapper')
  }

  render() {
    this.container.appendChild(new Clock(this).container)
    this.container.appendChild(new InputBox(this).container)
  }
}

export default Home
