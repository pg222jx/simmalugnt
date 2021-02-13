import React from 'react'
import Form from './Form.jsx'


const Text = () => {

    return ( 
        <div className="text">
           <p className="heading">Lorem ipsum dolor sit amet,</p>
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
 
export default Text