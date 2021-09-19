import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const RestaurantShowScreen = ({ navigation }) => {
	const [data, setData] = useState(null);
	const id = navigation.getParam("id");

	const fetchRestaurant = async () => {
		const response = await yelp.get(`/${id}`);
		setData(response.data);
	};

	useEffect(() => {
		if (data === null) {
			fetchRestaurant();
		}
	}, [data]);

	if (!data) {
		return null;
	}

	return (
		<View>
			<Text>{data.name}</Text>
			<FlatList
				data={data.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 300,
	},
});

export default RestaurantShowScreen;
