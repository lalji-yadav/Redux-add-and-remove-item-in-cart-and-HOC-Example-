import React, { Component } from 'react';
import Updated from "./updatedcomp";

class hoverclickcount extends Component {

    constructor() {
        super();
        this.state= {
            count:0
        }
        this.mouseoverHandle = this.mouseoverHandle.bind(this)
    }

    mouseoverHandle() {
        this.setState(e=>{
            return {count: e.count+1}})
    }

    render() {
        return (
                <h3 onMouseOver={this.mouseoverHandle}> Count hover : {this.state.count}</h3>
                
        );
    }
}

export default Updated(hoverclickcount);
