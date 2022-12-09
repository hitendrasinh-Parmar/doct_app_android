import React from "react"
import HomeTabsNavigator from "./home.navigator"
import { MainRoutes, MainStack } from "./routes"


const MainNavigator = (): React.ReactElement => {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name={MainRoutes.Tabs} component={HomeTabsNavigator} />
        </MainStack.Navigator>
    )
}

export default MainNavigator