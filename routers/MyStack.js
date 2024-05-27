import { createStackNavigator } from "@react-navigation/stack"
import Loginn from "../Screens/Loginn";
import Registerr from "../Screens/Registerr";
import ForgotPassword from "../Screens/ForgotPassword";

const Stack = createStackNavigator()
const MyStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Loginn}/>
            <Stack.Screen name="Registerr" component={Registerr}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        </Stack.Navigator>
    )
}
export default MyStack;