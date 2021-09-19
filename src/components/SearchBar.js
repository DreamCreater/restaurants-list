import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({
	searchTerm,
	onTextChange,
	onKeyPressed,
	onSearchSubmit,
}) => {
	return (
		<View style={styles.background}>
			<Feather style={styles.icon} name='search' />
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				value={searchTerm}
				onChangeText={onTextChange}
				style={styles.textInput}
				onEndEditing={onSearchSubmit}
				onKeyPress={onKeyPressed}
				placeholder='Search'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		marginTop: 15,
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 7,
		marginHorizontal: 15,
		flexDirection: "row",
		marginBottom: 10,
	},
	icon: {
		color: "black",
		fontSize: 40,
		alignSelf: "center",
		marginHorizontal: 15,
	},
	textInput: {
		flex: 1,
		fontSize: 18,
	},
});

export default SearchBar;
