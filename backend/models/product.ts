import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter product name"]
    },
    description: {
        type: String,
        require: [true, "Please enter the product description"]
    },
    price: {
        type: Number,
        require: [true, "Please enter a number for price"]
    }, 
    images: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String
            }
        }
    ],

    category: {
        type: String,
        require: [true, "Please enter product category"],
        enum: {
            values: [
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Sports"
            ],
            message: "Please Select correct category"
        }
    },
    seller: {
        type: String,
        require: [true, "Please enter product seller"]
    },
    stock: {
        type: Number,
        require: [true, "Please enter product stock"]
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            rating: {
                type: Number,
                require: true
            },
            comment: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    }
})


export default mongoose.model.Product || mongoose.model('Product', productSchema)