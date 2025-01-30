import Link from "next/link";
import { ReactNode } from "react";
import { Icones, LockIcon, MentionIcon, GitHubIcon } from "@/components/ui/icons";
import Cipher from "@/components/ui/cipher";

const FOOTER_CIPHER = 'DRq6KTVcy93ShJKvmdUXyNndNVCkxbHRyvXoD6SEen/BzjI1DS2drrnt+X3WsY48Nqaa0npGg9AVJwxJf5lz1Pga2rBMnpzmhexoUeIuYiDOYnpiSUK9NFlwyCru0Zzz7FqPliEiZqP+WXjARXYQmX7FI71+oyyMQN6j/4m5CLD+LvipVXOc6aRjEd1GtFLqo3NHLtX9PUbvFVYjFhxrq+j8D+y5E/rqb8PaQt1nJPKsqtMv0/YO2icFrHDY1ow9o/EnbA2jVsNY4kzVo9qKKEQmGM7V2Evm6UZEby7bfw5FWEP/552E7hM5JKjubUkNM5CgXgDAN06GRokBu8Dcgg=='

function NavItem({ children, href }: { children: ReactNode, href: string }) {
  return (
    <li>
      <span className="pr-2">
        <Icones Icon={LockIcon} />
      </span>
      <Link href={href}>{children}</Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="bg-black px-12 relative">
      <Cipher className="pt-8 block text-sm opacity-50 select-none">
        {FOOTER_CIPHER}
      </Cipher>
      <p className="pt-7 pb-8">
        <span>
          <Icones Icon={MentionIcon} position="left-of-text" />
          <a href="https://x.com/n1_code" target="_blank">nanasi-1</a>
        </span>
        <a href="https://github.com/nanasi-1/encrypted-board" target="_blank">
          <Icones Icon={GitHubIcon} className="ml-4" height="1.3rem" width="1.3rem"/>
        </a>
      </p>
      <div className="absolute top-0 left-1/2 h-full flex items-center">
        <ul className="flex flex-col gap-y-4">
          <NavItem href="/">暗号掲示板</NavItem>
          <NavItem href="/about">初めての方はこちら</NavItem>
          {/* TODO いつか実装する
          <NavItem href="/add-public">公開鍵と秘密鍵を生成する</NavItem>
          <NavItem href="/add-sign">署名の検証鍵を追加する</NavItem> 
          */}
        </ul>
      </div>
    </footer>
  );
}