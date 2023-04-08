const { getProductsService, postProductsService } = require("../Services/products.service");

const postProductsController = async (req, res, next) => {
    try {
        const data = req?.body;
        const products = await postProductsService(data);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const getProductsController = async (req, res, next) => {
    try {
        const query = req.query;
        // console.log(query);

        const products = await getProductsService(query);
        console.log(products);
        if (products.length === 0) {
            return res.status(200).json({
                message:
                    "You've no data or entered a wrong queries. please insert first then find data or check your queries",
            });
        }
        return res.status(200).json(products);
    } catch (error) {}
};

// export const getProduct = async (req, res, next) => {
//     const product = await Product.findById(req.query.id);

//     if (!product) {
//         res.status(404).json({
//             error: "Product not found.",
//         });
//     }

//     res.status(200).json({
//         product,
//     });
// };

module.exports = { getProductsController, postProductsController };
