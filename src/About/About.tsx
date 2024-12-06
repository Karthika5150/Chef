import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
    return (
        <>
            <section className="section-home-1">
                <Container>
                    <h2 className="head-txt">About</h2>

                    <div>
                        <div className="row pt-3 row-gap">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="about-sticky">
                                    <div className="about-img">
                                        <img src="/assets/bg-2.png" className="img-fluid" alt="img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div>
                                    <h2 className="about-h">Welcome to Chef</h2>

                                    <p className="about-p">At Chef, we believe that cooking is more than just
                                        making meals—it's a journey of flavors, creativity, and connection.
                                        Whether you’re a seasoned chef or just starting your culinary adventure,
                                        we’re here to inspire, educate, and bring a taste of joy to your kitchen.</p>

                                    <h2 className="about-h">Our Story</h2>

                                    <p className="about-p"> we believe that food is more than
                                        just sustenance—it's a way to connect with others, share stories,and explore new cultures.
                                        Founded by [Your Name], a passionate  professional chef with a love for
                                        [specific cuisine or cooking style], this blog is a collection of my favorite recipes,
                                        kitchen adventures, and everything in between. From hearty family meals to light,
                                        healthy snacks, I’m excited to share all the recipes that make me smile,
                                        and I hope they’ll make your kitchen smell just as amazing!</p>

                                    <h2 className="about-h">What We Offer</h2>

                                    <p className="about-p"><span>Simple and Delicious Recipes:</span> Whether you're cooking for one or feeding a
                                        crowd, we provide step-by-step recipes with clear instructions and tips to make your cooking
                                        experience stress-free.</p>

                                    <p className="about-p"><span>Healthy Eating Tips:</span>
                                        Explore nutritious, balanced meals that nourish both the body and soul.</p>


                                    <p className="about-p"><span>Meal Prep Ideas:</span>Quick and easy solutions to help you plan
                                        your week and save time in the kitchen..</p>


                                    <p className="about-p"><span>Inspiration for Every Occasion:</span>From weeknight dinners to festive
                                        feasts, we have something for every occasion.</p>

                                    <h2 className="about-h" >Join Us in the Kitchen</h2>

                                    <p className="about-p ">We’re so glad you’re here! Feel free to browse through our collection of recipes,
                                        leave comments, share your thoughts, and join our community of food lovers.
                                        We’d love to see what you’re cooking up—tag us on social media using #Chef Admin.</p>

                                    <p className="about-p">Happy Cooking!</p>

                                    <p className="about-p">Founder of Chef Admin!!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section >
        </>
    );
};

export default About;
