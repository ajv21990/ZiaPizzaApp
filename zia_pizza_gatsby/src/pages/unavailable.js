import React from "react"
import '../stylesheets/appStyle.css'
import Button from '@material-ui/core/Button';
import { navigate } from "gatsby"


class Unavailable extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    Home = () => {
        navigate("/")
    }
    render() {
        return (
            <div className="OrderCompletePage ">
                <h1>Sorry</h1>
                <p>That particular pizza is not available at this time. Please enjoy our other pizzas.</p>
                <Button variant="contained" color="primary" onClick={this.Home}>Go Back</Button>

            </div>
        )
    }
}

export default Unavailable