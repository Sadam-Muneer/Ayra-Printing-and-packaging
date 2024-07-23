import React, { useState } from "react";
import faq from "../assets/www.biotechpackages.com/home/faq.png";
import Right from "../assets/www.biotechpackages.com/images/icons/right.png";
import Bottom from "../assets/www.biotechpackages.com/images/icons/bottom.png";
import styled from 'styled-components';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What does Ayra Printing and Packaging Pvt. Ltd company specialize in?",
      answer: "Ayra Printing and Packaging Pvt. Ltd company specializes in the design, development, and production of innovative packaging solutions for the industry. We create custom packaging solutions tailored to the unique needs of the customers."
    },
    {
      question: "Can Ayra Printing and Packaging Pvt. Ltd company accommodate specific customization requests?",
      answer: "Yes, our company provides the customization option because we understand the product's uniqueness. Our team works closely with clients to develop customized packaging solutions that meet their specific requirements."
    },
    {
      question: "How does Ayra Printing and Packaging Pvt. Ltd company contribute to sustainability?",
      answer: "Sustainability is the first core of us. We are continually exploring eco-friendly materials and production methods to minimize our environmental impact. Our goal is to offer sustainable packaging solutions without compromising on safety and functionality."
    },
    {
      question: "What are the typical turnaround times for orders?",
      answer: "The turnaround time of the order specifically depends on the complexity of the project, customization process, and order volume. We strive to provide efficient turnaround times without compromising on quality."
    }
  ];

  return (
    <div className="main-questions">
      <div className="faqq_imggg">
        <img
          id="questions"
          alt=""
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          src={faq}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: '0px',
            objectFit: 'cover',
            objectPosition: 'center center',
            color: 'transparent',
          }}
        />
      </div>
      <div className="main_question">
        <div className="container">
          <div className="Faq_section">
            <h3>Frequently asked questions</h3>
          </div>
          <div>
            {faqData.map((item, index) => (
              <div key={index}>
                <FaqQuestion onClick={() => toggleAccordion(index)}>
                  <span style={{ fontSize: '20px',
                    padding: '25px 0px',
                    cursor: 'pointer',
                    height: 'min-content',
                    lineHeight: '1',
                    opacity: '.5',
                    fontWeight: '700',
                    marginRight: '25px',
                  }}>{index + 1} </span>
                  <div style={{ width: '100%' }}>
                    <AccordianHeader>
                      <h4>{item.question}</h4>
                      <IconStyle>
                        <img
                          alt=""
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          src={activeIndex === index ? Right : Bottom}
                          style={{
                            inset: '0px',
                            objectFit: 'cover',
                            objectPosition: 'center center',
                            color: 'transparent',
                          }}
                        />
                      </IconStyle>
                    </AccordianHeader>
                    {activeIndex === index && (
                      <p style={{ paddingTop: '20px' }}>
                        {item.answer}
                      </p>
                    )}
                  </div>
                </FaqQuestion>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqQuestion = styled.div`
  cursor: pointer;
  display: flex;
`;

const AccordianHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 19px;
  margin-bottom: -17px;
  padding: 25px 0;
`;

const IconStyle = styled.div`
  display: flex;
  align-items: center;
`;

export default Faq;