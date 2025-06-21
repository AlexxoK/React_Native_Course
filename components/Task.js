import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Task = ({ task, index, completeTask, deleteTask }) => {
  return (
    <View style={styles.task}>
      <Text style={task.completed ? styles.completed : styles.text}>{task.text}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => completeTask(index)}>
          <Icon name="check" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(index)}>
          <Icon name="trash" size={20} color="red" />
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
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },
  text: {
    fontSize: 16,
    color: '#212121',
    flexShrink: 1,
  },
  completed: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#9E9E9E',
    flexShrink: 1,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
})

export default Task;
