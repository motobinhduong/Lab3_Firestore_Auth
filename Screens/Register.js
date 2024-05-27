import { useState } from "react";
import { View ,Image, Text} from "react-native";
import { Button, TextInput } from "react-native-paper";
//import { createAccount } from "../store";

const Register =({navigation})=>{


const [ email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [fullname, setFullname] = useState("")
const [ confirmpassword, setConfirmpassword] = useState("")
const handleCreateAccout =()=>{
    createAccount(email, password, fullname)
}
return(
    <View style={{flex:1, justifyContent:"center"}}>
        <Image
            resizeMode="stretch"
            source={require("../assets/logofirebase.png")}
            style={{height:100, marginBottom:20, alignItems:"center"}}
            />
        <TextInput
        label={"FullName"}
        value={fullname}
        onChangeText={setFullname}
        placeholder="Nhap Ho Va Ten" />
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
        placeholder="Nhap Mat Khau" />
        <TextInput
        label={"ConfirmPassword"}
        value={confirmpassword}
        onChangeText={setConfirmpassword}
        secureTextEntry
        placeholder="Nhap lai mat khau" />
        <Button mode="contained" buttonColor="red"
         onPress={handleCreateAccout}
        >
            Create Account
        </Button>
        <View style ={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"}}>
            <Text>
                Already got an account
            </Text>
            <Button onPress={()=>navigation.navigate("Login")}>
                Login
            </Button>
        </View>
    </View>
)
}
export default Register;
