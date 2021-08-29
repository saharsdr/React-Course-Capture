// Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

// Import Image
import home2 from "../img/home2.png";

// Styles
import styled from "styled-components";
import { About, Description, Image } from "../style";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span className="text--green-light">quality</span> Services
        </h2>
        <Cards>
          <Card>
            <div className="card__icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="card__icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="card__icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="card__icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom : 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;


const Cards = styled.div`
  display: flex;
  flex-wrap : wrap;
`;

const Card = styled.div`
  flex-basis: 25rem;
  .card__icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background-color: white;
      color: black;
      text-transform: uppercase;
      padding: 1rem;
    }
  }

`
export default ServicesSection;
