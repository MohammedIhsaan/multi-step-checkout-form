import { createContext, useReducer } from "react";
import "./App.css";
import Checkout from "./component/CheckOut";
// import Checkout from "./component/CheckOut";

export const CheckoutContext = createContext(null);
export const reducer = (state, action) => {
  console.log("in reducer");
  switch (action.type) {
    case "shipping":
      console.log("working");
      state.shippingDetails = action.payload;
      return state;
    case "payment":
      state.paymentDetails = action.payload;
      return state;
  }
};

function App() {
  let data = {
    shippingDetails: {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      saveDetails: false,
    },
    paymentDetails: {
      nameOnCArd: "",
      CardNumber: "",
      ExpiryDate: "",
      cvv: "",
    },
  };

  const [state, dispatch] = useReducer(reducer, data);
  return (
    <div className="App">
      <CheckoutContext.Provider value={[data, dispatch]}>
        <Checkout />
      </CheckoutContext.Provider>
    </div>
  );
}

export default App;
