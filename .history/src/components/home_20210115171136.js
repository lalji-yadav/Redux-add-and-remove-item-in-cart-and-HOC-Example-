import React from 'react';

function Home(props) {

      console.warn('Props',props.data)

        return (
            <div className={{margin:"2%", border:"1px solid red"}}>

                <h1> Home Components  </h1>

                <div className="row">
                    <div className="col-sm-3">

                    </div>

                    <div className="col-sm-3">

                        <p>Price 1000</p>

                    </div>

                    <div className="col-sm-3">

                        <button onClick={()=>
                            props.addToCartHandler({price:1000,  name:'Anubhav kumar Yadav'})} > Add to Card </button>

                    </div>

                    <div className="col-sm-3">

                    </div>

                </div>


                
            </div>
        );
    }


export default Home;
