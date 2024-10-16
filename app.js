require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Importing routes
const internshipRoutes = require("./routes/internshipRoutes");
const blogRoutes = require("./routes/blogRoutes");
const adminRoutes = require("./routes/adminRoutes");
const sliderRoutes = require("./routes/sliderRoutes");
const contactRoutes = require("./routes/contactRoutes");
const homePageRoutes = require("./routes/homePageRoutes");
const aboutPageRoutes = require("./routes/aboutPageRoutes");
const companyContactRoutes = require("./routes/companyContactRoutes");
const servicePageRoutes = require("./routes/ServicePageRoutes");
const testimonialRoutes=require("./routes/testimonialRoutes");

const app = express();


// Dev

// const corsOptions = {
//   origin: "http://localhost:3000", 
//   credentials:true,
// };


// Production

// const corsOptions = {
//   origin: "https://admin-panel-uts.netlify.app", 
//   credentials:true,
// };

app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = [
            "https://admin-panel-uts.netlify.app",
            "https://unstoptechnosolution.com"
        ];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL || "mongodb://localhost:27017/UTS_ADMIN";
console.log(URL);
// MongoDB Connection
mongoose
  .connect(URL)
  .then(() => console.log("DB connection successful!"))
  .catch((error) => console.log("DB connection error:", error)); 

// Basic health check route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Backend Running Healthy", success: true });
});

// Modular Routes
app.use("/api/careers", internshipRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/sliders", sliderRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/home-page", homePageRoutes);
app.use("/api/about-page", aboutPageRoutes);
app.use("/api/service-page",servicePageRoutes); 
app.use("/api/company-contact", companyContactRoutes);
app.use("/api/testimonials",testimonialRoutes);

app.use("*", (req, res) => {
  res
    .status(404)
    .send({ message: "No Route Available for this", success: false });
});

// Server listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
