const HomePage = require('../models/homePageModel');

const createHomePage = async (req, res) => {
  try {
    const { aboutUs, testimonials, services } = req.body;

    const newHomePage = new HomePage({ aboutUs, testimonials, services });
    await newHomePage.save();
    res.status(201).json({ message: 'HomePage data created successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating data', error });
  }
};

const getHomePage = async (req, res) => {
  try {
    const homePageData = await HomePage.findOne();
    if (!homePageData) {
      return res.status(404).json({ message: 'No data found' });
    }
    res.status(200).json(homePageData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
};


const updateHomePage = async (req, res) => {
  try {
    const { aboutUs, testimonials, services } = req.body;
    const updatedData = await HomePage.findOneAndUpdate(
      {}, 
      { aboutUs, testimonials, services },
      { new: true, upsert: true }
    );
    
    if (!updatedData) {
      return res.status(404).json({ message: 'HomePage data not found to update' });
    }
    
    res.status(200).json({ message: 'HomePage data updated successfully!', updatedData });
  } catch (error) {
    res.status(500).json({ message: 'Error updating data', error });
  }
};


const deleteHomePage = async (req, res) => {
  try {
    await HomePage.deleteOne();
    res.status(200).json({ message: 'HomePage data deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting data', error });
  }
};

module.exports = { createHomePage, getHomePage, deleteHomePage ,updateHomePage};

// const createHomePage2 = async (data) => {
//   const newHomePage = new HomePage({
//     aboutUs: data.aboutUs,
//     testimonials: data.testimonials, // array of testimonials
//     services: data.services, // array of services
//   });

//   await newHomePage.save();
//   console.log("HomePage data created!");
// };

// // Example of user data to create HomePage
// const userData = {
//   aboutUs:
//     "Digital marketing and comprehensive manufacturing sector solutions are combined into a single database by Unstop Techno Solution's unified system. This simplified method assures effective order processing and quality control, increases transparency, and permits real-time monitoring.\nBeing a top supplier of digital marketing services and product lifecycle management (PLM) systems, we help manufacturers of all kinds maximize their product offerings and increase revenue. Understanding the intricacies and requirements of PLM and digital marketing, we provide an extensive range of services intended to streamline these procedures and improve productivity, eventually reinventing PLM and digital marketing in the process.",
//   testimonials: [
//     {
//       text: "What Makes Digital Marketing Effective?",
//       shortDescription:
//         "Reaching your audience is only one aspect of digital marketing; the other is establishing meaningful and quantifiable connections with them that will foster engagement and growth over the long run.",
//       imageURL: "https://unstoptechnosolution.com/assets/image/marketing.jpg",
//     },
//     {
//       text: "Content Matters",
//       shortDescription:
//         "The art of creating engaging content involves telling tales that captivate readers, enlighten them, and motivate them to take action—converting site visitors into devoted supporters and followers.",
//       imageUrl: "https://unstoptechnosolution.com/assets/image/boximage.jpg",
//     },
//   ],
//   services: [
//     {
//       name: "SEO Optimization",
//       description:
//         "Increase traffic by utilizing professional SEO tactics and services..",
//       imageUrl: "https://unstoptechnosolution.com/assets/image/boximage.jpg",
//     },
//     {
//       name: "Web Designing",
//       description:
//         "Increase traffic by utilizing professional SEO tactics and services.",
//       imageUrl: "https://unstoptechnosolution.com/assets/image/boximage.jpg",
//     },
//     {
//       name: "Digital Marketing",
//       description:
//         "Increase traffic by utilizing professional SEO tactics and services..",
//       imageUrl: "Expand your following with effective social media marketing outcomes.",
//     },
//   ],
// };

// createHomePage2(userData);
