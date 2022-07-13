import { Text } from 'theme-ui'

export const CurrentTime = () => {
  const currentDate = new Date()
  return (
    <Text mt={4}>
      {currentDate.toDateString()} {currentDate.getHours()}:
      {currentDate.getMinutes()}
    </Text>
  )
}
