import React from 'react'
import { View , Text , StyleSheet,TouchableOpacity } from 'react-native'

const Task = () => {
    return(
        <View style={styles.taskView}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.rectangle}></TouchableOpacity>
                <Text style = {styles.taskText}>kjhhgc</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskView:{

    },
    itemLeft:{},
    rectangle:{},
    taskText:{},
    circular:{}
})

export default Task;