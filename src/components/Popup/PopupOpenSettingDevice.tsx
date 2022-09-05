import React from 'react'
import { Pressable } from 'react-native'
import Modal from 'react-native-modal'
import Box from '../Base/Box'
import Typography from '../Base/Typography'
import { XMarkIcon } from '~/assets/icons'
import ButtonOpacity from '../Button/ButtonOpacity'

import { primaryBold, textColor } from '~/constants'
import { useTranslation } from 'react-i18next'

interface IProps {
  isVisible: boolean
  title?: string
  onOpenSetting?: () => void
  onCancel?: () => void
  onClosePopup?: () => void
}

const PopupOpenSettingDevice: React.FC<IProps> = ({
  isVisible,
  title,
  onOpenSetting = () => {},
  onCancel = () => {},
  onClosePopup,
}) => {
  const { t } = useTranslation()

  const renderBtnClose = () => {
    return (
      <Pressable
        onPress={onClosePopup}
        style={{
          alignSelf: 'flex-end',
        }}
      >
        <XMarkIcon />
      </Pressable>
    )
  }

  const renderTitle = () => {
    return (
      <Typography fontSize={18} fontWeight="600" color={textColor} textAlign="center" marginTop={4}>
        {title}
      </Typography>
    )
  }

  const renderOpenBtn = () => {
    return (
      <ButtonOpacity
        customStyleButton={{ flex: 1, marginRight: 10 }}
        title="Open"
        textColor="white"
        backgroundColor={primaryBold}
        onPress={onOpenSetting}
      />
    )
  }

  const renderCancelBtn = () => {
    return (
      <ButtonOpacity
        title="Cancel"
        textColor="white"
        backgroundColor="red"
        onPress={onCancel}
        customStyleButton={{ flex: 1 }}
      />
    )
  }

  const renderBoxActions = () => {
    return (
      <Box flexDirection="row" marginTop={12}>
        {renderOpenBtn()}
        {renderCancelBtn()}
      </Box>
    )
  }

  return (
    <Modal
      style={{ margin: 0, justifyContent: 'center', alignItems: 'center' }}
      onBackdropPress={onClosePopup}
      onSwipeComplete={onClosePopup}
      coverScreen
      isVisible={isVisible}
      swipeDirection="down"
      swipeThreshold={100}
      propagateSwipe
    >
      <Box width="90%" height={180} backgroundColor="white" borderRadius={16} padding={20}>
        {renderBtnClose()}
        {renderTitle()}
        {renderBoxActions()}
      </Box>
    </Modal>
  )
}

export default PopupOpenSettingDevice
