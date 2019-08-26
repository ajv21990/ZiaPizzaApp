import React from 'react'
import VS from '../images/Vegan_Spinach.jpg'
import '../styleSheets/appStyle.css'
import FormikForm from '../components/formikFormVg.js'

export default class CustomerFormVg extends React.Component {
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
                    <h3 className="cursive">Vegan-Spinach</h3>
                    <img height="250" alt="Vegan Pizza pic" src={VS} />
                    <p style={{ color: "white" }}>*$15.50 will be charged on your card once you submit this form</p>

                </div>
                <FormikForm />
            </div>

        )
    }
} 