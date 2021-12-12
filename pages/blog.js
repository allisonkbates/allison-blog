import Head from "next/head";
import { getAllPostsForHome } from '../lib/api'
import Header from "../components/header";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Posts from "../components/posts";

export default function Blog({ allPosts }) {
  return (
    <>
    <Header />
    <Layout>
      <Head>
        <title>Allison Mazzetti | Blog</title>
      </Head>
      <Posts posts={allPosts}/>
    <style jsx>{`
    `}</style>
    </Layout>
    <Footer />
    </>
  )
}

/* Including preview in the data fetch, but we'll need to build out where to use this data, see example for reference. */

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}