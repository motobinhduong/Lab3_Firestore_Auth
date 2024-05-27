import { useEffect, useState } from "react";
import { View } from "react-native";
import { Avatar, Icon, Text } from "react-native-paper";
import { fetchRandomContacts } from "../utility/Api";
import DetailListItem from "../components/DetailListItem";

const Profile =({route})=>{
    // const [contact, setContact] = useState({})
    // useEffect(()=>{
    //     fetchRandomContacts()
    //     .then(data=>
    //     {
    //         console.log(data)
    //         setContact(data)
    //     })
    //     .catch(e => console.log(e))
    // },[])
    const {name, avatar, phone, cell, email} = route.params.contact
    return(
        <View style ={{flex:1}}>
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"aqua",
            }}>
                <Avatar.Image source={{uri:avatar}} size={100}/>
                <Text variant="headlineLarge" style={{color:"white"}}>{name}</Text>
                <Text>
                    <Icon source={"phone"}/> {phone}
                </Text>
            </View>
            <View style={{flex:1}}>
                <DetailListItem icon="email" label="Email" value={email}/>
                <DetailListItem icon="phone" label="Work" value={phone}/>
                <DetailListItem icon="cellphone" label="Personal" value={cell}/>
            </View>
        </View>
    )
}
export default Profile;