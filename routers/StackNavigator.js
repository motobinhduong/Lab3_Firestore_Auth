import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "../Screens/Contacts";
import Profile from "../Screens/Profile";
import Favorites from "../Screens/Favorites";

const Stack = createStackNavigator()
const StackNavigator =()=>{
    
    return(
        <Stack.Navigator>
            <Stack.Screen name="Contacts" component={Contacts}
            options={{
                headerTitleAlign:"center",

            }}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Favorites" component={Favorites}/>
        </Stack.Navigator>
    )


}
 export default StackNavigator;