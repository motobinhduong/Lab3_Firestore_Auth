import React,{useState} from "react";
import { Button, View ,Text} from "react-native";

export default() =>{
  const [pressCount, setPressCount] = useState(0);

  return(
    <View style={{alignItems:"center", marginTop: 20}}>
      <Text>You are pressed the  button: {pressCount} time(s)</Text>
      <Button title={`Pressed ${pressCount} time(s)`}
      onPress={()=> setPressCount(pressCount+1)}/>
    </View>
  )
}