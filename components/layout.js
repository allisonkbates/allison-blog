import Alert from '../components/alert'
import Footer from '../components/footer'
/* Leftover from Example Project */
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
