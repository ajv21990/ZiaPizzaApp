import React from "react"
import '../styleSheets/appStyle.css'
import fb from '../images/facebook.png'
import { navigate } from "gatsby"
import insta from '../images/instagram.png'
import yelp from '../images/yelp.png'


class LocateUs extends React.Component {

    goToFB = () => {
        navigate('https://www.yelp.com/biz/zia-gourmet-pizza-san-diego')
    }

    render() {
        return (
            <div className="locateUs text-center">
                <div className="pt-2">
                    <a className="mr-2" target="_blank" href="https://www.facebook.com/Zia-Gourmet-Pizza-111612505541993/" ><img height="40" alt="fb link" src={fb} /></a>
                    <a className="mr-2" target="_blank" href="https://www.instagram.com/ziagourmetpizza/" ><img height="40" alt="instagram link" src={insta} /></a>
                    <a target="_blank" href="https://www.yelp.com/biz/zia-gourmet-pizza-san-diego" ><img height="40" alt="instagram link" src={yelp} /></a>
                </div>
                <p>We are open every evening from 5pm to 11pm</p>
                <p>Come visit us at 3311 Adams Ave, suite A, San Diego, CA 92116</p>
                <span>(619) 284-4320</span>

            </div >
        )
    }
}

export default LocateUs

// Credit if ever used in production
{/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */ }
