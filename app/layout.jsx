import './globals.css'
import React from "react";
import AnimatedCursor from "react-animated-cursor"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body>
         <AnimatedCursor
          color='102,204,0'
          innerSize={25}
          innerStyle={{
            border: '2px solid var(--border)',
            backgroundColor: 'transparent',
          }}
        /> 
        {children}
      </body>
    </html>
  )
}

