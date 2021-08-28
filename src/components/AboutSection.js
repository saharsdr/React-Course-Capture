import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div className="section-about">
      <div className="section-about__descrioption">
        <div className="section-about__description--title">
          <div className="hide">We Work to make</div>
          <div className="hide">
            your <span>dreams</span> come
          </div>
          <div className="hide">come true.</div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </div>
      <div className="section-about__image">
        <img src={home1} alt="guy with a camera" />
      </div>
    </div>
  );
};

export default AboutSection;
