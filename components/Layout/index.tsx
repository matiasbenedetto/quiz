import * as React from 'react'
import Head from 'next/head'
import UserBar from '../UserBar';
import { globalStyles, layoutStyles } from './styles';
import Footer from '../Footer';

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title,
}) => (
  <div className="wrapper">
    <style jsx>{globalStyles}</style>
    <style jsx>{layoutStyles}</style>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <UserBar />
    </header>
    <main className="content">
      <div className="container">
        {children}
      </div>
    </main>
    <Footer />
  </div>
)

Layout.defaultProps = {
  title: 'Next Cripto Quiz',
}

export default Layout
