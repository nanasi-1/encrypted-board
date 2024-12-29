import Link from "next/link";
import { ReactNode } from "react";
import { Icones, LockIcon, MentionIcon, GitHubIcon } from "@/components/ui/icons";
import Cipher from "@/components/ui/cipher";

const FOOTER_CIPHER = 'M28KODvCFBfdSNoGMSL8hnipVB+gCOGjkG59qOaWsSx5x04A7TaTbg/G+7SHniVsOuJZC/KcjYjXmtQfOF1EKQa1qhALU8Z4lk7kFXog5TLl+RLtkn3Qt1DhPxwKr4oRbqW4YXrNVjWNx/6XptqZ212mdzKlM17YOGuPYdCKXXd43pAwak4/RRNF86V6Pxn98JgwWYbPwWsKv5LKiDEpM0lotuZBywJ9pMuoL1Ie+aan8QRI3m6Uel4QP5h4SbYvvZSu6tR5QQInXr6a7TpMejVuNiYsPcubsFFTIB8cad22VJAwQ6EgUW5Qv3q7K7iT1l60rVa3TCuqf9nd0X8ywUCHYs8eV+TRmd/I8tjLYbk8EQYGcwiMAYL4wCAXMa5HI5pmDuGEXaroMZcY3bjQsZ7ckT6JZgB0AWQ3gcty2IjTCf/XSFspWiGmwjHmPwRajRQRIKOh9kQ6cTrlbwdrDM24fBOY69jkRuAd9dHsU/dz/G2wjl3HPmyW0NhvKFD2rx1oA8wLU9v22otM4XIWRU91CN3xXfJdsLNFUdRJWERtqG4Jbf83NMB+mdYBfVmYqs26YUBIvN5kWUFaDRC1zcOjWudLIIE9Jft3EE71mbegV3yBhbA4VIiH4POGPrUP++iGs25ZwBa2pMcroyUOoQMSXQtLxViPBcwzhDrvy9s='

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
          <NavItem href="/add-public">公開鍵と秘密鍵を生成する</NavItem>
          <NavItem href="/add-sign">署名の検証鍵を追加する</NavItem>
        </ul>
      </div>
    </footer>
  );
}