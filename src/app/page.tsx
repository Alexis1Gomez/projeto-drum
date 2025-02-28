import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero'!,
  description: 'Aprendiendo Next Js do zero com programador ',
  openGraph: {
    title: 'Aprendendo Next Js no Youtube',
    description: 'Aprendendo Next Js do Zero',
    images: ['https://br.pinterest.com/pin/3659243440531879/']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
    
  }
}

export default function Home(){
  return (
    <div>
      <h1>Pagina</h1>
    </div>
  )
}