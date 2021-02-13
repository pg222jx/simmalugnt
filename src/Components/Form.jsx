import React, { useContext } from 'react'
import { SuccessContext } from './SuccessContext'

const Form = () => {
    const [success, setSuccess] = useContext(SuccessContext) // eslint-disable-line no-unused-vars
    const endPoint = 'https://form-test.simmalugnt.dev/wp-json/simmalugnt/v1/form'

    const handleEvent =  async (event) => { 
        event.preventDefault()
        const email = document.querySelector('.email').value
        const response = await getResponse(email)
   
        if (response.ok) {
            setSuccess(true)
        } else {
            const error = document.querySelector('.error')
            error.style.display = 'inline'; 
        }
    } 

    const getResponse = email => {
        return new Promise((resolve) => {
            const data = {
              email: email
            }

            try {
              const response = fetch(endPoint, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              resolve(response)
            } catch (error) {
              console.error('Error:', error)
            }
          })
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