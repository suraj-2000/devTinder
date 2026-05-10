const mongoose = require("mongoose");
const connectDB = async () => {
    await mongoose.connect("mongodb+srv://namastedev:SurajSangam@namastenode.s1qrpe9.mongodb.net/devTinder");
}

module.exports = {connectDB};
