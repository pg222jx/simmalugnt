import React from 'react'
import LottieAnimation from '../Lottie';
import home from '../Animations/satellite';

const Success = () => {

    return ( 
        <div className="text">
            <div className="row">
                <div className="column">
                    <div className="satellite">
                        <LottieAnimation lotti={home} />
                    </div>
                </div>
                <div className="column success">
                    <p className="heading successP">Success, all done!</p>
                </div>
           </div>
            
        </div>
     )
}
 
export default Success