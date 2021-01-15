import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import { Octicons } from '@expo/vector-icons';

import TaskScreen from './screens/TaskScreen';
import NewTaskScreen from './screens/newTaskScreen';

const Stack = createStackNavigator();

function App() {

  let [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/Montserrat/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./assets/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-ExtraBold': require('./assets/Montserrat/Montserrat-ExtraBold.ttf')
  });

  const [data, setData] = React.useState([
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Warzone',
          checked: false
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Business',
          checked: false
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Rider',
          checked: false
        },
      ]);

      function removeItem(item){
        setData((prevData) => {
            return prevData.filter(todo => todo.id != item.id)
        })
      }

      function addItem(taskName){
        setData((prevData) => {
            return [
                {id: Math.random()*1000 + taskName, title: taskName.trim(), checked: false, date: Date.now.toString('DD/MM/YYYY-hh-mm')},
                ...prevData
            ]
        })
      }

      function setItem(id, newItem){
        const list = data.map((item) => {
          if(item.id == id) return newItem
          return item
        })
        setData(list);
        console.log(newItem)
      }

  function TaskScreenProps({ navigation }){
    return (
      <TaskScreen data={data} removeAction={removeItem} modifAction={setItem} navigation={navigation} />
    )
  }

  function NewTaskScreenProps(){
    return (
      <NewTaskScreen addAction={addItem} />
    )
  }

  let headerTitleStyle = { fontFamily: 'Montserrat-ExtraBold', fontSize: 18 };
  let headerTitle = ( title ) => (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Octicons name="tasklist" size={24} color="rgb(80,80,225)" />
      <Text style={[headerTitleStyle, {marginLeft: 10}]}>{title}</Text>
    </View>
  )

  return fontsLoaded ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TaskScreenProps} options={{ title: headerTitle('Liste des tâches') }} />
        <Stack.Screen name="NewTask" component={NewTaskScreenProps} options={{ headerTitleStyle: headerTitleStyle, headerBackTitleStyle: headerTitleStyle }} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}

export default App;