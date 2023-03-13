import Image from 'next/image'

export default function Project({ data }) {

  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const homepage = data.properties.Homepage.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');

    var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
    var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl mb-2"
        src={imgSrc}
        alt="cover image"
        width="400"
        height="300"
        // layout="responsive"
        // objectFit="cover"
        quality={100}
      />
      <div className='p-4 flex flex-col'>
        <h1 className='text-2xl font-bold mb-4'>{title}</h1>
        <h3 className='text-md mb-2'>{description}</h3>
        <a href={github} className='text-sm'>깃허브 바로가기</a>
        <a href={homepage} className='text-sm'>홈페이지 바로가기</a>
        <p className='my-2'>
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>

        <div className='flex items-start flex-wrap mt-2'>
          {tags.map((tag) => (
            <p className='px-2 py-1 mr-2 mb-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30' key={tag.id}>{tag.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}