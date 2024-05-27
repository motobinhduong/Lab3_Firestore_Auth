import { useEffect, useState } from "react";
import { FlatList,View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { fetchContacts } from "../utility/Api";
import ContactListItem from "../components/ContactListItem";

 const Contacts =({navigation})=>{
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(()=>{
    fetchContacts()
    .then(data=>{
      setContacts(data)
      setLoading(false)
      setError(false)
    })
    .catch(e =>{
      console.log(e)
      setLoading(false)
      setError(false)
    })
  },[])
  const renderItem = ({item}) =>{
    return(
      <ContactListItem
      name={item.name}
      phone={item.phone}
      avatar={item.avatar}
      onPress={()=> navigation.navigate("Profile",{contact: item})}/>
    )
  }
  return(
    <View style ={{flex:1, justifyContent:"center"}}>
      {loading && <ActivityIndicator size={40} color="red"/>}
      {error&& <Text variant="headlineLarge">Error loading ...</Text>}
      <FlatList
      data={contacts}
      keyExtractor={item=> item.id}
      renderItem={renderItem}/>
    </View>
  )
 }
 export default Contacts;