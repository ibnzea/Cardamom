// App.js
import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CateringLanding from "./CateringLandingPages/CateringLanding";
import GiftCardsLanding from "./GiftLandingPages/GiftCardsLanding"; // Create this
import AboutLanding from "./AboutLandingPages/AboutLanding"; // Create this
import ContactLanding from "./ContactLandingPages/ContactLanding"; // Create this
import MenuLanding from "./MenuPages/MenuLanding";
import PrivacyPolicy from "./PrivacyLanding/PrivacyPolicy";
import TermsCondition from "./PrivacyLanding/TermsCondition"
import CookiePolicy from "./PrivacyLanding/CookiePolicy";
import OrderLanding from "./OrderLanding/OrderLanding";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/catering" element={<CateringLanding />}/>
          <Route path="/giftCards" element={<GiftCardsLanding />}/>
          <Route path="/about" element={<AboutLanding />}/>
          <Route path="/contact" element={<ContactLanding />}/>
          <Route path="/menu" element={<MenuLanding />}/>
          <Route path="/privacy" element={<PrivacyPolicy />}/>
          <Route path="/terms" element={<TermsCondition />}/>
          <Route path="/cookie" element={<CookiePolicy />}/>
          <Route path="/order" element={<OrderLanding />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;