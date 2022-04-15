/** @jsxImportSource theme-ui */
import { ReactNode } from 'react'
import { Flex as FlexBase } from 'theme-ui'

interface FlexProps {
  flexDirection: any
  justifyContent: any
  alignItems: any
  children: ReactNode
}

interface CenteredProps {
  children?: ReactNode
  pb?: number
  pl?: number
  ml?: number
  fontSize?: number
}

interface CenteredRowProps {
  width?: string
  children?: ReactNode
  justifyContent?: string
  position?: any
}

export const Centered = ({
  children,
  pb,
  pl,
  ml,
  fontSize,
}: CenteredProps) => (
  <FlexBase
    sx={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      pb,
      pl,
      ml,
      fontSize,
    }}
  >
    {children}
  </FlexBase>
)

export const CenteredColumn = ({ children }: { children: ReactNode }) => (
  <FlexBase
    sx={{
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}
  >
    {children}
  </FlexBase>
)

export const CenteredRow = ({
  width,
  children,
  justifyContent,
  position,
}: CenteredRowProps) => (
  <FlexBase
    sx={{
      flexDirection: 'row',
      alignItems: 'center',
      width,
      justifyContent,
      position,
    }}
  >
    {children}
  </FlexBase>
)

export const Flex = ({
  flexDirection,
  justifyContent,
  alignItems,
  children,
}: FlexProps) => (
  <FlexBase sx={{ flexDirection, justifyContent, alignItems }}>
    {children}
  </FlexBase>
)
