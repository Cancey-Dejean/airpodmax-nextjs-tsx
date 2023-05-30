import { ReactNode } from "react"
import Container from "./Container"
import Link from "next/link"

import { AppleLogo, Search, ShoppingCart } from "@/components/Icons"
import classNames from "classnames"

type Link = {
  url: string
  text: string
  iconTextSR: string
  icon: ReactNode
}

const dummyLinks: Link[] = [
  {
    url: "/link1",
    text: "",
    icon: <AppleLogo />,
    iconTextSR: "Apple",
  },
  {
    url: "/link2",
    text: "Store",
    icon: "",
    iconTextSR: "",
  },
  {
    url: "/link3",
    text: "Mac",
    icon: "",
    iconTextSR: "",
  },
  {
    url: "/link4",
    text: "Ipad",
    icon: "",
    iconTextSR: "",
  },
  {
    url: "/link5",
    text: "iphone",
    icon: "",
    iconTextSR: "",
  },
  {
    url: "/link6",
    text: "watch",
    icon: "",
    iconTextSR: "",
  },
  {
    url: "/link7",
    text: "AirPods",
    icon: "",
    iconTextSR: "",
  },
  {
    url: "/link8",
    text: "Tv & home",
    icon: "",
    iconTextSR: "",
  },
  {
    url: "/link9",
    text: "Entertainment",
    icon: "",
    iconTextSR: "",
  },
  {
    url: "/link10",
    text: "Accessories",
    icon: "",
    iconTextSR: "",
  },
  {
    url: "/link11",
    text: "Support",
    icon: "",
    iconTextSR: "",
  },
  {
    url: "/link12",
    text: "",
    icon: <Search />,
    iconTextSR: "Search Button",
  },
  {
    url: "/link13",
    text: "",
    icon: <ShoppingCart />,
    iconTextSR: "Shopping Cart Button",
  },
]

export default function Menu() {
  return (
    <nav className="relative z-10">
      <Container>
        <ul className="flex h-[44px] items-center justify-between">
          {dummyLinks.map((link, index) => (
            <li
              className={classNames(
                "[&_a]:text-xs [&_a]:capitalize [&_a]:tracking-[-.01em] [&_a]:text-color-gray-dark"
              )}
            >
              <Link key={index} href={link.url}>
                {link.icon && (
                  <>
                    {link.icon}
                    <span className="sr-only">{link.iconTextSR}</span>
                  </>
                )}

                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
