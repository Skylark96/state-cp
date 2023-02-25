import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  state={
    fullName: "Ala Farhat",
    bio: ": { Lazy But Creative  } :",
    imgSrc: <img id='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWqGKMsyBO5KeG30nMTAxfJIBqanq-51whw&usqp=CAU" alt="curly hair man illustration" />,
    profession: "Front end web devoloper",
    show: true
  }
  click=()=>this.setState({show:!this.state.show})
  render() {
    return (
      <div className="all">
        <button className="btm" onClick={this.click}>Show profile</button>{
          this.state.show&&
      <div className="mainBox">
        <span className="img">{this.state.imgSrc}</span>
        <span className="name">{this.state.fullName}</span>
        <span className="profession">{this.state.profession}</span>
        <span className="bio">{this.state.bio}</span>
        </div>
      }

      </div>
      )
  }
}

