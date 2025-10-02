import { toDoType } from "@/constants/Types";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";



export default function Index() {
  const [text, setText] = useState("");
  const [task, setTask] = useState<toDoType[]>([])
  const [refresh, setRefresh] = useState(false)


//GET-Anfrage
  useEffect(()=>{
    axios.get("http://localhost:3001/tasks")
    .then(function(response){
      setTask(response.data)
    })
    .catch(function(error){
      console.log(error)

    })
    },[refresh])


  //POST-Anfrage
  const createToDo = () => {
    axios.post("http://localhost:3001/tasks", {
      title: text, id: (task.length+1), completed: false
    }).then(function (response){
      console.log(response);
      setRefresh(prev => !prev)
    })}


  //PATCH-Anfrage
  const changeCompletion = (completed: boolean, id:string) =>{
  axios.patch(`http://localhost:3001/tasks/${id}`, {
    completed: !completed
  }).then(() => {
    setRefresh(prev => !prev);
  })}

  //DELETE-Anfrage
  const deleteToDo = async () => {
    try {
      const completedTasks = task.filter(t => t.completed);


      for (const t of completedTasks) {
        await axios.delete(`http://localhost:3001/tasks/${t.id}`);}
      
        setRefresh(prev => !prev)
      } catch (err){
        console.log(err)
      }}



  return (
    <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={text} onChangeText={setText} />
        <TouchableOpacity style={styles.inputButton} onPress={createToDo}>
          <Text style={{ fontSize: 12 }}> Submit </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
      <FlatList
        style={{}}
        data={task}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.listText}>
              {item.title}
            </Text>
            <TouchableOpacity style={styles.listButtonDone} onPress={()=> changeCompletion(item.completed, item.id)}>
              <Text> {item.completed? "x" : ""}</Text>
            </TouchableOpacity>
          </View>  

        )}

      ></FlatList>
      <TouchableOpacity style={[styles.inputButton, {backgroundColor:"red", alignItems: "center", }]} onPress={deleteToDo}>
        <Text style={{ fontSize: 16 }}> Remove completed tasks </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  inputButton: {
    backgroundColor: "pink",
    borderWidth: 1,
    borderRadius: 10
  },

  listContainer: {
    flex: 8,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    margin: 40,
    marginTop: 5
  },

  itemContainer: {
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    borderRadius: 10,
    padding: 10,
    margin: 10

  },

  listButtonDone: {
    backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5
  },

  listButtonUndone:{
    backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 10
  },

  listText: {
  },

  input: {
    height: 35,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  }
});
