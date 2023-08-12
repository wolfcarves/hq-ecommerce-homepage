import React from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native'
import { StatusBar } from 'react-native'
import { Image } from 'expo-image'


type HeaderProps = {
  openBottomSheet: () => void
}


const Header: React.FC<HeaderProps> = ({ openBottomSheet }) => {

  return (
    <>
      <View style={styles.headerContainer}>

        <View style={styles.searchInputContainer}>
          <Pressable style={styles.searchDropDown}>
            <Text style={{
              fontSize: 14,
              fontFamily: 'RajdhaniSemiBold',
            }}>Products</Text>
          </Pressable>

          <TextInput
            style={styles.searchInput}
            placeholder='Search anything'
          />
        </View>

        <Pressable
          onPress={openBottomSheet}
          style={styles.phantomWalletLogoButton}
        >
          <Image
            style={styles.phantomWalletLogo}
            source={'https://ph-files.imgix.net/f05a61be-d906-4ad8-a68d-88f7c257574d.png?auto=format'}
            contentFit='cover'
            contentPosition='center'
            cachePolicy='memory'
          />
        </Pressable>

      </View>

    </>
  )
}

const styles = StyleSheet.create({
  modalContainer: {

  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 10,
    marginTop: StatusBar.currentHeight,
    paddingVertical: 20,
    backgroundColor: '#1a1a1a',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  searchDropDown: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#f0f0f0',
    borderRightWidth: 0.8,
    borderRightColor: '#2b2b2b'
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingLeft: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    height: 42,
    fontFamily: 'RajdhaniMedium',
    fontSize: 14,
  },
  phantomWalletLogoButton: {
    width: 38,
    height: 38,
    marginHorizontal: 5,
  },
  phantomWalletLogo: {
    width: '100%',
    height: '100%',
  }
})

export default Header