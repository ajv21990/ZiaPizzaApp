import React from "react";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Tooltip from '@material-ui/core/Tooltip'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'

import '../styleSheets/appStyle.css'




export const Form = props => {
    const {
        values: { fName, lName, email, address, apt, city, state, zip, cardNumber, cvv, exp, contactNumber, description, quantity },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="PizzaForm">
                <div className=" row">
                    <div className="col-sm-4 offset-sm-0">
                        <TextField
                            id="fName"
                            name="fName"
                            helperText={touched.fName ? errors.fName : ""}
                            error={touched.fName && Boolean(errors.fName)}
                            fullWidth
                            label="First Name"
                            margin="normal"
                            variant="outlined"
                            value={fName}
                            onChange={change.bind(null, "fName")}
                        />
                        <TextField
                            id="lName"
                            name="lName"
                            helperText={touched.lName ? errors.lName : ""}
                            error={touched.lName && Boolean(errors.lName)}
                            fullWidth
                            label="Last Name"
                            margin="normal"
                            variant="outlined"
                            value={lName}
                            onChange={change.bind(null, "lName")}
                        />
                        <TextField
                            id="email"
                            name="email"
                            helperText={touched.email ? errors.email : ""}
                            error={touched.email && Boolean(errors.email)}
                            fullWidth
                            label="Email"
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={change.bind(null, "email")}
                        />
                        <TextField
                            id="zip"
                            name="zip"
                            helperText={touched.zip ? errors.zip : ""}
                            error={touched.zip && Boolean(errors.zip)}
                            fullWidth
                            label="Zip"
                            margin="normal"
                            variant="outlined"
                            value={zip}
                            onChange={change.bind(null, "zip")}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextField
                            id="address"
                            name="address"
                            helperText={touched.address ? errors.address : ""}
                            error={touched.address && Boolean(errors.address)}
                            fullWidth
                            label="Address"
                            margin="normal"
                            variant="outlined"
                            value={address}
                            onChange={change.bind(null, "address")}
                        />
                        <TextField
                            id="apt"
                            name="apt"
                            helperText={touched.apt ? errors.apt : ""}
                            error={touched.apt && Boolean(errors.apt)}
                            fullWidth
                            label="Apt#"
                            margin="normal"
                            variant="outlined"
                            value={apt}
                            onChange={change.bind(null, "apt")}
                        />
                        <TextField
                            id="city"
                            name="city"
                            helperText={touched.city ? errors.city : ""}
                            error={touched.city && Boolean(errors.city)}
                            fullWidth
                            label="City"
                            margin="normal"
                            variant="outlined"
                            value={city}
                            onChange={change.bind(null, "city")}
                        />
                        <TextField
                            id="state"
                            name="state"
                            helperText={touched.state ? errors.state : ""}
                            error={touched.state && Boolean(errors.state)}
                            fullWidth
                            label="State"
                            margin="normal"
                            variant="outlined"
                            value={state}
                            onChange={change.bind(null, "state")}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextField
                            id="cardNumber"
                            name="cardNumber"
                            helperText={touched.cardNumber ? errors.cardNumber : ""}
                            error={touched.cardNumber && Boolean(errors.cardNumber)}
                            fullWidth
                            label="Card Number"
                            margin="normal"
                            variant="outlined"
                            value={cardNumber}
                            onChange={change.bind(null, "cardNumber")}
                        />
                        <TextField
                            id="cvv"
                            name="cvv"
                            helperText={touched.cvv ? errors.cvv : ""}
                            error={touched.cvv && Boolean(errors.cvv)}
                            fullWidth
                            label="Cvv"
                            margin="normal"
                            variant="outlined"
                            value={cvv}
                            onChange={change.bind(null, "cvv")}
                        />
                        <Tooltip title="Format mm/yyyy" placement="bottom">
                            <TextField
                                id="exp"
                                name="exp"
                                helperText={touched.exp ? errors.exp : ""}
                                error={touched.exp && Boolean(errors.exp)}
                                fullWidth
                                label="Exp"
                                margin="normal"
                                variant="outlined"
                                value={exp}
                                onChange={change.bind(null, "exp")}
                            />
                        </Tooltip>
                        <TextField
                            id="contactNumber"
                            name="contactNumber"
                            helperText={touched.contactNumber ? errors.contactNumber : ""}
                            error={touched.contactNumber && Boolean(errors.contactNumber)}
                            fullWidth
                            label="Phone#"
                            margin="normal"
                            variant="outlined"
                            value={contactNumber}
                            onChange={change.bind(null, "contactNumber")}
                        />
                    </div>
                </div >
                <br />
                <p className="mt-2">**At this time the max number of pizzas available to order is 10</p>

                <div className="text-center">
                    <div className="row col-md-2">
                        <InputLabel>Quantity</InputLabel>
                        <Select
                            autoWidth="true"
                            label="quantity"
                            native
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={change.bind(null, "quantity")}
                            input={
                                <OutlinedInput name="quantity" id="quantity" />
                            }>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>

                        </Select></div>

                    <TextField
                        id="description"
                        name="description"
                        helperText={touched.description ? errors.description : ""}
                        error={touched.description && Boolean(errors.description)}
                        fullWidth
                        label="Special Instructions"
                        margin="normal"
                        variant="outlined"
                        value={description}
                        onChange={change.bind(null, "description")}
                    />


                    <Button
                        type="submit"

                        variant="contained"
                        color="primary"
                        disabled={!isValid} >SUBMIT</Button>
                </div>
            </div>
        </form>
    );
};


