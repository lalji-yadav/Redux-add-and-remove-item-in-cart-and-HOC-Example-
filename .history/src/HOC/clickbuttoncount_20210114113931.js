import React, { Component } from 'react';

class clickbuttoncount extends Component {

    constructor() {
        super();
        this.state = {
            count:''
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(e) {
        this.setState((e)=>{count:e.count+1})
    }
    
    render() {
        return (
            <div>

                <button onClick={this.clickHandler}> Click Count: </button>
                
            </div>
        );
    }
}

export default clickbuttoncount;