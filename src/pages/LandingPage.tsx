import { Box } from 'theme-ui'

import { TypeLandingPage } from '../components'

interface Props {
  setEntered: (value: boolean) => void
}

export const LandingPage = ({ setEntered }: Props) => (
  <Box
    sx={{
      display: 'flex',
      flex: '1 1 auto',
      p: 3,
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <div style={{ fontSize: 15, width: 550 }}>
      <TypeLandingPage setEntered={setEntered} />
    </div>
  </Box>
)
