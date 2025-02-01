import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb://garaladhruv:qqqXCdkaRLQUfvqV@ac-2uaoejp-shard-00-00.orlpi7b.mongodb.net:27017,ac-2uaoejp-shard-00-01.orlpi7b.mongodb.net:27017,ac-2uaoejp-shard-00-02.orlpi7b.mongodb.net:27017/?replicaSet=atlas-1hr28j-shard-0&ssl=true&authSource=admin').then(()=>{
       console.log('DB connected') ;
    })
}