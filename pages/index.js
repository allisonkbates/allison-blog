import Head from "next/head";
import { getAllPostsForHome } from '../lib/api'
import PageLayout from "../components/pageLayout";

export default function Index({ allPosts }) {
  return (
    <PageLayout page="Home"> 
      <h2>This is this home page... TBD what to include!</h2>
      {/* <Posts posts={allPosts}/> */}
    <style jsx>{`
      h2 {
        font-family: "IBM Plex Mono", monospace;
        font-weight: 300;
      }
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