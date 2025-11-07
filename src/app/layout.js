import "./globals.css";
import { ThemeProvider } from "@/contexts/theme";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="pt-BR">
        <body className={`antialiased`} >
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
