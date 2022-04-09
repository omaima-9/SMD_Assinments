import React, { useState,useRef } from "react";
import {View,Text,  Image } from "react-native";
import Carousel, {Pagination } from "react-native-snap-carousel";

const CarouselComponent= ({images}: Props)=>{
    const ref=useRef(null);
    const[index1, setIndex1] =useState(0);
    const onSelect=(index1:number)=>{
        setIndex1(index1);
    };
    return(
        <View style={{alignItems:"center", justifyContent:"center",margin:10}}
        >
            <Carousel layout="default"
            ref={ref}
            sliderWidth={300}
            itemWidth={300}
            data={images}
            windowSize={1}
            renderItem={({ item, index })=>(
                <Image

                key={index}
                style={{width:"100%", height: 200, borderRadius:5}}
                resizeMode="contain"
                source={{
                    uri:
                    item? item:require( "../assets/unavailable.jpg")
                }}

                />
            )}
            onSnapToItem={(index)=> onSelect(index)}
            />
            <Pagination
            inactiveDotColor="gray"
            dotColor={"black"}
            activeDotIndex={index1}
            dotsLength={images.length}
            animatedDuration={150}
            inactiveDotScale={1}
            
            />
        </View>
    );
}
type Props={
    images: string[];
};

export default CarouselComponent;