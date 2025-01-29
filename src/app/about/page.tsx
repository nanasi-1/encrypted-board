import './index.css'
import AboutEncryptedBoard from './(components)/sections/about-encrypted-board'
import Introduction from './(components)/sections/introduction'
import AboutCrypto from './(components)/sections/about-crypto'
import HowToUse from './(components)/sections/how-to-use'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '初めての方はこちら | 暗号掲示板'
}

export default function Page() {
  return (
    <div className="about px-20">
      <Introduction />
      <div className='flex w-full'>
        <div className='w-[70%]'>
          <AboutEncryptedBoard />
          <AboutCrypto />
          <HowToUse />
        </div>
        <div className='w-[30%] hidden'>
          もくじ
        </div>
      </div>
    </div>
  )
}