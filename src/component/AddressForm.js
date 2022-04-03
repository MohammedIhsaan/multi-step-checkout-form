import React, { useContext, useReducer, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CheckoutContext } from "../App";
import { Button } from "@mui/material";

export default function AddressForm({ setActiveStep, activeStep }) {
  const [data, dispatch] = useContext(CheckoutContext);
  const [shippingDetails, setshippingDetails] = useState(data.shippingDetails);
  const handleNext = async () => {
    await dispatch({ type: "shipping", payload: shippingDetails });
    setActiveStep(activeStep + 1);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={shippingDetails.firstName || ""}
            onChange={(e) =>
              setshippingDetails({
                ...shippingDetails,
                firstName: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={shippingDetails.lastName || ""}
            onChange={(e) =>
              setshippingDetails({
                ...shippingDetails,
                lastName: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={shippingDetails.address1 || ""}
            onChange={(e) =>
              setshippingDetails({
                ...shippingDetails,
                address1: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={shippingDetails.address2 || ""}
            onChange={(e) =>
              setshippingDetails({
                ...shippingDetails,
                address2: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={shippingDetails.city || ""}
            onChange={(e) =>
              setshippingDetails({
                ...shippingDetails,
                city: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={shippingDetails.state || ""}
            onChange={(e) =>
              setshippingDetails({
                ...shippingDetails,
                state: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={shippingDetails.zipCode || ""}
            onChange={(e) =>
              setshippingDetails({
                ...shippingDetails,
                zipCode: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={shippingDetails.country || ""}
            onChange={(e) =>
              setshippingDetails({
                ...shippingDetails,
                country: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
        <Grid align="center" item xs={12}>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
