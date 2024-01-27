import React, { useEffect, useRef, useState } from "react";
import { View, Dimensions, Image,StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
const CarouselComponent = () => {
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<Carousel<any>>(null);
  const carouselData = [
    {
      id: "01",
      image: require("../../assets/tr_Img_1.jpg"),
    },
    {
      id: "02",
      image: require("../../assets/tr_Img_2.jpg"),
    },
    {
      id: "03",
      image: require("../../assets/tr_Img_3.jpg"),
    },
  ];

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  useEffect(() => {
    // Auto-scroll every 2 seconds
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (activeIndex + 1) % carouselData.length;
        carouselRef.current.snapToItem(nextIndex);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, carouselData.length]);

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      {/* <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeIndex}
        containerStyle={{ paddingTop: 20 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 6,
          backgroundColor: "green", // Active dot color
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 6,
          backgroundColor: "red", // Inactive dot color
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      /> */}
    </View>
  );
};

export default CarouselComponent;

const styles=StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        height: '100%',
        width: '90%',
        borderRadius:10,
    }
})