import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  state={
    fullName: "Ala Farhat",
    bio: ": { Lazy But Creative  } :",
    imgSrc: <img id='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWqGKMsyBO5KeG30nMTAxfJIBqanq-51whw&usqp=CAU" alt="curly hair man illustration" />,
    profession: "Front end web devoloper",
    show: true,
    count:0
  }
  click=()=>this.setState({show:!this.state.show})
  time=()=>this.setState({count:this.state.count+1})

  componentDidMount(){
    setInterval(this.time, 1000)
  }
  render() {
    return (
      <div className="all">
        <div className="count">{this.state.count}</div>
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

