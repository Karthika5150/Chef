import React, { useEffect, useState, useCallback, useRef, } from "react";
import { useTransition, animated } from '@react-spring/web';
import { Carousel } from 'antd';
import Category from "./Category";
import Bgcontent from "./BgContent";
import Steps from "./Steps";
import Testimonial from "./Reviews";
import LatestReceipes from "./LatestReceipes";

const Home = () => {
    // text
    const ref = useRef<ReturnType<typeof setTimeout>[]>([])
    const [items, set] = useState<string[]>([])

    const transitions = useTransition(items, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: '#404040',
        },
        enter: [
            { opacity: 1, height: 50, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#404040' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#404040' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#000' },
    })

    const reset = useCallback(() => {
        ref.current.forEach(clearTimeout)
        ref.current = []
        set([])

        ref.current.push(setTimeout(() => set(['Delicious', 'Recipes', 'for You']),
            0))
        ref.current.push(setTimeout(() => set(['Explore ', 'Tips']), 1000))
        ref.current.push(setTimeout(() => set(['Quick &', 'the Best Cooking', 'Tips for You']), 2000))
    }, [])

    useEffect(() => {
        reset()
        return () => ref.current.forEach(clearTimeout)
    }, [])

    // slide-img



    // bowls
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFixed(true); // Fix the position after animation
        }, 2000); // Match animation duration

        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, []);


    return (
        <>
            <section className="section-home">
                <div className="slide-img-bg">
                    <div className="slide-contain">
                        <div className={`slide-1 ${isFixed ? "fixed" : ""}`}>
                            <div className={`rotating-text ${isFixed ? "fixed" : ""}`}>
                                <img
                                    src="/assets/slide-1.png"
                                    className="img-fluid"
                                    alt="Slide 1"
                                />
                            </div>
                        </div>
                        <div className='center-txt-div'>
                            <div className="main">
                                {transitions(({ innerHeight, ...rest }, item) => (
                                    <animated.div className="transitionsItem" style={rest} onClick={reset}>
                                        <animated.div className="overflowHidden" style={{ height: innerHeight }}>
                                            {item}
                                        </animated.div>
                                    </animated.div>
                                ))}
                            </div>

                        </div>
                        <div className={`slide-2 ${isFixed ? "fixed-1" : ""}`}>
                            <div className={`rotating-text-1 ${isFixed ? "fixed-1" : ""}`}>
                                <img
                                    src="/assets/slide-2.png"
                                    className="img-fluid"
                                    alt="Slide 2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Category />
            <Bgcontent />
            <Steps />
            <LatestReceipes/>
            <Testimonial/>
        </>
    );
};

export default Home;
