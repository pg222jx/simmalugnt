import React from 'react'

const Form = () => {
    const handleEvent = (event) => { 
        event.preventDefault()
        const email = document.querySelector('.email').value
        const emailObject = JSON.stringify({ email: email})
        if (email === 'hello') {
            const error = document.querySelector('.error')
            error.style.display = 'inline'; 
        }
        console.log(emailObject)
    } 

    return ( 
            <form className="form" onSubmit={ handleEvent }>
            <input className="email" type="text" id="mail" name="mail" placeholder="Your email here"/><br />
            <hr className="line"/>
            <p className="error">Error, check your email.<br/></p>
            <br/>
            <input className="submit" type="submit" value="Submit"/>
            </form> 
     )
}
 
export default Form