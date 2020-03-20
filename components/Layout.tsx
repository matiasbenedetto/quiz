import * as React from 'react'
import Head from 'next/head'
import UserBar from './UserBar';

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title,
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <UserBar />
    </header>
    {children}
    <footer>
    </footer>
  </div>
)

Layout.defaultProps = {
  title: 'Next Cripto Quiz',
}

export default Layout
