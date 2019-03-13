import React, { Component } from 'react'
import data from '../data'

class InfoBlock extends Component {

   

 render() {
    return (
      <div>
        <h1>{data[this.props.id -1].name.first} {data[this.props.id -1].name.last}</h1>
        <h2>From: {data[this.props.id -1].city}, {data[this.props.id -1].country}</h2> 
        <h2>Job Title: {data[this.props.id -1].title}</h2> 
        <h2>Employer: {data[this.props.id -1].employer}</h2> 
        <br/>
        <h2>Favorite Movies:</h2>
        <ol>
            <li>{data[this.props.id -1].favoriteMovies[0]}</li>
            <li>{data[this.props.id -1].favoriteMovies[1]}</li>
            <li>{data[this.props.id -1].favoriteMovies[2]}</li>
            
        </ol>
      </div>
    )
  }
}

export default InfoBlock
