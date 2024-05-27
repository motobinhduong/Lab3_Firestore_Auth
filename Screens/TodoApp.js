import { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import firestore from "@react-native-firebase/firestore"
import { Appbar, Button, Icon, Text, TextInput } from "react-native-paper";


const TodoApp=()=>{
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState([])
    const cTodos = firestore().collection("Todos")
    const addNewTodo=()=>{
        cTodos.add({
            title: newTodo,
            complete: false,
        })
        .then(()=> console.log("Addnewtodo"))
        .catch(e => console.log(e.message))
    }
    useEffect(()=>{
        cTodos.onSnapshot(
            listTodos=>{
                var result=[]
                listTodos.forEach(
                    todo => 
                        {
                            const {title, complete} = todo.data()
                            result.push({
                                id: todo.id,
                                title,
                                complete
                            })
                        }
                    
                )
                console.log(result)
                setTodos(result)
            }
        )
    },[])
    const updateTodo =({id, complete})=>{
        cTodos.doc(id)
        .update({
            complete: !complete
        })
        .then(()=>console.log("da update"))
    }
    const renderItem=({item})=>{
        const{id, title, complete} =item
        return(
            <Button icon={(complete)? "home": "start"}
            onPress={()=>updateTodo(item)}>
                {title} </Button>
        )
           
        
    }
    return(
        <View style={{flex: 1}}>
            <Appbar style ={{ backgroundColor:"aqua"}}>
                <Appbar.Content title="To do app" style ={{alignItems:"center"}} color="black"/>
            </Appbar>
            <FlatList
            data={todos}
            keyExtractor={item =>item.id}
            renderItem={renderItem}/>
                
            <TextInput label={"New Todo"}
                value={newTodo}
                onChangeText={setNewTodo}/>
            <Button onPress={addNewTodo}
           mode="contained" >
                    Add new to do
            </Button>
            
        </View>
    )
} 
export default TodoApp;