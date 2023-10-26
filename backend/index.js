const express = require("express");
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { connection } = require("./Utils/database");
const mongoose = require("mongoose")
const { UserRouter } = require("./routes/user.route");
require('dotenv').config();
const cors = require("cors");
const { dataRouter } = require("./routes/data.route");
const { usermodel } = require("./model/user.model");


const app = express();
app.use(cors());
app.use(express.json());

app.use(session({
    secret: 'your_session_secret',
    resave: false,
    saveUninitialized: true,
}));

passport.use(new GoogleStrategy({
    clientID: '541573908328-f4p5hkn05h3m173l77b4qsno381f84v7.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'https://frontend-flax-chi.vercel.app/auth/google/callback',
    scope: ['profile', 'email']
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));
passport.serializeUser((user, done) => {
    done(null, user.id);
});
mongoose.Promise = global.Promise; 
passport.deserializeUser(async (obj, done) => {
    done(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        const userEmail = req.user.emails[0].value;
        req.session.userEmail = userEmail;
        // res.send({ email: userEmail, msg: 'Login Successfully' });
        res.redirect('https://frontend-flax-chi.vercel.app/Menu');
      
    });

app.get("/", (req, res) => {
    res.send("Welcome to backend");
});

app.use("/", UserRouter);
app.use("/", dataRouter)

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log(`Database Connection Successfully`);
    } catch (err) {
        console.log(`Database Connection Failed`);
    }
    console.log(`Server is Running on Port ${process.env.PORT}`);
});
