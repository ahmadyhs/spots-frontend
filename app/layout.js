import './globals.css'

export const metadata = {
  title: 'Spots',
  description: 'Website layanan coworking space',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
