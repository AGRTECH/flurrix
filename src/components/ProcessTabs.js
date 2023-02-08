import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function ProcessTabs() {
  return (
    <Tab.Container defaultActiveKey="first" className="section5-tabscontainer">
      <div className="flex-column ">
        <Col sm={3}>
          <Nav variant="pills" className="section5-tabscontainer">
            <Nav.Item>
              <Nav.Link eventKey="first">Strategize</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Design</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Develop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="forth">Maintain</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content className="section5-contentcontainer">
            <Tab.Pane eventKey="first">
              <img src="" alt="" />
              <p>
                Strategy is the foundation of our projects. Our research into
                the roles of your web visitors allows us to create a website
                that delivers results. We’ll discuss your business goals, sales
                & marketing strategy, business challenges, and core competencies
                in order to better understand your brand identity and
                competition. All of this information allows us to then
                effectively draft wireframes, key messaging, and information
                architecture.
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <img src="" alt="" />
              <p>
                Our custom design approach has distinct advantages. Our San
                Diego web designers are fully versed in graphic design,
                mobile-wise design, user interface (UI), and user experience
                (UX) - the use of visual elements & graphics to create an
                engaging site experience. We’ll discuss your vision for the site
                and generate fresh ideas by looking at current design and
                inspirational sites. Through an iterative design process, we’ll
                create unique mockups and designs for each wireframe while
                integrating your business’ logo design and branding style
                guidelines.
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <img src="" alt="" />
              <p>
                With WordPress, your site can grow with your business. WordPress
                is the most popular content management system (CMS) in the world
                and it offers some significant SEO benefits. We have 10+ years
                of WordPress experience & deep knowledge of performance,
                security, and data privacy best practices. We also have
                expertise in building high-quality, WooCommerce ecommerce sites.
                Prior to the launch of the new website, our team will go through
                an in-depth Quality Control & Quality Assurance process and
                provide site specific WordPress training sessions.
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="forth">
              <img src="" alt="" />
              <p>
                Unfortunately, website security is a significant issue. Our
                maintenance & security service is the best way to protect your
                online presence. We also have a variety of trusted partners who
                can assist with social media marketing, advertising, PPC, search
                engine optimization (SEO), video production, & content
                marketing. Our monthly service also include performance
                monitoring where we can provide data reports to help with
                optimization. Our goal is to be a long-term web partner to
                customers and provide top-notch service to businesses.
              </p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </div>
    </Tab.Container>
  );
}

export default ProcessTabs;
