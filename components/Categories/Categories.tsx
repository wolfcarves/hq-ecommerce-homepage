import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList
} from 'react-native'
import CategoryButton from './CategoryButton'

const categoryButtons = ['All', 'Products', 'Leasable Properties', 'Services']

const Categories = () => {

  const [activeCategory, setActiveCategory] = React.useState<string>(categoryButtons[0]);

  const handleChangeCategory = (text: string) => {
    setActiveCategory(text)
  }

  return (
    <View style={styles.categoryContainer}>
      <FlatList
        data={categoryButtons}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryButton
            text={item}
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    backgroundColor: '#1a1a1a',
    padding: 13,
  },
  categoryButton: {
    marginEnd: 10,
  },
  categoryButtonText: {
    color: '#fff',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 17,
    fontFamily: 'RajdhaniBold',
  }
})

export default Categories