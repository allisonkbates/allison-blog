import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import PageLayout from "../../components/pageLayout";
import PostsCardList from "../../components/postsCardList";
import DateComponent from "../../components/date";
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'

export default function Post({ post, morePosts}) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    
    <PageLayout page={!post ? `Recent Post` : `${post.title}`}>
      {router.isFallback ? (<h1>Loading…</h1>) : (
      <div>
      <section className="post-section">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-date"><DateComponent dateString={post.date}/></p>
        <hr></hr>
        <div className="post-content">
          {documentToReactComponents(post.content.json)}
        </div>
        <hr></hr>
        </section>
        {morePosts && <PostsCardList posts={morePosts} title="More Posts" className="padding-2em"/>}
        </div>
      )}
    <style jsx>{`
      section {
        width: 100%;
      }
      .post-section {
        width: 75%;
      }
      .post-title {
        font-family: var(--ff-mono);
        color: var(--color-viridian-500);
        font-weight: 500;
        font-size: var(--fs-700);
        line-height: 1;
        margin-bottom: 1em;
      }
      hr {
        border: 1px solid var(--color-grey-30);
      }
      .post-date {
        font-family: var(--ff-mono);
        color: var(--color-grey-50);
        font-size: var(--fs-300);
      }
      .post-content {
        margin-bottom: 2em;
      }

      @media only screen and (max-width: 768px) {
        .post-section {
          width: 100%;
        }
        .post-title {
          font-size: var(--fs-500);
        }
        .post-content {
          font-size: var(--fs-300);
        }

      }
    `}</style>
    </PageLayout>
  )
}

/* Note! This query is set to only return two results */
export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}


// import { useRouter } from 'next/router'
// import Head from 'next/head'
// import ErrorPage from 'next/error'
// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
// import MoreStories from '../../components/more-stories'
// import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
// import SectionSeparator from '../../components/section-separator'
// import Layout from '../../components/layout'
// import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
// import PostTitle from '../../components/post-title'
// import { CMS_NAME } from '../../lib/constants'

// export default function Post({ post, morePosts, preview }) {
//   const router = useRouter()

//   if (!router.isFallback && !post) {
//     return <ErrorPage statusCode={404} />
//   }

//   return (
//     <Layout preview={preview}>
//       <Container>
//         <Header />
//         {router.isFallback ? (
//           <PostTitle>Loading…</PostTitle>
//         ) : (
//           <>
//             <article>
//               <Head>
//                 <title>
//                   {post.title} | Next.js Blog Example with {CMS_NAME}
//                 </title>
//                 <meta property="og:image" content={post.coverImage.url} />
//               </Head>
//               <PostHeader
//                 title={post.title}
//                 coverImage={post.coverImage}
//                 date={post.date}
//                 author={post.author}
//               />
//               <PostBody content={post.content} />
//             </article>
//             <SectionSeparator />
//             {morePosts && morePosts.length > 0 && (
//               <MoreStories posts={morePosts} />
//             )}
//           </>
//         )}
//       </Container>
//     </Layout>
//   )
// }

// export async function getStaticProps({ params, preview = false }) {
//   const data = await getPostAndMorePosts(params.slug, preview)

//   return {
//     props: {
//       preview,
//       post: data?.post ?? null,
//       morePosts: data?.morePosts ?? null,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug()
//   return {
//     paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
//     fallback: true,
//   }
// }
