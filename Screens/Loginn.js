import { useState } from "react"
import {  Alert, View } from "react-native"
import { Text, TextInput,Button } from "react-native-paper"
import auth from "@react-native-firebase/auth"

const Loginn=({navigation})=>{
    const [email, setEmail]= useState("")
    const[password, setPassword] = useState("")
    const handleLogin=()=>{
        auth().signInWithEmailAndPassword(email, password)
        .then(()=>Alert.alert("Dang nhap thanh cong"))
        .catch(e=> Alert.alert(e.message))
    }
    return( 
        <View style ={{flex: 1,justifyContent:"center"}}>
            <TextInput
            label={"Email"}
            value={email}
            onChangeText={setEmail}/>
            <TextInput
            label={"Password"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry/>
            <Button mode="contained"
            onPress={handleLogin}>
                Dang nhap
            </Button>
            <View style ={{flexDirection:"row"}}>
                <Button onPress={()=>navigation.navigate("Registerr")}>
                    Tao tai khoan
                </Button>
                <Button onPress={()=> navigation.navigate("ForgotPassword")}>
                    Quen mat khau
                </Button>

            </View>
        </View>
    )
}
export default Loginn;