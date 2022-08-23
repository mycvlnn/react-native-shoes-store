import Modal from 'react-native-modal'
import React from 'react'
import { Pressable } from 'react-native'
import Box from '../Base/Box'
import Typography from '../Base/Typography'
import { XMarkIcon } from '~/assets/icons'
import ButtonOpacity from '../Button/ButtonOpacity'
import { useAppDispatch } from '~/store/hooks'
import { clearCart } from '~/store/cartSlice'

interface IProps {
  isVisible: boolean
  onCloseModal?: () => void
}

const PopupConfirmClearCart: React.FC<IProps> = ({ isVisible, onCloseModal = () => {} }) => {
  const dispatch = useAppDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
    onCloseModal()
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
    >
      <Box
        width="100%"
        height={250}
        backgroundColor="white"
        borderTopLeftRadius={16}
        borderTopRightRadius={16}
        padding={20}
      >
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
          Clear basket?
        </Typography>
        <Typography textAlign="center" fontSize={18} marginTop={16}>
          Are you sure you want to remove <Typography color="red">all items</Typography> from your
          basket?
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
              onPress={handleClearCart}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default PopupConfirmClearCart
