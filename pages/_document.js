import Document, { Head, Main, NextScript } from 'next/document'
import css from '../styles/main.css'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body bgcolor="#E9E8FE" className="custom_class" style={{margin:0}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}