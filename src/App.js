import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Home from './components/Home';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import MemberArea from './components/MemberArea';

function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <Router>
      <Header isSignedIn={isSignedIn} onSignOut={handleSignOut} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/auth/signin">
          {isSignedIn ? (
            <Redirect to="/member-area" />
          ) : (
            <SignIn onSignIn={handleSignIn} />
          )}
        </Route>
        <Route path="/auth/signup">
          {isSignedIn ? (
            <Redirect to="/member-area" />
          ) : (
            <SignUp onSignIn={handleSignIn} />
          )}
        </Route>
        <Route path="/member-area">
          {isSignedIn ? (
            <MemberArea onSignOut={handleSignOut} />
          ) : (
            <Redirect to="/auth/signin" />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
