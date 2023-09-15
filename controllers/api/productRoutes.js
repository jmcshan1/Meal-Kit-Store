const router = require('express').Router();
const { Product, Protien, Style } = require('../../models');

//code to pull in a product by id
router.get('/:id', async (req, res) => {
  console.log('product route hit');
  try {
    const productData = await Product.findByPk(req.params.id);
    const protien = await Protien.findAll();
    const style = await Style.findAll();

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
    }
    const product = productData.get({ plain: true });
    const protiens = protien.map((protien) => protien.get({ plain: true }));
    const styles = style.map((style) => style.get({ plain: true }));

    res.render('product', {
      product,
      protiens,
      styles,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
