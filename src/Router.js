import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from "./screens/Main";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({ navigation }) => {
        return {
          title: "",
        };
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: ({ navigation }) => {
        return {
          title: "",
        };
      },
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: ({ navigation }) => {
        return {
          title: "",
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        color: "white",
        fontSize: 20,
        flexGrow: 1,
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: "#191d21",
      },
      headerTintColor: "white",
    },
  }
);

const Router = createAppContainer(StackNavigator);

export default Router;
