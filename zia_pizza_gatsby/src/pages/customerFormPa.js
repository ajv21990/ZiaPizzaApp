import React from 'react'
import Papay from '../images/Papay.jpg'
import FormikForm from '../components/formikFormPa.js'
import '../styleSheets/appStyle.css'

export default class CustomerFormPa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {

        return (
            <div className="FormPage">
                <h2 className="cursive text-center pt-4">YOU'RE ALMOST READY TO ENJOY YOUR......</h2>
                <div className="text-center">
                    <h3 className="cursive">Papay</h3>
                    <img height="250" alt="NewYorker pic" src={Papay} />
                    <p style={{ color: "white" }}>*$15.50 will be charged on your card once you submit this form</p>

                </div>
                <FormikForm />
            </div>

        )
    }
} 