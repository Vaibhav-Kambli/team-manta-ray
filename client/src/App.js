import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { theme } from "./themes/theme";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CustomerProfile from "./pages/CustomerProfile";
import NavBar from "./components/NavBar";
import "./App.css";
import { ContextProvider } from "./context/UserContext";
import TestComponent from "./pages/TestComponent";
import SuccessPage from "./pages/SuccessPage";

// stripe imports
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./pages/Payment";

/** This will be moved once we have a parent component for payment */
const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ContextProvider>
          <Elements stripe={promise}>
            <Switch>
              <Route path="/profile" component={CustomerProfile}>
                <NavBar />
              </Route>
              <Route path="/test" component={TestComponent} />
              <Route path="/success" component={SuccessPage} />
              {/** This will be moved once we have a parent component for payment */}
              <Route
                path="/payment"
                render={(props) => <Payment {...props} />}
              />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/" component={Login} exact>
                <Redirect to="/login" />
              </Route>
            </Switch>
          </Elements>
        </ContextProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
