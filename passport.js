const passport = require('passport'); 
const GoogleStrategy = require('passport-google-oauth2').Strategy; 
  
passport.serializeUser((user , done) => { 
    done(null , user); 
}) 
passport.deserializeUser(function(user, done) { 
    done(null, user); 
}); 
  
passport.use(new GoogleStrategy({ 
    clientID:"Ov23liSnrLc1GT1w8Hxo", // Данные из вашего аккаунта. 
    clientSecret:"4e74c5989d1c2161d57c70787a5b72a204e1bee7", // Данные из вашего аккаунта. 
    callbackURL:"http://localhost:4000/auth/callback", 
    passReqToCallback:true
  }, 
  function(request, accessToken, refreshToken, profile, done) { 
    return done(null, profile); 
  } 
));


var GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: "Ov23liSnrLc1GT1w8Hxo",
    clientSecret: "4e74c5989d1c2161d57c70787a5b72a204e1bee7",
    callbackURL: "http://localhost:5000/auth/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));