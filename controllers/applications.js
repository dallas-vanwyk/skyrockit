// controllers/applications.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// ----------------------------------------------------- INDEX ROUTE
router.get('/', async (req, res) => {
    try {
      // Look up the user from req.session
      const currentUser = await User.findById(req.session.user._id);
      // Render index.ejs, passing in all of the current user's
      // applications as data in the context object.
      res.render('applications/index.ejs', {
        applications: currentUser.applications,
      });
    } catch (error) {
      // If any errors, log them and redirect back home
      console.log(error);
      res.redirect('/');
    }
  });
  

// ----------------------------------------------------- NEW ROUTE
router.get('/new', async (req, res) => {
    res.render('applications/new.ejs');
});

// ----------------------------------------------------- D

// ----------------------------------------------------- U

// ----------------------------------------------------- CREATE ROUTE
router.post('/', async (req, res) => {
    try {
        // look up the user from req.session
        const currentUser = await User.findById(req.session.user._id);

        // req.body is the new form data object
        // push req.body to the applications array of the current user
        currentUser.applications.push(req.body);

        // Save changes to the user
        await currentUser.save();

        // Redirect back to the applications index view
        res.redirect(`/users/${currentUser._id}/applications`);
    
    } catch (error) {
        
        // If any errors, log them and redirect back home
        console.log(error);
        res.redirect('/');
    }
})

// ----------------------------------------------------- E

// ----------------------------------------------------- S

module.exports = router;
