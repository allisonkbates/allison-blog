import Head from "next/head";
import { getAllPostsForHome } from '../lib/api'
import Header from "../components/header";
import Layout from "../components/layout";
import Posts from "../components/posts";

export default function Blog({ allPosts }) {
  return (
    <>
    <Header />
    <Layout>
      <Head>
        <title>Allison Mazzetti | Blog</title>
      </Head>
      <h2>Latest Posts</h2>
      <Posts posts={allPosts}/>
    <style jsx>{`
      h2 {
        font-family: "IBM Plex Mono", monospace;
        font-weight: 300;
      }
    `}</style>
    </Layout>
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