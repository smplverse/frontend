/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import jazzicon from '@metamask/jazzicon'
import { useLayoutEffect, useMemo } from 'react'

const StyledIdenticon = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 1.125rem;
  font-size: initial;
  margin-left: 10px;
`

interface Props {
  account: string
  ml?: number
  mt?: number
  size: number
}

export function Identicon({ account, ml, mt, size }: Props) {
  const icon = useMemo(
    () => account && jazzicon(size, parseInt(account.slice(2, 10), 16)),
    [account, size]
  )
  let iconRef: HTMLDivElement | undefined

  useLayoutEffect(() => {
    if (icon && iconRef) {
      iconRef.appendChild(icon)
      return () => {
        try {
          iconRef?.removeChild(icon)
        } catch (e) {
          console.error('Avatar icon not found')
        }
      }
    }
    return
  }, [icon, iconRef])

  return (
    <StyledIdenticon sx={{ ml, mt }}>
      <div
        ref={(ref) => {
          if (ref) {
            iconRef = ref
          }
        }}
      />
    </StyledIdenticon>
  )
}
