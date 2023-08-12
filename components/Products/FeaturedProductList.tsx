import React, { useEffect, useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native'
import { Image } from 'expo-image'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@rneui/themed'
import { FlashList } from '@shopify/flash-list'
import { useFocusEffect } from 'expo-router/src/useFocusEffect'

interface ProductListItemProps {
  id: number
  title: string
  description: string
  price: number
  thumbnail: number
}

const dummyDataForSkeleton = [1, 2, 3, 4]

const ProductListItem: React.FC<ProductListItemProps> = ({
  id,
  title,
  description,
  price,
  thumbnail
}): JSX.Element => (
  <Pressable style={styles.product}>
    <Image
      style={styles.productImage}
      source={thumbnail}
      cachePolicy="memory"
      contentFit="cover"
    />

    <View style={styles.productInfoContainer}>
      <View>
        <Text
          style={[styles.productText, styles.productSubtitle]}
          ellipsizeMode='tail'
          numberOfLines={1}
        >{description}</Text>
        <Text style={[styles.productText, styles.productTitle]}>{title}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Image
          style={styles.usdcIcon}
          source={{
            uri:
              'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
          }}
          cachePolicy="memory"
          contentFit="cover"
        />

        <Text style={[styles.price, styles.productText]}>{price}</Text>
      </View>
    </View>
  </Pressable >
);

const FeaturedProductList = () => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState<number>(Dimensions.get('screen').width)

  const updateScreenWidth = () => {
    setCurrentScreenWidth(Dimensions.get('screen').width)
  }

  useFocusEffect(() => {
    const subscription = Dimensions.addEventListener('change', updateScreenWidth)

    return () => {
      subscription.remove()
    }

  })

  const productQuery = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: async () => {
      const response = await fetch('https://dummyjson.com/products')
      return response.json()
    }
  })
  const { data, isLoading } = productQuery
  const products = data?.products

  return (
    <>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Featured Products And Properties</Text>

          <Pressable style={styles.headerButton}>
            <Text style={styles.headerButtonText}>See all</Text>
          </Pressable>
        </View>

        <View style={styles.productListContainer}>
          {isLoading ?
            <FlashList
              data={dummyDataForSkeleton}
              ItemSeparatorComponent={() => (<View style={{ height: 3 }}></View>)}
              numColumns={currentScreenWidth >= 550 ? 3 : currentScreenWidth <= 260 ? 1 : 2}
              contentContainerStyle={styles.productListInnerContainer}
              estimatedItemSize={4}
              renderItem={() => (
                <Skeleton
                  animation='wave'
                  style={[styles.product, styles.skeletonProduct]} />
              )}
            />
            :
            <FlashList
              data={products}
              ItemSeparatorComponent={() => (<View style={{ height: 3 }}></View>)}
              numColumns={currentScreenWidth >= 550 ? 3 : currentScreenWidth <= 260 ? 1 : 2}
              contentContainerStyle={styles.productListInnerContainer}
              keyExtractor={(item: ProductListItemProps) => item.id.toString()}
              estimatedItemSize={50}
              renderItem={({ item }) => (
                <ProductListItem {...item} />
              )}
            />
          }
        </View>
      </View>
    </>
  );
};

export default FeaturedProductList;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'RajdhaniBold',
  },
  headerButton: {},
  headerButtonText: {
    textDecorationLine: 'underline',
    fontFamily: 'RajdhaniSemiBold',
  },
  productListContainer: {
    flex: 1,
    minHeight: 100, //fix flashlist error
    paddingBottom: 5,
    width: '100%',
    maxWidth: 800,
    marginHorizontal: 'auto',
    padding: 2,
  },
  productListInnerContainer: {
  },
  skeletonProduct: {
    borderRadius: 8,
    overflow: 'hidden',
    opacity: 0.2,
  },
  product: {
    width: '99%',
    height: 300,
    marginHorizontal: 'auto',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#10101014'
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productInfoContainer: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  productText: {
    fontFamily: 'RajdhaniBold',
    textTransform: 'uppercase',
  },
  productSubtitle: {
    opacity: 0.3,
    fontFamily: 'RajdhaniBold',
  },
  productTitle: {

  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
  },
  usdcIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  price: {

  },
})