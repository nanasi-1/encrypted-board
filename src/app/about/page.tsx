import './index.css'
import AboutEncryptedBoard from './(components)/sections/about-encrypted-board'
import Introduction from './(components)/sections/introduction'
import AboutCrypto from './(components)/sections/about-crypto'
import HowToUse from './(components)/sections/how-to-use'

export default function Page() {
  return (
    <div className="about px-20">
      <Introduction />
      <AboutEncryptedBoard />
      <AboutCrypto />
      <HowToUse />
    </div>
  )
}