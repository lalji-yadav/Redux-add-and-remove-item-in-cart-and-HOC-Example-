import React, { Component } from 'react';

const Updated =originalcomp=> {

class updatedcomp extends Component {
    render() {
        return (
            <div>
                <originalcomp name="Anubhav" />
            </div>
        );
    }
}

  return updatedcomp;
}

export default Updated;