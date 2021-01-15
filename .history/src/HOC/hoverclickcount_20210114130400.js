import React, { Component } from 'react';
import Updated from "./updatedcomp";

class hoverclickcount extends Component {

    // constructor() {
    //     super();
    //     this.state= {
    //         count:0
    //     }
    //     this.mouseoverHandle = this.mouseoverHandle.bind(this)
    // }

    // mouseoverHandle() {
    //     this.setState(e=>{
    //         return {count: e.count+1}})
    // }

    render() {
        console.log(this.props);
        const {count, clickHandler} = this.props
        return (
                <h3 onMouseOver={clickHandler}> Count hover : {count}</h3>
                
        );
    }
}

export default Updated(hoverclickcount);
