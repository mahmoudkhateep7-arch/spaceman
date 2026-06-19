


import { Metadata } from 'next'
import './style.css'

export const metadata: Metadata = {
  title: '3d portfolio'
}

export default function ({ children }: React.PropsWithChildren) {


  return (
    <html lang={'en'}

    >

      <body

        className={`
        
        
        
        bg-black
        
        
        `}>
        {children}

      </body>
    </html>
  )
}