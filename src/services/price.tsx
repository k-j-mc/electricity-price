import axios from "axios";
const baseUrl = "/v1/latest-prices.json";

const getData = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const priceService = { getData };

export default priceService;
