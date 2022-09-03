import React, { useCallback, useEffect, useState } from 'react'
import { Image, Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { Box, Typography } from '~/components'
import {
  BellOutline,
  LocationOutline,
  SettingLanguageIcon,
  TermIcon,
  UserThin,
  WishlistsIcon,
  XMarkIcon,
} from '~/assets/icons'
import { primaryColor, sizes, STATUS } from '~/constants'
import ItemMenu from './components/ItemMenu'
import PopupLogout from '~/components/Popup/PopupLogout'
import { getInfoUser } from '~/services'

const Setting = () => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  const [showPopupLogout, setShowPopupLogout] = useState(false)
  const [dataUser, setDataUser] = useState({
    avatar: 'https://picsum.photos/500',
    name: 'Hello there!',
  })
  const isMounted = useIsFocused()

  const getInfoUserApi = useCallback(async () => {
    try {
      const { statusCode, content } = await getInfoUser()
      if (statusCode === STATUS.SUCCESS_NUM) {
        setDataUser({
          avatar: content?.avatar || '',
          name: content?.name || '',
        })
      }
    } catch (error) {
      // nothing
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      void getInfoUserApi()
    }
  }, [isMounted, getInfoUserApi])

  const handleGoback = () => {
    navigation.goBack()
  }

  const renderCloseBtn = () => {
    return (
      <Pressable onPress={handleGoback} style={{ position: 'absolute', top: '12%', right: '14%' }}>
        <XMarkIcon size={18} />
      </Pressable>
    )
  }

  const renderAvatar = () => {
    return (
      <Box alignSelf="center">
        <Image
          source={{ uri: dataUser.avatar }}
          style={{ width: 150, height: 150, borderRadius: 1000 }}
          onError={() => {
            setDataUser((prev) => ({ ...prev, avatar: 'https://picsum.photos/500' }))
          }}
        />
      </Box>
    )
  }

  const renderNameUser = () => {
    return (
      <Typography
        textAlign="center"
        marginTop={20}
        fontSize={32}
        fontWeight="600"
        lineHeight={40}
        marginBottom={8}
      >
        {dataUser.name}
      </Typography>
    )
  }

  const renderListMenuProtected = () => {
    return (
      <Box borderTopColor="#000" borderTopWidth={1} paddingVertical={26} paddingHorizontal={8}>
        <ItemMenu
          icon={<UserThin />}
          label="Profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <ItemMenu
          icon={<WishlistsIcon />}
          label="Wishlists"
          onPress={() => navigation.navigate('BottomTab', { screen: 'Favorite' })}
        />
        <ItemMenu
          icon={<BellOutline />}
          isActive
          label="Notifications"
          onPress={() => navigation.navigate('Notifications')}
        />
        <ItemMenu
          icon={<LocationOutline />}
          label="Addresses"
          lastIndex
          onPress={() => navigation.navigate('Address')}
        />
      </Box>
    )
  }

  const renderListMenuPublic = () => {
    return (
      <Box borderTopColor="#000" borderTopWidth={1} paddingVertical={26} paddingHorizontal={8}>
        <ItemMenu
          icon={<SettingLanguageIcon />}
          label="Languages"
          onPress={() => navigation.navigate('Language')}
        />
        <ItemMenu
          icon={<TermIcon />}
          label="Terms & Conditions"
          lastIndex
          onPress={() => navigation.navigate('TermAndCondition')}
        />
      </Box>
    )
  }

  const renderListMenu = () => {
    return (
      <>
        {renderListMenuProtected()}
        {renderListMenuPublic()}
      </>
    )
  }

  const handleLogout = () => {
    setShowPopupLogout(true)
  }

  const renderBtnLogout = () => {
    return (
      <Box alignItems="flex-end" paddingTop={30} borderTopColor="#000" borderTopWidth={1}>
        <Pressable hitSlop={4} onPress={handleLogout}>
          <Typography
            textDecorationLine="underline"
            color={primaryColor}
            fontSize={18}
            fontWeight="600"
          >
            Log out
          </Typography>
        </Pressable>
      </Box>
    )
  }

  const renderPopupLogout = () => {
    return (
      <PopupLogout isVisible={showPopupLogout} onCloseModal={() => setShowPopupLogout(false)} />
    )
  }

  return (
    <LinearGradient colors={['#ffe6cc', '#F1F5F8', '#FFFFFF']} style={{ flex: 1 }}>
      <Box paddingTop={insets.top + 50} flex={1} padding={sizes.horizontal * 2}>
        {renderCloseBtn()}
        {renderAvatar()}
        {renderNameUser()}
        {renderListMenu()}
        {renderBtnLogout()}
        {renderPopupLogout()}
      </Box>
    </LinearGradient>
  )
}

export default Setting
