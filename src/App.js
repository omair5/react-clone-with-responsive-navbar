import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from './Utils/LoadingScreen/LoadingScreen'

// code splitting for pages
const AboutCovid19 = React.lazy(() => import('./Pages/AboutCovid19'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs'));
const FAQS = React.lazy(() => import('./Pages/FAQS'));
const Home = React.lazy(() => import('./Pages/Home'));
const PageNotFound = React.lazy(() => import('./Pages/PageNotFound'));
const Payments = React.lazy(() => import('./Pages/Payments'));


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Payments />} />
            <Route path="/aboutcovid19" element={<AboutCovid19 />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQS />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
