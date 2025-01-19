const express = require("express");
const productModel = require("../models/product.model");
const ProductModel1 = require("../models/product.model");
const ProductModel2 = require("../models/product.model");

const productRoute = express.Router();

productRoute.post("/add-products", async (req, res) => {
    try {
        const { images } = req.body;

        if (!images || !Array.isArray(images)) {
            return res.status(400).json({
                message: "Invalid input. 'images' must be an array of URLs.",
            });
        }

        const newProduct = new productModel({
            images,
        });

        await newProduct.save();

        res.status(201).json({
            message: "Product images added successfully",
            product: newProduct,
        });
    } catch (error) {
        res.status(400).json({
            message: "Error adding product images",
            error: error.message,
        });
    }
});

// Get all product images
productRoute.get("/get-all-products", async (req, res) => {
    try {
        const products = await productModel.find();

        res.status(200).json({
            message: "List of all products",
            products,
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch product images",
            error: error.message,
        });
    }
});



productRoute.post("/add-products1", async (req, res) => {
    try {
        const { images } = req.body;

        if (!images || !Array.isArray(images)) {
            return res.status(400).json({
                message: "Invalid input. 'images' must be an array of URLs.",
            });
        }

        const newProduct = new ProductModel1({
            images,
        });

        await newProduct.save();

        res.status(201).json({
            message: "Product images added successfully",
            product: newProduct,
        });
    } catch (error) {
        res.status(400).json({
            message: "Error adding product images",
            error: error.message,
        });
    }
})
productRoute.get("/get-all-products1", async (req, res) => {
    try {
        const products = await ProductModel1.find();

        res.status(200).json({
            message: "List of all products",
            products,
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch product images",
            error: error.message,
        });
    }
});

productRoute.post("/add-products2", async (req, res) => {
    try {
        const { images } = req.body;

        if (!images || !Array.isArray(images)) {
            return res.status(400).json({
                message: "Invalid input. 'images' must be an array of URLs.",
            });
        }

        const newProduct = new ProductModel2({
            images,
        });

        await newProduct.save();

        res.status(201).json({
            message: "Product images added successfully",
            product: newProduct,
        });
    } catch (error) {
        res.status(400).json({
            message: "Error adding product images",
            error: error.message,
        });
    }
})
productRoute.get("/get-all-product2", async (req, res) => {
    try {
        const products = await ProductModel2.find();

        res.status(200).json({
            message: "List of all products",
            products,
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch product images",
            error: error.message,
        });
    }
});

module.exports = productRoute;
