import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Home from "../Screens/Home";
//import { logout, useMyContextProvider } from "../store";
//import { Button } from "react-native-paper";
//import { useEffect } from "react";

const Stack = createStackNavigator()
const Router = ()=>{
    // const [controller, dispatch] = useMyContextProvider()
    // const {userLogin} = controller
    // const handleLogout =()=>{
    //     logout(dispatch)
    // }
    // useEffect(()=>{
    //     if(userLogin==mull)
    //     navigation.navigate("Login")
    // },[])
    return(
        <Stack.Navigator
        initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Home" component={Home}/>
            {/* options={{
                title:"Hello" +userLogin.fullname,
                headerTitleAlign:"center",
                headerRight:(props) =><Button>Logout</Button>
            }} */}

        </Stack.Navigator>
    )
}
export default Router;