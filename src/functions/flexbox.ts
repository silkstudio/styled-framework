// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyles } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
  flexDirection: {
    property: 'flexDirection'
  },
  flexFlow: {
    property: 'flexFlow'
  },
  flexWrap: {
    property: 'flexWrap'
  },
  alignItems: {
    property: 'alignItems'
  },
  alignContent: {
    property: 'alignContent'
  },
  alignSelf: {
    property: 'alignSelf'
  },
  justifyContent: {
    property: 'justifyContent'
  },
  gap: {
    property: 'gap',
    scale: 'spaces'
  },
  flexGrow: {
    property: 'flexGrow'
  },
  flexShrink: {
    property: 'flexShrink'
  },
  flexBasis: {
    property: 'flexBasis'
  },
  order: {
    property: 'order'
  }
}

interface FlexboxProps {
  flexDirection?: CSSProperties['flexDirection'] | ResponsiveStyle<CSSProperties['flexDirection']>
  direction?: CSSProperties['flexDirection'] | ResponsiveStyle<CSSProperties['flexDirection']>
  flexFlow?: CSSProperties['flexFlow'] | ResponsiveStyle<CSSProperties['flexFlow']>
  flow?: CSSProperties['flexFlow'] | ResponsiveStyle<CSSProperties['flexFlow']>
  flexWrap?: CSSProperties['flexWrap'] | ResponsiveStyle<CSSProperties['flexWrap']>
  wrap?: CSSProperties['flexWrap'] | ResponsiveStyle<CSSProperties['flexWrap']>
  alignItems?: CSSProperties['alignItems'] | ResponsiveStyle<CSSProperties['alignItems']>
  align?: CSSProperties['alignItems'] | ResponsiveStyle<CSSProperties['alignItems']>
  alignContent?: CSSProperties['alignContent'] | ResponsiveStyle<CSSProperties['alignContent']>
  alignSelf?: CSSProperties['alignSelf'] | ResponsiveStyle<CSSProperties['alignSelf']>
  justifyContent?: CSSProperties['justifyContent'] | ResponsiveStyle<CSSProperties['justifyContent']>
  justify?: CSSProperties['justifyContent'] | ResponsiveStyle<CSSProperties['justifyContent']>
  gap?: CSSProperties['gap'] | ResponsiveStyle<CSSProperties['gap']>
  flexGrow?: CSSProperties['flexGrow'] | ResponsiveStyle<CSSProperties['flexGrow']>
  grow?: CSSProperties['flexGrow'] | ResponsiveStyle<CSSProperties['flexGrow']>
  flexShrink?: CSSProperties['flexShrink'] | ResponsiveStyle<CSSProperties['flexShrink']>
  shrink?: CSSProperties['flexShrink'] | ResponsiveStyle<CSSProperties['flexShrink']>
  flexBasis?: CSSProperties['flexBasis'] | ResponsiveStyle<CSSProperties['flexBasis']>
  basis?: CSSProperties['flexBasis'] | ResponsiveStyle<CSSProperties['flexBasis']>
  order?: CSSProperties['order'] | ResponsiveStyle<CSSProperties['order']>
}

const flexbox: StyledFunction<FlexboxProps> = ({ theme, ...styles }) => {
  const result = createStyles<FlexboxProps>(styles, theme, config)

  if (Object.keys(styles).length) {
    result.display = 'flex'
  }

  return result
}

config.direction = config.flexDirection
config.flow = config.flexFlow
config.wrap = config.flexWrap
config.align = config.alignItems
config.justify = config.justifyContent
config.grow = config.flexGrow
config.shrink = config.flexShrink
config.basis = config.flexBasis

export { flexbox, FlexboxProps }
