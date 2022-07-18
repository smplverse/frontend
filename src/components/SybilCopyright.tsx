/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'

const CopyrightContainer = styled.header`
  color: black;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 14.5px;
`

export const SybilCopyright = () => {
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
      Sybilverse is copylefted under the&nbsp;
      <a
        href="https://viralpubliclicense.org/"
        style={{ textDecoration: 'none', color: '#008f11' }}
      >
        Viral Public License
      </a>
    </CopyrightContainer>
  )
}
