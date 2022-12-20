import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export enum RootRoutes {
  Auth = 'Auth',
  Main = 'Main',
}

export enum MainRoutes {
  Tabs = 'Tabs',
  Settings = 'Settings',
}

export enum TabsRoutes {
  Home = 'Home',
  Profile = 'Profile',
  Blog = 'Blog',
}

export enum AuthRoutes {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
}

export type RootStackParamList = {
  [RootRoutes.Auth]: NavigatorScreenParams<AuthStackParamList>;
  [RootRoutes.Main]: NavigatorScreenParams<MainStackParamList>;
};

export type MainStackParamList = {
  [MainRoutes.Tabs]: NavigatorScreenParams<TabsStackParamList>;
  [MainRoutes.Settings]: undefined;
};

export type AuthStackParamList = {
  [AuthRoutes.SignIn]: undefined;
  [AuthRoutes.SignUp]: undefined;
};

export type TabsStackParamList = {
  [TabsRoutes.Profile]: undefined;
  [TabsRoutes.Blog]: undefined;
  [TabsRoutes.Home]: undefined;
};

export const RootStack = createStackNavigator();
export const MainStack = createStackNavigator<MainStackParamList>();
export const AuthStack = createStackNavigator<AuthStackParamList>();
export const TabsStack = createBottomTabNavigator<TabsStackParamList>();
