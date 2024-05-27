import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity,View } from "react-native";
import { ActivityIndicator, Avatar,Text } from "react-native-paper";
import { fetchContacts } from "../utility/Api";

const Favorites =({navigation})=>{
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(()=>{
        fetchContacts()
        .then(data=>{
            setContacts(data)
            setLoading(false)
            setError(error)
        }
        )
        .catch(e=>{
            setLoading(false)
            setError(true)
            console.log(e)
        })
    },[])
    const renderItem = ({item}) => {
        const {avatar} = item
        return(
            <TouchableOpacity onPress={()=> navigation.navigate("Profile", {contact: item})}
            style={{padding:20}}>
                <Avatar.Image source={{uri:avatar}} size={80}/>

            </TouchableOpacity>
        )
    }
    return(
        <View>
            {loading&& <ActivityIndicator size={40} color="blue"/>}
            {error&& <Text>Error loading...</Text>}
            <FlatList
            data={contacts}
            keyExtractor={item=> item.id}
            renderItem={renderItem}
            numColumns={3}
            contentContainerStyle={{alignItems:"center"}}/>
        </View>
    )
}
export default Favorites;