/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'

const CopyrightContainer = styled.header`
  color: #ffffff;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14.5px;
`

export const Copyright = () => {
  return (
    <CopyrightContainer
      sx={{
        p: [4, 5],
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
      }}
    >
      SMPLverse is copylefted under the&nbsp;
      <a
        href="https://viralpubliclicense.org/"
        style={{ textDecoration: 'none', color: 'hotpink' }}
      >
        Viral Public License
      </a>
    </CopyrightContainer>
  )
}
