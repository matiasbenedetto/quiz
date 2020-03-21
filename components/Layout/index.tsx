import * as React from 'react'
import Head from 'next/head'
import UserBar from '../UserBar';
import styles from './styles';

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title,
}) => (
  <div>
    <style jsx>{styles}</style>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <UserBar />
    </header>
    <main className="mainContent">
      <div className="container">
        {children}
      </div>
    </main>
    <footer>

    </footer>
  </div>
)

Layout.defaultProps = {
  title: 'Next Cripto Quiz',
}

export default Layout
