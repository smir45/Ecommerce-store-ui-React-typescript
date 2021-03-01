import React from 'react';
import '../css/homeservices.css';
import { Link } from 'react-router-dom';

export default function HomeService(){
    return(
        <div className="home-services-main-container">
            <div className="title-area">
                <h1 className="services-title">Services We Offer !</h1>
                <div className="services-elements">
                    <div className="services-section">
                        <div className="svg-div" id="web-development" ></div>
                        <div className="desc-div">
                            <h2 className="title-desc">Web Development</h2>
                            <div className="line-segment"></div>
                            <div className="description-div">
                                <p className="descriptionall"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio dicta libero mollitia dolorem, delectus veniam necessitatibus. Quidem ipsa odit tempore ab ea, ipsam minus! Libero officia id placeat dolores!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt adipisci quaerat culpa iure amet libero, distinctio, quo reprehenderit quia totam mollitia nihil sint minus nulla quidem nisi molestias eum.
                                <br/><br/><Link to="/service" className="readmore-link" >Read More..</Link></p>
                            </div>

                        </div>
                    </div>
                    {/* ----------- */}
                    <div className="services-section">
                        <div className="desc-div">
                        <h2 className="title-desc">Software Development</h2>
                        <div className="line-segment"></div>
                        <div className="description-div">
                                <p className="descriptionall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio dicta libero mollitia dolorem, delectus veniam necessitatibus. Quidem ipsa odit tempore ab ea, ipsam minus! Libero officia id placeat dolores!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt adipisci quaerat culpa iure amet libero, distinctio, quo reprehenderit quia totam mollitia nihil sint minus nulla quidem nisi molestias eum.
                                <br/><br/><Link to="/service" className="readmore-link" >Read More..</Link></p>
                            </div>
                        </div>
                        <div className="svg-div" id="soft-development" ></div>
                    </div>
                    {/* ----------------------------- */}
                    <div className="services-section">
                        <div className="svg-div" id="graphics-design" ></div>
                        <div className="desc-div">
                        <h2 className="title-desc">Graphics Designing</h2>
                        <div className="line-segment"></div>
                        <div className="description-div">
                                <p className="descriptionall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio dicta libero mollitia dolorem, delectus veniam necessitatibus. Quidem ipsa odit tempore ab ea, ipsam minus! Libero officia id placeat dolores!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt adipisci quaerat culpa iure amet libero, distinctio, quo reprehenderit quia totam mollitia nihil sint minus nulla quidem nisi molestias eum.
                                <br/><br/><Link to="/service" className="readmore-link" >Read More..</Link></p>
                            </div>
                        </div>
                    </div>
                    {/* ----------- */}
                    <div className="services-section">
                        <div className="desc-div">
                        <h2 className="title-desc">Mobile App Development</h2>
                        <div className="line-segment"></div>
                        <div className="description-div">
                                <p className="descriptionall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio dicta libero mollitia dolorem, delectus veniam necessitatibus. Quidem ipsa odit tempore ab ea, ipsam minus! Libero officia id placeat dolores!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt adipisci quaerat culpa iure amet libero, distinctio, quo reprehenderit quia totam mollitia nihil sint minus nulla quidem nisi molestias eum.
                                <br/><br/><Link to="/service" className="readmore-link" >Read More..</Link></p>
                            </div>
                        </div>
                        <div className="svg-div" id="mobile-development" ></div>
                    </div>
                    {/* ----------------------------- */}
                    <div className="services-section">
                        <div className="svg-div" id="digital-marketing" ></div>
                        <div className="desc-div">
                        <h2 className="title-desc">Digital Marketing</h2>
                        <div className="line-segment"></div>
                        <div className="description-div">
                                <p className="descriptionall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio dicta libero mollitia dolorem, delectus veniam necessitatibus. Quidem ipsa odit tempore ab ea, ipsam minus! Libero officia id placeat dolores!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt adipisci quaerat culpa iure amet libero, distinctio, quo reprehenderit quia totam mollitia nihil sint minus nulla quidem nisi molestias eum.
                                <br/><br/><Link to="/service" className="readmore-link" >Read More..</Link></p>
                            </div>
                        </div>
                    </div>
                    {/* ----------- */}
                    <div className="services-section">
                        <div className="desc-div">
                        <h2 className="title-desc">Network Design</h2>
                        <div className="line-segment"></div>
                        <div className="description-div">
                                <p className="descriptionall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio dicta libero mollitia dolorem, delectus veniam necessitatibus. Quidem ipsa odit tempore ab ea, ipsam minus! Libero officia id placeat dolores!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt adipisci quaerat culpa iure amet libero, distinctio, quo reprehenderit quia totam mollitia nihil sint minus nulla quidem nisi molestias eum.
                                <br/><br/><Link to="/service" className="readmore-link" >Read More..</Link></p>
                            </div>
                        </div>
                        <div className="svg-div" id="network-design" ></div>
                    </div>
                    {/* ----------------------------- */}
                </div>
            </div>
        </div>
    );
}