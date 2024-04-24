import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Today's Task  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>

        </View>
      </View>
    </View>
  );
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

  }
});
