import React from 'react'
import Carousel from 'components/Carousel/Carousel'
import FeaturedProductList from 'components/Products/FeaturedProductList'
import { ScrollView } from 'react-native-gesture-handler'
import { RefreshControl } from 'react-native-gesture-handler'
import Categories from 'components/Categories/Categories'

const Home = () => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 1000);
  }, [])

  return (
    <>
      <Categories />
      <ScrollView
        nestedScrollEnabled={true}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Carousel />
        <FeaturedProductList />
      </ScrollView>
    </>
  )
}

export default Home