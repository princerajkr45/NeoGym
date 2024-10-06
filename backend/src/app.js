import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import  session  from 'express-session';

const app = express();
// const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(session({
    secret: `abc`,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"))
app.use(cookieParser());


// Routes
import userRouter from './routes/user.route.js'

app.use("/api", userRouter)


export default app;