import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
        <Link href="/more">More Pages</Link>
        <Link href="/more/secondpage">Second Page</Link>
        <Link href="/more/thirdpage">Third Page</Link>
    </nav>
  )
}
