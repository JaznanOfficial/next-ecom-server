const APIFilters = require("../../utils/APIFilters");
const Products = require("../Models/products.model");

const postProductsService = async (data) => {
    const result = await Products.create(data);
    console.log(result);
    return result;
};

const getProductsService = async (query) => {
    const search = query.search || "";
    const category = query.category || "";
    const page = Number(query.page) - 1 || 0;
    const limit = Number(query.limit) || 2;
    const price = Number(query.price) || "";
    const rating = Number(query.rating) || "";
    const id = query._id || "";
    const email = query.email || "";

    let result;
    if (id) {
        // console.log(id);
        return (result = await Products.findById(id));
    }
    console.log({ search, category, page, limit, price, rating, email });
    // console.log(result);
    result = await Products.find(
        {
            name: { $regex: search, $options: "i" },
            // price: price,
            // rating: { $gte: rating },
        }
        // { price }
        // { rating: { $gte: rating } }
        // { email }
    )
        // .where("category")
        // .in(category)
        .skip(page * limit)
        .limit(limit);
    return result;
};

module.exports = { getProductsService, postProductsService };
