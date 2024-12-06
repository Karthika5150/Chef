// import React, { useState } from 'react';
// import { Button, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router';

// const Category = () => {
//     const [startIndex, setStartIndex] = useState(0);

//     const CategoryType = [
//         { ImgSrc: '/assets/slide-2.png', FoodName: 'Non-Veg' },
//         { ImgSrc: '/assets/slide-1.png', FoodName: 'Veg' },
//         { ImgSrc: '/assets/vegan.png', FoodName: 'Vegan' },
//         { ImgSrc: '/assets/tiffin.png', FoodName: 'Tiffin' },
//         { ImgSrc: '/assets/vada.png', FoodName: 'Vada' },
//         { ImgSrc: '/assets/coffe.png', FoodName: 'Coffee' },
//         { ImgSrc: '/assets/tea.png', FoodName: 'Tea' },
//         { ImgSrc: '/assets/cake.png', FoodName: 'Cake' },
//         { ImgSrc: '/assets/dosa.png', FoodName: 'Dosa' },
//         { ImgSrc: '/assets/idly.png', FoodName: 'Idly' },
//         { ImgSrc: '/assets/biryani.png', FoodName: 'Biryani' },
//         { ImgSrc: '/assets/pongal.png', FoodName: 'Pongal' },
//         { ImgSrc: '/assets/poori.png', FoodName: 'Poori' },
//         { ImgSrc: '/assets/burgar.png', FoodName: 'Burgar' },
//         { ImgSrc: '/assets/egg.png', FoodName: 'Egg' },
//         { ImgSrc: '/assets/pasta.png', FoodName: 'Pasta' },
//         { ImgSrc: '/assets/pizza.png', FoodName: 'Pizza' },
//         { ImgSrc: '/assets/chat.png', FoodName: 'Chat' },
//         { ImgSrc: '/assets/friedrice.png', FoodName: 'FriedRice' },
//         { ImgSrc: '/assets/noodles.png', FoodName: 'Noodles' },
//         { ImgSrc: '/assets/parattha.png', FoodName: 'Paratha' },
//         { ImgSrc: '/assets/soup.png', FoodName: 'Soup' },
//     ];

//     let maxVisibleItems = 6;


//     const navigate = useNavigate();

//     const handleNext = () => {
//         if (startIndex + maxVisibleItems < CategoryType.length) {
//             setStartIndex((prevIndex) => prevIndex + 1);
//         }
//     };

//     const handlePrevious = () => {
//         if (startIndex > 0) {
//             setStartIndex((prevIndex) => prevIndex - 1);
//         }
//     };

//     // const handleCategoryClick = (category:any) => {
//     //     navigate(`/food-category?filter=${category}`);
//     // };

//     const handleCategoryClick = (category: string) => {
//         if (category === "Non-Veg") {
//             navigate(`/food-category?filter=Non-Veg`);
//         }
//         else {
//             navigate(`/food-category?filter=${category}`);
//         }
//     };


//     return (
//         <section className="section-home-1">
//             <Container>
//                 <div>
//                     <h1 className="head-txt">What's on Your Mind?</h1>
//                     <div className='category-div'>
//                         <div className='less-div'>
//                             <Button onClick={handlePrevious} disabled={startIndex === 0} className='btn-1'>
//                                 <i className="fi fi-rr-caret-left less"></i>
//                             </Button>
//                         </div>

//                         <div className="catogory-type">
//                             {CategoryType.slice(startIndex, startIndex + maxVisibleItems).map((image, index) => (
//                                 <div
//                                     className="food-small-circle"
//                                     key={index}
//                                     onClick={() => handleCategoryClick(image.FoodName)} // Handle click
//                                 >
//                                     <div className="food-category">
//                                         <img
//                                             src={image.ImgSrc}
//                                             className="img-fluid"
//                                             alt={`Slide ${startIndex + index + 1}`}
//                                         />
//                                     </div>
//                                     <p className="para-txt">{image.FoodName}</p>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className='greater-div'>
//                             <Button
//                                 onClick={handleNext}
//                                 disabled={startIndex + maxVisibleItems >= CategoryType.length}
//                                 className='btn-1'
//                             >
//                                 <i className="fi fi-rr-caret-right great"></i>
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </section>

