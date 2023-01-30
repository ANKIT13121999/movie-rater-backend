const mongoose=require('mongoose');
mongoose.set("strictQuery", false);

mongoose.connect(process.env.Mongo_uri).
then(()=>{
    console.log('db connected');
}).catch((ex)=>{
    console.log('db connection failed',ex);
})