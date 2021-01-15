import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import CustomButton from '../components/Button';
import ToastModal from '../components/ToastModal';

import { AntDesign } from '@expo/vector-icons';


export default function NewTaskScreen({ addAction }) {
    const [value, onChangeText] = React.useState('');
    const [toastVisible, setToastVisible] = React.useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.p}>Quel est le nom de vôtre nouvelle tâche ?</Text>
            <TextInput
                  style={styles.textInput}
                  onChangeText={text => onChangeText(text)}
                  value={value} 
                  placeholder={'Nom...'} />
            <Image style={{ height: '40%', resizeMode: 'contain' }} source={require('../assets/images/tasklist_poeple_clipart.png')} />
            <View style={{ width: '100%' }}>
                <CustomButton 
                  text={'Ajouter à la liste'} 
                  onPress={() => {
                    setToastVisible(true);
                    setTimeout(function(){setToastVisible(false);addAction(value);}, 1800)
                  }} 
                  icon={<AntDesign name="plus" size={24} color="#fff" style={{ marginLeft: 15 }} />} />
            </View>
            <ToastModal visible={toastVisible} 
              msg={<Text>Nouvelle tâche <Text style={{color: 'red'}}>{value.trim()}</Text> ajoutée</Text>} 
              icon={<AntDesign name="checkcircle" size={45} color="rgb(80,80,225)" />} />
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  textInput: { 
    width: '100%',
    height: 55,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'rgba(80,80,225,.1)', 
    borderColor: 'gray', 
    borderWidth: 1, 
    color: 'rgb(80,80,225)',
    fontFamily: 'Montserrat-Bold',
    borderRadius: 7
  },
  p: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 24,
    color: '#000'
  }
});
