import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Box, ButtonOpacity, Header, Typography } from '~/components'
import { ScrollView } from 'react-native'
import { defaultColors, primaryBold, primaryColor, sizes } from '~/constants'
import BoxShadow from '../Home/components/BoxShadow'
import { ChevronBigLeft, FavoriteOutline, MinusIcon, PlusIcon, StarIcon } from '~/assets/icons'
import { useNavigation } from '@react-navigation/native'
import ListImageDetail from './components/ListImageDetail'

const ProductDetail = () => {
  const navigation = useNavigation()

  const renderBackIcon = () => {
    return (
      <BoxShadow>
        <ChevronBigLeft width={18} height={18} color="#000" />
      </BoxShadow>
    )
  }

  const renderFavorite = () => {
    return (
      <BoxShadow>
        <FavoriteOutline size={18} fillColor="red" color="red" />
      </BoxShadow>
    )
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  const renderBtnControl = () => {
    return (
      <Box
        flexDirection="row"
        alignItems="center"
        borderRadius={12}
        backgroundColor="#000"
        position="absolute"
        left={sizes.horizontal}
        top={-20}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ paddingVertical: 12, paddingHorizontal: 20 }}
        >
          <MinusIcon color="white" />
        </TouchableOpacity>
        <Typography fontSize={18} fontWeight="700" color={primaryColor}>
          1
        </Typography>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ paddingVertical: 12, paddingHorizontal: 20 }}
        >
          <PlusIcon color="white" />
        </TouchableOpacity>
      </Box>
    )
  }

  const renderInfoShoes = () => {
    return (
      <Box flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography fontSize={26} fontWeight="700">
            Nike Jordon
          </Typography>
          <Typography marginTop={12} color={defaultColors.gray}>
            Green Hund Shoes
          </Typography>
        </Box>
        <Typography fontWeight="700" fontSize={24}>
          $88.8
        </Typography>
      </Box>
    )
  }

  const renderSizes = () => {
    return (
      <Box
        marginTop={20}
        flexDirection="row"
        alignItems="center"
        borderBottomColor={defaultColors.gray}
        borderBottomWidth={0.5}
        paddingBottom={20}
      >
        <Typography fontSize={16} fontWeight="600" marginRight={20}>
          Size
        </Typography>
        <Box flexDirection="row">
          {[20, 21, 22, 23, 24].map((item, index) => {
            return (
              <Box
                borderColor={index != 0 ? 'black' : primaryBold}
                borderWidth={1}
                key={item}
                borderRadius={100}
                padding={12}
                marginHorizontal={10}
                backgroundColor={index === 0 ? primaryBold : 'white'}
              >
                <Typography color={index === 0 ? 'white' : 'black'}>{item}</Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
    )
  }

  const renderDescription = () => {
    return (
      <Box paddingTop={20}>
        <Box flexDirection="row" alignItems="center" justifyContent="space-between">
          <Typography fontSize={20} fontWeight="600">
            Description
          </Typography>
          <Box
            backgroundColor="#f8f8f8"
            paddingHorizontal={16}
            paddingVertical={4}
            borderRadius={18}
            flexDirection="row"
            alignItems="center"
          >
            <StarIcon color={primaryBold} />
            <Typography fontSize={14} marginLeft={8}>
              4.8
            </Typography>
          </Box>
        </Box>
        <Typography marginTop={30} fontSize={16}>
          The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement
        </Typography>
      </Box>
    )
  }

  const handleAddToCart = () => {
    // TODO: Xu ly add to cart
  }

  const renderBtnAddToCart = () => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={handleAddToCart}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          backgroundColor="#000"
          paddingVertical={20}
          paddingHorizontal={20}
          borderRadius={15}
        >
          <Typography color="white" fontSize={18} fontWeight="700">
            Add to cart
          </Typography>
          <Typography color="white" fontSize={20} fontWeight="700">
            $88.8
          </Typography>
        </Box>
      </TouchableOpacity>
    )
  }

  return (
    <Box flex={1}>
      <ListImageDetail />
      <Header
        goBack={handleGoBack}
        customBack={renderBackIcon}
        customRight={renderFavorite}
        backgroundColor="transparent"
        position="absolute"
      />

      <Box
        backgroundColor="white"
        height="60%"
        position="absolute"
        zIndex={2}
        bottom={0}
        width="100%"
        borderTopRightRadius={30}
        borderTopLeftRadius={30}
        paddingHorizontal={sizes.horizontal}
        paddingVertical={36}
      >
        {renderBtnControl()}
        <ScrollView>
          {renderInfoShoes()}
          {renderSizes()}
          {renderDescription()}
        </ScrollView>
        <Box marginBottom={20}>{renderBtnAddToCart()}</Box>
      </Box>
    </Box>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})
