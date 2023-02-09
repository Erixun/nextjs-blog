import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts.js";
import Head from "next/head.js";
import Date from "../../components/date.js";
import utilStyles from "../../styles/utils.module.css";
import { useRouter } from "next/router.js";

//React component to render the page
export default function Post({ postData }) {
  // const router = useRouter() if fallback is/will be available
  // if(router.isFallback) return <div>Loading...</div>
  return (
    <Layout>
      <Head>{postData.title}</Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      {/* <br /> */}
      <div className={utilStyles.lightText}>
        {/* <br />
        {postData.id} */}
        {/* {postData.date} */}
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

//function to return an array of available post IDs
/**
 * Gets all available post IDs.
 * @returns An array of post IDs.
 */
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false, //any paths not returned by this func will result in a 404 page
    //if true will generate a "fallback" version of the page,
    // useful for generating some pages statically
    //if 'blocking' then new page will be ssr w getStaticProps & cached for future requests...
  };
}

//function to return relevant data for a specific post with id
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
