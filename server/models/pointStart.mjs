import mongoose from "mongoose";
const PointStartSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
        unique: true,
    }
})
export default mongoose.model('PointStart', PointStartSchema);