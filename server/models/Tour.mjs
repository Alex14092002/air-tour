import mongoose from "mongoose";
const TourSchema = new mongoose.Schema(
    { 
        name : {
            type : String,
            required: true,
            unique: true,
        },
        des : {
            type : String,
            required: true,
        },
        childrenPrice : {
            type : Number,
            required: true,
        },
        price : {
            type : Number,
            required: true,
        },
        oldPrice : {
            type : Number,
            required: true,
        },
        detail : {
            type : String ,
            required: true,
        },
        imgDetail : [
            {
                type: String,
            }
        ],
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category', // Tham chiếu đến mô hình danh mục
            required : true
        },
        idGuide : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Tham chiếu đến mô hình danh mục
        },
        status : {
            type : String ,
            enum: ['pending', 'start', 'middle', 'completed', 'cancelled'],
            default : "pending",
            required : true
        }
    },
{ timestamps: true }
)
export default mongoose.model('Tour', TourSchema);