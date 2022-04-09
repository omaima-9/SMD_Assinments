import React, { useState,useEffect } from "react";
import {ImageBackground, Button,View,  Dimensions, SafeAreaView,ScrollView,  StyleSheet, Text } from "react-native";
import * as axios from 'axios';
import { useRoute,useNavigation } from "@react-navigation/native";
import {Card} from "react-native-elements";
import CarouselComponent from '../components/CarouselComponent';




const Cards = () =>{

    const route = useRoute<RouteProps> ( );
    const { term } = route.params;
    const [universities,setUniversity]=useState<University[]>();
useEffect(() => {
    Promise.all([
      axios.default.get(`http://192.168.1.8:3000/universities/${term}`),
    ])
      .then(([ { data: universitiesResults }]) => {
        if (universitiesResults) setUniversity(universitiesResults);
      });
  }, []);
  return (
    <ImageBackground  
    style={styles.Background}
    source={require("../assets/background1.png")}  
     resizeMode="cover" 
       >
    <SafeAreaView>
      <View style={{top:40,borderRadius: 70,
}}>
          <ScrollView>
              {term && 
                universities?.map((University, index: number) => (
                    <Card
                       key={index}
                       containerstyle={{                           
                           borderColor:"black",
                       }}
                    >
                     <Card.Title style={{fontWeight:'bold', fontSize:16}}>
                        {University.slug}
                        {"\n"}
                        <Text
                            style={{
                                justifyContent: "center",
                                alignItems:'center',
                                color:'gray',
                                fontWeight:'bold',
                            }}
                        >
                            {University.name}
                            </Text>{" "}
                            </Card.Title>
                            <Card.Divider/>
                            <CarouselComponent images={University.image}/>
                            <Text style={{marginBottom:10, fontSize:16}}>
                                Address :{University.addressFmt}
                             </Text>
                         </Card>
            ))
                              }
                                <View style={{marginTop:100}}>
                                          <Text></Text>
                                  </View>
                            </ScrollView>
                         </View>
    </SafeAreaView>
    </ImageBackground>
  );
}

type RouteParams = {
    term: string;
  };
  
  type RouteProps = {
    params: RouteParams
    name: string;
    key: string;
  };
  type University = {
      name: string;
      slug: string;
      addressFmt:string;
      image:string[];
 
  };
const styles =StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor:'#fff',
        marginBottom:10,
        width:"60%",
        borderRadius: 70,
        shadowOpacity:0.2,
        shadowRadius:1,
        shadowOffset:{
            width:3,
            height:3,
        },
    },
    cardImage:{
        width:'100%',
        height:200,
        resizeMode:'cover'
    },
    Background: {
        width: 395,
        height: 830,
        alignItems: 'center',
        justifyContent: 'center',
      },
    cardText:{
        padding:10,
        fontSize:16,

    },
});
export default Cards