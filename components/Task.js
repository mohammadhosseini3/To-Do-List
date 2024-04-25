import React from 'react'
import { View , Text , StyleSheet,TouchableOpacity } from 'react-native'

const Task = (props) => {
    return(
        <View style={styles.taskView}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.rectangle}></TouchableOpacity>
                <Text style = {styles.taskText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskView:{
        padding:15,
        backgroundColor:"white",
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:15,
        marginRight:30
    },
    itemLeft:{
        flexDirection:"row"
    },
    rectangle:{
        width:24,
        height:24,
        backgroundColor:"#67AAB5",
        opacity:0.5,
        borderRadius:5,
        marginRight:10
    },
    taskText:{
        fontSize:15
    },
    circular:{
        width:20,
        height:20,
        borderRadius:10,
        borderWidth:5,
        borderColor:"#2D6973"
    }
})

export default Task;