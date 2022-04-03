import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CheckoutContext } from "../App";
import { Button } from "@mui/material";

export default function PaymentForm({ setActiveStep, activeStep }) {
  const [data, dispatch] = useContext(CheckoutContext);
  const [payment, setpayment] = useState(data.paymentDetails);
  const handleNext = async () => {
    await dispatch({ type: "payment", payload: payment });
    setActiveStep(activeStep + 1);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={payment.nameOnCard || ""}
            onChange={(e) =>
              setpayment({ ...payment, nameOnCard: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={payment.CardNumber || ""}
            onChange={(e) =>
              setpayment({ ...payment, CardNumber: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={payment.ExpiryDate || ""}
            onChange={(e) =>
              setpayment({ ...payment, ExpiryDate: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={payment.cvv || ""}
            onChange={(e) => setpayment({ ...payment, cvv: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
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
