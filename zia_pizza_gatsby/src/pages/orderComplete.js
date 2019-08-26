import React from "react"
import '../stylesheets/appStyle.css'
import Button from '@material-ui/core/Button';
import { navigate } from "gatsby"
import KeepCalm from '../images/keepCalm.png'

class OrderComplete extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    Home = () => {
        navigate("/")
    }

    render() {
        return (
            <div className="OrderCompletePage ">
                <h1 className="cursive">Thank You For Your Order!</h1>
                <img height="300" alt="Keep Calm" src={KeepCalm} />

                <p className="text-center col-md-4 offset-4">Your order is in the proccess of being made! We will call you when your order is ready. Check out more of our pizzas while you wait!</p>
                <br />

                <Button variant="contained" color="primary" onClick={this.Home}>Go Back Home</Button>


            </div>
        )
    }
}

export default OrderComplete