import { StyleSheet,Button,Alert ,Text, View, Image,TouchableWithoutFeedback ,ImageBackground,TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React ,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import NavOptions from '../components/NavOptions';


const HomeScreen=()=>{
  const [search, setSearch] = useState('');

    return(
        <ImageBackground  
        style={styles.Background}
        source={require("../assets/background.png")}  
         resizeMode="cover" 
           >
        <Image
        style={styles.image}
         source={require("../assets/search.png")}/>
         <Image
        style={{width:30,height:30,top:35,right:120,
        }}
         source={require("../assets/mic.png")}/>
         <View style={{top:5,right:70}}>
         <TextInput style={{fontWeight:'bold', fontSize:17}}
         placeholder='Search...'
         onChangeText={(text: string) => setSearch(text)}
         value={search}
         autoCapitalize='none'
         />
         </View>
         <NavOptions term={search} />
    
          </ImageBackground>
          
          
          );
       
}
const styles =StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Background: {
        width: 395,
        height: 830,
        alignItems: 'center',
        justifyContent: 'center',
      },
    image: {
        width:400,
        height:300,
        resizeMode: 'contain',
        top:199,

    },
    
    Button1:{
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        position:"absolute",
        top:260,
        left:40,
        padding:10,

    },
    Button2:{
    
        position:"absolute",
        top:260,
        right:40,
        padding:10,

    },
    Text: {
        color:"white",
        
    },
});
type NavProps = {
    term: string;
  }

export default HomeScreen;