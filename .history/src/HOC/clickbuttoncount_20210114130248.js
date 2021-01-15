import React, { Component } from 'react';
import Updated from "./updatedcomp";

class clickbuttoncount extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         count:0
    //     }
    //     this.clickHandler = this.clickHandler.bind(this)
    // }

    // clickHandler() {
    //     this.setState((e)=>{
    //         return {count: e.count+1}})
    // }

    render() {
        const {count, clickHandler} = this.props
        return (
            <div>

                <button onClick={clickHandler}> Click Count:{count} </button>
                
            </div>
        );
    }
}

export default Updated(clickbuttoncount)
