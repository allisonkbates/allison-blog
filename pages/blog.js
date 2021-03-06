import Head from "next/head";
import { getAllPostsForHome } from '../lib/api'
import PostsCardList from "../components/postsCardList";
import PageLayout from "../components/pageLayout";

export default function Blog({ allPosts }) {
  return (
    <PageLayout page="Blog">
      <Head>
        <title>Allison Mazzetti | Blog</title>
      </Head>
      {allPosts && <PostsCardList posts={allPosts}/>}
    <style jsx>{`
    `}</style>
    </PageLayout>
  )
}

/* Including preview in the data fetch, but we'll need to build out where to use this data, see example for reference. */

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}