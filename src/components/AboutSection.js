import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Hide, Button, Image } from "../style";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="section-about__description--title">
          <Hide>
            <h2>We Work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span className="text--green-light">dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
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
