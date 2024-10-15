import React from 'react'
import Message from "@/components/screens/message"

import { View, Text, Image, StyleSheet, Platform, Pressable, Button, Modal, ScrollView } from 'react-native';
import 'react-native-gesture-handler'
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import MessagePopup from "@/components/messages/messagePopup.js"
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import Nav from '../Navbar/nav';
import ChatTop from "@/components/screens/ChatTop.js"
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

export default function chatscreen () {
  const activeColor = "#F76C6B";
  const color = "grey";
  const [ activScreen, setActivieScreen ] = useState( 'Home' );
  const [ PopVisivibility, setPopVisibility ] = useState( false );
  const [ modalVisible, setModalVisible ] = useState( false );
  const [ onoff, setOnoff ] = useState( false );
  const setvisible = () => {
    setModalVisible( true );
  }
  return (
    <GestureHandlerRootView style={ { flex: 1 } }>

      <SafeAreaView style={ styles.root }>
        <Nav ></Nav>
        <View style={ styles.messagess }>
          <Text style={ styles.message } > New matches</Text>
          <Pressable onPress={ () => setModalVisible( true ) }>
            <Text style={ styles.mymoveoff } >
              MY MOVE <Text style={ styles.mymoveoff2 }>{!onoff?"OFF":"ON"}</Text>
            </Text>
          </Pressable>
        </View>
        <ChatTop ></ChatTop>
        <Message></Message>
        
      </SafeAreaView>
      <View style={ styles2.container }>
        {/* Modal */ }
        <Modal
          animationType="fade"
          transparent={ true }
          visible={ modalVisible }
          onRequestClose={ () => setModalVisible( false ) }
        >
          <View style={ styles2.modalOverlay }>
            <View style={ styles2.modalView }>
              <Text style={ styles2.modalText }>Are you sure you want to turn My Move on?</Text>
              <Text style={ styles2.subText }>
                My Move will apply to all new matches going forward.
              </Text>

              {/* Modal Buttons */ }
              <View style={ styles2.buttonContainer }>
                <TouchableOpacity
                  style={ styles2.cancelButton }
                  onPress={ () => {
                    setOnoff(false)
                    setModalVisible( false )} }
                >
                  <Text style={ styles2.cancelText }>NOT NOW</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={ styles2.confirmButton }
                  onPress={ () => {
                    setOnoff(true)
                    setModalVisible( false )} }
                >
                  <Text style={ styles.confirmText }>TURN IT ON</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create( {
  pageContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
    flexDirection: "column"

  },
  root: {
    flex: 1,
    backgroundColor: "black"
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
    padding: 10,
    position: "absolute",
    top: 550

  },
  buttons: {
    backgroundColor: "grey",
    borderRadius: 50,


    width: 50,
    height: 50,
    padding: 7,
    justifyContent: 'center',
    alignItems: "center"

  },


  topIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%',
    padding: 10,
  },
  messagetext: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 0
  },
  messagess: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 10
    // position:"absolute",
  },
  message: {
    color: "white",
    fontSize: 19,
    fontWeight: "500",
    //  backgroundColor:"red",
    // //  justifyContent:"flex-end",
    marginLeft: 10,
  },
  mymoveoff: {
    color: "white",
    fontSize: 16.5,
    fontWeight: "500",
    // marginLeft:100,
    marginRight: -20,
  },
  mymoveoff2: {
    fontSize: 16.5,
    fontWeight: "500",
    color: "red"
  }
} );
const styles2 = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    display:"none"
  },
  button: {
    backgroundColor: '#ff5b5b',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Creates the dimmed background effect
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  confirmButton: {
    backgroundColor: '#ff5b5b',
    padding: 10,
    borderRadius: 5,
  },
  cancelText: {
    color: '#333',
    fontWeight: 'bold',
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
  },
} );