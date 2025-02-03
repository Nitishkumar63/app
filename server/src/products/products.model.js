const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    image: {
      type: Array,
      default: [],
    },

    categoryId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],

    sub_categoryId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
      },
    ],
    unit: {
      type: String,
      default: "",
      trim: true,
    },
    stock: {
      type: Number,
      default: 0,
      trim: true,
    },

    price: {
      type: Number,
      default: null,
      trim: true,
    },
    discount: {
      type: Number,
      default: null,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    more_details: {
      type: String,
      default: {},
      trim: true,
    },

    publish: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
