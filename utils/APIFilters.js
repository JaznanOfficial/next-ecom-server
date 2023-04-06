const APIFilters = (query, queryStr) => {
    const search = () => {
        const keyword = queryStr.keyword
            ? {
                  name: {
                      $regex: queryStr.keyword,
                      $options: "i",
                  },
              }
            : {};
        query = query.find({ ...keyword });
        return APIFilters(query, queryStr);
    };

    const filter = () => {
        const queryCopy = { ...queryStr };
        const removeFields = ["keyword", "page"];
        removeFields.forEach((el) => delete queryCopy[el]);

        let output = {};
        for (let key in queryCopy) {
            if (!key.match(/\b(gt|gte|lt|lte)\b/)) {
                output[key] = queryCopy[key];
            } else {
                const prop = key.split("[")[0];
                const operator = key.match(/\[(.*)\]/)[1];
                if (!output[prop]) {
                    output[prop] = {};
                }
                output[prop][`$${operator}`] = queryCopy[key];
            }
        }

        query = query.find(output);
        return APIFilters(query, queryStr);
    };

    const pagination = (resPerPage) => {
        const currentPage = Number(queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);
        query = query.limit(resPerPage).skip(skip);
        return APIFilters(query, queryStr);
    };

    const getQuery = () => query;

    return {
        search,
        filter,
        pagination,
        getQuery,
    };
};

module.exports = APIFilters;
