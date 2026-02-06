import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:admin123@cluster0.h7mxizd.mongodb.net/livraria");

let db = mongoose.connection;

export default db;