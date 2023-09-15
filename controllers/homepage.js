const router = require('express').Router();
const { Style, Protien, Product, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/', withAuth, async (req, res) => {
  try {

    const styleData = await Style.findAll();
    const protienData = await Protien.findAll();

    const styles = styleData.map((style) => style.get({ plain: true }));
    const protiens = protienData.map((protien) => protien.get({ plain: true }));

    res.render('homepage', {
      styles,
      protiens,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products', withAuth, async (req, res) => {
  try {
    const productData = await Product.findAll({});

    const products = productData.map((product) => product.get({ plain: true }));

    res.render('products', {
      products,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/protien/', withAuth, async (req, res) => {
  try {
    const protienId = req.query.protien;

    if (!protienId) {
      return res.status (400).json({ message: 'No protien selected' });
    }

    const productData = await Product.findAll({
      where: {
        protien_id: protienId,
      },
    });

    const products = productData.map((product) => product.get({ plain: true }));

    res.render('products', {
      products,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/style/', withAuth, async (req, res) => {
  try {
    const styleId = req.query.style;

    if (!styleId) {
      return res.status (400).json({ message: 'No style selected' });
    }

    const productData = await Product.findAll({
      where: {
        style_id: styleId,
      },
    });

    const products = productData.map((product) => product.get({ plain: true }));

    res.render('products', {
      products,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
