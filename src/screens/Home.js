import React,{useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,FlatList,TouchableOpacity,Button,TouchableHighlight,TouchableWithoutFeedback
  } from 'react-native';
import JsonData from '../dataFile.json'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LikeIcon from 'react-native-vector-icons/dist/SimpleLineIcons'
import CommentIcon from 'react-native-vector-icons/dist/Octicons'
import Modal from 'react-native-modal';

  const Home = ()=>{
    const[showModal,setShowModal]=useState(false)
    const[commentsData,setCommentData]=useState([])

    const showPopup =()=> {
        console.log("commentsData",commentsData)
        return(
           
            <Modal
            style={{margin: 20}}
        propagateSwipe
        isVisible={showModal}
        
        swipeDirection={['up','down']}
        onSwipeComplete={()=>setShowModal(!showModal)}
        onBackdropPress={() => setShowModal(!showModal)}
        
      >
      
         <View style={styles.modalView}>
            
            <ScrollView>
            <TouchableOpacity>
            <TouchableWithoutFeedback>
            <View>
            {commentsData.map(item=>
                {
                    return(
                        
                        <View style={{borderRadius:8,backgroundColor:'#c5d1c8',marginVertical:5,paddingHorizontal:5,paddingVertical:5}}>
                        <Text>{item}</Text>
                        </View>
                        
                        )}
                    )
                }
            </View>
            </TouchableWithoutFeedback>
            
           
            </TouchableOpacity>
            
            </ScrollView>

           
        
        </View>
            </Modal>

            
      
      )
    }

    const filterArray=(index)=>{
        let filteredData = JsonData[index].comments
        console.log("filteredData",filteredData)
        setCommentData(filteredData)
    }

      return(
        <ScrollView style={{flex:1}}>  
        <View >
          
          <FlatList
            data={JsonData}
            renderItem={({item,index})=>
                    <TouchableOpacity style={{marginVertical:5,marginHorizontal:5,paddingHorizontal:5,paddingVertical:5,borderRadius:4,backgroundColor:'#c5d1c8'}} onPress={()=>
                        {
                            filterArray(index)
                            setShowModal(true)
                        }
                    }>
                    <Text>{item.post}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <LikeIcon name="like" size={20} color="#000000" />
                    <CommentIcon name="comment" size={20} color="#000000" />
                    <Icon name="share" size={20} color="#000000" />
                    </View>
                    </TouchableOpacity>
            }
          />
          {showPopup()}
          

        
        </View>
        </ScrollView>
        )
  }

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
     
      backgroundColor: "grey",
      borderRadius: 10,
      padding: 20,
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
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

  export default Home