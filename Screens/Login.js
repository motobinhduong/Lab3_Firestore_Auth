import { useEffect, useState } from "react";
import { View ,Image, Text} from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
import { login, useMyContextProvider } from "../store";
//import { useMyContextProvider } from "../store";

const Login =()=>{
const [ controller, dispatch] = useMyContextProvider()
const [ email, setEmail] = useState("")
const [password, setPassword] = useState("")
const {userLogin} = controller
useEffect(()=>{
    console.log("UserLogin: "+ userLogin)
},[userLogin])
const handleLogin= ()=>{
    login(dispatch, email, password)
}

return(
    <View style={{flex:1, justifyContent:"center",backgroundColor:"white", padding:10}}>
        <Image
            resizeMode="stretch"
            source={require("../assets/logofirebase.png")}
            style={{height:100, marginBottom:20}}
            />
        <TextInput
        label={"Email"}
        value={email}
        onChangeText={setEmail} 
        placeholder="Nhap dia chi Email"/>
        
        <TextInput
        label={"Password"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry 
        placeholder="Nhap mat khau"/>
        
        <Button mode="contained" buttonColor="red"
        onPress={handleLogin}>
            Login
        </Button>
        <View style ={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"}}>
            <Text>
                Don't have an account
            </Text>
            <Button 
            >
                Sign up
            </Button>
        </View>
    </View>
)
}
export default Login;
