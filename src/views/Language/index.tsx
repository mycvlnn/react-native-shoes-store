import { FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box, Flag, Header, Typography } from '~/components'
import { defaultColors, listLanguages, sizes } from '~/constants'
import ItemLanguage from './components/ItemLanguage'
import { OptionLanguageType } from '~/models/Languages'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '~/store/hooks'
import { saveInfoUser } from '~/store/appUserSlice'

const Language = () => {
  const navigation = useNavigation()
  const { i18n, t } = useTranslation()
  const dispatch = useAppDispatch()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

  const goBack = () => {
    navigation.goBack()
  }

  const renderHeader = () => {
    return (
      <Header
        color={defaultColors.black}
        goBack={goBack}
        title={t('languages')}
        backgroundColor="#fff"
      />
    )
  }

  const onSelectLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode)
    dispatch(saveInfoUser({ localeCode: languageCode }))
    void i18n.changeLanguage(languageCode)
  }

  const renderListLanguages = () => {
    return (
      <FlatList
        contentContainerStyle={{ padding: sizes.horizontal }}
        numColumns={2}
        data={listLanguages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          const isActive = item.languageCode === currentLanguage

          return (
            <ItemLanguage
              active={isActive}
              onPress={() => onSelectLanguage(item.languageCode)}
              flagIcon={<Flag languageCode={item.languageCode as OptionLanguageType} />}
              index={index}
              name={item.name}
            />
          )
        }}
        ListFooterComponent={renderHint}
      />
    )
  }

  const renderHint = () => {
    return (
      <Typography width={200} color="rgba(16, 24, 32, 0.35)" fontSize={18} marginTop={10}>
        Click to select the prefered language for the app.
      </Typography>
    )
  }

  return (
    <Box flex={1} backgroundColor="#fff">
      {renderHeader()}
      {renderListLanguages()}
    </Box>
  )
}

export default Language
