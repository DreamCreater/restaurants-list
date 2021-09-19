import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
	const [restaurants, setRestaurants] = useState([]);
	const [isError, setIsError] = useState(false);

	const searchApi = async (term) => {
		setIsError(false);
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term,
					location: "San jose",
				},
			});
			setRestaurants(response.data.businesses);
		} catch (err) {
			setIsError(true);
		}
	};

	useEffect(() => {
		searchApi("");
	}, []);

	return [searchApi, restaurants, isError];
};
