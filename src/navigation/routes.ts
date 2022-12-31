import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export enum RootRoutes {
  Auth = 'Auth',
  Main = 'Main',
  Onboarding = 'Onboarding',
}

export enum MainRoutes {
  Tabs = 'Tabs',
  Settings = 'Settings',
  SeeAllScreen = 'SeeAllScreen'
}

export enum TabsRoutes {
  Home = 'Home',
  Favourite = 'Favourite',
  Blog = 'Blog',
  Chat = 'Chat',
}

export enum AuthRoutes {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
}

export enum OnboardingRoutes {
  Onboarding = 'Onboarding',
}

export type RootStackParamList = {
  [RootRoutes.Auth]: NavigatorScreenParams<AuthStackParamList>;
  [RootRoutes.Main]: NavigatorScreenParams<MainStackParamList>;
};

export type MainStackParamList = {
  [MainRoutes.Tabs]: NavigatorScreenParams<TabsStackParamList>;
  [MainRoutes.Settings]: undefined;
  [MainRoutes.SeeAllScreen]: undefined;
};

export type AuthStackParamList = {
  [AuthRoutes.SignIn]: undefined;
  [AuthRoutes.SignUp]: undefined;
  [OnboardingRoutes.Onboarding]: undefined;
};
export type OnboardingStackParamList = {
  [OnboardingRoutes.Onboarding]: undefined;
};
export type TabsStackParamList = {
  [TabsRoutes.Home]: undefined;
  [TabsRoutes.Favourite]: undefined;
  [TabsRoutes.Blog]: undefined;
  [TabsRoutes.Chat]: undefined;
};

export const RootStack = createStackNavigator();
export const MainStack = createStackNavigator<MainStackParamList>();
export const AuthStack = createStackNavigator<AuthStackParamList>();
export const OnboardingStack = createStackNavigator<OnboardingStackParamList>();
export const TabsStack = createBottomTabNavigator<TabsStackParamList>();
