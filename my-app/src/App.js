import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Imports for about page
import About from "./components/AboutPage/About.jsx";
import AllPartners from "./components/AboutPage/Partners/AllPartners";
import AllTeamMembers from "./components/AboutPage/Team/AllTeamMembers";
import AllReviews from "./components/AboutPage/Reviews/AllReviews";

//Imports for appointment page
import AppointmentForm from "./components/AppointmentPage/AppointmentForm.jsx";
import Appointment from "./components/AppointmentPage/Appointment.jsx";

//Imports for Careers Page
import Careers from "./components/CareersPage/Careers.jsx";

//Imports for donate page
import Donate from "./components/DonateUsPage/Donate.jsx";

//Imports for dummy pages
import Therapist from "./components/DummyPages/Therapist.jsx";
import Contact from "./components/DummyPages/Contact.jsx";
import Login from "./components/DummyPages/Login.jsx";

//Imports for find my location page
import Location from "./components/FindMyLocationPage/Location.jsx";

//Imports for footer
import Footer from "./components/Footer/Footer";

//Imports for for therapist page
import ForTherapist from "./components/ForTherapistPage/ForTherapist.jsx";

//Imports for how it works page
import Work from "./components/HowItWorks/Working";

//Imports for navigation bar
import Navbar from "./components/NavigationBar/Navbar"; 

//Imports for payment page
import PayNow from "./components/Payments/PayNow";
import Payment from "./components/Payments/Payment";

//Imports for policy page
import RefundPolicy from "./components/PolicyPage/RefundPolicy.jsx";
import TermsCondition from "./components/PolicyPage/Terms&Conditions_TestCase1.jsx";
import PrivacyPolicy from "./components/PolicyPage/PrivacyPolicy_TestCase1.jsx";

//Imports for premium page
import Premium from "./components/PremiumPage/Premium";
import MoreFAQ from "./components/PremiumPage/FAQSection/MoreFAQ.jsx";
import Therapy from "./components/PremiumPage/PricePlans/Therapy.jsx";
import { priceData } from "./components/PremiumPage/PricePlans/priceData.js";

//Imports for services page
import Services from "./components/Services/Services";
import CoupleTherapy from "./components/Services/ServiceCards/CouplesTheraphy";
import ChildTherapy from "./components/Services/ServiceCards/ChildTherapy";
import EmergencyTherapy from "./components/Services/ServiceCards/EmergencyTherapy.jsx"
import FarmersTherapy from "./components/Services/ServiceCards/FarmersTherapy";
import IndividualTherapy from "./components/Services/ServiceCards/IndividualTherapy";
import StudentTherapy from "./components/Services/ServiceCards/StudentsTherapy";
import LifeCoaching from "./components/Services/ServiceCards/LifeCoaching";
import CareerCounselling from "./components/Services/ServiceCards/CareerCounselling";
import GroupTherapy from "./components/Services/ServiceCards/GroupTherapy";
import MentalHealthAssessment from "./components/Services/ServiceCards/MentalHealthAssessments";
import PsychiatricConsultation from "./components/Services/ServiceCards/PsychiatricConsultation";
import CorporateWellnessPrograms from "./components/Services/ServiceCards/CorporateWellnessPrograms";

//Imports for review page
import Reviews from "./components/ReviewsPage/ClientReviews.jsx";
import ReviewForm from "./components/ReviewsPage/ReviewForm.jsx";

//Imports for business page
import Business from "./components/BusinessPage/Business.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>

        <Route path="/about" element={<About />} />
        <Route path="/all-partners" element={<AllPartners />} />
        <Route path="/all-team-members" element={<AllTeamMembers />} />
        <Route path="/all-reviews" element={<AllReviews />} />

        <Route path="/form" element={<AppointmentForm />} />
        <Route path="/appointment" element={<Appointment />} />

        <Route path="/Careers" element={<Careers />} />

        <Route path="/donate" element={<Donate />} />

        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/therapist" element={<Therapist/>} />
        
        <Route path="/location" element={<Location />} />

        <Route path="/forTherapist" element={<ForTherapist />} />

        <Route path="/work" element={<Work />} />

        <Route path="/paynow" element={<PayNow />} />
        <Route path="/payment" element={<Payment />} />

        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/termsConditions" element={<TermsCondition />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />

        <Route path="/Premium" element={<Premium />} />
        <Route path="/more" element={<MoreFAQ />} />
        <Route path="/career-counseling" element={<Therapy therapy={priceData.careerCounseling} />} />
        <Route path="/child-therapy" element={<Therapy therapy={priceData.childTherapy} />} />
        <Route path="/couple-therapy" element={<Therapy therapy={priceData.coupleTherapy} />} />
        <Route path="/discount-price" element={<Therapy therapy={priceData.discountPrice} />} />
        <Route path="/emergency-therapy" element={<Therapy therapy={priceData.emergencyTherapy} />} />
        <Route path="/group-therapy" element={<Therapy therapy={priceData.groupTherapy} />} />
        <Route path="/individual-therapy" element={<Therapy therapy={priceData.individualTherapy} />} />
        <Route path="/life-coaching" element={<Therapy therapy={priceData.lifeCoaching} />} />
        <Route path="/mental-health-assessment" element={<Therapy therapy={priceData.mentalHealthAssessment} />} />
        <Route path="/psychiatric-consultation" element={<Therapy therapy={priceData.psychiatricConsultation} />} />
        <Route path="/student-therapy" element={<Therapy therapy={priceData.studentTherapy} />} />

        <Route path="/services" element={<Services />} />
        <Route path="/IndividualTherapy" element={<IndividualTherapy />} />
        <Route path="/CouplesTherapy" element={<CoupleTherapy />} />
        <Route path="/ChildTherapy" element={<ChildTherapy />} />
        <Route path="/StudentTherapy" element={<StudentTherapy />} />
        <Route path="/CareerCounselling" element={<CareerCounselling/>} />
        <Route path="/EmergencyTherapy" element={<EmergencyTherapy/>} />
        <Route path="/FarmersTherapy" element={<FarmersTherapy />} />
        <Route path="/GroupTherapy" element={<GroupTherapy />} />
        <Route path="/LifeCoaching" element={<LifeCoaching />} />
        <Route path="/MentalHealthAssessment" element={<MentalHealthAssessment />} />
        <Route path="/PsychiatricConsultation" element={<PsychiatricConsultation />} />
        <Route path="/WellnessPrograms" element={<CorporateWellnessPrograms />} />

        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviewForm" element={<ReviewForm />} />

        <Route path="/business" element={<Business />} />

      </Routes>

      <Footer />
      
    </Router>
  );
}

export default App;
