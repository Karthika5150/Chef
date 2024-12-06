import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const LatestReceipes = () => {
    const items = [
        { image: "/assets/latest-1.png", description: "Chicken Biriyani" },
        { image: "/assets/latest-2.png", description: "Dessert" },
        { image: "/assets/latest-3.png", description: "Icecream" },
        { image: "/assets/latest-4.png", description: "Paneer Curry" },
        { image: "/assets/latest-5.png", description: "Pizza" },
        { image: "/assets/latest-6.png", description: "Podi Idly" },
        { image: "/assets/latest-7.png", description: "Chicken Curry" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [items.length]);

    // Get the indices of the items to show
    const getIndices = (index: number) => {
        const prevIndex = (index - 1 + items.length) % items.length;
        const nextIndex = (index + 1) % items.length;
        const secondNextIndex = (nextIndex + 1) % items.length;
        return [prevIndex, index, nextIndex, secondNextIndex];
    };

    const [prevIndex, activeIndex, nextIndex, secondNextIndex] = getIndices(currentIndex);

    return (
        <section className='section-home-1'>
            <Container>
                <div>
                    <h2 className="head-txt">Latest Recipes</h2>
                    <div className="row row-gap">
                        {/* First Column */}
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div className="product-ani">
                                <div className="product-h">
                                    <img src={items[prevIndex].image} className="img-fluid" alt="Previous" />
                                    <p className="ml-div">{items[prevIndex].description}</p>
                                </div>
                            </div>
                        </div>
                        {/* Second Column */}
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div className="product-ani">
                                <div className="product-h">
                                    <img src={items[activeIndex].image} className="img-fluid" alt="Active" />
                                    <p className="ml-div">{items[activeIndex].description}</p>
                                </div>
                            </div>
                        </div>
                        {/* Third Column */}
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div className="product-ani">
                                <div className="product-h">
                                    <img src={items[nextIndex].image} className="img-fluid" alt="Next" />
                                    <p className="ml-div">{items[nextIndex].description}</p>
                                </div>
                            </div>
                        </div>
                        {/* Fourth Column */}
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div className="product-ani">
                                <div className="product-h">
                                    <img src={items[secondNextIndex].image} className="img-fluid" alt="Second Next" />
                                    <p className="ml-div">{items[secondNextIndex].description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='latest-btn'>
                        <Button className='btn-4' href='/professional'>Explore Our Receipes</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LatestReceipes;
