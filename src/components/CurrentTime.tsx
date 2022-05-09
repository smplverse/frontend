import { Text } from 'theme-ui'

export const CurrentTime = () => {
  const currentDate = new Date()
  return (
    <Text mt={4} color={'white'}>
      {currentDate.toDateString()} {currentDate.getHours()}:
      {currentDate.getMinutes()}
    </Text>
  )
}
