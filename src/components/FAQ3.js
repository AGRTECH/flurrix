import { Accordion, Card } from "react-bootstrap";
import { useState } from "react";

function FAQ2() {
  return (
    <>
      <div className="faq-background">
        <p className="faq-title">FAQ</p>
        <Accordion alwaysOpen className="faq-container">
          <Accordion.Item eventKey="0" className="faq-item">
            <Accordion.Header className="faq-header">
              <p>What Makes a Site "Better" Than Another?</p>
            </Accordion.Header>
            <Accordion.Body className="faq-item">
              There are many factors that make a site better. One is intuitive
              user experience. How easy is it to navigate through your website
              and find out all of the crucial information? Another is
              trustability, do you have indicators on your site giving reasons
              for people to trust you?
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Can I Have A Site Just Like Your Previous Projects?
            </Accordion.Header>
            <Accordion.Body>
              Yes that's exactly what we do. When you sign up with any of our
              plans, you will get a website that is optimized for your specific
              industry!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How Do I View Your Previous Projects?
            </Accordion.Header>
            <Accordion.Body>
              Up Above and at the bottom of the home page, you will see previews
              of 3 of our recents projects. You can click view project and it
              will bring you to a page that shows you a screenshot of the entire
              site as well as a detailed explanation of each.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Why Are The Plans So Cheap?</Accordion.Header>
            <Accordion.Body>
              We strive to make it as affordable as possible to have an
              excellent site. Our sites are based on what works in each industry
              so that we can make a highly effective site for you in a short
              amount of time.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Can You Create A Fully Custom Site?
            </Accordion.Header>
            <Accordion.Body>
              With all of our plans, you will get a template site fully
              optimized for your particular industy but you can also get a fully
              customized site where you have control over every aspect of it for
              a one time payment of $1999.
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="5">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item> */}
        </Accordion>
        <div className="faq-whiteline"></div>
      </div>
    </>
  );
}

export default FAQ2;
