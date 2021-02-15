import React, { useContext } from 'react'
import Text from './Text.jsx'
import Success from './Success.jsx'
import { SuccessContext } from './SuccessContext'

const Main = () => {
    // Context to check input success
    const [success, setSuccess] = useContext(SuccessContext) // eslint-disable-line no-unused-vars

    /**
     * @returns the correct component to render according to user input.
     */
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