import React, { useContext } from 'react'
import Text from './Text.jsx'
import Success from './Success.jsx'
import { SuccessContext } from './SuccessContext'


const Main = () => {

    const [success, setSuccess] = useContext(SuccessContext)// eslint-disable-line no-unused-vars

    const renderPage = () => {
        if (success) {
          document.querySelector('body').style.backgroundColor = 'white';
          document.querySelector('.line').style.backgroundColor = 'black';
          return <Success />
        } else {
          return <Text />
        }
      }

    return ( 
        <React.Fragment>
            { renderPage() }
        </React.Fragment>
     )
}
 
export default Main