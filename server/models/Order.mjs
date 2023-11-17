import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    idUser :{
        type : String,
        required: true,
    },
    nameUser : {
        type : String,
        required: true,
    },
    nameTour : {
        type : String,
        required: true,
    },
    phoneUser : {
        type : String,
        required: true,
    },
    quatityOld : {
        type : Number,
        required: true,
    },
    quatityChild : {
        type : Number,
        required: true,
    },
    quatityNormal : {
        type : Number,
        required: true,
    },
    dateRegister : {
        type : String,
        required: true,
    },
    total : {
        type : Number,
        required: true,
    },
    status : {
        type : Boolean,
        default : false,
        required: true,
    }
});

export default mongoose.model('Order', OrderSchema);
