import Modal from 'react-native-modal'
import React from 'react'
import { Pressable } from 'react-native'
import Box from '../Base/Box'
import Typography from '../Base/Typography'
import { XMarkIcon } from '~/assets/icons'
import ButtonOpacity from '../Button/ButtonOpacity'
import { useAppDispatch } from '~/store/hooks'
import { logoutUser } from '~/store/appUserSlice'

interface IProps {
  isVisible: boolean
  onCloseModal?: () => void
}

const Unauthorized: React.FC<IProps> = ({ isVisible, onCloseModal = () => {} }) => {
  const dispatch = useAppDispatch()

  const handleLogin = () => {
    onCloseModal()
    setTimeout(() => {
      dispatch(logoutUser())
    }, 500)
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
          You are not authorized
        </Typography>
        <Typography textAlign="center" fontSize={18} marginTop={16}>
          Please login to continue
        </Typography>
        <Box marginTop="auto">
          <ButtonOpacity title="Login" onPress={handleLogin} />
        </Box>
      </Box>
    </Modal>
  )
}

export default Unauthorized
