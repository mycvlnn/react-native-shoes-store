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

const PopupLogout: React.FC<IProps> = ({ isVisible, onCloseModal = () => {} }) => {
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
        height={200}
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
        <Typography textAlign="center" fontSize={20} fontWeight="600">
          Are you sure want to log out ?
        </Typography>

        <Box marginTop="auto">
          <ButtonOpacity title="Log out" onPress={handleLogin} />
        </Box>
      </Box>
    </Modal>
  )
}

export default PopupLogout
