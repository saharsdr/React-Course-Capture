import home1 from "../img/home1.png";
import { About, Description, Hide, Button, Image } from "../style";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="section-about__description--title">
          <Hide>
            <motion.h2 variants={titleAnim}>We Work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span className="text--green-light">dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Button variants={fade} className="btn btn--green">Contact us</Button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
