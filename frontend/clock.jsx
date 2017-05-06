import React from 'react';

class Clock extends React.Component{
  constructor(){
    super();
    let date = new Date()
    this.state = {date: date}
    this.tick = this.tick.bind(this)
    this.handle = 0
  }

  componentDidMount() {
    let self = this;
    this.handle = setInterval(self.tick, 1000)
    }


  componentWillUnmount() {
    clearInterval(this.handle)
  }

  tick(){
    let date = new Date()
    this.setState({date})
  }

  render(){
    const {date} = this.state
    return (
      <div className="clockWidget">
        <h1>Dump Clock</h1>
        <h2 className="clock">{date.getMonth()}-{date.getDate()}-{date.getFullYear()}</h2>
        <h2 className="clock">{date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock;
