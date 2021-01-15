import React from 'react';

const Header=(props)=> {

    console.warn('Header',props)

        return (
            <div>
                 <h1> This is header contain CART  </h1>
                <h1>{props.data.length}</h1>
               
            </div>
        );
    }

export default Header;
