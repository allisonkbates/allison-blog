import Head from "next/head";
import Header from "./header";
import InnerLayout from "./inner-layout";
import Footer from "./footer";

export default function PageLayout({children, page}) {
  return (
    <div className="page-container">
    <Header />
    <Head>
        <title>{page ? `Allison Mazzetti | ${page}` : `Allison Mazzetti`}</title>
    </Head>
    <InnerLayout>
      {children}
    </InnerLayout>
    <Footer />
    <style jsx>{`
      .page-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }
    `}</style>
    </div>
  )
}