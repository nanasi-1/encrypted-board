import './index.css'
import AboutEncryptedBoard from './(components)/sections/about-encrypted-board'
import Introduction from './(components)/sections/introduction'
import AboutCrypto from './(components)/sections/about-crypto'

export default function Page() {
  return (
    <div className="about px-20">
      <Introduction />
      <AboutEncryptedBoard />
      <AboutCrypto />
    </div>
  )
}