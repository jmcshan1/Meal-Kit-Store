const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    //redirect to login page
    res.redirect('/login');
  } else {
    next();
  }
};
//exports withAuth
module.exports = withAuth;
