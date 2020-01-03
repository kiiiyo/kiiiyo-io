import { BREAKPOINT } from '../constants'

export interface BreakpointProperty {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

export const defaultBreakpoint = {
  xs: `${BREAKPOINT.X_SMALL}px`,
  sm: `${BREAKPOINT.SMALL}px`,
  md: `${BREAKPOINT.MEDIUM}px`,
  lg: `${BREAKPOINT.LARGE}px`,
  xl: `${BREAKPOINT.X_LARGE}px`
}
