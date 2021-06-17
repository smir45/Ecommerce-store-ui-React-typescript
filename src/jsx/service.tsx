import React from "react";
import SecondNavbar from "./navbar-secondary";
import "../scss/service.scss";
import { FaArrowDown } from "react-icons/fa";
import SecFooter from "./secondfooter";

export default function Service() {
  return (
    <div className="service-main-container">
      <SecondNavbar />
      <div className="background-section">
        <div className="service-svg-persons"></div>
        <div className="text-div">
          <div className="text-internal">
            <h2 className="title-serv">Our Services</h2>
            <a id="arrow-down" href="#service-sec">
              <FaArrowDown className="arrow" />
            </a>
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      <div className="home-services-main-container">
        <div className="title-area">
          <h1 className="services-title">Services We Offer !</h1>
          <div className="services-elements">
            <div className="services-section">
              <div className="svg-div" id="web-development"></div>
              <div className="desc-div">
                <h2 className="title-desc">Web Development</h2>
                <div className="line-segment" id="service-sec"></div>
                <div className="description-div">
                  <p className="descriptionall">
                    We at PitchLab build creative, responsive websites from
                    scratch as per your requirements. Our concept for web design
                    and creation technique is well designed to create a
                    professional website in the finest possible way. We have a
                    team of well qualified and experienced developers. PitchLab,
                    a multinational web development firm with experienced
                    developers offers both platforms based and customize web
                    applications for corporations that are highly accessible,
                    usable and visually appealing. <br />
                    <strong>4 reasons to choose PitchLab</strong>
                    <ol>24x7 team support</ol>
                    <ol>Auto backup as extra features</ol>
                    <ol>Experienced Developers</ol>
                    <ol>Cost effective</ol>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            {/* ----------- */}
            <div className="services-section">
              <div className="desc-div">
                <h2 className="title-desc">Software Development</h2>
                <div className="line-segment"></div>
                <div className="description-div">
                  <p className="descriptionall">
                    We proactively consult, design, develop & scale robust
                    custom software solutions, that fuel innovation & deliver
                    digital success! From a scratch idea of yours to a
                    completely functioning and robust software, we develop and
                    scale your product. There's a lot that we do before actually
                    starting the project. We do market research and analysis,
                    understand the competitive landscape, understand and
                    document clients’ design and branding preferences, consult
                    with all the key stakeholders and finally come up with a
                    high-level mapping of the software solution.
                    <br />
                  </p>
                </div>
              </div>
              <div className="svg-div" id="soft-development"></div>
            </div>
            {/* ----------------------------- */}
            <div className="services-section">
              <div className="svg-div" id="graphics-design"></div>
              <div className="desc-div">
                <h2 className="title-desc">Graphics Designing</h2>
                <div className="line-segment"></div>
                <div className="description-div">
                  <p className="descriptionall">
                    Pitchlab, which was established in 2020, develops
                    experiential brand environments for clients leveraging their
                    online, graphics, logos, print, and packaging design
                    expertise. They also have expertise in the field of motion
                    graphics (2D & 3D animations) which is one of the mostly
                    demanded services among their clients. In the year 2020,
                    their small team of less than five coworkers started
                    operating.Choosing which graphic designers, you trust with
                    your digital properties can be challenging. Detailed and
                    insightful graphics harness the power of storytelling.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            {/* ----------- */}
            <div className="services-section">
              <div className="desc-div">
                <h2 className="title-desc">Mobile App Development</h2>
                <div className="line-segment"></div>
                <div className="description-div">
                  <p className="descriptionall">
                    As required by businesses, PitchLab develops and designs
                    native android platform and iOS applications. PitchLab deep
                    expertise in the development and delivering of mobile
                    Android and iOS applications allows you to reach new
                    standards for your enterprise. We plan to harness Android
                    and iOS devices immense capacity in different ways. For your
                    own Android or iOS app, we'll help you create, code and
                    deploy your Google Play Store and App Store.
                    <br />
                  </p>
                </div>
              </div>
              <div className="svg-div" id="mobile-development"></div>
            </div>
            {/* ----------------------------- */}
            <div className="services-section">
              <div className="svg-div" id="digital-marketing"></div>
              <div className="desc-div">
                <h2 className="title-desc">Digital Marketing</h2>
                <div className="line-segment"></div>
                <div className="description-div">
                  <p className="descriptionall">
                    It is a data driven field and Pitchlab has been creating and
                    executing insightful strategic plans powered by data
                    analytics, market research, and digital technology to
                    anticipate new challenges every day and increase brand value
                    of the business. Today, we look less like an agency and more
                    like a modern management consultancy who actually does the
                    work. Our strategies are highly curated to the challenge at
                    hand. Our partners trust us with a challenge, and we deliver
                    a bespoke pathway toward enterprise value with action steps
                    that may surprise you.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            {/* ----------- */}
            <div className="services-section">
              <div className="desc-div">
                <h2 className="title-desc">Network Design</h2>
                <div className="line-segment"></div>
                <div className="description-div">
                  <p className="descriptionall">
                    With many years' profound understanding of illustrations and
                    architecture, PitchLab can deliver incredible results.
                    PitchLab provides complete deployment of the network
                    internationally. From beginning to end, we construct, plan
                    and configure your network. Each network solution is
                    customized, may be built from scratch or retained in the
                    current context. As core network in manufacturing, business
                    and industrial settings has become popular, we have planned,
                    configured and deployed at diverse company scales, for
                    example: schooling agencies, departments of companies,
                    government offices, hotels and hospitals. For virtually any
                    spot, PitchLab will build a network infrastructure.
                    <br />
                    <strong>We focus on</strong>
                    <ol>Lan Network Design and its deployment</ol>
                    <ol>Lan Securities</ol>
                  </p>
                </div>
              </div>
              <div className="svg-div" id="network-design"></div>
            </div>
            {/* ----------------------------- */}
          </div>
        </div>
      </div>
      <div className="footer">
        <SecFooter />
      </div>
    </div>
  );
}
