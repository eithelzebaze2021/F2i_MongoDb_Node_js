const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect('mongodb+srv://admin:ArchiF2i_ZEBAZE@cluster0.sntvwa4.mongodb.net/ArchiF2i_ZEBAZE?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB connecter bravo !!!! : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

/*const connectDB = async () => {
    try {
      mongoose.connect(
        "mongodb://0.0.0.0:27017/ArchiF2i_ZEBAZE"
      ).catch(err => console.log(err.reason))
      app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };*/

module.exports = connectDB