import Link from 'next/link';

const Homepage = () => {
  return (
    <>
      <div>homepage</div>
      <Link href="/about-me">
        <a>About Me</a>
      </Link>
    </>
  )
}

export default Homepage;