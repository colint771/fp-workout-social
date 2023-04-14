const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/fpWorkoutSocialDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => {
    if (err) throw err;
    console.log('Connection to MongoDB successful!')

});

module.exports = mongoose.connection;