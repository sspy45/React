import React from "react";
import ReactDOM from 'react-dom';
import Clock from "./clock";
import Weather from "./weather"
import Autojsx from "./autojsx"

class Widgets extends React.Component{
  constructor(){
    super()
  }

  render(){

    const list = ['banana', 'notebook', 'dump', 'Afganistan', 'Little m', 'lucky lucifer', 'Cape Caad']
    return(
      <div>
        <div className="widgets">
          <Clock />
          <Weather />
          <Autojsx list={list}/>
        </div>
        <div className="vid">
          <div className="video-background">
            <div className="video-foreground">
              <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
document.addEventListener("DOMContentLoaded", () => {

  ReactDOM.render(<Widgets />, document.getElementById('root'));
});
