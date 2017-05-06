import React from 'react';

class Autojsx extends React.Component {
  constructor(prop){
    super();
    this.state = {inputVal: ""};
    this.list = prop.list;
    this.updateList = this.updateList.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  updateList(e) {
    const inputVal = e.target.value
    this.setState({ inputVal });
  }

  updateInput(e) {
    const listName = e.target.innerHTML
    const input = document.querySelector("#sexy-input")

    input.value = listName
    this.setState({ inputVal: listName });


  }

  render(){
    const inputVal = this.state.inputVal
    // console.log(inputVal);
    const list = this.list.map((item, idx) => {
      if (item.includes(inputVal) && inputVal !== "") {
        return <li onClick={this.updateInput} key={item+idx}>{item}</li>
      }
    });
    return(
      <div className="listwidget">
        <h1>JsX</h1>
        <input onChange={this.updateList} id="sexy-input" type="text"></input>
        <ul className="listthing">
          {list}
        </ul>
      </div>
    )
  }
}

export default Autojsx
