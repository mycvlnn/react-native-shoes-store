import React from 'react'
import { Pressable } from 'react-native'

interface IProps {
  children: React.ReactNode
  onPress?: () => void
}

const CardIcon: React.FC<IProps> = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      }}
    >
      {children}
    </Pressable>
  )
}

export default CardIcon
