import mongoose from "mongoose";
const TourSchema = new mongoose.Schema(
    { 
        name : {
            type : String,
            required: true,
            unique: true,
        },
        time : {
            type : String,
        },
        dateStart : {
            type : String
        },
        locationStart : {
            type: String,
            ref: 'PointStart',
            required : true
        },
        plant : {
            type : String
        },
        maxGuest : {
            type : Number
        },
        oldGuest : {
            type : Number
        },
        childGuest : {
            type : Number
        },
        locationEnd : {
            type: String,
            ref: 'PointEnd',
            required : true
        },
        des : {
            type : String,
            required: true,
        },
        childrenPrice : {
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
        detailLocation : [
            {
                type: String,
            }
        ],
        category: {
            type: String,
            ref: 'Category', // Tham chiếu đến mô hình danh mục
            required : true
        },
        idGuide : {
            type: String,
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