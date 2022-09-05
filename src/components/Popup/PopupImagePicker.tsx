import Modal from 'react-native-modal'
import React from 'react'
import { Pressable } from 'react-native'
import Box from '../Base/Box'
import Typography from '../Base/Typography'
import { CameraIcon, PictureIcon, XMarkIcon } from '~/assets/icons'
import { textColor } from '~/constants'

interface IProps {
  isVisible: boolean
  onCloseModal?: () => void
  onPressCamera?: () => void
  onPressGallery?: () => void
}

const PopupImagePicker: React.FC<IProps> = ({
  isVisible,
  onCloseModal = () => {},
  onPressCamera = () => {},
  onPressGallery = () => {},
}) => {
  const renderOptionCamera = () => {
    return (
      <Pressable onPress={onPressCamera}>
        <Box flexDirection="row" alignItems="center" paddingVertical={10}>
          <CameraIcon />
          <Typography fontSize={16} color={textColor} marginLeft={20} fontWeight="600">
            Camera
          </Typography>
        </Box>
      </Pressable>
    )
  }

  const renderOptionGallery = () => {
    return (
      <Pressable onPress={onPressGallery}>
        <Box flexDirection="row" alignItems="center" paddingVertical={10}>
          <PictureIcon />
          <Typography fontSize={16} color={textColor} marginLeft={20} fontWeight="600">
            Gallery
          </Typography>
        </Box>
      </Pressable>
    )
  }

  return (
    <Modal
      style={{ margin: 0, justifyContent: 'flex-end' }}
      onBackdropPress={onCloseModal}
      onSwipeComplete={onCloseModal}
      coverScreen
      isVisible={isVisible}
      swipeDirection="down"
      swipeThreshold={100}
      propagateSwipe
    >
      <Box
        width="100%"
        height={200}
        backgroundColor="white"
        borderTopLeftRadius={16}
        borderTopRightRadius={16}
        padding={20}
      >
        <Pressable
          onPress={onCloseModal}
          style={{
            alignSelf: 'flex-end',
          }}
        >
          <XMarkIcon />
        </Pressable>
        <Typography fontSize={18} fontWeight="600" color={textColor} marginBottom={8}>
          Change profile picture
        </Typography>
        {renderOptionCamera()}
        {renderOptionGallery()}
      </Box>
    </Modal>
  )
}

export default PopupImagePicker
