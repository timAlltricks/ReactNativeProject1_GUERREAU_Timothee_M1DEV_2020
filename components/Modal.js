import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { Entypo } from '@expo/vector-icons';

const CustumModal = ({ msg, action, inaction, visible }) => {
  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{msg}</Text>
            <View>
                <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#F39621" }}
                onPress={inaction}>
                    <Entypo name="cross" size={24} color="rgb(225,50,50)" style={{marginRight: 8}} />
                    <Text style={styles.textStyle}>Hmmm... Non</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={action}>
                    <Entypo name="check" size={24} color="rgb(50,225,50)" style={{marginRight: 8}} />
                    <Text style={styles.textStyle}>Sûr à 100%</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "rgb(80,80,225)",
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    color: "white",
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    fontSize: 18
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Montserrat-ExtraBold",
    fontSize: 20
  }
});

export default CustumModal;