import React, { Component } from 'react'
import InfoBlock from './InfoBlock'

class Count extends Component {
    constructor() {
        super();

        this.state = {
            count: 1,
            delete: 0
        }
    }

    handleClickNext() {
        if(this.state.count < 25) {
            this.setState( {count: this.state.count + 1} );
        } else if(this.state.count === 25){
            this.setState( {count: 1});
        }
    }

    handleClickPrev() {
        if(this.state.count <= 25 && this.state.count !== 1) {
            this.setState( {count: this.state.count - 1} );
        } else if(this.state.count === 1){
            this.setState( {count: 25});
        }
    }

    handleClickDelete() {
       this.setState({ count: null })
    }

  
render() {
    return (
      <div className='background'>
        <div className='box'>
            <h2 className="counter">{this.state.count}/25</h2>
            <div className="text">
                <InfoBlock id={this.state.count}/>  
            </div>
        </div>
        <div class="buttons">
            <button className="outer-button" onClick={() => this.handleClickPrev()}>&#60; Previous</button>
            <button className="mid-button">Edit</button>
            <button className="mid-button" onClick={() => this.handleClickDelete()}>Delete</button>
            <button className="mid-button">New</button>
            <button className="outer-button" onClick={() => this.handleClickNext()}>Next &#62;</button>
        </div>    
      </div>
    )
  }
}

export default Count
