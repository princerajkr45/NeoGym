import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import dotenv from 'dotenv/config'
import User from './models/UserModel.js'

// console.log(process.env.CLIENT_ID);

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:3000/google/callback",
            scope: ["profile", "email"],
        },
       async function (accessToken, refreshToken, profile, done) {
           try {
            
            const googleEmail = profile.emails[0].value;
            const googelName = profile.displayName;

            const user = await User.findOne({ email : googleEmail });

            if(!user){
                const user = new User({
                    email: googleEmail,
                    userName: googelName,
                    password: null
                });
                await user.save();
                
            }
            return done(null, user);

           } catch (error) {
               return done(error,null);
           }
        }
    )
);

passport.serializeUser(function(user , done){
    done(null , user);
})

passport.deserializeUser( function(user , done){
    done(null , user);
})