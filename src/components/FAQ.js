import { Accordion, Card } from "react-bootstrap";
import { useState } from "react";

function FAQ() {
  return (
    <>
      <div className="faq-background">
        <p className="faq-title">FAQ</p>
        <Accordion alwaysOpen className="faq-container">
          <Accordion.Item eventKey="0" className="faq-item">
            <Accordion.Header className="faq-header">
              <p>What Is The Most Cost Effective Plan?</p>
            </Accordion.Header>
            <Accordion.Body className="faq-item">
              You will save 50% on all plans by pre-paying for 3 months. This
              means you pay for 3 months and get 3 months for free. Cashing in
              on this offer before March 31st will ensure you get summer (the
              busiest month) for free and is also when the offer ends.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
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
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How Does a Fully Optimized Flurrix Website Improve My Business?
            </Accordion.Header>
            <Accordion.Body>
              Here are the MANY ways a Flurrix website will improve your
              business and ultimately land you more clients.
              <br />- Strong CTAs (Call To Actions) througout the site so that
              the user is always 1 click away from your contact page and
              becoming a client <br /> - SEO optimized page. This means adding
              relevant keywords to your niche througout, page title and meta
              description, image, page speed and mobile optimization and more.
              These strategies will ultimately rank you higher than competitors
              that fail to take the extra step to perform good SEO. <br />{" "}
              -Excellent User Experience & Trust Signals. With an inutive design
              where every single section is strategically placed and not
              overloading the user with too much text will ensure increase
              conversions. Adding trust indicators such an guarantees, insurance
              and fast quotes will let your customers know that you are a
              business that cares and is a low risk option.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Will I Get More Leads?</Accordion.Header>
            <Accordion.Body>
              While we can't guarantee you will, our previous clients have seen
              massive results and we do everything you can do to get more
              traffic coming into your site.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What's The 6 Month Agreement?</Accordion.Header>
            <Accordion.Body>
              When you sign up, we allow you to pay over time for your website
              in the form of a financing plan over the course of 6 months. If
              you cancel before the 6 month agreement is up, a termination fee
              will be applied for 1.5 months of your current plan.
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
      </div>
    </>
  );
}

export default FAQ;
