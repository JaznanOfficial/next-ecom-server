const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const colors = require("colors");

app.use(cors());
app.use(express.json());

// const usersRoute = require("./v1/Routes/users.route");
// const categoriesRoute = require("./v1/Routes/categories.route");
const productsRoute = require("./v1/Routes/products.route");

// app.use("/api/v1/users", usersRoute);
// app.use("/api/v1/categories", categoriesRoute);
app.use("/api/v1/products", productsRoute);

app.get("/", (req, res) => {
    try {
        res.send("Welcome to next-shop server");
    } catch (error) {
        console.log(error.message);
    }
});
app.listen(PORT, () => console.log(`server is successfully running on port ${PORT}!`.white.bold));

exports = app;
