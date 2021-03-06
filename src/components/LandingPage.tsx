import { Box } from 'theme-ui'

import { TypeLandingPage } from './TypeLandingPage'

interface Props {
  setEntered: (value: boolean) => void
}

export const LandingPage = ({ setEntered }: Props) => (
  <Box
    sx={{
      display: 'flex',
      flex: '1 1 auto',
      p: [1, 3],
      alignItems: 'center',
      flexDirection: 'column',
      color: 'primary',
    }}
  >
    <div style={{ fontSize: 15, width: 550 }}>
      <TypeLandingPage setEntered={setEntered} />
    </div>
  </Box>
)
