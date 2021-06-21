import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Nav from "./components/shared/Nav"
import Footer from "./components/shared/Footer"
import SplashScreen from "./components/splash/SplashScreen"
import RegisterScreen from "./components/registration/RegisterScreen"
import LoginScreen from "./components/login/LoginScreen"
import PasswordResetRequestScreen from "./components/password/PasswordResetRequestScreen"
import PasswordResetScreen from "./components/password/SetPasswordScreen"
import PrivacyPolicyScreen from "./components/legal/PrivacyPolicyScreen"
import EmailVerificationScreen from "./components/verifications/EmailVerificationScreen"
import PhoneVerificationScreen from "./components/verifications/PhoneVerificationScreen"
import ProfileScreen from "./components/profile/ProfileScreen"
import AccountSettingScreen from "./components/accountSettings/AccountSettingScreen"
import ResendVerificationScreen from "./components/verifications/ResendVerificationScreen"
import TermsScreen from "./components/legal/TermsScreen"
import GoalScreen from "./components/goal/GoalScreen"
import Subscribers from "./components/newsletter/Subscribers"
import SplashScreenV2 from "./components/splash/splashScreenv2"

declare global {
  interface Window {
    analytics: any
  }
}

function App() {
  
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route path='/goal/:publicIdentifier' component={GoalScreen} />
          <Route
            path='/resend-verification/:type'
            component={ResendVerificationScreen}
          />
          <Route path='/settings' component={AccountSettingScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route
            path='/phone-verification/'
            component={PhoneVerificationScreen}
          />
          <Route
            path='/email-verification/:token'
            component={EmailVerificationScreen}
          />
          <Route path='/report'>
            {/* TODO: find a better way to do this redirect */}
            {() => {
              window.location.href = "https://forms.gle/odUiWoGJuyv8dtQK6"
            }}
          </Route>
          <Route path='/privacy' component={PrivacyPolicyScreen} />
          <Route path='/newsletter/subscriber-list' component={Subscribers} />
          <Route path='/terms' component={TermsScreen} />
          <Route
            path={["/password-reset/:token", "/set-password/:token"]}
            component={PasswordResetScreen}
          />
          <Route
            exact
            path='/password-reset'
            component={PasswordResetRequestScreen}
          />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          {/* v1 
            import from splashscreen.tsx
          */}
          {/* <Route path={["/invite/:code", "/"]} component={SplashScreen} /> */}

          {/* v2  
             imported from splashscreenv2.tsx
             this version is given by michael
          */}
          <Route path={["/invite/:code", "/"]} component={SplashScreenV2} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App
