// Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSections";

// Page Style
import AboutUsStyle from "./AboutUsStyle";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <AboutUsStyle />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
