import dotenv from 'dotenv/config'
import connectDB from './config/db.js';
import app from './app.js'

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server listening on ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("mongodb connection error: " + err)
});
