import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View } from "react-native";
import { Icon, Text } from "react-native-paper";
import Contacts from "../Screens/Contacts";
import Favorites from "../Screens/Favorites";
import User from "../Screens/User";
import StackNavigator from "./StackNavigator";

const Tab = createMaterialBottomTabNavigator()
const BottomTabNavigator =()=>{
    return(
        <Tab.Navigator
            screenOptions={{headerShown:false}}
            backBehavior="history">
            
            <Tab.Screen name="Contacts" component={StackNavigator}
            options={{
                tabBarIcon:"format-list-bulleted",
                
            }}/>
            <Tab.Screen name="Favorites" component={Favorites}
            options={{
                tabBarIcon:"star"
            }}/>
            <Tab.Screen name="User" component={User}
            options={{
                tabBarIcon:"account"
            }}/>
        </Tab.Navigator>
        
    )
}
export default BottomTabNavigator;