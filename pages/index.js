import { useState, useEffect } from 'react'
import { useStoreState } from 'easy-peasy'
import Head from 'next/head'
import Footer from '../components/Footer'
import { Default } from '../components/contents/Menu'
import About from '../components/contents/About'
import Moo from '../components/contents/Moo'
import Portfolio from '../components/contents/Portfolio'

const contents = [{
  name: 'about',
  component: <About />
}, {
  name: 'apt get moo',
  component: <Moo />
}, {
  name: 'portfolio',
  component: <Portfolio />
}]

export default function Home() {

  const term = useStoreState(state => state.menu.term)
  const info = useStoreState(state => state.me.info)

  const [content, switchContent] = useState()

  useEffect(() => {
    switchContent(contents.find(o => o.name === term))
  }, [term])

  return (
    <div className="cv">
      <Head>
        <title>My CV | rojasjorge.com</title>
        <link rel="stylesheet" href="https://unpkg.com/terminal.css@0.7.2/dist/terminal.min.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <main className="cv--contents">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="terminal-prompt">{info.about.name}</h1>
            </div>
          </div>
          {content ? content.component : <Default />}
        </div>
      </main>
      <Footer />
    </div>
  )
}
