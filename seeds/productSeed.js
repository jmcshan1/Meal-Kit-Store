//required dependencies
const { Product } = require('../models');

//product data
const productData = [
  {
    product_name: 'Classic Italian Meal Kit',
    price: 15.99,
    picture:
      'https://cdn0.woolworths.media/content/wowproductimages/large/210724.jpg',
    product_description: 'Classic Italian Meal Kit',
    product_details: 'Contains pasta, sauce, cheese, and meatballs',
    protien_id: 2,
    style_id: 2,
  },
  {
    product_name: 'Healthy Salad Meal Kit',
    price: 12.99,
    picture:
      'https://cdn0.woolworths.media/content/wowproductimages/large/056534.jpg',
    product_description: 'Healthy Salad Meal Kit',
    product_details:
      'Contains lettuce, tomatoes, cucumbers, dressing and toppings',
    protien_id: 6,
    style_id: 7,
  },
  {
    product_name: 'Mediterranean lamb Meal Kit',
    price: 22.99,
    picture:
      'https://www.instacart.com/image-server/932x932/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_8e33c967-87bc-4a6f-b7b1-b7770fdcd21d.jpeg',
    product_description: 'Mediterranean lamb Meal Kit',
    product_details: 'Contains lamb, rice, sauce, and vegetables',
    protien_id: 7,
    style_id: 6,
  },
  {
    product_name: 'Taco Meal Kit',
    price: 18.99,
    picture:
      'https://www.meijer.com/content/dam/meijer/product/0070/88/2012/86/0070882012860_3_A1C1_0600.png',
    product_description: 'Taco Meal Kit',
    product_details: 'Contains tortillas, meat, cheese, and toppings',
    protien_id: 2,
    style_id: 1,
  },
  {
    product_name: 'Asian Stir-Fry Meal Kit',
    price: 14.99,
    picture:
      'https://www.instacart.com/image-server/932x932/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_4e7ea20c-ecbf-4ed8-8cd3-9cfae1140cc9.jpg',
    product_description: 'Asian Stir-Fry Meal Kit',
    product_details: 'Contains rice, sauce, vegetables, and meat',
    protien_id: 1,
    style_id: 4,
  },
  {
    product_name: 'Vegitarian Quinoa Bowl',
    price: 12.99,
    picture:
      'https://www.meijer.com/content/dam/meijer/product/0818/51/2018/69/0818512018693_0_A1C1_0600.png',
    product_description: 'Vegitarian Quinoa Bowl',
    product_details: 'Contains quinoa, vegetables, and sauce',
    protien_id: 6,
    style_id: 7,
  },
  {
    product_name: 'Seafood Meal Kit',
    price: 19.99,
    picture:
      'https://i5.walmartimages.com/seo/Aqua-Star-Frozen-MicroSteam-Roasted-Garlic-Salmon-Seafood-Meal-11-Ounces-6-Count_67e8a180-1ffa-439e-8982-10e2cc381297.c7feca3aea21677fe1995d0f42ada533.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    product_description: 'Seafood Meal Kit',
    product_details: 'Contains fish, rice, sauce, and vegetables',
    protien_id: 4,
    style_id: 5,
  },
  {
    product_name: 'Homemade Pizza Meal Kit',
    price: 16.99,
    picture: 'https://www.pamperedchef.com/iceberg/com/product/100767-lg.jpg',
    product_description: 'Homemade Pizza Meal Kit',
    product_details: 'Contains dough, sauce, cheese, and toppings',
    protien_id: 3,
    style_id: 2,
  },
  {
    product_name: 'Sushi Meal Kit',
    price: 24.99,
    picture:
      'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_lpad,f_auto/v1/shop/product/63bf83292105c_sushi5',
    product_description: 'Sushi Meal Kit',
    product_details: 'Contains rice, fish, and vegetables',
    protien_id: 4,
    style_id: 4,
  },
  {
    product_name: 'BBQ Ribs Meal Kit',
    price: 21.99,
    picture:
      'https://images.albertsons-media.com/is/image/ABS/960293184-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available',
    product_description: 'BBQ Ribs Meal Kit',
    product_details: 'Contains ribs, Sauce, and Vegetables',
    protien_id: 3,
    style_id: 3,
  },
  {
    product_name: 'Breakfast Burrito',
    price: 9.99,
    picture:
      'https://images.albertsons-media.com/is/image/ABS/960196590?$ng-ecom-pdp-desktop$&defaultImage=Not_Available',
    product_description: 'Breakfast Burrito',
    product_details: 'Contains: Eggs, Tortilla, Cheese, and Toppings.',
    protien_id: 3,
    style_id: 1,
  },
  {
    product_name: 'Veggie Bowl Meal Kit',
    price: 12.99,
    picture:
      'https://images.squarespace-cdn.com/content/v1/582e397a37c5816ddad50609/1604084906007-0R8B492XXHD4C03OKTU7/farmacy+bowls+2.png?format=2500w',
    product_description: 'Veggie Bowl Meal Kit',
    product_details: 'Contains: Rice, Vegetables, and Sauce.',
    protien_id: 6,
    style_id: 7,
  },
  {
    product_name: 'Greek Gyros',
    price: 28.99,
    picture: 'https://scene7.samsclub.com/is/image/samsclub/0001345438313_A',
    product_description: 'Greek Gyros',
    product_details:
      'Contains: Lamb, Pita Bread, Cucumbers, Tomatoes, Red Onions, Feta Cheese, and Tzatziki Sauce.',
    protien_id: 7,
    style_id: 6,
  },
  {
    product_name: 'Chicken Tikka Masala',
    price: 15.99,
    picture:
      'https://www.instacart.com/image-server/466x466/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_64605b41-3533-4acf-b680-2673892a14f6.jpg',
    product_description: 'Chicken Tikka Masala',
    product_details:
      'Contains: Basmati Rice, Curry Sauce, Chicken, Naan Bread, and Chutney.',
    protien_id: 1,
    style_id: 8,
  },
  {
    product_name: 'Barbacoa',
    price: 17.99,
    picture:
      'https://www.instacart.com/image-server/466x466/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_d96b732b-0e3d-4297-ac65-5ac3857f0aa0.jpg',
    product_description: 'Barbacoa',
    product_details: 'Contains: Beef, Tomatoes, Salt, and Spices.',
    protien_id: 2,
    style_id: 1,
  },
  {
    product_name: 'Vegan Meal Kit',
    price: 12.99,
    picture:
      'https://www.foodbev.com/wp-content/uploads/2017/07/amazonmealkit2.jpg',
    product_description: 'Vegan Meal Kit',
    product_details: 'Contains: Pita, Tomatoes, String Beans, Olive Oil and Spices',
    protien_id: 6,
    style_id: 7,
  },
];

//function to seed product data
const seedProducts = () => Product.bulkCreate(productData);
//export seedProducts
module.exports = seedProducts;
