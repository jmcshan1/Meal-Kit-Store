const router = require('express').Router();
const { User } = require('../../models');
// const bcrypt = require('bcrypt');

// Post route that checks the password with the username that is sent by the user and if they match, the user is logged in
router.post('/login', async (req, res) => {
  console.log('login route hit');
  try {
    // Finds the user data in the database that has the username in the request body
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    // Gives an errer if there is no matching username in the user data
    if (!userData) {
      console.log('no user found');
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Checks the sent in password if it matches with the on in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log('user found');

    // Sets the logged_in key in the session as true
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post route for a user to sign up, it stores the user inputted username and password into the User table
router.post('/signup', async (req, res) => {
  try {
    // Creates new row in User table
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    // Sets the logged_in key in the session as true as well as the id from the newly created user
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post route for logout, destroys the session so the user logged_in is no true
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
