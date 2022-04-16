import { Box } from 'theme-ui'

import { TypeLandingPage } from '../components'

interface Props {
  setEntered: (value: boolean) => void
}

export const LandingPage = ({ setEntered }: Props) => (
  <Box pl={3} pt={4}>
    <div style={{ fontSize: 15 }}>
      <TypeLandingPage setEntered={setEntered} />
    </div>
  </Box>
)
