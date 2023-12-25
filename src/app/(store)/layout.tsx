import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen grid-rows-app gap-5 ">
      {children}
    </div>
  )
}
