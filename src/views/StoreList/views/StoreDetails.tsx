import {
  Alert,
  FlatList,
  Pressable,
  SectionList,
  SectionListRenderItem,
  StyleSheet,
} from 'react-native'
import React from 'react'
import { Box, ButtonOpacity, Header, Typography } from '~/components'
import { defaultColors, primaryColor, sizes, textColor } from '~/constants'
import { useNavigation } from '@react-navigation/native'
import ButtonPromotion from '../components/ButtonPromotion'
import {
  ArrowDownIcon,
  GhostIcon,
  SearchIcon,
  ShipperIcon,
  StarIconOutline,
  ThreeDots,
} from '~/assets/icons'
import ListImageStore from '../components/ListImageStore'
import { DATA_SHOES_OF_CATEGORIES } from '~/data'
import { IShoesCategory, IShoesItem } from '~/models/Shops'
import ShoesItem from '../components/ShoesItem'

const POPULAR = 'Popular'

const StoreDetails = () => {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  const renderMoreAction = () => {
    return (
      <Pressable onPress={() => Alert.alert('More action')}>
        <Box
          marginLeft={10}
          backgroundColor="#fff"
          paddingVertical={17}
          paddingHorizontal={10}
          borderRadius={1000}
          borderColor={textColor}
          borderWidth={1}
        >
          <ThreeDots />
        </Box>
      </Pressable>
    )
  }

  const renderRightHeader = () => {
    return (
      <Box flexDirection="row" alignItems="center">
        <ButtonPromotion onPress={() => Alert.alert('ok')} />
        {renderMoreAction()}
      </Box>
    )
  }

  const renderHeader = () => {
    return (
      <Header
        color={defaultColors.black}
        goBack={goBack}
        title=""
        backgroundColor="#fff"
        customRight={renderRightHeader}
      />
    )
  }

  const renderDeliveryType = () => {
    return (
      <Box
        flexDirection="row"
        alignItems="center"
        backgroundColor="#fff"
        borderWidth={1}
        borderColor={textColor}
        paddingVertical={6}
        paddingHorizontal={12}
        borderRadius={30}
      >
        <ArrowDownIcon />
        <Box marginHorizontal={4}>
          <ShipperIcon />
        </Box>
        <Typography fontSize={16}>Delivery: </Typography>
        <Typography color="#40ACDD" fontSize={16}>
          25-30 min
        </Typography>
      </Box>
    )
  }

  const renderGhostIcon = () => {
    return (
      <Box>
        <GhostIcon />
      </Box>
    )
  }

  const renderRating = () => {
    return (
      <Box paddingLeft={4}>
        <Box position="absolute" right="-10%" top="-20%">
          <StarIconOutline />
        </Box>
        <Typography fontSize={36} fontWeight="300" color={primaryColor}>
          4.8
        </Typography>
        <Box position="absolute" bottom="-20%" right="-10%">
          <Typography fontSize={12} fontWeight="300">
            157
          </Typography>
        </Box>
      </Box>
    )
  }

  const renderInfoStore = () => {
    return (
      <Box flexDirection="row" alignItems="center">
        <Box flex={1} paddingRight={2} borderRightColor={textColor} borderRightWidth={1}>
          <Typography fontSize={14} fontWeight="300" color={textColor} numberOfLines={3}>
            The real tonkatsu experience at Fujiro in Ho Chi Minh City{' '}
          </Typography>
          <Box flexDirection="row" alignItems="center" justifyContent="space-between">
            {renderDeliveryType()}
            {renderGhostIcon()}
          </Box>
        </Box>
        {renderRating()}
      </Box>
    )
  }

  // Hiển thị danh sách ảnh của cửa hàng
  const renderListImageStore = () => {
    return <ListImageStore />
  }

  const onClickMoreInfo = () => {
    Alert.alert('More info')
  }

  const renderMoreInfo = () => {
    return (
      <Box flexDirection="row" top={-12}>
        <ButtonOpacity
          size="sm"
          backgroundColor="#E8ECF2"
          textColor="#000"
          title="More info"
          fontSize={16}
          fontWeight="600"
          onPress={onClickMoreInfo}
        />
        <Box flex={1} borderBottomColor={textColor} borderBottomWidth={1} />
      </Box>
    )
  }

  const goToSearchItem = () => {
    Alert.alert('Go to search')
  }

  const renderInputSearch = () => {
    return (
      <Pressable onPress={goToSearchItem}>
        <Box
          alignItems="center"
          flexDirection="row"
          borderBottomColor={textColor}
          borderBottomWidth={1}
          paddingBottom={12}
        >
          <Typography fontSize={18} fontWeight="400" flex={1} textAlign="right">
            Searching for...
          </Typography>
          <Box
            marginLeft={15}
            padding={10}
            borderWidth={1}
            borderColor={textColor}
            borderRadius={30}
          >
            <SearchIcon size={18} color={textColor} />
          </Box>
        </Box>
      </Pressable>
    )
  }

  const renderItemShoesCategory: SectionListRenderItem<IShoesItem, IShoesCategory> = ({
    item,
    section,
  }) => {
    return <ShoesItem {...item} isPopular={section.name === POPULAR} />
  }

  const renderSectionHeader = (name: string) => {
    return (
      <Typography fontSize={24} fontWeight="700" marginBottom={10}>
        {name}
      </Typography>
    )
  }

  const renderFooter = () => {
    return (
      <Box alignItems="center" marginBottom={80}>
        <Typography fontSize={16}>You are reached the end</Typography>
        <Pressable onPress={() => Alert.alert('back to top')}>
          <Typography fontWeight="600" fontSize={16}>
            Back to top
          </Typography>
        </Pressable>
      </Box>
    )
  }

  const renderShoesCategories = () => {
    return (
      <Box marginTop={20}>
        <SectionList
          sections={DATA_SHOES_OF_CATEGORIES}
          renderItem={renderItemShoesCategory}
          renderSectionHeader={({ section }) => {
            const { name } = section
            return renderSectionHeader(name)
          }}
          ListFooterComponent={renderFooter}
          keyExtractor={(item) => item.id.toString()}
        />
      </Box>
    )
  }

  const renderSubHeader = () => {
    return (
      <Box paddingHorizontal={sizes.horizontal}>
        <Typography fontSize={36} fontWeight="700" numberOfLines={3}>
          Tonkatsu FUJIRO
        </Typography>
        {renderInfoStore()}
        {renderListImageStore()}
        {renderMoreInfo()}
        {renderInputSearch()}
        {renderShoesCategories()}
      </Box>
    )
  }

  const renderContent = () => {
    return <FlatList ListHeaderComponent={renderSubHeader} data={[]} renderItem={() => null} />
  }

  return (
    <Box flex={1} backgroundColor="#fff">
      {renderHeader()}
      {renderContent()}
    </Box>
  )
}

export default StoreDetails

const styles = StyleSheet.create({})
