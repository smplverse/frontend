import styled from '@emotion/styled'

interface ImageProps {
  width?: string | number
  height?: string | number
}

export const SybilImage = styled.div<ImageProps>`
  background: url('/smpl.png');
  background-size: contain;
  width: ${(props) => (props?.width ? props?.width : 513)}px;
  height: ${(props) => (props?.height ? props?.height : 513)}px;
`
