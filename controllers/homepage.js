const router = require('express').Router();
const { Style, Protien, Product } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Homepage that contains all the data for the style and protein to be used in the dropdown menus
router.get('/', withAuth, async (req, res) => {
  try {
    // Gets all the data for style and protein
    const styleData = await Style.findAll();
    const protienData = await Protien.findAll();

    // Dat ais serialized
    const styles = styleData.map((style) => style.get({ plain: true }));
    const protiens = protienData.map((protien) => protien.get({ plain: true }));

    //Renders homepage.handlebars with the data above and the login status of the user
    res.render('homepage', {
      styles,
      protiens,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Products page with all the products in our data unfilitered
router.get('/products', withAuth, async (req, res) => {
  try {
    // Gets all the data in the products table
    const productData = await Product.findAll({});

    const products = productData.map((product) => product.get({ plain: true }));
    //Renders products.handlebars with the data above and the login status of the user
    res.render('products', {
      products,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Products page with the specified protein that the user selects
router.get('/products/protien/', withAuth, async (req, res) => {
  try {
    // Stores the selected protein
    const protienId = req.query.protien;
    console.log(protienId);

    if (!protienId) {
      return res.redirect('/');
    }

    // Finds all the data in the product table with the selected protein
    const productData = await Product.findAll({
      where: {
        protien_id: protienId,
      },
    });
    // Serializes the data
    const products = productData.map((product) => product.get({ plain: true }));

    // Renderes the products page with the filtered protein as well as the login status of the user
    res.render('products', {
      products,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Products page with the specified style that the user selects
router.get('/products/style/', withAuth, async (req, res) => {
  try {
    // Stores the selected style
    const styleId = req.query.style;

    if (!styleId) {
      return res.redirect('/');
    }

    // Finds all the data in the product table with the selected style
    const productData = await Product.findAll({
      where: {
        style_id: styleId,
      },
    });

    // Serializes the data
    const products = productData.map((product) => product.get({ plain: true }));
    
    // Renderes the products page with the filtered style as well as the login status of the user
    res.render('products', {
      products,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
