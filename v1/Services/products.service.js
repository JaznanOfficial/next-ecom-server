const APIFilters = require("../../utils/APIFilters");
const Products = require("../Models/products.model");

const postProductsService = async (data) => {
    const result = await Products.create(data);
    console.log(result);
    return result;
};

const getProductsService = async (query) => {
    // const resPerPage = 2;
    // const productsCount = await Products.countDocuments();
    // const apiFilters = new APIFilters(Products.find(), query).search().filter();
    // let products = await apiFilters.query;
    // const filteredProductsCount = products.length;
    // apiFilters.pagination(resPerPage);
    // products = await apiFilters.query.clone();
    // const result = res.status(200).json({
    //     productsCount,
    //     resPerPage,
    //     filteredProductsCount,
    //     products,
    // });

    const result = await Products.find(query);
    console.log(result);
    return result;
};

module.exports = { getProductsService, postProductsService };
