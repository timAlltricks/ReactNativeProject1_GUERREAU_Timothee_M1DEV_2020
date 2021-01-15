import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, SafeAreaView } from 'react-native';

import { CheckBox } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CustumModal from '../components/Modal';
import CustomButton from '../components/Button';


export default function TaskScreen({ navigation, data, removeAction, modifAction }) {
    const [dataList, setData] = React.useState({all: data, filtered: data});

    function search(toSearch){
        setData({all: dataList.all, filtered: dataList.all.filter(i => i.title.toLowerCase().includes(toSearch.toLowerCase()))})
    }

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.panel}>
                    <Text style={{...styles.pBlack, color:'rgb(80,80,225)'}}>{dataList.all.length}</Text>
                    <Text style={{...styles.pBlack, fontSize: 12}}>créée(s)</Text>
                </View>
                <View style={{width: 10}}></View>
                <View style={styles.panel}>
                    <Text style={{...styles.pBlack, color:'rgb(80,80,225)'}}>{dataList.all.filter(i => i.checked).length}</Text>
                    <Text style={{...styles.pBlack, fontSize: 12}}>complétée(s)</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                style={styles.textInput}
                onChangeText={text => search(text)} 
                placeholder={'Rechercher une tâche'}/>
            </View>
            <CheckList navigation={navigation} data={dataList.filtered} removeAction={removeAction} modifAction={modifAction} />
        </View>
    );
}

function CheckList({ navigation, data, removeAction, modifAction }) {
    const [supprItem, setChangeSuppr] = React.useState({});
    const [modalVisible, setModalVisible] = React.useState(false);
    
      
    const Item = ({ item }) => {
        const [toggleCheckBox, setToggleCheckBox] = React.useState(item.checked)

        return (
            <View style={styles.item}>
                <CheckBox
                    checked={toggleCheckBox}
                    onPress={() => {
                        setToggleCheckBox(!toggleCheckBox); 
                        var newObj = {...item}
                        newObj.checked = !item.checked;
                        modifAction(item.id, newObj)
                    }}
                    checkedIcon='check-circle'
                    uncheckedIcon='check'
                    size={toggleCheckBox ? 25 : 20}
                />
                <Text style={styles.pBlack}>{item.title}</Text>
                <CustomButton 
                    onPress={() => {
                        setChangeSuppr(item);
                        setModalVisible(!modalVisible);
                    }} 
                    style={{backgroundColor: 'rgba(225,225,225,0)', borderRadius: 1000}} 
                    icon={<MaterialCommunityIcons name="delete" size={24} color="rgb(200,200,200)" />} />
            </View>
        );
    }
    
    const renderItem = ({ item }) => (
            <Item item={item} />
    );
      
    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{paddingBottom: 50}}
                ListFooterComponent={<View style={{height: 50, width: '100%', backgroundColor: 'transparent'}}></View>}
            />
            <View style={{
                position: 'absolute', 
                bottom: 15, 
                right: 15}}>
                <CustomButton 
                    onPress={() => navigation.navigate('NewTask')} 
                    icon={<AntDesign name="plus" size={24} color="#fff" />} 
                    style={{
                        height: 55, 
                        width: 55, 
                        borderRadius: 1000, 
                        marginHorizontal: 10,              
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.43,
                        shadowRadius: 9.50,

                        elevation: 15}} />
            </View>
            <CustumModal 
                visible={modalVisible} 
                action={() => {removeAction(supprItem); setModalVisible(!modalVisible);}} 
                inaction={() => setModalVisible(!modalVisible)} 
                    msg={<Text>Voulez-vous vraiment supprimer <Text style={{color: 'red'}}>{supprItem.title}</Text> ?</Text>} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10
  },
  textInput: { 
    flex: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'rgba(80,80,225,.1)', 
    borderColor: 'gray', 
    borderWidth: 1, 
    color: 'rgb(80,80,225)',
    fontFamily: 'Montserrat-Bold',
    borderRadius: 7
  },
  item: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#fff',
      marginVertical: 2,
      borderRadius: 10
  },
  checkbox: {
      backgroundColor: 'rgb(80,80,225)'
  },
  pBlack: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 18,
      color: '#000'
  },
  pWhite: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#fff'
    },
    panel: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center', 
        flexDirection: 'column'
    }
});
