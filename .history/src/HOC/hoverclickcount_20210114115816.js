import React, { Component } from 'react';

class hoverclickcount extends Component {

    constructor() {
        super();
        this.state= {
            count:0
        }
    }

    mouseoverHandle() {
        this.setState((e)=> {
            return {count: e.count+1}
        })
    }

    render() {
        return (
            <div>

                <button onMouseOver={this.mouseoverHandle}> Count hover : {this.state.count}</button>
                
            </div>
        );
    }
}

export default hoverclickcount;
