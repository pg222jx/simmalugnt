import React, { useContext } from 'react'
import LoremIpsum from './LoremIpsum.jsx'
import Success from './Success.jsx'
import { SuccessContext } from './SuccessContext'


const Main = () => {

    const [success, setSuccess] = useContext(SuccessContext)

    const renderPage = () => {
        if (success) {
          return <Success />
        } else {
          return <LoremIpsum />
        }
      }

    return ( 
        <React.Fragment>
            { renderPage() }
        </React.Fragment>
     )
}
 
export default Main