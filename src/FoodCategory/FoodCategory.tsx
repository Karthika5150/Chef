import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useLocation } from "react-router";
import { Flex, Rate } from 'antd';
import { useNavigate } from 'react-router';

const FoodCategory = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [value, setValue] = useState(5);
    const navigate = useNavigate();
    const [maxVisibleItems, setMaxVisibleItems] = useState(6);

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
        if (startIndex + maxVisibleItems < filteredItems.length) {
            setStartIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 1);
        }
    };

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get("filter");
    const dietFilter = queryParams.get("diet");


    const foodItems = [
        { ImgSrc: '/assets/tiffin.png', name: 'South Indian Tiffin', category: 'Tiffin', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/northtiffin.png', name: 'North Indian Tiffin', category: 'Tiffin', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/sambar-vadai.png', name: 'Sambar Vada', category: 'Vada', diet: "Veg", Videosrc: "/assets/sambar-vada.mp4" },
        { ImgSrc: '/assets/paruppu-vadai.png', name: 'Parppu Vada', category: 'Vada', diet: "Veg", Videosrc: "/assets/paruppu-vada.mp4" },
        { ImgSrc: '/assets/curd-vadai.png', name: 'Curd Vada', category: 'Vada', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/dal-vadai.png', name: 'Methu Vada', category: 'Vada', diet: "Veg", Videosrc: "/assets/ulndhu-vada.mp4" },
        { ImgSrc: '/assets/keera-vadai.png', name: 'Keera Vada', category: 'Vada', diet: "Veg", Videosrc: "/assets/keera-vada.mp4" },
        { ImgSrc: '/assets/coffe.png', name: 'Americano', category: 'Coffee', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/coffe.png', name: 'Black Coffee', category: 'Coffee', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/coffe.png', name: 'Espresso Coffee', category: 'Coffee', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/coffe.png', name: 'Cappauccino', category: 'Coffee', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/coffe.png', name: 'Latte', category: 'Coffee', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/tea.png', name: 'Green Tea', category: 'Tea', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/tea.png', name: 'Herbal Tea', category: 'Tea', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/tea.png', name: 'White Tea', category: 'Tea', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/tea.png', name: 'Lemon Tea', category: 'Tea', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/tea.png', name: 'Hybiscus Tea', category: 'Tea', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/cake.png', name: 'Red Velvet Cake', category: 'Cake', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/cake.png', name: 'Black Forest Cake', category: 'Cake', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/cake.png', name: 'Chocolate Cake', category: 'Cake', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/cake.png', name: 'Vanila Cake', category: 'Cake', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/cake.png', name: 'Chesse Cake', category: 'Cake', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/dosa.png', name: 'Masala Dosa', category: 'Dosa', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/dosa.png', name: 'Onion Dosa', category: 'Dosa', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/dosa.png', name: 'Kari Dosa', category: 'Dosa', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/dosa.png', name: 'Rava Dosa', category: 'Dosa', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/dosa.png', name: 'Ghee Dosa', category: 'Dosa', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/idly.png', name: 'Podi Idly', category: 'Idly', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/idly.png', name: 'Rava Idly', category: 'Idly', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/idly.png', name: 'Vegetable Idly', category: 'Idly', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/idly.png', name: 'Oats Idly', category: 'Idly', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/idly.png', name: 'Millet Idly', category: 'Idly', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/pongal.png', name: 'Ven Pongal', category: 'Pongal', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/pongal.png', name: 'Ghee Pongal', category: 'Pongal', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/poori.png', name: 'Masala Poori', category: 'Poori', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/poori.png', name: 'Solla Poori', category: 'Poori', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/burgar.png', name: 'Burgar', category: 'Burgar', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/egg.png', name: 'Egg', category: 'Egg', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/pasta.png', name: 'Pasta', category: 'Pasta', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/pizza.png', name: 'Pizza', category: 'Pizza', diet: "Non-Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/chat.png', name: 'Chat', category: 'Chat', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/friedrice.png', name: 'FriedRice', category: 'FriedRice', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/noodles.png', name: 'Noodles', category: 'Noodles', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/parattha.png', name: 'Paratha', category: 'Paratha', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/soup.png', name: 'Soup', category: 'Soup', diet: "Veg", Videosrc: "/assets/curd-vada.mp4" },
        { ImgSrc: '/assets/vegan.png', name: 'Vegan Breakfast', category: 'Vegan', diet: "Vegan", Videosrc: "/assets/english-breakfast.mp4" },
        { ImgSrc: '/assets/vegan.png', name: 'Vegan Veg Wrap', category: 'Vegan', diet: "Vegan", Videosrc: "/assets/veg-wrap.mp4" },
        { ImgSrc: '/assets/vegan.png', name: 'Vegan Vegetable Crossrole', category: 'Vegan', diet: "Vegan", Videosrc: "/assets/vegetable-crossrole.mp4" },
        { ImgSrc: '/assets/vegan.png', name: 'Vegan Meals', category: 'Vegan', diet: "Vegan", Videosrc: "/assets/vegan-meals.mp4" },
        { ImgSrc: '/assets/vegan.png', name: 'Vegan 6-days', category: 'Vegan', diet: "Vegan", Videosrc: "/assets/Vegan-6day's.mp4" },
    ];

    const designs = {
        NonVeg: {
            Chicken: [
                { id: 1, name: "Chicken Biryani", imgSrc: "/assets/biryani.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 2, name: "Chicken Soup", imgSrc: "/assets/chicken-soup.png", Video: '/assets/chicken-soup.mp4' },
                { id: 3, name: "Chicken 65", imgSrc: "/assets/chicken-65.png", Video: '/assets/chicken-65.mp4' },
                { id: 4, name: "Chicken Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/assets/chicken-curry.mp4' },
                { id: 5, name: "Chicken FriedRice", imgSrc: "/assets/chickenrice.png", Video: '/assets/chicken-friedrice.mp4' },
            ],
            Pork: [
                { id: 1, name: "Pork Rice", imgSrc: "/assets/biryani.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 2, name: "Pork Soup", imgSrc: "/assets/chicken-soup.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 3, name: "Pork 65", imgSrc: "/assets/chicken-65.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 4, name: "Pork Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 5, name: "Pork BBQ", imgSrc: "/assets/chickenrice.png", Video: '/assets/chicken-biriyani.mp4' },
            ],
            Mutton: [
                { id: 1, name: "Mutton Biryani", imgSrc: "/assets/biryani.png", Video: '/assets/mutton-biryani.mp4' },
                { id: 2, name: "Mutton Soup", imgSrc: "/assets/chicken-soup.png", Video: '/assets/mutton-soup.mp4' },
                { id: 3, name: "Mutton 65", imgSrc: "/assets/chicken-65.png", Video: '/assets/mutton-65.mp4' },
                { id: 4, name: "Mutton Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/assets/mutton-curry.mp4' },
                { id: 5, name: "Mutton FriedRice", imgSrc: "/assets/chickenrice.png", Video: '/assets/mutton-friedrice.mp4' },
            ],
            Beef: [
                { id: 1, name: "Beef Biryani", imgSrc: "/assets/biryani.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 2, name: "Beef Soup", imgSrc: "/assets/chicken-soup.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 3, name: "Beef 65", imgSrc: "/assets/chicken-65.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 4, name: "Beef Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 5, name: "Beef FriedRice", imgSrc: "/assets/chickenrice.png", Video: '/assets/chicken-biriyani.mp4' },
            ],
            Fish: [
                { id: 1, name: "Fish Biryani", imgSrc: "/assets/biryani.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 2, name: "Fish Fry", imgSrc: "/assets/chicken-soup.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 3, name: "Fish 65", imgSrc: "/assets/chicken-65.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 4, name: "Fish Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/assets/chicken-biriyani.mp4' },
                { id: 5, name: "Fish Egg", imgSrc: "/assets/chickenrice.png", Video: '/assets/chicken-biriyani.mp4' },
            ],
        },
        Veg: [
            { id: 9, name: "Paneer Butter Masala", imgSrc: "/assets/panner-butter-masal.png", Video: '/assets/panner-masala.mp4' },
            { id: 10, name: "Paneer Tikka", imgSrc: "/assets/panner-tikka.png", Video: '/assets/panner-tikka.mp4' },
            { id: 11, name: "Mushroom Curry", imgSrc: "/assets/mushroom-curry.png", Video: '/assets/mushroom-curry.mp4' },
            { id: 12, name: "Dal Tadka", imgSrc: "/assets/dal-tadka.png", Video: '/assets/dal-tadka.mp4' },
            { id: 13, name: "Vegetable Biryani", imgSrc: "/assets/veg-biryani.png", Video: '/assets/veg-biryani.mp4' },
            { id: 14, name: "Veg Pulao", imgSrc: "/assets/veg-pulao.png", Video: '/assets/veg-pulavo.mp4' },
        ],
    };

    let filteredItems = filter
        ? foodItems.filter((item) => item.category === filter)
        : foodItems;

    console.log(filteredItems, "hlo");

    type NonVegSubcategory = "Chicken" | "Pork" | "Mutton" | "Beef" | "Fish";

    const [selectedSubcategory, setSelectedSubcategory] = useState<NonVegSubcategory | null>(null);

    const filteredDesigns =
        filter === "Non-Veg" && selectedSubcategory
            ? designs.NonVeg[selectedSubcategory]
            : filter === "Veg"
                ? designs.Veg
                : [];
    console.log(filteredDesigns);


    const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

    const handleClick = (recipeName: string) => {
        setSelectedRecipe(recipeName);
        console.log(`You selected: ${recipeName}`);
    };


    const [selectedFood, setSelectedFood] = useState<string | null>(null); // Store selected food item

    const handleFoodClick = (foodName: string) => {
        setSelectedFood(foodName); // Update selected food item
    };

    const filteredVideos = selectedFood
        ? foodItems.filter((food) => food.name === selectedFood)
        : [];

    const [video, SetVideok] = useState<{
        ImgSrc: string;
        name: string;
        id: string;
        Video: string;
    } | null>(null);

    useEffect(() => {
        const savedDesign = localStorage.getItem('selectedDesign');
        if (savedDesign) {
            SetVideok(JSON.parse(savedDesign));
        }
    }, []);

    const handleClickFood = (designName: string) => {
        const selected = designs.Veg.find((design) => design.name === designName) || null;
        if (selected) {
            const formattedSelected = {
                ImgSrc: selected.imgSrc,
                name: selected.name,
                id: selected.id.toString(),
                Video: selected.Video
            };
            SetVideok(formattedSelected);
            localStorage.setItem('selectedDesign', JSON.stringify(formattedSelected));
        } else {
            SetVideok(null);
            localStorage.removeItem('selectedDesign');
        }
    };

    // Array of all design names (for dynamic button generation)
    const designNames = designs.Veg.map((design) => design.name);



    return (
        <>
            <section className="section-home-1">
                <Container>
                    <div>
                        <h1 className="head-txt">Food Categories: {filter || "All"}</h1>


                        {/* Handle display for Non-Veg (with subcategories like Chicken, Pork, etc.) */}
                        <section>
                            <Container>
                                {filter === "Non-Veg" && (
                                    <div>
                                        <p className="para-txt pt-3">Select Subcategory</p>
                                        <div className="non-veg-design">
                                            {Object.keys(designs.NonVeg).map((subcategory) => (
                                                <Button
                                                    key={subcategory}
                                                    className="btn-2"
                                                    onClick={() => setSelectedSubcategory(subcategory as NonVegSubcategory)} // Casting to NonVegSubcategory
                                                >
                                                    {subcategory}
                                                </Button>
                                            ))}
                                        </div>

                                        {/* image-divs */}

                                        <div className="non-veg-div">
                                            {filteredDesigns.length > 0 ? (
                                                filteredDesigns.map((design) => (
                                                    <div key={design.id} className="design-item">
                                                        <div className="design-img">
                                                            <img src={design.imgSrc} className="img-fluid" alt={design.name} />
                                                        </div>
                                                        <p className="design-non-name" onClick={() => handleClick(design.name)}>{design.name}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="para-txt">Please Select Your SubCategory</p>
                                            )
                                            }
                                        </div>

                                        {/* video's div */}

                                        {selectedRecipe && (
                                            <div className="pt-3">
                                                <h2 className="head-txt">Flavors Unveiled: Watch & Learn</h2>
                                                <div className="video-ingredients-contain">
                                                    <div className="video-container">

                                                        {filteredDesigns
                                                            .filter((design) => design.name === selectedRecipe)
                                                            .map((filterreceipe) => (
                                                                <div className="" key={filterreceipe.id}>
                                                                    <div className="video-design">
                                                                        <div>
                                                                            <video controls autoPlay className="videos">
                                                                                <source src={filterreceipe.Video} type="video/mp4" />
                                                                            </video>

                                                                            <div className="rate-div">
                                                                                <div>
                                                                                    <i className="fi fi-rr-circle-heart heart"></i>
                                                                                </div>
                                                                                <div>
                                                                                    <Flex gap="middle" vertical>
                                                                                        <Rate onChange={setValue} className="rate" value={value} />
                                                                                    </Flex>
                                                                                </div>
                                                                            </div>

                                                                            <p className="design-non-name text-center">{selectedRecipe}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>

                                                    <div className="ingridients-container">
                                                        <div>
                                                            <h6 className="food-ingrident">Step-by-Step {selectedRecipe} Recipe</h6>

                                                            <p className="para-txt-1">Here’s a simple and flavorful recipe to make {selectedRecipe} at home:</p>

                                                            <div className="ingridient-div">
                                                                <p className="para-txt">Ingredients</p>

                                                                <p className="para-txt-1">For the Rice:</p>

                                                                <ul>
                                                                    <li>2 cups basmati rice</li>
                                                                    <li>4 cups water</li>
                                                                    <li>4-5 green cardamoms</li>
                                                                    <li>4-5 cloves</li>
                                                                    <li>2-inch cinnamon stick</li>
                                                                    <li>2 bay leaves</li>
                                                                    <li>1 tsp salt</li>
                                                                </ul>
                                                            </div>

                                                            <div className="ingridient-div">
                                                                <p className="para-txt-1">For the Chicken Marinade:</p>
                                                                <ul>
                                                                    <li>500g chicken (bone-in or boneless, as per preference)</li>
                                                                    <li>½ cup yogurt</li>
                                                                    <li>1 tbsp ginger-garlic paste</li>
                                                                    <li>1 tsp turmeric powder</li>
                                                                    <li>1 tbsp red chili powder</li>
                                                                    <li>1 tsp garam masala</li>
                                                                    <li>1 tsp coriander powder</li>
                                                                    <li>Salt to taste</li>
                                                                </ul>
                                                            </div>

                                                            <div className="ingridient-div">
                                                                <p className="para-txt-1">For Cooking Chicken:</p>
                                                                <ul>
                                                                    <li>2 large onions (thinly sliced)</li>
                                                                    <li>2 medium tomatoes (chopped)</li>
                                                                    <li>¼ cup cooking oil or ghee</li>
                                                                    <li>2-3 green chilies (slit)</li>
                                                                    <li>A handful of mint leaves (chopped)</li>
                                                                    <li>A handful of coriander leaves (chopped)</li>
                                                                    <li>½ cup milk mixed with a pinch of saffron or ¼ tsp food color</li>
                                                                </ul>
                                                            </div>


                                                            <div className="ingridient-div">
                                                                <p className="para-txt-1">Step 1: Prepare the Rice</p>
                                                                <ul>
                                                                    <li>Wash the basmati rice under cold water until the water runs clear. Soak it for 30 minutes, then drain.</li>
                                                                    <li>Boil 4 cups of water with cardamoms, cloves, cinnamon, bay leaves, and salt.</li>
                                                                    <li>Add the soaked rice and cook until it is 70-80% cooked (the grains should still have a bite).</li>
                                                                    <li>Drain the water and set the rice aside.</li>
                                                                </ul>
                                                            </div>

                                                            <div className="ingridient-div">
                                                                <p className="para-txt-1">Step 2: Marinate the Chicken</p>
                                                                <ul>
                                                                    <li>In a large bowl, mix yogurt, ginger-garlic paste, turmeric powder, red chili powder, garam masala, coriander powder, and salt.</li>

                                                                    <li>Add the chicken pieces to the marinade and coat well. Cover and let it marinate for at least 1 hour (or overnight for better flavor).</li>
                                                                </ul>
                                                            </div>


                                                            <div className="ingridient-div">
                                                                <p className="para-txt-1">Step 3: Cook the Chicken</p>
                                                                <ul>
                                                                    <li>Heat oil or ghee in a deep pan or pot.</li>
                                                                    <li>Fry the sliced onions until golden brown and crispy. Remove half of the fried onions and set them aside for garnishing.</li>
                                                                    <li>Add the marinated chicken to the pan and cook on medium heat until the chicken is almost done.</li>
                                                                    <li>Add the chopped tomatoes, green chilies, mint leaves, and coriander leaves. Cook until the tomatoes are soft and the oil separates from the masala.</li>
                                                                </ul>
                                                            </div>


                                                            <div className="ingridient-div">
                                                                <p className="para-txt-1">Step 4: Layer the Biryani</p>
                                                                <ul>
                                                                    <li>In the same pot, spread the cooked chicken evenly at the bottom.</li>
                                                                    <li>Add a layer of half-cooked rice on top of the chicken.</li>
                                                                    <li>Drizzle saffron milk or food-colored milk over the rice for a rich color. Sprinkle the reserved fried onions, mint, and coriander leaves on top.</li>
                                                                    <li>Repeat the layering if needed, ending with a layer of rice and garnishes.
                                                                    </li>
                                                                </ul>
                                                            </div>


                                                            <div className="ingridient-div">
                                                                <p className="para-txt-1">Step 5: Dum Cooking (Steaming the Biryani)</p>
                                                                <ul>
                                                                    <li>Seal the pot with a tight-fitting lid or cover it with aluminum foil to trap the steam.</li>
                                                                    <li>Cook on very low heat for 25-30 minutes. Alternatively, place the pot on a tawa (flat pan) to prevent direct heat.</li>

                                                                </ul>
                                                            </div>


                                                            <div className="ingridient-div">
                                                                <p className="para-txt-1">Step 6: Serve</p>
                                                                <ul>
                                                                    <li>Gently mix the layers before serving to combine the rice and chicken.</li>
                                                                    <li>Serve hot with raita, salad, or a boiled egg for an authentic experience.</li>
                                                                </ul>

                                                                <p className="para-txt-1">Enjoy your homemade {selectedRecipe}! 🍗🍚</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )}

                                    </div>
                                )}
                            </Container>
                        </section>



                        {filter !== "Non-Veg" && (
                            <div className="design-container">
                                {filteredDesigns.length > 0 ? (
                                    <>
                                        {/* Carousel Navigation */}
                                        <div className="category-div">
                                            <div className="less-div">
                                                <Button onClick={handlePrevious} disabled={startIndex === 0} className="btn-1">
                                                    <i className="fi fi-rr-caret-left less"></i>
                                                </Button>
                                            </div>

                                            <div className="catogory-type">
                                                {filteredDesigns
                                                    .slice(startIndex, startIndex + maxVisibleItems)
                                                    .map((design, index) => (
                                                        <div
                                                            className="food-small-circle"
                                                            key={index}
                                                            onClick={() => handleClickFood(design.name)}
                                                        >
                                                            <div className="food-category">
                                                                <img
                                                                    src={design.imgSrc}
                                                                    className="img-fluid"
                                                                    alt={design.name}
                                                                />
                                                            </div>
                                                            <p className="para-txt">{design.name}</p>
                                                        </div>
                                                    ))}
                                            </div>

                                            <div className="greater-div">
                                                <Button
                                                    onClick={handleNext}
                                                    disabled={startIndex + maxVisibleItems >= filteredDesigns.length}
                                                    className="btn-1"
                                                >
                                                    <i className="fi fi-rr-caret-right great"></i>
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Video and Recipe Details */}
                                        <div className="food-divs">
                                            <h2 className="head-txt">Flavors Unveiled: Watch & Learn</h2>
                                            {video ? (
                                                <div className="cate-div">
                                                    <div className="cate-div-flex">
                                                        <div className="video-design">
                                                            <video controls autoPlay className="videos">
                                                                <source src={video.Video} type="video/mp4" />
                                      
                                                            </video>
                                                            <div className="rate-div">
                                                                <i className="fi fi-rr-circle-heart heart"></i>
                                                                <Flex gap="middle" vertical>
                                                                    <Rate onChange={setValue} value={value} className="rate" />
                                                                </Flex>
                                                            </div>
                                                            <p className="design-non-name text-center">{video.name}</p>
                                                        </div>
                                                        <div className="ingridients-container">
                                                            <div>
                                                                <h6 className="food-ingrident">Step-by-Step  Recipe</h6>

                                                                <p className="para-txt-1">Here’s a simple and flavorful recipe to make  at home:</p>

                                                                <div className="ingridient-div">
                                                                    <p className="para-txt">Ingredients</p>

                                                                    <p className="para-txt-1">For the Rice:</p>

                                                                    <ul>
                                                                        <li>2 cups basmati rice</li>
                                                                        <li>4 cups water</li>
                                                                        <li>4-5 green cardamoms</li>
                                                                        <li>4-5 cloves</li>
                                                                        <li>2-inch cinnamon stick</li>
                                                                        <li>2 bay leaves</li>
                                                                        <li>1 tsp salt</li>
                                                                    </ul>
                                                                </div>

                                                                <div className="ingridient-div">
                                                                    <p className="para-txt-1">For the Chicken Marinade:</p>
                                                                    <ul>
                                                                        <li>500g chicken (bone-in or boneless, as per preference)</li>
                                                                        <li>½ cup yogurt</li>
                                                                        <li>1 tbsp ginger-garlic paste</li>
                                                                        <li>1 tsp turmeric powder</li>
                                                                        <li>1 tbsp red chili powder</li>
                                                                        <li>1 tsp garam masala</li>
                                                                        <li>1 tsp coriander powder</li>
                                                                        <li>Salt to taste</li>
                                                                    </ul>
                                                                </div>

                                                                <div className="ingridient-div">
                                                                    <p className="para-txt-1">For Cooking Chicken:</p>
                                                                    <ul>
                                                                        <li>2 large onions (thinly sliced)</li>
                                                                        <li>2 medium tomatoes (chopped)</li>
                                                                        <li>¼ cup cooking oil or ghee</li>
                                                                        <li>2-3 green chilies (slit)</li>
                                                                        <li>A handful of mint leaves (chopped)</li>
                                                                        <li>A handful of coriander leaves (chopped)</li>
                                                                        <li>½ cup milk mixed with a pinch of saffron or ¼ tsp food color</li>
                                                                    </ul>
                                                                </div>


                                                                <div className="ingridient-div">
                                                                    <p className="para-txt-1">Step 1: Prepare the Rice</p>
                                                                    <ul>
                                                                        <li>Wash the basmati rice under cold water until the water runs clear. Soak it for 30 minutes, then drain.</li>
                                                                        <li>Boil 4 cups of water with cardamoms, cloves, cinnamon, bay leaves, and salt.</li>
                                                                        <li>Add the soaked rice and cook until it is 70-80% cooked (the grains should still have a bite).</li>
                                                                        <li>Drain the water and set the rice aside.</li>
                                                                    </ul>
                                                                </div>

                                                                <div className="ingridient-div">
                                                                    <p className="para-txt-1">Step 2: Marinate the Chicken</p>
                                                                    <ul>
                                                                        <li>In a large bowl, mix yogurt, ginger-garlic paste, turmeric powder, red chili powder, garam masala, coriander powder, and salt.</li>

                                                                        <li>Add the chicken pieces to the marinade and coat well. Cover and let it marinate for at least 1 hour (or overnight for better flavor).</li>
                                                                    </ul>
                                                                </div>


                                                                <div className="ingridient-div">
                                                                    <p className="para-txt-1">Step 3: Cook the Chicken</p>
                                                                    <ul>
                                                                        <li>Heat oil or ghee in a deep pan or pot.</li>
                                                                        <li>Fry the sliced onions until golden brown and crispy. Remove half of the fried onions and set them aside for garnishing.</li>
                                                                        <li>Add the marinated chicken to the pan and cook on medium heat until the chicken is almost done.</li>
                                                                        <li>Add the chopped tomatoes, green chilies, mint leaves, and coriander leaves. Cook until the tomatoes are soft and the oil separates from the masala.</li>
                                                                    </ul>
                                                                </div>


                                                                <div className="ingridient-div">
                                                                    <p className="para-txt-1">Step 4: Layer the Biryani</p>
                                                                    <ul>
                                                                        <li>In the same pot, spread the cooked chicken evenly at the bottom.</li>
                                                                        <li>Add a layer of half-cooked rice on top of the chicken.</li>
                                                                        <li>Drizzle saffron milk or food-colored milk over the rice for a rich color. Sprinkle the reserved fried onions, mint, and coriander leaves on top.</li>
                                                                        <li>Repeat the layering if needed, ending with a layer of rice and garnishes.
                                                                        </li>
                                                                    </ul>
                                                                </div>


                                                                <div className="ingridient-div">
                                                                    <p className="para-txt-1">Step 5: Dum Cooking (Steaming the Biryani)</p>
                                                                    <ul>
                                                                        <li>Seal the pot with a tight-fitting lid or cover it with aluminum foil to trap the steam.</li>
                                                                        <li>Cook on very low heat for 25-30 minutes. Alternatively, place the pot on a tawa (flat pan) to prevent direct heat.</li>

                                                                    </ul>
                                                                </div>


                                                                <div className="ingridient-div">
                                                                    <p className="para-txt-1">Step 6: Serve</p>
                                                                    <ul>
                                                                        <li>Gently mix the layers before serving to combine the rice and chicken.</li>
                                                                        <li>Serve hot with raita, salad, or a boiled egg for an authentic experience.</li>
                                                                    </ul>

                                                                    <p className="para-txt-1">Enjoy your homemade !🍚</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            ) : (
                                                <p className="para-txt">Select a food item to watch the video.</p>
                                            )}
                                        </div>
                                    </>

                                ) : (
                                    <>
                                        <div className="category-div">
                                            <div className="less-div">
                                                <Button onClick={handlePrevious} disabled={startIndex === 0} className="btn-1">
                                                    <i className="fi fi-rr-caret-left less"></i>
                                                </Button>
                                            </div>

                                            <div className="catogory-type">
                                                {filteredItems.slice(startIndex, startIndex + maxVisibleItems).map((image, index) => (
                                                    <div
                                                        className="food-small-circle"
                                                        key={index}
                                                        onClick={() => handleFoodClick(image.name)}
                                                    >
                                                        <div className="food-category">
                                                            <img
                                                                src={image.ImgSrc}
                                                                className="img-fluid"
                                                                alt={`Slide ${startIndex + index + 1}`}
                                                            />
                                                        </div>
                                                        <p className="para-txt">{image.name}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="greater-div">
                                                <Button
                                                    onClick={handleNext}
                                                    disabled={startIndex + maxVisibleItems >= filteredItems.length}
                                                    className="btn-1"
                                                >
                                                    <i className="fi fi-rr-caret-right great"></i>
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="food-divs">
                                            <h2 className="head-txt">Flavors Unveiled: Watch & Learn</h2>


                                            <div className="cate-div">

                                                {filteredVideos.length > 0 ? (
                                                    <div className="cate-div-flex">
                                                        <div className="video-design">
                                                            <video controls autoPlay className="videos">
                                                                <source src={filteredVideos[0].Videosrc} type="video/mp4" />
                                                            </video>
                                                            <div className="rate-div">
                                                                <div>
                                                                    <i className="fi fi-rr-circle-heart heart"></i>
                                                                </div>
                                                                <div>
                                                                    <Flex gap="middle" vertical>
                                                                        <Rate onChange={setValue} className="rate" value={value} />
                                                                    </Flex>
                                                                </div>
                                                            </div>

                                                            <p className="design-non-name text-center">{filteredVideos[0].name}</p>
                                                        </div>
                                                        <div>
                                                            <div className="ingridients-container">
                                                                <div>
                                                                    <h6 className="food-ingrident">Step-by-Step {filteredVideos[0].name} Recipe</h6>

                                                                    <p className="para-txt-1">Here’s a simple and flavorful recipe to make {selectedRecipe} at home:</p>

                                                                    <div className="ingridient-div">
                                                                        <p className="para-txt">Ingredients</p>

                                                                        <p className="para-txt-1">For the Rice:</p>

                                                                        <ul>
                                                                            <li>2 cups basmati rice</li>
                                                                            <li>4 cups water</li>
                                                                            <li>4-5 green cardamoms</li>
                                                                            <li>4-5 cloves</li>
                                                                            <li>2-inch cinnamon stick</li>
                                                                            <li>2 bay leaves</li>
                                                                            <li>1 tsp salt</li>
                                                                        </ul>
                                                                    </div>

                                                                    <div className="ingridient-div">
                                                                        <p className="para-txt-1">For the Chicken Marinade:</p>
                                                                        <ul>
                                                                            <li>500g chicken (bone-in or boneless, as per preference)</li>
                                                                            <li>½ cup yogurt</li>
                                                                            <li>1 tbsp ginger-garlic paste</li>
                                                                            <li>1 tsp turmeric powder</li>
                                                                            <li>1 tbsp red chili powder</li>
                                                                            <li>1 tsp garam masala</li>
                                                                            <li>1 tsp coriander powder</li>
                                                                            <li>Salt to taste</li>
                                                                        </ul>
                                                                    </div>

                                                                    <div className="ingridient-div">
                                                                        <p className="para-txt-1">For Cooking Chicken:</p>
                                                                        <ul>
                                                                            <li>2 large onions (thinly sliced)</li>
                                                                            <li>2 medium tomatoes (chopped)</li>
                                                                            <li>¼ cup cooking oil or ghee</li>
                                                                            <li>2-3 green chilies (slit)</li>
                                                                            <li>A handful of mint leaves (chopped)</li>
                                                                            <li>A handful of coriander leaves (chopped)</li>
                                                                            <li>½ cup milk mixed with a pinch of saffron or ¼ tsp food color</li>
                                                                        </ul>
                                                                    </div>


                                                                    <div className="ingridient-div">
                                                                        <p className="para-txt-1">Step 1: Prepare the Rice</p>
                                                                        <ul>
                                                                            <li>Wash the basmati rice under cold water until the water runs clear. Soak it for 30 minutes, then drain.</li>
                                                                            <li>Boil 4 cups of water with cardamoms, cloves, cinnamon, bay leaves, and salt.</li>
                                                                            <li>Add the soaked rice and cook until it is 70-80% cooked (the grains should still have a bite).</li>
                                                                            <li>Drain the water and set the rice aside.</li>
                                                                        </ul>
                                                                    </div>

                                                                    <div className="ingridient-div">
                                                                        <p className="para-txt-1">Step 2: Marinate the Chicken</p>
                                                                        <ul>
                                                                            <li>In a large bowl, mix yogurt, ginger-garlic paste, turmeric powder, red chili powder, garam masala, coriander powder, and salt.</li>

                                                                            <li>Add the chicken pieces to the marinade and coat well. Cover and let it marinate for at least 1 hour (or overnight for better flavor).</li>
                                                                        </ul>
                                                                    </div>


                                                                    <div className="ingridient-div">
                                                                        <p className="para-txt-1">Step 3: Cook the Chicken</p>
                                                                        <ul>
                                                                            <li>Heat oil or ghee in a deep pan or pot.</li>
                                                                            <li>Fry the sliced onions until golden brown and crispy. Remove half of the fried onions and set them aside for garnishing.</li>
                                                                            <li>Add the marinated chicken to the pan and cook on medium heat until the chicken is almost done.</li>
                                                                            <li>Add the chopped tomatoes, green chilies, mint leaves, and coriander leaves. Cook until the tomatoes are soft and the oil separates from the masala.</li>
                                                                        </ul>
                                                                    </div>


                                                                    <div className="ingridient-div">
                                                                        <p className="para-txt-1">Step 4: Layer the Biryani</p>
                                                                        <ul>
                                                                            <li>In the same pot, spread the cooked chicken evenly at the bottom.</li>
                                                                            <li>Add a layer of half-cooked rice on top of the chicken.</li>
                                                                            <li>Drizzle saffron milk or food-colored milk over the rice for a rich color. Sprinkle the reserved fried onions, mint, and coriander leaves on top.</li>
                                                                            <li>Repeat the layering if needed, ending with a layer of rice and garnishes.
                                                                            </li>
                                                                        </ul>
                                                                    </div>


                                                                    <div className="ingridient-div">
                                                                        <p className="para-txt-1">Step 5: Dum Cooking (Steaming the Biryani)</p>
                                                                        <ul>
                                                                            <li>Seal the pot with a tight-fitting lid or cover it with aluminum foil to trap the steam.</li>
                                                                            <li>Cook on very low heat for 25-30 minutes. Alternatively, place the pot on a tawa (flat pan) to prevent direct heat.</li>

                                                                        </ul>
                                                                    </div>


                                                                    <div className="ingridient-div">
                                                                        <p className="para-txt-1">Step 6: Serve</p>
                                                                        <ul>
                                                                            <li>Gently mix the layers before serving to combine the rice and chicken.</li>
                                                                            <li>Serve hot with raita, salad, or a boiled egg for an authentic experience.</li>
                                                                        </ul>

                                                                        <p className="para-txt-1">Enjoy your homemade {filteredVideos[0].name}!🍚</p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <p className="para-txt">Select a food item to watch the video.</p>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}




                    </div>
                </Container>
            </section >

        </>
    );
};

export default FoodCategory;



// {
//     filter !== "Non-Veg" && (
//         <div className="design-container">
//             {filteredDesigns.length > 0 ? (
//                 filteredDesigns.map((designs) => (
//                     <>
//                         <div className="category-div">
//                             <div className="less-div">
//                                 <Button onClick={handlePrevious} disabled={startIndex === 0} className="btn-1">
//                                     <i className="fi fi-rr-caret-left less"></i>
//                                 </Button>
//                             </div>

//                             <div className="catogory-type">
//                                 {filteredDesigns.slice(startIndex, startIndex + maxVisibleItems).map((design, index) => (
//                                     <div
//                                         className="food-small-circle"
//                                         key={index}
//                                         onClick={() => handleFoodClick(design.name)}
//                                     >
//                                         <div className="food-category">
//                                             <img
//                                                 src={design.imgSrc}
//                                                 className="img-fluid"
//                                                 alt={`Slide ${startIndex + index + 1}`}
//                                             />
//                                         </div>
//                                         <p className="para-txt">{design.name}</p>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="greater-div">
//                                 <Button
//                                     onClick={handleNext}
//                                     disabled={startIndex + maxVisibleItems >= filteredDesigns.length}
//                                     className="btn-1"
//                                 >
//                                     <i className="fi fi-rr-caret-right great"></i>
//                                 </Button>
//                             </div>
//                         </div>
//                     </>
//                 ))

//             ) : (
//                 <>
//                     <div className="category-div">
//                         <div className="less-div">
//                             <Button onClick={handlePrevious} disabled={startIndex === 0} className="btn-1">
//                                 <i className="fi fi-rr-caret-left less"></i>
//                             </Button>
//                         </div>

//                         <div className="catogory-type">
//                             {filteredItems.slice(startIndex, startIndex + maxVisibleItems).map((image, index) => (
//                                 <div
//                                     className="food-small-circle"
//                                     key={index}
//                                     onClick={() => handleFoodClick(image.name)}
//                                 >
//                                     <div className="food-category">
//                                         <img
//                                             src={image.ImgSrc}
//                                             className="img-fluid"
//                                             alt={`Slide ${startIndex + index + 1}`}
//                                         />
//                                     </div>
//                                     <p className="para-txt">{image.name}</p>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="greater-div">
//                             <Button
//                                 onClick={handleNext}
//                                 disabled={startIndex + maxVisibleItems >= filteredItems.length}
//                                 className="btn-1"
//                             >
//                                 <i className="fi fi-rr-caret-right great"></i>
//                             </Button>
//                         </div>
//                     </div>

//                     <div className="food-divs">
//                         <h2 className="head-txt">Flavors Unveiled: Watch & Learn</h2>


//                         <div className="cate-div">

//                             {filteredVideos.length > 0 ? (
//                                 <div className="cate-div-flex">
//                                     <div className="video-design">
//                                         <video controls autoPlay className="videos">
//                                             <source src={filteredVideos[0].Videosrc} type="video/mp4" />
//                                         </video>
//                                         <div className="rate-div">
//                                             <div>
//                                                 <i className="fi fi-rr-circle-heart heart"></i>
//                                             </div>
//                                             <div>
//                                                 <Flex gap="middle" vertical>
//                                                     <Rate onChange={setValue} className="rate" value={value} />
//                                                 </Flex>
//                                             </div>
//                                         </div>

//                                         <p className="design-non-name text-center">{filteredVideos[0].name}</p>
//                                     </div>
//                                     <div>
//                                         <div className="ingridients-container">
//                                             <div>
//                                                 <h6 className="food-ingrident">Step-by-Step {filteredVideos[0].name} Recipe</h6>

//                                                 <p className="para-txt-1">Here’s a simple and flavorful recipe to make {selectedRecipe} at home:</p>

//                                                 <div className="ingridient-div">
//                                                     <p className="para-txt">Ingredients</p>

//                                                     <p className="para-txt-1">For the Rice:</p>

//                                                     <ul>
//                                                         <li>2 cups basmati rice</li>
//                                                         <li>4 cups water</li>
//                                                         <li>4-5 green cardamoms</li>
//                                                         <li>4-5 cloves</li>
//                                                         <li>2-inch cinnamon stick</li>
//                                                         <li>2 bay leaves</li>
//                                                         <li>1 tsp salt</li>
//                                                     </ul>
//                                                 </div>

//                                                 <div className="ingridient-div">
//                                                     <p className="para-txt-1">For the Chicken Marinade:</p>
//                                                     <ul>
//                                                         <li>500g chicken (bone-in or boneless, as per preference)</li>
//                                                         <li>½ cup yogurt</li>
//                                                         <li>1 tbsp ginger-garlic paste</li>
//                                                         <li>1 tsp turmeric powder</li>
//                                                         <li>1 tbsp red chili powder</li>
//                                                         <li>1 tsp garam masala</li>
//                                                         <li>1 tsp coriander powder</li>
//                                                         <li>Salt to taste</li>
//                                                     </ul>
//                                                 </div>

//                                                 <div className="ingridient-div">
//                                                     <p className="para-txt-1">For Cooking Chicken:</p>
//                                                     <ul>
//                                                         <li>2 large onions (thinly sliced)</li>
//                                                         <li>2 medium tomatoes (chopped)</li>
//                                                         <li>¼ cup cooking oil or ghee</li>
//                                                         <li>2-3 green chilies (slit)</li>
//                                                         <li>A handful of mint leaves (chopped)</li>
//                                                         <li>A handful of coriander leaves (chopped)</li>
//                                                         <li>½ cup milk mixed with a pinch of saffron or ¼ tsp food color</li>
//                                                     </ul>
//                                                 </div>


//                                                 <div className="ingridient-div">
//                                                     <p className="para-txt-1">Step 1: Prepare the Rice</p>
//                                                     <ul>
//                                                         <li>Wash the basmati rice under cold water until the water runs clear. Soak it for 30 minutes, then drain.</li>
//                                                         <li>Boil 4 cups of water with cardamoms, cloves, cinnamon, bay leaves, and salt.</li>
//                                                         <li>Add the soaked rice and cook until it is 70-80% cooked (the grains should still have a bite).</li>
//                                                         <li>Drain the water and set the rice aside.</li>
//                                                     </ul>
//                                                 </div>

//                                                 <div className="ingridient-div">
//                                                     <p className="para-txt-1">Step 2: Marinate the Chicken</p>
//                                                     <ul>
//                                                         <li>In a large bowl, mix yogurt, ginger-garlic paste, turmeric powder, red chili powder, garam masala, coriander powder, and salt.</li>

//                                                         <li>Add the chicken pieces to the marinade and coat well. Cover and let it marinate for at least 1 hour (or overnight for better flavor).</li>
//                                                     </ul>
//                                                 </div>


//                                                 <div className="ingridient-div">
//                                                     <p className="para-txt-1">Step 3: Cook the Chicken</p>
//                                                     <ul>
//                                                         <li>Heat oil or ghee in a deep pan or pot.</li>
//                                                         <li>Fry the sliced onions until golden brown and crispy. Remove half of the fried onions and set them aside for garnishing.</li>
//                                                         <li>Add the marinated chicken to the pan and cook on medium heat until the chicken is almost done.</li>
//                                                         <li>Add the chopped tomatoes, green chilies, mint leaves, and coriander leaves. Cook until the tomatoes are soft and the oil separates from the masala.</li>
//                                                     </ul>
//                                                 </div>


//                                                 <div className="ingridient-div">
//                                                     <p className="para-txt-1">Step 4: Layer the Biryani</p>
//                                                     <ul>
//                                                         <li>In the same pot, spread the cooked chicken evenly at the bottom.</li>
//                                                         <li>Add a layer of half-cooked rice on top of the chicken.</li>
//                                                         <li>Drizzle saffron milk or food-colored milk over the rice for a rich color. Sprinkle the reserved fried onions, mint, and coriander leaves on top.</li>
//                                                         <li>Repeat the layering if needed, ending with a layer of rice and garnishes.
//                                                         </li>
//                                                     </ul>
//                                                 </div>


//                                                 <div className="ingridient-div">
//                                                     <p className="para-txt-1">Step 5: Dum Cooking (Steaming the Biryani)</p>
//                                                     <ul>
//                                                         <li>Seal the pot with a tight-fitting lid or cover it with aluminum foil to trap the steam.</li>
//                                                         <li>Cook on very low heat for 25-30 minutes. Alternatively, place the pot on a tawa (flat pan) to prevent direct heat.</li>

//                                                     </ul>
//                                                 </div>


//                                                 <div className="ingridient-div">
//                                                     <p className="para-txt-1">Step 6: Serve</p>
//                                                     <ul>
//                                                         <li>Gently mix the layers before serving to combine the rice and chicken.</li>
//                                                         <li>Serve hot with raita, salad, or a boiled egg for an authentic experience.</li>
//                                                     </ul>

//                                                     <p className="para-txt-1">Enjoy your homemade {filteredVideos[0].name}!🍚</p>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <p className="para-txt">Select a food item to watch the video.</p>
//                             )}
//                         </div>
//                     </div>
//                 </>
//             )}
//         </div>
//     )
// }



