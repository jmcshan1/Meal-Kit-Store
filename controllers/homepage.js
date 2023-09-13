const router = require('express').Router();
const { Style, Protien, Product } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
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

router.get('/products', async (req, res) => {
  try {
    const productData = await Product.findAll({});

    const products = productData.map((product) => product.get({ plain: true }));

    res.render('products', {
      products,
      //   logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/product/:pid/order', async (req, res) => {
//   try {
//     const productData = await Product.findByPk({
//       where: {
//         id: req.params.pid,
//       },
//     });

//     const product = productData.map((product) => product.get({ plain: true }));

//     res.render('product', {
//       product,
//         logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/products/protien/', async (req, res) => {
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
      //   logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/style/', async (req, res) => {
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
      //   logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/product/:id', async (req, res) => {
//   try {
//     const productData = await Product.findByPk({
//       where: {
//         id: req.params.pid,
//       },
//     });

//     const product = productData.map((product) => product.get({ plain: true }));

//     res.render('product', {
//       product,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// router.get('/order', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('orders');
// });

module.exports = router;
