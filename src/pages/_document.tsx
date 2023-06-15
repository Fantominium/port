import ContentBlock from '@/components/ContentBlock'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="coffee">
      <Head />
      <body>
        <Navigation/>
        <ContentBlock>
          <Main />
        </ContentBlock>
        <NextScript />
      </body>
    </Html>
  )
}
