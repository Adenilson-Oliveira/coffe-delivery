import { createContext, ReactNode, useState } from 'react'
import { coffe } from './CoffeContext'

type user = {
  cep: string
  rua: string
  numero: number
  complemento: string | null
  bairro: string
  cidade: string
  uf: string
}

export type request = {
  cafesComprados: coffe[]
  user: user
}

interface RequestContextType {
  request: any
  setRequest: (req: request) => void
}

export const RequestContext = createContext({} as RequestContextType)

interface RequestContextProviderProps {
  children: ReactNode
}

export function RequestContextProvider({
  children,
}: RequestContextProviderProps) {
  const [request, setRequest] = useState({})

  return (
    <RequestContext.Provider value={{ request, setRequest }}>
      {children}
    </RequestContext.Provider>
  )
}
