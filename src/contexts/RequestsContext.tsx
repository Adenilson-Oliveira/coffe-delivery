import { createContext, ReactNode, useState } from 'react'
// import { coffe } from './CoffeContext'

// type user = {
//   cep: string
//   rua: string
//   numero: number
//   complemento?: string
//   bairro: string
//   cidade: string
//   uf: string
//   cafesComprados?: coffe[]
// }

interface RequestContextType {
  request: any
  setRequest: (req: any) => void
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
