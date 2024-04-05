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
     
       <LogIn/>
       
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;
