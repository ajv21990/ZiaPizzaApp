import React from 'react'
import NewYorker from '../images/NewYorker.jpg'
import FormikForm from '../components/formikForm.js'
import '../styleSheets/appStyle.css'

export default class CustomerFormNY extends React.Component {
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
                    <h3 className="cursive">The New Yorker</h3>
                    <img height="250" alt="NewYorker pic" src={NewYorker} />
                    <p style={{ color: "white" }}>*$15.50 will be charged on your card once you submit this form</p>
                </div>
                <FormikForm />
            </div>

        )
    }
} 