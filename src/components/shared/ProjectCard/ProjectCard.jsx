// import Link from 'next/link'

export default function ProjectCard({details}) {
  // console.log(details);

  return (
    <a href={details.url} target='_blank'
      className='w-full bg-white p-4 rounded'>
      {/* <Image src={props.logo} alt={props.key} height={300} /> */}
      <div>
        <h4 className='font-beaufort text-2xl font-bold text-mirage-dark'>
          {details.name}
        </h4>
      </div>

    </a>
  )
}
