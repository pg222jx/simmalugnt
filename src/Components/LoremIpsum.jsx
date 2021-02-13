import React from 'react'
import Form from './Form.jsx'


const LoremIpsum = () => {

    return ( 
        <div className="text">
           <h1>Lorem ipsum dolor sit amet,</h1>
           <div className="row">
                <div className="column">
                    <p>Duis scelerisque, risus non tempor sodales, risus augue ullamcorper orci, 
                    nec lacinia nibh felis in nisi. Vivamus dapibus sapien a feugiat bibendum. 
                    Nam vel turpis luctus, suscipit nisl et, eleifend quam.</p>
                </div>
                <div className="column">
                    <Form />
                </div>
           </div>
        </div>
     )
}
 
export default LoremIpsum