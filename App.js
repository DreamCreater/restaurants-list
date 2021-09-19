import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RestaurantShowScreen from "./src/screens/RestaurantShowScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
		Restaurant: RestaurantShowScreen,
	},
	{
		initialRouteName: "Search",
		defaultNavigationOptions: {
			title: "Resturant Search",
		},
	}
);

export default createAppContainer(navigator);
