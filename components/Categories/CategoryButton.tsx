import React from 'react'
import {
  Text,
  StyleSheet,
  Pressable
} from 'react-native'

const CategoryButton = ({ text, activeCategory, handleChangeCategory }: {
  text: string,
  activeCategory: string,
  handleChangeCategory: (text: string) => void
}): JSX.Element => (
  <Pressable style={styles.categoryButton} onPress={() => handleChangeCategory(text)} >
    <Text style={[styles.categoryButtonText,
    { backgroundColor: activeCategory === text ? 'gray' : 'transparent' }
    ]}>{text}</Text>
  </Pressable >
)

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
    textTransform: 'uppercase',
    color: '#fff',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 17,
    fontFamily: 'RajdhaniBold',
  }
})

export default CategoryButton