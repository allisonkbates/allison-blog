import { getAllPostsForHome } from '../lib/api';
import Intro from "../components/intro";
import PageLayout from "../components/pageLayout";
import PostCardList from "../components/postsCardList";

export default function Index({ allPosts }) {
  return (
    <PageLayout page="Home"> 
      <Intro />
      <PostCardList posts={allPosts} padding="2em"/>
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