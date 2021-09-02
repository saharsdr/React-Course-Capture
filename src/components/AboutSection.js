import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { About, Description, Hide, Button, Image } from "../style";
import { easeOut } from "popmotion";

const AboutSection = () => {
  

  return (
    <About>
      <Description>
        <motion.div className="section-about__description--title">
          <Hide>
            <motion.h2>
              We Work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span className="text--green-light">dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <Button className="btn btn--green">Contact us</Button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
