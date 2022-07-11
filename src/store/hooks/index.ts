import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '~/store/index'

/**
 * While it's possible to import the RootState and AppDispatch types into each component, it's better to create typed versions of the useDispatch and useSelector hooks for usage in your application.
 */

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
