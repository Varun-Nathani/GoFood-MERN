const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://varunnathani2004:Bhavin01@cluster0.bgytc4o.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0"

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log("Connected to MongoDB");
      const fetchedData = await mongoose.connection.db.collection("food_items")
      fetchedData.find({}).toArray().then(async (data, err)=>{
        const CategoriesData = await mongoose.connection.db.collection("food_categories")
        CategoriesData.find({}).toArray().then((catData,err) =>{
          global.food_items = data
          global.food_categories = catData
          if (err) {
            console.log(err)
          }
        })
      })
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

module.exports = mongoDB;