import { useState } from "react"
import {  Alert, View } from "react-native"
import { Text, TextInput,Button } from "react-native-paper"
import auth from "@react-native-firebase/auth"

const Registerr=()=>{
    const [email, setEmail]= useState("")
    const[password, setPassword] = useState("")
    const handleCreatAccount=()=>{
        auth().createUserWithEmailAndPassword(email, password)
        .then(()=>Alert.alert("Dang ky thanh cong"))
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
            onPress={handleCreatAccount}>
                Tao tai khoan
            </Button>
        </View>
    )
}
export default Registerr;