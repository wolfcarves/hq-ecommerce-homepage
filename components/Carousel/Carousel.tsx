import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'

const carouselContents = [
  {
    title: 'title',
    body: 'body',
    footer: 'footer',
  },
  {
    title: 'title',
    body: 'body',
    footer: 'footer',
  }
]

const Carousel = () => {
  const [containerWidth, setContainerWidth] = React.useState<number>(0)

  const CarouselItem = () => (
    <View style={[styles.carouselItem, { width: containerWidth }]}>

      <Text style={styles.title}>
        HOMEQUBE.COM
      </Text>

      <Text style={styles.description}>
        IS DECENTRALIZED E-COMMERCE FOR THE HOME VALUE CHAIN
      </Text>

      <Pressable style={styles.carouselButton}>
        <Text style={styles.carouselButtonText}>
          Read More
        </Text>
      </Pressable>
    </View>
  )


  return (
    <View style={styles.carouselContainer}>
      <View
        style={styles.carouselInnerContainer}
        onLayout={(e) => { setContainerWidth(e.nativeEvent.layout.width) }}>

        <FlatList
          data={carouselContents}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CarouselItem />
          )}
        />

      </View>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: 'gray',
    height: 250,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  carouselInnerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 768,
    maxWidth: '100%',
    height: '100%',
    marginHorizontal: 'auto',
    paddingVertical: 35,
  },
  carouselItem: {
    flexDirection: 'column',
    maxWidth: '100%',
    alignItems: 'center',
  },
  title: {
    fontFamily: "RajdhaniBold",
    fontSize: 24,
    color: '#eeeeee',
  },
  description: {
    fontFamily: "RajdhaniSemiBold",
    fontSize: 22,
    color: '#eeeeee',
    textAlign: 'center',
  },
  carouselButton: {
    marginTop: 'auto',
    width: 150,
    height: 45,
    borderRadius: 50,
    borderColor: '#eeeeee',
    borderWidth: 1,
    justifyContent: 'center',
  },
  carouselButtonText: {
    fontFamily: "RajdhaniBold",
    textAlign: 'center',
    color: '#eeeeee',
  }
})