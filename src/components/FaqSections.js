import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span className="text--green-light">FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              earum corrupti laboriosam rerum iusto atque iure cumque.
              Voluptate, pariatur explicabo?
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              earum corrupti laboriosam rerum iusto atque iure cumque.
              Voluptate, pariatur explicabo?
            </p>
          </div>
        </Toggle>

        <Toggle title="Diffrent pay method">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              earum corrupti laboriosam rerum iusto atque iure cumque.
              Voluptate, pariatur explicabo?
            </p>
          </div>
        </Toggle>

        <Toggle title="What Products do you offers">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              earum corrupti laboriosam rerum iusto atque iure cumque.
              Voluptate, pariatur explicabo?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
    background: #cccccc;
    height: 0.2rem;
    margin: 3rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
