import styled from "styled-components";
import { About } from "../style";

const FaqSection = () => {

  return (
    <Faq>
      <h2>Any Questions <span className="text--green-light">FAQ</span></h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum corrupti laboriosam rerum iusto atque iure cumque. Voluptate, pariatur explicabo?  
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum corrupti laboriosam rerum iusto atque iure cumque. Voluptate, pariatur explicabo?  
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Diffrent pay method</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum corrupti laboriosam rerum iusto atque iure cumque. Voluptate, pariatur explicabo?  
          </p>
        </div>
        <div className="faq-line"></div>
      </div>


      <div className="question">
        <h4>What Products do you offers</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum corrupti laboriosam rerum iusto atque iure cumque. Voluptate, pariatur explicabo?  
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .text--green-light {
    display: block;
  }

  .faq-line {
    background : #cccccc;
    height: .2rem;
    margin: 3rem 0;
    width: 100%;
  }

  .question {
    padding : 3rem 0;
    cursor: pointer;

  }

  .answer {
    padding : 2rem 0;

    p {
      padding: 1rem 0;
    }
  }


`;

export default FaqSection;