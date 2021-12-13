import { getAllPostsForHome } from '../lib/api';
import Intro from "../components/intro";
import PageLayout from "../components/pageLayout";
import PostCardList from "../components/postsCardList";

export default function Index({ allPosts }) {
  return (
    <PageLayout page="Home"> 
      <Intro />
      {allPosts && (
      <PostCardList posts={allPosts}/>
      )}
      
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