import Link from "next/link"
import Container from "./Container"

type SubNavBarProps = {}

const SubNavBar = (props: SubNavBarProps) => {
  return (
    <nav className="sticky top-0 z-10">
      <Container classes="flex justify-between">
        <Link href="/" className="capitalize">
          AirPods Max
        </Link>

        <ul className="flex">
          <li>
            <Link href="/link1">Link 1</Link>
          </li>
          <li>
            <Link href="/link1">Link 2</Link>
          </li>
          <li>
            <Link href="/link1">Link 3</Link>
          </li>
          <li>
            <Link href="/link1">CTA Blue</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default SubNavBar
