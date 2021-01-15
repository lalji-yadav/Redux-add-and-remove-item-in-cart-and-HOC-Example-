import React, { Component } from 'react';

const Updated =(Originalcomp)=> {

class updatedcomp extends Component {

    constructor() {
        super();
        this.state = {
            count:0
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState((e)=>{
            return {count: e.count+1}})
    }


    render() {
        return (
            <div>
                <Originalcomp count={this.state.count} clickHandler={this.clickHandler} name="Anubhav" />
            </div>
        );
    }
}

  return updatedcomp;
}

export default Updated;
