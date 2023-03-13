// https://www.youtube.com/watch?v=KvoFvmu5eRo
import Head from 'next/head'
import Layout from "@/components/layout"
// import ProjectItem from '@/components/projects/project-item';
import Project from '@/components/project';

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className='flex flex-col px-4 xs:px-10 items-center justify-center min-h-screen'>
          <h1 className='text-4xl sm:text-6xl font-bold mt-12'>
            총 프로젝트 : <span className='pl-4 text-blue-500 dark:text-blue-500'>{projects.results.length}</span>
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xs:w-full py-10 xs:m-6 m-2'>
            {projects.results.map((project) => (
              <Project data={project} key={project.id} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-props
// 빌드타임 때 호출! (서버에서 핸들링)
export async function getStaticProps() {

  // https://developers.notion.com/reference/post-database-query
  // Notion post database query
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          "property": "Name",
          "direction": "ascending"
        }
      ],
      page_size: 100
    })
  };
  
  const response = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, options);
  const projects = await response.json();
  // console.log(projects);

  // const projectNames = projects.results.map((project) => (
  //   project.properties.Name.title[0].plain_text
  // ))


  return {
    props: { projects }, // will be passed to the page component as props
  }
}