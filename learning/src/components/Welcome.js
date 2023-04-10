import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return <h1>class component{this.props.name} {this.props.heroname}
        {this.props.children}
        </h1>
    }
}
 export default Welcome