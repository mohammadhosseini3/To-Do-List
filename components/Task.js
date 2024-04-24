import React from 'react';
import { View , Text , StyleSheet } from 'react-native'

const Task = (props) => {
    <View>
        <Text>{props.text}</Text>
    </View>
}

const styles = StyleSheet.create({
    taskView:{

    },
    taskText:{
        fontSize:40
    }
})

export default Task;