//     );
// };

// export default Category;


import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Category = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [maxVisibleItems, setMaxVisibleItems] = useState(6); // Default for laptop view

  const CategoryType = [
    { ImgSrc: '/assets/slide-2.png', FoodName: 'Non-Veg' },
    { ImgSrc: '/assets/slide-1.png', FoodName: 'Veg' },
    { ImgSrc: '/assets/vegan.png', FoodName: 'Vegan' },
    { ImgSrc: '/assets/tiffin.png', FoodName: 'Tiffin' },
    { ImgSrc: '/assets/vada.png', FoodName: 'Vada' },
    { ImgSrc: '/assets/coffe.png', FoodName: 'Coffee' },
    { ImgSrc: '/assets/tea.png', FoodName: 'Tea' },
    { ImgSrc: '/assets/cake.png', FoodName: 'Cake' },
    { ImgSrc: '/assets/dosa.png', FoodName: 'Dosa' },
    { ImgSrc: '/assets/idly.png', FoodName: 'Idly' },
    { ImgSrc: '/assets/biryani.png', FoodName: 'Biryani' },
    { ImgSrc: '/assets/pongal.png', FoodName: 'Pongal' },
    { ImgSrc: '/assets/poori.png', FoodName: 'Poori' },
    { ImgSrc: '/assets/burgar.png', FoodName: 'Burgar' },
    { ImgSrc: '/assets/egg.png', FoodName: 'Egg' },
    { ImgSrc: '/assets/pasta.png', FoodName: 'Pasta' },
    { ImgSrc: '/assets/pizza.png', FoodName: 'Pizza' },
    { ImgSrc: '/assets/chat.png', FoodName: 'Chat' },
    { ImgSrc: '/assets/friedrice.png', FoodName: 'FriedRice' },
    { ImgSrc: '/assets/noodles.png', FoodName: 'Noodles' },
    { ImgSrc: '/assets/parattha.png', FoodName: 'Paratha' },
    { ImgSrc: '/assets/soup.png', FoodName: 'Soup' },
  ];

  const navigate = useNavigate();

  // Adjust `maxVisibleItems` based on screen size
  const updateVisibleItems = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setMaxVisibleItems(6); // Laptop view
    } else if (width >= 768) {
      setMaxVisibleItems(4); // Tablet view
    } else {
      setMaxVisibleItems(2); // Mobile view
    }
  };

  useEffect(() => {
    updateVisibleItems(); // Set initial value
    window.addEventListener('resize', updateVisibleItems); // Update on resize
    return () => {
      window.removeEventListener('resize', updateVisibleItems); // Cleanup listener
    };
  }, []);

  const handleNext = () => {
    if (startIndex + maxVisibleItems < CategoryType.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleCategoryClick = (category: string) => {
    if (category === 'Non-Veg') {
      navigate(`/food-category?filter=Non-Veg`);
    } else {
      navigate(`/food-category?filter=${category}`);
    }
  };

  return (
    <section className="section-home-1">
      <Container>
        <div>
          <h1 className="head-txt">What's on Your Mind?</h1>
          <div className="category-div">
            <div className="less-div">
              <Button
                onClick={handlePrevious}
                disabled={startIndex === 0}
                className="btn-1"
              >
                <i className="fi fi-rr-caret-left less"></i>
              </Button>
            </div>

            <div className="catogory-type">
              {CategoryType.slice(startIndex, startIndex + maxVisibleItems).map((image, index) => (
                <div
                  className="food-small-circle"
                  key={index}
                  onClick={() => handleCategoryClick(image.FoodName)} // Handle click
                >
                  <div className="food-category">
                    <img
                      src={image.ImgSrc}
                      className="img-fluid"
                      alt={`Slide ${startIndex + index + 1}`}
                    />
                  </div>
                  <p className="para-txt">{image.FoodName}</p>
                </div>
              ))}
            </div>

            <div className="greater-div">
              <Button
                onClick={handleNext}
                disabled={startIndex + maxVisibleItems >= CategoryType.length}
                className="btn-1"
              >
                <i className="fi fi-rr-caret-right great"></i>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Category;



