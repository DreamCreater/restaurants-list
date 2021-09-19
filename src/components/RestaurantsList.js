import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantDetail from "./RestaurantDetails";

const RestaurantsList = ({ title, restaurants, navigation }) => {
	const extractKey = (restaurant) => {
		return restaurant.id;
	};

	const handleRestaurantClick = (restaurant) => {
		navigation.navigate("Restaurant", { id: restaurant.id });
	};

	if (!restaurants.length) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				data={restaurants}
				showsHorizontalScrollIndicator={false}
				keyExtractor={extractKey}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => handleRestaurantClick(item)}>
							<RestaurantDetail restaurant={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 15,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginLeft: 15,
		marginBottom: 5,
	},
});

export default withNavigation(RestaurantsList);
