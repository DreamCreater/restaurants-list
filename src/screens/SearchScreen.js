import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import RestaurantsList from "../components/RestaurantsList";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchApi, restaurants, isError] = useRestaurants();

	const filterResultsByPrice = (price) => {
		// price === '$' || '$$' || '$$$'
		return restaurants.filter((result) => {
			return result.price === price;
		});
	};

	const handleKeyPressed = (event) => {
		if (event.keyCode === 13) {
			searchApi(searchTerm);
		}
	};

	return (
		<>
			<SearchBar
				searchTerm={searchTerm}
				onKeyPressed={handleKeyPressed}
				onTextChange={setSearchTerm}
				onSearchSubmit={() => searchApi(searchTerm)}
			/>
			{isError && <Text>Something unexpected happened</Text>}
			{restaurants.length > 0 && (
				<ScrollView>
					<RestaurantsList
						title='Cost Effective'
						restaurants={filterResultsByPrice("$")}
					/>
					<RestaurantsList
						title='Bit Pricier'
						restaurants={filterResultsByPrice("$$")}
					/>
					<RestaurantsList
						title='Big Spender'
						restaurants={filterResultsByPrice("$$$")}
					/>
				</ScrollView>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default SearchScreen;
