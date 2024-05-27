import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper'; 

const Home = () => {
    const [newJob, setNewJob] = useState("")
  return (
    <View style={{flex:1, padding:10}}>
        <View style ={{flexDirection:"row"}}>
            <TextInput
            label={"New Job"}
            value={newJob}
            onChangeText={setNewJob}
            style={{width:300, marginRight:10}}/>
            <Button mode="contained">Add</Button>
        </View>
        <ScrollView style={{flex:1}}></ScrollView>
    </View>
  );
};



export default Home;
