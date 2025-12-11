import { createContext, useContext, useState, type ReactNode } from 'react'

export type CursorVariant = 'default' | 'hover' | 'button' | 'link' | 'text' | 'hidden'

interface CursorContextType {
  cursorVariant: CursorVariant
  cursorText: string
  setCursorVariant: (variant: CursorVariant) => void
  setCursorText: (text: string) => void
}

const CursorContext = createContext<CursorContextType | null>(null)

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default')
  const [cursorText, setCursorText] = useState('')

  return (
    <CursorContext.Provider
      value={{
        cursorVariant,
        cursorText,
        setCursorVariant,
        setCursorText,
      }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider')
  }
  return context
}

// Helper hook for common cursor interactions
export function useCursorHandlers(variant: CursorVariant = 'hover', text: string = '') {
  const { setCursorVariant, setCursorText } = useCursor()

  return {
    onMouseEnter: () => {
      setCursorVariant(variant)
      setCursorText(text)
    },
    onMouseLeave: () => {
      setCursorVariant('default')
      setCursorText('')
    },
  }
}
