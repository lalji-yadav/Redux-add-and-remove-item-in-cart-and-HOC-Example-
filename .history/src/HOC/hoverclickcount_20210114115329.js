import React, { Component } from 'react';

class hoverclickcount extends Component {

    constructor() {
        super();
        this.state= {
            count: 0
        }
    }

    render() {
        return (
            <div>

                <button> Count hover : </button>
                
            </div>
        );
    }
}

export default hoverclickcount;