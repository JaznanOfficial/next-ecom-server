const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const dbConnect = () => {
    mongoose
        .connect(process.env.mongodb_connection, {
            dbName: "blog-server",
        })

        .then(() => {
            console.log(`db connected succesfully`.white.bgGreen.bold);
        })
        .catch((err) => {
            console.log(err.message);
        });
};

module.exports = dbConnect;
