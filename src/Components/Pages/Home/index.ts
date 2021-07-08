import Clock from '../../Clock'
import InputBox from '../../InputBox'
import Component from '../../../utils/components'
import TodoList from '../../TodoList'

class Home extends Component {
  constructor(Parent) {
    super(Parent)
    this.container.setAttribute('class', 'wrapper')
  }

  render() {
    this.container.appendChild(new Clock(this).container)
    this.container.appendChild(new InputBox(this).container)
    this.container.appendChild(new TodoList(this).container)
  }
}

export default Home
