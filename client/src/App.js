import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import OurServices from "./OurServices";
import Profile from "./Profile";
import LogIn from "./LogIn";
import Teams from "./Team";
import { NavigationProvider } from "./NavigationContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationProvider>
      <div>
        <Header />
        <div className="container">
          <h1></h1>
        </div>
        {/* Main sections of the application */}
        <Intro />
        <OurServices />
        <Teams />
        
        {/* Conditionally render LoginForm or Profile based on login status */}
        {isLoggedIn ? <Profile /> : <LogIn onLogin={handleLogin} />}
       
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;
