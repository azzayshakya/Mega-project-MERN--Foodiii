const mongoose = require('mongoose');

const dotenv=require('dotenv')
dotenv.config({})


const ConnectDb=async ()=>{
  
    try{
        const conn=await mongoose.connect(process.env.db_string,
        {useUnifiedTopology:true})
        // console.log(conn)
console.log("connented")
const fetchFoodItems = async () => {
    try {
      const fetched_data = await mongoose.connection.db.collection("food_items");
      const data = await fetched_data.find({}).toArray();

      const foodCategory = await mongoose.connection.db.collection("foodCategory");
      const catdata = await foodCategory.find({}).toArray();
      // console.log(catdata)

      const ResturentUsers = await mongoose.connection.db.collection("Resturent");
      const resturentUser = await ResturentUsers.find({}).toArray();
      
      global.foodCategory=catdata;
      // console.log(global.foodCategory)
    //   console.log("printing the collection data")
      // console.log(data);
    global.food_items=data;
    // console.log(global.food_items)
    } catch (err) {
      console.log(err);
    }
  };
  
  fetchFoodItems();
       

    }
    catch(error){
        console.log(error)
        console.log("not connected")
    }
}

module.exports=ConnectDb