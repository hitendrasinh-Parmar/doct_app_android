import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


export enum RootRoutes {
    Auth = "Auth",
    Main = "Main",
}


export enum MainRoutes {
    Tabs = "Tabs",
    Settings = "Settings",
}

export enum TabsRoutes {
    Settings = "Settings",
    Profile = "Profile"
}

export type RootStackParamList = {
    // [RootRoutes.Auth]: NavigatorScreenParams<AuthStackParamList>;
    [RootRoutes.Main]: NavigatorScreenParams<MainStackParamList>;
};

export type MainStackParamList = {
    [MainRoutes.Tabs]: NavigatorScreenParams<TabsStackParamList>;
    [MainRoutes.Settings]: undefined;
};



export type TabsStackParamList = {
    [TabsRoutes.Settings]: undefined;
    [TabsRoutes.Profile]: undefined;
};


export const RootStack = createStackNavigator();
export const MainStack = createStackNavigator<MainStackParamList>();

export const TabsStack = createBottomTabNavigator<TabsStackParamList>();