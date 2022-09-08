import { ScrollView } from 'react-native'
import React from 'react'
import { Box, Header, Typography } from '~/components'
import { defaultColors, sizes } from '~/constants'
import { useNavigation } from '@react-navigation/native'

const TermScreen = () => {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }
  const renderHeader = () => {
    return <Header color={defaultColors.black} goBack={goBack} title="" backgroundColor="#fff" />
  }

  const renderDescription = () => {
    return (
      <Typography fontSize={16} fontWeight="400" marginTop={16}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius diam molestie nec donec
        bibendum felis. Turpis ultricies integer eu vitae commodo ullamcorper dignissim ullamcorper.
        Dignissim aliquam nibh adipiscing a vitae. Feugiat id hendrerit dictum aliquam lorem
        placerat. Nulla eget vel tristique eget massa sed. Dolor est enim arcu, blandit sed
        tincidunt phasellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius diam
        molestie nec donec bibendum felis. Turpis ultricies integer eu vitae commodo ullamcorper
        dignissim ullamcorper. Dignissim aliquam nibh adipiscing a vitae. Feugiat id hendrerit
        dictum aliquam lorem placerat. Nulla eget vel tristique eget massa sed. Dolor est enim arcu,
        blandit sed tincidunt phasellus.
      </Typography>
    )
  }

  return (
    <Box flex={1} backgroundColor="#fff">
      {renderHeader()}
      <Box paddingHorizontal={sizes.horizontal} flex={1}>
        <ScrollView>
          <Typography fontSize={30} fontWeight="700">
            Privacy Policy
          </Typography>
          {renderDescription()}
        </ScrollView>
      </Box>
    </Box>
  )
}

export default TermScreen
