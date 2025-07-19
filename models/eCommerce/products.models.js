import mongoose, { mongo } from 'mongoose'
const productSchema = new mongoose.Schema({
    discription: {
        required: true,
        type: String,
    },
    name: {
        type: String,
        required: true,
        
    },
    productImage: {
        type: String,
    },
    prize: {
        type: Number,
        required: true,
        default: 0,
    },
    stock: {
        default: 0,
        type: Number,
    },
    catagory: {
        type: mongoose.Schema.Types.ObjectId,       // these two are couples
        ref: "Catagory"                             // these two are couples
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        
    }
}, { timestamps: true})

export const Product = mongoose.model('Product', productSchema)