import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    // Thêm các trường cho schema Order
    customerName: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', // Tham chiếu đến mô hình Product (nếu có)
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: false, // Mặc định là false (chưa duyệt)
    },
});

export default mongoose.model('Order', OrderSchema);
