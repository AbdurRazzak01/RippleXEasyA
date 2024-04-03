// App.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import OurServices from "./OurServices";
import Profile from "./Profile";
import LogIn from "./LogIn";
import Teams from "./Team";
import { NavigationProvider } from "./NavigationContext";

function App() {
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
        <Teams/>
        <Profile />
       
       
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;
