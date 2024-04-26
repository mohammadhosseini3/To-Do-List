import React , {useState} from "react"
import Task from "./components/Task"
import { StyleSheet, Text, View ,TextInput, TouchableOpacity } from 'react-native'


export default function App() {

  const [task,setTask] = useState('')
  const [taskItems,setTaskItems] = useState([])

  const handleTextInputChange = (text) => {
    setTask(text)
  }

  const handleBtnPress = () => {
    setTaskItems([...taskItems,task])
    setTask(null)
  }

  const taskCompleted = (index) => {
    const newArray = [...taskItems]
    newArray.splice(index,1)
    setTaskItems(newArray)
  }

  return (
    <View style={styles.container}>
      {/* Today's Task  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((item,index) => {
              return (
                <TouchableOpacity key={index} onPress={() => taskCompleted(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/* Write a task */}
      <View style={styles.taskInput}>
        <TextInput 
          style={styles.textInput}
          placeholder='Write a task ...'
          onChangeText={handleTextInputChange}
          value={task}>
        </TextInput>

        <TouchableOpacity onPress={handleBtnPress}>
          <View style={styles.btnInput}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0ECEB',
  },
  taskWrapper:{
    paddingLeft:20,
    paddingTop:152,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:20
  },
  taskInput:{
    flexDirection:"row",
    justifyContent:"space-around",
    position:'absolute',
    bottom:60,
    alignItems:"center",
    width:"100%"
  },
  btnInput:{
    width:50,
    height:50,
    borderRadius:60,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
    borderColor:"#372D73",
    borderWidth:1,
  },
  textInput:{
    borderRadius:60,
    backgroundColor:"white",
    marginLeft:20,
    height:50,
    width:250,
    padding:15,
    borderColor:"#372D73",
    borderWidth:1,
  }
});
