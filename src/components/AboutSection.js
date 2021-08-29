import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div className="section-about">
      <div className="section-about__descrioption">
        <div className="section-about__description--title">
          <h2 className="hide">We Work to make</h2>
          <h2 className="hide">
            your <span className="text--green-light">dreams</span> come
          </h2>
          <h2 className="hide">true.</h2>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button className="btn btn--green">Contact us</button>
      </div>
      <div className="section-about__image">
        <img src={home1} alt="guy with a camera" />
      </div>
    </div>
  );
};




export default AboutSection;
