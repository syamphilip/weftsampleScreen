import {useNavigation} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

let sampleData = [
  {key: 1, isCompleted: false, todo: 'buy milk', Date: '2021-07-22'},
  {key: 2, isCompleted: false, todo: 'Project Deadline', Date: '2021-08-05'},
];

function TodoScreen() {
  const navigationPointer = useNavigation();

  const [title, settitle] = useState(null);
  const [date, setdate] = useState(null);
  const [count, setCount] = useState(0);

  const [isCalenderOpen, setisCalenderOpen] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const [todoList, settodoList] = useState(sampleData);
  const [TotalTodoCount, setTotalTodoCount] = useState(todoList.length);

  const handleDateSet = date => {
    setdate(date);
    setisCalenderOpen(false);
  };

  function handleChangeStatus(item, index) {
    todoList[index].isCompleted = true;
    settodoList(todoList);
    setCount(count+1)
  }

  function handleModalClose() {
    setmodalVisible(false);
    settitle(null);
    setdate(null);
  }

  function handleSubmit(data) {
    if (title === null) {
      console.log('error');
    } else {
      settodoList(data);
      setTotalTodoCount((TotalTodoCount+1))
      handleModalClose();
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.appBarContainer}>
        <TouchableOpacity onPress={() => navigationPointer.goBack()}>
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.appBarText}>TODO</Text>
        </View>
        <View></View>
      </View>
      <View style={styles.contentContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.todosText}>Todos</Text>
          <ScrollView>
            {todoList.map((item, index) => (
              <TouchableOpacity
                key={item['key']}
                style={styles.todoView}
                onPress={() => handleChangeStatus(item, index)}>
                <View>
                    <View style={styles.titleView}>
                  <Text style={styles.titleText}>
                    Title {item.isCompleted ? <View style={styles.completedView}><Text style={styles.completedText}>Completed</Text></View> : null}
                  </Text>
                  </View>
                  <Text style={styles.itemText}>{item['todo']}</Text>
                  
                </View>
                <View>
                  <Text style={styles.titleText}>Due Date</Text>
                  <Text style={styles.itemText}>{item['Date']}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {!modalVisible ? (
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => setmodalVisible(true)}>
          <Icon name="plus" size={25.0} color="white" />
        </TouchableOpacity>
      ) : null}

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.addTodoView}>
          <Text style={styles.addTodoText}>Add Todo {date}</Text>
          <View style={styles.textInputView}>
            <TextInput
              placeholder="Title"
              style={styles.textInput}
              onChangeText={value => settitle(value)}
              value={title}
            />
          </View>

          <View style={styles.PickAndSubView}>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setisCalenderOpen(true)}>
              <Text style={styles.dateButtonText}>Pick Your Date</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() =>
                handleSubmit([
                  ...todoList,
                  {
                    key: TotalTodoCount + 1,
                    isCompleted: false,
                    todo: title,
                    Date: date,
                  },
                ])
              }>
              <Text style={styles.dateButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>

          {isCalenderOpen ? (
            <View style={styles.calenderView}>
              <Calendar onDayPress={day => handleDateSet(day.dateString)} />
            </View>
          ) : null}

          {modalVisible ? (
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => handleModalClose()}>
              <Icon name="times-circle" size={25.0} color="white" />
            </TouchableOpacity>
          ) : null}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default TodoScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: heightScreen,
    width: widthScreen,
    flex: 1,
    backgroundColor: 'white',
  },
  appBarContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15.0,
    backgroundColor: 'white',
  },
  appBarText: {
    fontWeight: '700',
    fontSize: 15.0,
  },
  cartRedDot: {
    backgroundColor: 'red',
    padding: 2.0,
    borderRadius: 50.0,
    height: 20.0,
    width: 20.0,
    position: 'absolute',
    top: -10.0,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotText: {
    color: 'white',
    fontSize: 10.0,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 15.0,
    flex: 2,
  },
  todosText: {
    fontSize: 22.0,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  todoView: {
    borderRadius: 10.0,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10.0,
    marginVertical: 5.0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
    color: '#2c3e50',
    fontStyle: 'italic',
  },
  itemText: {
    fontSize: 18.0,
  },
  addTodoView: {
    width: '100%',
    backgroundColor: '#2c3e50',
    borderTopLeftRadius: 10.0,
    borderTopRightRadius: 10.0,
    padding: 15.0,
    position: 'absolute',
    bottom: 0,
  },
  addTodoText: {
    color: 'white',
    fontSize: 20.0,
    fontWeight: 'bold',
  },
  textInputView: {
    justifyContent: 'space-between',
    marginTop: 10.0,
  },
  textInput: {
    backgroundColor: 'white',
    margin: 5.0,
    borderRadius: 5.0,
    padding: 10.0,
  },
  plusButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#464660',
    padding: 15.0,
    borderRadius: 50.0,
    margin: 20.0,
  },
  calenderView: {
    width: '100%',
  },
  dateButton: {
    backgroundColor: '#6E85B2',
    padding: 10.0,
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5.0,
    marginVertical: 15.0,
    borderRadius: 5.0,
  },
  dateButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: -25,
    right: 30,
    backgroundColor: '#464660',
    padding: 15.0,
    borderRadius: 50.0,
  },
  PickAndSubView: {
    flexDirection: 'row',
  },
  titleView:{
      flexDirection:'row',
      alignItems:'center'
  },
  completedView:{
      backgroundColor:'#2c3e50',
      paddingHorizontal:5.0,
      borderRadius:2.0
  },
  completedText:{
      fontWeight:'bold',
      color:'white'
  }
});
