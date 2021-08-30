import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AdminHome from "./screens/admin/AdminHome";
import AdminProfile from "./screens/admin/AdminProfile";
import Areas from "./screens/admin/Areas";
import Schedules from "./screens/admin/Schedules";
import Registered from "./screens/auth/Registered";
import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";
import Main from "./screens/Main";
import Schedule from "./screens/user/Schedule";
import Scheduled from "./screens/user/Scheduled";
import UserHome from "./screens/user/UserHome";
import UserProfile from "./screens/user/UserProfile";

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
    UserProfile: {
      screen: UserProfile,
      navigationOptions: ({ navigation }) => {
        return {
          title: "",
        };
      },
    },
    AdminProfile: {
      screen: AdminProfile,
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
