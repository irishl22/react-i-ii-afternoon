import React, { Component } from 'react'
import InfoBlock from './InfoBlock'
import data from '../data';

class Count extends Component {
    constructor() {
        super();

        this.state = {
            count: 1,
            endCount: 25
        }
    }

    handleClickNext() {
        if(this.state.count < this.state.endCount) {
            this.setState( {count: this.state.count + 1} );
        } else if(this.state.count === this.state.endCount){
            this.setState( {count: 1});
        }
    }

    handleClickPrev() {
        if(this.state.count <= this.state.endCount && this.state.count !== 1) {
            this.setState( {count: this.state.count - 1} );
        } else if(this.state.count === 1){
            this.setState( {count: this.state.endCount});
        }
    }

    handleDelete() {
        data.splice(this.state.count - 1, 1)
        this.setState({ 
            count: this.state.count,
            endCount: this.state.endCount - 1
         })

    }

  
render() {
    return (
      <div className='background'>
        <div className='box'>
            <h2 className="counter">{this.state.count}/{this.state.endCount}</h2>
            <div className="text">
                <InfoBlock id={this.state.count}/>  
            </div>
        </div>
        <div class="buttons">
            <button className="outer-button" onClick={() => this.handleClickPrev()}>&#60; Previous</button>
            <button className="mid-button">Edit</button>
            <button className="mid-button" onClick={ () => this.handleDelete()}>Delete</button>
            <button className="mid-button">New</button>
            <button className="outer-button" onClick={() => this.handleClickNext()}>Next &#62;</button>
        </div>    
      </div>
    )
  }
}

export default Count
