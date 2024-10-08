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

const PORT = process.env.PORT || 5000; 
const URL= process.env.MONGO_URL || "mongodb://localhost:27017/UTS_ADMIN";
// process.env.MONGO_URL
// console.log(process.env.MONGO_URL);
app.use(express.json());

mongoose
.connect(URL)
.then(() => console.log("DB connection successful!"))
.catch((error) => console.log("DB connection error:", error));


app.use("/api/carrers", internshipRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/sliders", sliderRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/homePage", homePageRoutes);
app.use('/api/about', aboutPageRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
