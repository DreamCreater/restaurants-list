import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer gmWRLBMYCAmqFpsTly7_QH-Mw3yuBzXI1oBf0e4qwqxhTGjEmuXUgzKGxdtP4XimIjvhYQrGZeVLu8pZHnNEJ72Ve80-pYUUx-gyOcG3RG7-c8iI0fIP9gbChd9GYXYx",
	},
});
