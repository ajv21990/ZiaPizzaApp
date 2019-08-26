import React from "react";
import { Form } from '../components/PizzaForm'
import { Formik } from "formik";
import axios from 'axios'
import * as Yup from "yup";
import { navigate } from "gatsby";
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button';
import '../styleSheets/modalStyle.css'





const validationSchema = Yup.object({
    fName: Yup.string("Enter a first name").required("First name is required").matches(/^[- A-Za-z']+$/, 'Please enter a valid first name.'),
    lName: Yup.string("Enter a last name").required("Last name is required").matches(/^[- A-Za-z']+$/, 'Please enter a valid first name.'),
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    address: Yup.string("Enter your address")
        .required("Address is required"),
    apt: Yup.string("Enter your apt#").notRequired(),
    city: Yup.string("Enter a city").required("City is required").max(30, "Enter a valid city").matches(/^[- A-Za-z']+$/, 'Please enter a valid first name.'),
    state: Yup.string("Enter a state").required("State is required").length(2, "Enter state abbrev").uppercase(),
    zip: Yup.string("Enter a zip code").required("Zip code is required").max(10, "Please enter a valid zip code.").min(5, "Please enter a valid zip code.").matches(/\d{5}/, 'Please enter a valid zip code.'),
    cardNumber: Yup.string("Enter a card number").required("Card number is required").min(16, "Enter a valid card number").max(16, "Enter a valid card number"),
    cvv: Yup.string("Enter a cvv").required("cvv is required").min(3, "Enter a valid cvv").max(3, "Enter a valid cvv"),
    exp: Yup.string("Enter a expiration").required("Expiration is required").max(7, "Enter a valid expiration"),
    contactNumber: Yup.string("Enter your phone number").required("Phone number is required").min(10, "Please enter a valid phone number.").matches(/\d{10}/, 'Please enter a valid phone number.')

})

export default class formikFormVg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fName: "",
            lName: "",
            email: "",
            address: "",
            apt: "",
            city: "",
            state: "",
            zip: '',
            cardNumber: '',
            cvv: '',
            exp: "",
            contactNumber: "",
            showModal: false,
            description: "",
            quantity: 1,

        }
    }
    submitValues = formInput => {
        let formatState = formInput.state
        formatState = formatState.toUpperCase()
        formatState = `USA_${formatState}`
        this.setState({
            fName: formInput.fName,
            lName: formInput.lName,
            email: formInput.email,
            address: formInput.address,
            apt: formInput.apt,
            city: formInput.city,
            state: formatState,
            zip: formInput.zip,
            cardNumber: formInput.cardNumber,
            cvv: formInput.cvv,
            exp: formInput.exp,
            contactNumber: formInput.contactNumber,
            description: formInput.description,
            quantity: formInput.quantity
        })

        this.setState({ showModal: true })

    }

    onClose = () => this.setState({ showModal: false })

    OrderPizza = () => {
        const customer = {
            firstName: this.state.fName,
            lastName: this.state.lName,
            emailAddress: this.state.email,
            address1: this.state.address,
            unitNumber: this.state.apt,
            city: this.state.city,
            stateProvinceGeoId: this.state.state,
            postalCode: this.state.zip,
            cardNumber: this.state.cardNumber,
            cardSecurityCode: this.state.cvv,
            expireDate: this.state.exp,
            contactNumber: this.state.contactNumber,
            productId: 100106,
            comments: this.state.description,
            quantity: this.state.quantity

        }
        // check here to see what information is being passed in to your axios call
        console.log("Customer info: ", customer)
        // Make sure you set your url to include "apps" instead of "vapps".
        axios.post(`http://localhost:8080/apps/ZiaPizza/ZiaPizzaForm/submitOrder`, customer,

            // For this project include withCredentials:true in the header of your axios call in order for the
            // call to bypass the login page
            {
                withCredentials: true
            }
        )

            .then(res => {
                console.log('Axios response', res)
                if (res.status === 200) {
                    //Go To Ordered Complete Page
                    navigate('/orderComplete/')

                }

            })
            .catch(error => {
                console.log("error:", error)
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="formikForm">
                    <Formik
                        render={props => <Form {...props} />}
                        initialValues={this.state}
                        validationSchema={validationSchema}
                        onSubmit={this.submitValues}
                    />
                </div>
                <Modal
                    aria-labelledby="PizzaModal"
                    aria-describedby="Modal"
                    open={this.state.showModal}
                    onClose={this.onClose}
                >
                    <div className="confirmationModal">
                        <h2 className="cursive">Confirmation</h2>
                        <p>Name: {this.state.fName} {this.state.lName}</p>

                        <p>Phone Number: {this.state.contactNumber}</p>
                        <p>Email: {this.state.email}</p>
                        <p>Address: {this.state.apt} {this.state.address} {this.state.city},{this.state.state} {this.state.zip}</p>
                        <p>Card Number: {this.state.cardNumber}</p>
                        <p>Pizza: Vegan-Spinach</p>
                        <p>Quantity: {this.state.quantity}</p>
                        <p>Special Instructions: {this.state.description}</p>
                        <Button className="mb-2" variant="contained" color="primary" onClick={this.OrderPizza}>Submit Order</Button>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

