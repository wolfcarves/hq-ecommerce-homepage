import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

//This page acts as splash screen

const IntialPage = () => {
  const router = useRouter()

  setInterval(() => {
    router.replace('home')
  }, 3000)

  const opacity = useSharedValue(0)
  const position = useSharedValue(-30)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 2000,
      }),
      transform: [{
        translateY: withTiming(position.value, {
          duration: 2000,
        })
      }]
    }
  })

  useEffect(() => {
    opacity.value = 1
    position.value = 0
  }, [])


  return (
    <Animated.View
      style={[{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: opacity.value,
        transform: [{ translateY: position.value }]
      }, animatedStyles]}>
      <Image
        source='https://www.homeqube.com/_next/static/media/qubeIcon.ea65d127.png'
        cachePolicy={'memory'}
        style={{
          height: 50,
          width: 50
        }}
      />
    </Animated.View>
  )
}

export default IntialPage