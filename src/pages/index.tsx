import Image from 'next/image'
import { Inter } from 'next/font/google'
import StickyProductContentBlock from '@/components/StickyProductContentBlock'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<main>
  <StickyProductContentBlock></StickyProductContentBlock>
</main>
  )
}
