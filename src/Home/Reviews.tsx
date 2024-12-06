import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    feedback: "We’d love to hear how this recipe turned out for you!",
  },
  {
    id: 2,
    name: "Michael Brown",
    feedback: "Provide discounts or feature user-submitted recipes as a thank-you for feedback!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    feedback: "Highlight reviews and photos on your website to motivate others to contribute!",
  },
];

const Testimonial = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Autoplay: Change the slide every 5 seconds


  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2500);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleSlideChange = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section>
      <Container>
        <div>
          <h2 className="head-txt">Why They Choose Us</h2>
          <div className="testimonial-container">
            <div className="testimonial-slides">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-slide ${index === selectedIndex ? "active" : ""
                    }`}
                >
                  <p className="testimonial-feedback">{testimonial.feedback}</p>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                </div>
              ))}
            </div>

            {/* Radio buttons */}
            <div className="testimonial-controls">
              {testimonials.map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="testimonial-slider"
                  checked={selectedIndex === index}
                  onChange={() => handleSlideChange(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
