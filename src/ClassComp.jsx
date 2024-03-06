import React, { Component } from 'react'

export default class ClassComp extends Component {
    state={
        count:0
    };
    plus=()=>{
        this.setState({count:this.state.count+1})
    }
    minus=()=>{
        this.setState({count:this.state.count-1})
    }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h1>{this.state.count}</h1>
        <button class="btn btn-outline-primary" onClick={this.plus}>+</button>
        <button class="btn btn-outline-info" onClick={this.minus}>-</button>
        <button class="btn btn-outline-danger" onClick={this.props.onKill}>Kill</button>
      </div>
    )
  }
}
