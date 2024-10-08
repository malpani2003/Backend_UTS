require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const internshipRoutes = require("./routes/internshipRoutes");
const blogRoutes = require("./routes/blogRoutes");
const adminRoutes = require("./routes/adminRoutes");
const sliderRoutes = require("./routes/sliderRoutes");
const contactRoutes = require("./routes/contactRoutes");
const homePageRoutes = require("./routes/homePageRoutes");
const aboutPageRoutes=require("./routes/aboutPageRoutes");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3000;

app.use(express.json());

mongoose
.connect("mongodb://localhost:27017/UTS_ADMIN")
.then(() => console.log("DB connection successful!"))
.catch((error) => console.log("DB connection error:", error));


app.use("/api/carrers", internshipRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/sliders", sliderRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/homePage", homePageRoutes);
app.use('/api/about', aboutPageRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
