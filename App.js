import { StyleSheet, Text, View } from 'react-native'
import Task from "./components/Task"

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Task  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          <Task text="Task 1"/>
          <Task text="Task 2"/>
          <Task text="Task 3"/>
        </View>
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
  }
});
