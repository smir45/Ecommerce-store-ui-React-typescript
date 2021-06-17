import React from "react";
import "../scss/homeservices.scss";
import { Link } from "react-router-dom";

export default function HomeService() {
  return (
    <div className="home-services-main-container">
      <div className="title-area">
        <h1 className="services-title">Services We Offer !</h1>
        <div className="services-elements">
          <div className="services-section">
            <div className="svg-div" id="web-development"></div>
            <div className="desc-div">
              <h2 className="title-desc">Web Development</h2>
              <div className="line-segment"></div>
              <div className="description-div">
                <p className="descriptionall">
                  We at PitchLab build creative, responsive websites from
                  scratch as per your requirements. Our concept for web design
                  and creation technique is well designed to create a
                  professional website in the finest possible way. We have a
                  team of well qualified and experienced developers.  <br />
                  <Link to="/service" className="readmore-link">
                    Read More..
                  </Link>
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
                  We proactively consult, design, develop & scale robust custom
                  software solutions, that fuel innovation & deliver digital
                  success! From a scratch idea of yours to a completely
                  functioning and robust software, we develop and scale your
                  product. There's a lot that we do before actually starting the
                  project. 
                  <br />
                  <br />
                  <Link to="/service" className="readmore-link">
                    Read More..
                  </Link>
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
                  Pitchlab, which was established in 2020, develops experiential
                  brand environments for clients leveraging their online,
                  graphics, logos, print, and packaging design expertise. 
                  <br />
                  <br />
                  <Link to="/service" className="readmore-link">
                    Read More..
                  </Link>
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
                  expertise in the development and delivering of mobile Android
                  and iOS applications allows you to reach new standards for
                  your enterprise. 
                  <br />
                  <br />
                  <Link to="/service" className="readmore-link">
                    Read More..
                  </Link>
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
                  work. 
                  <br />
                  <br />
                  <Link to="/service" className="readmore-link">
                    Read More..
                  </Link>
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
                  internationally. From beginning to end, we construct, plan and
                  configure your network. 
                  <br />
                  <br />
                  <Link to="/service" className="readmore-link">
                    Read More..
                  </Link>
                </p>
              </div>
            </div>
            <div className="svg-div" id="network-design"></div>
          </div>
          {/* ----------------------------- */}
        </div>
      </div>
    </div>
  );
}
