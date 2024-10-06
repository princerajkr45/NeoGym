import dotenv from 'dotenv/config'
import connectDB from './config/db.js';
import app from './app.js'
import passport from 'passport';
import './passport.js'

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server listening on ${process.env.PORT}`);
        
    });
}).catch((err) => {
    console.log("mongodb connection error: " + err)
});


app.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Log in failure",
    });
});


app.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login/failed",
    }),
    (req, res) => {
        res.redirect(`${process.env.CLIENT_URL}?user=${req.user._id}`);
    }
);

