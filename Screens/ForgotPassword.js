import { useState } from "react"
import {  Alert, View } from "react-native"
import { Text, TextInput,Button } from "react-native-paper"
import auth from "@react-native-firebase/auth"

const ForgotPassword=()=>{
    const [email, setEmail]= useState("")
    const handleSendEmail=()=>{
        auth().sendPasswordResetEmail(email)
        .then(()=>Alert.alert("Vui long kiem tra mail"))
        .catch(e=> Alert.alert(e.message))
    }
   return(
    <View style ={{flex: 1,justifyContent:"center"}}>
            <TextInput
            label={"Email"}
            value={email}
            onChangeText={setEmail}/>
            
            <Button mode="contained"
            onPress={handleSendEmail}>
                Gui
            </Button>
        </View>
   )
}
export default ForgotPassword;