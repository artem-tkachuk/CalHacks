import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginPage from "../screens/LoginPage";
import MainTabNavigator from "./MainTabNavigator";
import LoadingScreen from "../screens/LoadingScreen";

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Loading: LoadingScreen,
  Login: LoginPage,
  Main: MainTabNavigator
});
switchNavigator.path = "";

export default createAppContainer(switchNavigator);
