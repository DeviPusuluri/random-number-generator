// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}
  generate = () => {
    this.setState(prev => ({count: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state

    return (
      <div>
        <h1 className="heading">Random Number</h1>
        <p className="para">
          Generate a random number in the range of 0 to 100
        </p>
        <button className="button" onClick={this.generate} type="button">
          Generate
        </button>
        <p className="para">{count}</p>
      </div>
    )
  }
}
export default RandomNumberGenerator
