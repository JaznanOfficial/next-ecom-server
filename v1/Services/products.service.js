const Products = require("../Models/products.model");

const postProductsService = async (data) => {
    const result = await Products.create(data);
    console.log(result);
    return result;
};

const getProductsService = async (query) => {
    const search = query.search;
    const category = query.category || "";
    const page = Number(query.page) - 1 || 0;
    const limit = Number(query.limit) || 2;
    const price = query.price;
    const ratings = Number(query.ratings) || 0;
    const id = query._id || "";
    const email = query.email || "";

    let result;
    if (id) {
        return (result = await Products.findById(id));
    }

    const filters = {};

    if (search) {
        filters.name = { $regex: search, $options: "i" };
    }

    if (category) {
        filters.category = category;
    }

    if (price) {
        const { gte, lte } = price;
        console.log(lte);
        const priceFilter = {};
        if (gte) {
            priceFilter.$gte = gte;
        }
        if (lte) {
            priceFilter.$lte = lte;
        }
        filters.price = priceFilter;
        console.log(priceFilter);
    }

    if (ratings) {
        filters.ratings = { $gte: ratings };
    }

    result = await Products.find(filters)
        .skip(page * limit)
        .limit(limit);

    return result;
};

module.exports = { getProductsService, postProductsService };
