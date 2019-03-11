import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        this.state={
            a:10
        }
        console.log("constructor");
    }
    componentDidMount = () => {
        this.setState({
            a:20
        })
        console.log("componentDidMount");
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log("componentDidUpdate");
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("shouldComponentUpdate");
        return true;
    }
    
    render() {
        console.log("render");
        return (
            <div>   
            </div>
        )
    }
}
export default Test;