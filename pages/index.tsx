import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link.js";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Erik Emanuel. I'm a nutritionist by education, and web
          developer by profession.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

//For Static Site Generation (SSG) with data, called at build time
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

/**
 * For Server Side Generation (SSR) with data, called at request time.
 * @param {object} context Contains request specific parameters
 * @returns
 */
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

import useSWR from "swr";

const getUser = (url: string) => fetch(url).then<User>((r) => r.json());

function Profile() {
  const { data, error } = useSWR("/api/user", getUser);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  // if('name' in data)
  return <div>hello {data.name}!</div>;
}

type User = Response & { name: string };
