import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View
} from "react-native";

const ToastModal = ({ msg, icon, visible }) => {
    icon = icon ? icon : null
  return (
      <Modal
        animationType="slide"
        transparent={visible}
        visible={visible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{msg}</Text>
            {icon}
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
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
    marginVertical: 10
  },
  textStyle: {
    color: "white",
    fontFamily: "Montserrat-Bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    fontSize: 20
  }
});

export default ToastModal;