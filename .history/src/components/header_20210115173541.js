import React from 'react';

const Header=(props)=> {

    console.warn('Header',props)

        return (
            <div>
                 <h1> this is header  </h1>
                <h1>{props.data.length}</h1>
               
            </div>
        );
    }

export default Header;
