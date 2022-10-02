const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// ******Static files******
app.use(express.static(path.join(__dirname, "public")));

// ******Settings******
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// *******Routes*******
const indexRoute = require("./src/routes/indexRouter");
const apiProducts = require("./src/routes/productsRouter");
const apiUsers = require("./src/routes/usersRouter");
const apiSales = require("./src/routes/salesRouter");

app.use("/", indexRoute);
app.use("/products", apiProducts);
app.use("/users", apiUsers);
app.use("/sales", apiSales);

// ******Start server******
app.listen(port, () => console.log(`Server running on port ${port}`));
