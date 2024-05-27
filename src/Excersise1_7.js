import React, {useState} from "react";
import { Text,View, StyleSheet, ScrollView, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
  container:{
    padding:20,
  },
  label:{
    fontWeight:"bold",
    fontSize:18,
  },
  input:{
    marginTop:10,
    backgroundColor:"rgba(0, 0, 0, 0.1)",
    padding:10,
    borderRadius:5,
  },
});

export default() =>{
  const[name, setName] = useState("");

  return(
    <View style={styles.container}>
      <View style={styles.label}>What is your name</View>
    <TextInput
    style={styles.input}
    placeholder="Please input name"
    placeholderTextColor="rgba(0, 0, 0, 0.5)"
    onChangeText={(text)=>setName(text)}
    value={name}
    />
    <Button
    title="say heeloo"
    onPress={()=>{
      alert(`hello, ${name}!`);
      setName("");
    }}
    />
    </View>
    
  );
};