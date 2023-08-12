import React, {
  useMemo,
  forwardRef,
  ForwardedRef
} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import { useTheme, makeStyles } from '@rneui/themed'
import { Image } from 'expo-image'

const SCREEN_WIDTH = Dimensions.get('window').width

const BottomSheetModal = (props: any, ref: ForwardedRef<BottomSheet>) => {
  const { theme } = useTheme()
  const styles = useStyles()
  const snapPoints = useMemo(() => [0.01,
    SCREEN_WIDTH >= 350 ? '25%' : '35%'
  ], []);

  return (
    <BottomSheet
      ref={ref}
      enableHandlePanningGesture
      index={0}
      enablePanDownToClose
      snapPoints={snapPoints}
    >

      <View style={styles.bottomSheetContainer}>

        <Text
          style={[styles.title, { color: theme.colors.secondary }]}
        >
          Wallet not connected
        </Text>

        <TouchableOpacity style={[styles.phantomWalletButton, { backgroundColor: theme.colors.secondary }]}>
          <>
            <Image
              style={styles.phantomWalletLogo}
              source={'https://ph-files.imgix.net/f05a61be-d906-4ad8-a68d-88f7c257574d.png?auto=format'}
              contentFit='cover'
              contentPosition='center'
              cachePolicy='memory'
            />
            <Text
              style={styles.phantomWalletButtonText}
              numberOfLines={1}>
              Connect Wallet
            </Text>
          </>
        </TouchableOpacity>

      </View>

    </BottomSheet>
  )
}

export default forwardRef(BottomSheetModal)

const useStyles = makeStyles({
  bottomSheetContainer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'RajdhaniBold',
    fontSize: SCREEN_WIDTH > 350 ? 32 : 27,
  },
  phantomWalletButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 50,
    overflow: 'hidden',
    elevation: 5,
  },
  phantomWalletLogo: {
    width: 22,
    height: 22,
  },
  phantomWalletButtonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontFamily: 'RajdhaniSemiBold',
    fontSize: 18,
    color: '#ffffff'
  }
})