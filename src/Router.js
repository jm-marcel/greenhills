import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AdminHome from "./screens/AdminHome";
import Areas from "./screens/Areas";
import Main from "./screens/Main";
import Profile from "./screens/Profile";
import Registered from "./screens/Registered";
import Schedule from "./screens/Schedule";
import Scheduled from "./screens/Scheduled";
import Schedules from "./screens/Schedules";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import UserHome from "./screens/UserHome";

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
    Registered: {
      screen: Registered,
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
    UserHome: {
      screen: UserHome,
      navigationOptions: ({ navigation }) => {
        return {
          title: "",
        };
      },
    },
    AdminHome: {
      screen: AdminHome,
      navigationOptions: ({ navigation }) => {
        return {
          title: "",
        };
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          title: "",
        };
      },
    },
    Scheduled: {
      screen: Scheduled,
      navigationOptions: ({ navigation }) => {
        return {
          title: "",
        };
      },
    },
    Schedule: {
      screen: Schedule,
      navigationOptions: ({ navigation }) => {
        return {
          title: "",
        };
      },
    },
    Areas: {
      screen: Areas,
      navigationOptions: ({ navigation }) => {
        return {
          title: "",
        };
      },
    },
    Schedules: {
      screen: Schedules,
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
