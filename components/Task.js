
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Task({ task, index, completeTask, deleteTask }) {
    return (
        <View style={styles.task}>
            <Text style={task.completed ? styles.completed : styles.text}>{task.text}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => completeTask(index)}>
                    <Icon name='check' size={20} color='green' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTask(index)}>
                    <Icon name='trash' size={20} color='red' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    completed: {
        fontSize: 16,
        textDecorationLine: 'line-through',
        color: '#9E9E9E',
    },
    text: {
        fontSize: 16,
        color: '#212121',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    }
})