import React from "react"
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal'
import { navigate } from "gatsby"
import NewYorker from '../images/NewYorker.jpg'
import Papay from '../images/Papay.jpg'
import VS from '../images/Vegan_Spinach.jpg'
import '../stylesheets/appStyle.css'


import '../styleSheets/modalStyle.css'


const NYDescr = "Our tasty and lean turkey pastrami combined with scallions, pepperoncinis, topped with mozzarella and fresh basil."
const PaDescr = "Our delightfully seasoned baked spinach combine with mozzarella, scallions, fresh garlic, capers and drizzled with our savory yogurt sauce."
const VeDescr = "Our delightfully seasoned baked spinach combined with our baked to perfection rosemary potatoes and topped with cranberries."

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            currentPizza: "",
            currentDescr: "",
            currentPrice: 15.50
        }
    }



    openModalNY = () => {
        this.setState({
            showModal: true,
            currentPizza: "The New Yorker",
            currentDescr: NYDescr
        })
    }

    openModalPa = () => {
        this.setState({
            showModal: true,
            currentPizza: "Papay",
            currentDescr: PaDescr
        })
    }

    openModalVe = () => {
        this.setState({
            showModal: true,
            currentPizza: "Vegan-Spinach",
            currentDescr: VeDescr
        })
    }
    addToOrder = () => {
        if (this.state.currentPizza === 'Papay') {
            navigate('/customerFormPa/')

        }
        if (this.state.currentPizza === 'The New Yorker') {
            navigate('/customerForm/')
        }
        if (this.state.currentPizza === 'Vegan-Spinach') {
            navigate('/customerFormVG/')
        }
    }

    onClose = () => {
        console.log("Modal Closed")
        this.setState({
            showModal: false,
            currentPizza: "",
            currentDescr: ""
        })
    }
    render() {
        return (
            <div className="pizzaMenu">
                <h1 className="cursive text-center">Welcome to the Home of Gourmet Pizza</h1>
                <p className="text-center">We have 20 rotating craft beers on draft and a fine selection of craft Sotos</p>
                <div className="row text-center">
                    <div className="col-md-4">
                        <h3 className="cursive">Meats</h3>
                        <Button onClick={this.openModalNY}>The New Yorker</Button>
                        <br />
                        <img onClick={this.openModalNY} height="250" alt="NewYorker pic" src={NewYorker} />
                        <hr />


                        <p className="cursive">Our tasty and lean turkey pastrami combined with scallions, pepperoncinis, topped with mozzarella and fresh basil.</p>

                    </div>
                    <div className="col-md-4">
                        <h3 className="cursive">Veggies</h3>
                        <Button onClick={this.openModalPa}>Papay</Button>
                        <br />

                        <img onClick={this.openModalPa} height="250" alt="Papay pic" src={Papay} />

                        <hr />

                        <p className="cursive">Our delightfully seasoned baked spinach combine with mozzarella, scallions, fresh garlic, capers and drizzled with our savory yogurt sauce.</p>

                    </div>
                    <div className="col-md-4">
                        <h3 className="cursive">Vegan</h3>
                        <Button onClick={this.openModalVe}>Vegan-Spinach</Button>
                        <br />
                        <img onClick={this.openModalVe} height="250" alt="Vegan Spinach pic" src={VS} />

                        <hr />

                        <p className="cursive">Our delightfully seasoned baked spinach combined with our baked to perfection rosemary potatoes and topped with cranberries.</p>

                    </div>
                    <Modal
                        aria-labelledby="PizzaModal"
                        aria-describedby="Modal"
                        open={this.state.showModal}
                        onClose={this.onClose}
                    >
                        <div className="pizzaModal">
                            <h2 className="cursive">{this.state.currentPizza}</h2>
                            {this.state.currentPizza === 'The New Yorker' ?
                                <img height="200" alt="NewYorker pic" src={NewYorker} />
                                : ""}
                            {this.state.currentPizza === 'Papay' ?
                                <img height="200" alt="Papay pic" src={Papay} />
                                : ""}
                            {this.state.currentPizza === 'Vegan-Spinach' ?
                                <img height="200" alt="Vegan Spinach pic" src={VS} />
                                : ""}
                            <p className="cursive">{this.state.currentDescr}</p>
                            <p>{this.state.currentPrice}</p>
                            <Button className="mb-2" variant="contained" color="primary" onClick={this.addToOrder}>Order</Button>
                        </div>
                    </Modal>
                </div>
            </div >
        )
    }
}

export default Menu