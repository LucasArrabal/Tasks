import React, {useState, useEffect} from "react";
import { Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import database from "../../config/firebaseconfig";
import styles from "./style";
import { FontAwesome } from '@expo/vector-icons';


export default function Task({ navigation }){
const [task, setTask] = useState([]);

function deleteTask(id){
    database.collection("Tasks").doc(id).delete();
}

function deleteTask(id){
    database.collection("Tasks").doc(id).delete()
}

useEffect(() => {
    database.collection("Tasks").onSnapshot((query) =>{
        const list = []
        query.forEach((doc) =>{
            list.push({...doc.data(), id: doc.id})
        })
        setTask(list)
    })
}, [])

    return(
        <View style={styles.container}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            data={task}
            renderItem={(item) => {
                return(
                <View style={styles.allTasks}>
                    <TouchableOpacity style={styles.btnDelteTask}
                        onPress={()=> {
                            deleteTask(item.id)
                        }}>
                            <FontAwesome
                            name="trash"
                            size={23}
                            color="#F92e6a"
                            ></FontAwesome>
                    </TouchableOpacity>
                    <Text style={styles.textDesc}
                    onPress={()=> navigation.navigate("Details",{
                        id:item.id,
                        description: item.description
                    })}>
                        {item.description}
                    </Text>
                </View>)
                
            }}
            />
            <TouchableOpacity style={styles.btnNewTask}
            onPress={()=> navigation.navigate("NewTask")}>
                <Text style={styles.iconBtn}>+</Text>
            </TouchableOpacity>
        </View>
    )
}