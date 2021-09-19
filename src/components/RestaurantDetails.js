import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const RestaurantDetail = ({ restaurant }) => {
	return (
		<View style={styles.details}>
			<Image style={styles.image} source={{ uri: restaurant.image_url }} />
			<Text style={styles.name}>{restaurant.name}</Text>
			<Text>
				{restaurant.rating} Stars, {restaurant.review_count} reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	details: {
		marginLeft: 15,
	},
	image: {
		width: 250,
		height: 120,
		borderRadius: 5,
		marginBottom: 5,
	},
	name: {
		fontWeight: "bold",
	},
});

export default RestaurantDetail;
