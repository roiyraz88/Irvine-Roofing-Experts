import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FloatingActionButton from "./components/FloatingActionButton";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";
import ModalForm from "./components/ModalForm";
import ProfessionalMarquee from "./components/ProfessionalMarquee";
import ServiceGrid from "./components/ServiceGrid";
import ServicePage from "./components/ServicePage";
import servicePagesData from "./components/ServicePagesData.js";
import AboutUsPage from "./components/AboutUsPage";

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection onCTAClick={() => setModalOpen(true)} />
                  <ProfessionalMarquee />
                  <ServiceGrid />
                  <AboutSection />
                  <FAQSection />
                  <CallToActionSection />
                  <FloatingActionButton onClick={() => setModalOpen(true)} />
                  <ModalForm
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                  />
                </>
              }
            />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services/:slug" element={<ServicePageLoader />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function ServicePageLoader() {
  const { slug } = useParams();
  const data = servicePagesData.find((s) => s.slug === slug);
  if (!data)
    return <div className="p-10 text-center text-2xl">Service not found.</div>;
  return <ServicePage {...data} />;
}

export default App;
