import React, { Component } from 'react';

const Updated =(Originalcomp)=> {

class updatedcomp extends Component {
    render() {
        return (
            <div>
                <Originalcomp name="Anubhav" />
            </div>
        );
    }
}

  return updatedcomp;
}

export default Updated;