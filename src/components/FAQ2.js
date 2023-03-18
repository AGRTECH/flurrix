import { Accordion, Card } from "react-bootstrap";
import { useState } from "react";

function FAQ2() {
  return (
    <>
      <div className="faq-background">
        <p className="faq-title">FAQ</p>
        <Accordion
          defaultActiveKey={["0"]}
          alwaysOpen
          className="faq-container"
        >
          <Accordion.Item eventKey="0" className="faq-item">
            <Accordion.Header className="faq-header">
              <p>How Long Does It Take For The Site to Be Delievered?</p>
            </Accordion.Header>
            <Accordion.Body className="faq-item">
              Depending on your plan, usually 1-3 weeks time
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What Does On-Going Maintenance Mean?
            </Accordion.Header>
            <Accordion.Body>
              We will perform frequent sercurity checks and make sure everything
              is running smoothly at all times. We also will add in new photos
              and reviews onto your site upon request or update offers /
              contacts forms etc. Just give us a call!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How Many Revisions Do I Get?</Accordion.Header>
            <Accordion.Body>
              You get unlimited when we first design your site, and then
              unlimited maintenance on your site going forward.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How Does Onboarding Work?</Accordion.Header>
            <Accordion.Body>
              You can either use our digital onboarding right here on the site
              and not have to email or call us at all which is very fast. Or,
              you can have a chat with us through phone or email to give us your
              info and learn about our services.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How Often Can We Contact You?</Accordion.Header>
            <Accordion.Body>
              Anytime you have questions or need clarification on anything!
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
          </Accordion.Item>{" "} */}
        </Accordion>
        <div className="faq-whiteline"></div>
      </div>
    </>
  );
}

export default FAQ2;
