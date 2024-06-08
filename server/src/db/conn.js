import mongoose from 'mongoose'

const Connection = () => {
    try {
        mongoose.connect(process.env.DB_URI)
        console.log("Connected to the database");
    } catch (err) {
        console.log(err);
    }
}
export default Connection