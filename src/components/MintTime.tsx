import { Text } from 'theme-ui'

export const MintTime = () => {
  const mintingDate = new Date(Date.UTC(2022, 5, 24, 19, 0, 0, 0))
  return (
    <Text mt={4} color={'white'}>
      {mintingDate.toDateString()} {mintingDate.getHours()}:00:00
    </Text>
  )
}
