import React from "react"
import Logo from '../images/ZiaLogo.png'
import '../styleSheets/appStyle.css'



class ZiaPizzaHeader extends React.Component {

    render() {
        return (
            <div className="text-center pizzaHeader">
                <img height="250" alt="Logo" src={Logo} />
                <p>Come and enjoy the perfect slice of Gourmet Pizza</p>

            </div >
        )
    }
}

export default ZiaPizzaHeader