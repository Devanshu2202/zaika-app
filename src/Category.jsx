import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = [
  {
    name: "Soup",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjCye450K5PpaObGWKQmMunXo0_cTTBoLPg&s",
  },
  {
    name: "Main Dish",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmTc2o2wVT6eB38fNNIjRJ5nKBcDvok1AFw&s",
  },
  {
    name: "Sweet",
    img: "https://i0.wp.com/hirasweets.com/wp-content/uploads/2020/06/hirasweetkajusweets.jpg?w=1200&ssl=1",
  },
  {
    name: "Beverage",
    img: "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg",
  },
  {
    name: "Pizza",
    img: "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",
  },
  {
    name: "Burger",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    name: "Snacks",
    img: "https://www.vikhrolicucina.com/uploads/stories/1674223639_samosasingaraindianfriedbakedpastrywithsavoryfillingspicedpotatoesonionpeas.jpg",
  },
  {
    name: "Salad",
    img: "https://cdn.jwplayer.com/v2/media/wGEqBtuf/thumbnails/qSXwlEH3.jpg?width=1280",
  },
  // {
  //   name: "Asian",
  //   img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1214757157.png?crop=0.668xw:1.00xh;0.0913xw,0&resize=640:*",
  // },
  {
    name: "Mexican",
    img: "https://www.marionskitchen.com/wp-content/uploads/2022/06/Hoi-An-style-Chicken-Rice-02.jpg",
  },
  {
    name: "Italian",
    img: "https://theclevermeal.com/wp-content/uploads/2021/07/penne-arrabbiata_1b-735x942.jpg",
  },
  {
    name: "Sushi",
    img: "https://www.heinens.com/content/uploads/2023/06/Tuna-Sushi-Rolls-800x550-1.jpg",
  },
  {
    name: "Chinese",
    img: "https://burratahouse.com/wp-content/uploads/nc/articles/Italian_Food_9ee0b58d-018f-4c37-a7b3-4a677b75f66f.jpg",
  },
  {
    name: "Tandoori",
    img: "https://www.mashed.com/img/gallery/this-is-where-the-taste-of-tandoori-chicken-comes-from/intro-1609409975.jpg",
  },
];



function FoodCategory() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // arrows: true,
    slidesToShow: 6 ,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Explore Categories
      </h2>

      <Slider {...settings}>
        {Category.map((item, index) => (
          <div key={index} className="px-3 text-center">
            <div className="flex flex-col items-center ml-10 mr-10 space-y-2">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover border border-gray-300 shadow-sm"
              />
              <p className="text-sm font-medium text-gray-700">{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default FoodCategory;
