import React, { Component } from 'react';

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
            <div>

                <h3 onMouseOver={this.mouseoverHandle}> Count hover : {this.state.count}</h3>
                
            </div>
        );
    }
}

export default hoverclickcount;
