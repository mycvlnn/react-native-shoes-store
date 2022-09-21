import Modal from 'react-native-modal'
import React from 'react'
import { Pressable } from 'react-native'

import Box from '../Base/Box'
import Typography from '../Base/Typography'
import { XMarkIcon } from '~/assets/icons'
import ButtonOpacity from '../Button/ButtonOpacity'

interface IProps {
  isVisible: boolean
  onCloseModal?: () => void
  onConfirmDelete?: () => void
}

const PopupDeleteAddress: React.FC<IProps> = ({
  isVisible,
  onCloseModal = () => {},
  onConfirmDelete = () => {},
}) => {
  return (
    <Modal
      style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}
      onBackdropPress={onCloseModal}
      onSwipeComplete={onCloseModal}
      coverScreen
      isVisible={isVisible}
      swipeDirection="down"
      swipeThreshold={100}
    >
      <Box width="80%" height={280} backgroundColor="white" borderRadius={30} padding={20}>
        <Pressable
          onPress={onCloseModal}
          style={{
            width: '10%',
            paddingVertical: 10,
          }}
        >
          <XMarkIcon />
        </Pressable>
        <Typography textAlign="center" fontSize={24} fontWeight="700">
          Delete address?
        </Typography>
        <Typography textAlign="center" fontSize={18} marginTop={12}>
          Are you sure you want to <Typography color="red"> remove this saved address</Typography>{' '}
          from your list?
        </Typography>

        <Typography textAlign="center" fontStyle="italic" fontSize={14} marginTop={20}>
          If you DELETE you’ll be redirected to the previous page.
        </Typography>

        <Box marginTop="auto" flexDirection="row">
          <Box flex={1}>
            <ButtonOpacity
              backgroundColor="white"
              textColor="#000"
              title="Nevermind"
              customStyleButton={{ borderColor: '#000', borderWidth: 1 }}
              onPress={onCloseModal}
            />
          </Box>
          <Box flex={1} marginLeft={10}>
            <ButtonOpacity
              title="DELETE"
              textColor="white"
              backgroundColor="red"
              onPress={onConfirmDelete}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default PopupDeleteAddress
