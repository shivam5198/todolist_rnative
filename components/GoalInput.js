import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
 
const addGoalHandler =() =>{
  props.onAddGoal(enteredGoal);
  setEnteredGoal('')
}

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        /> 
        <View style={styles.btnContainer}>
       <View>
          <Button title="ADD" onPress={addGoalHandler} /> 
       </View>
       <View>
          <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
   // flexDirection: 'row',
    justifyContent: 'center',
    flex:1,
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 30
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%'
  }
});

export default GoalInput;
