import './index.css'
import AboutEncryptedBoard from './(components)/sections/about-encrypted-board'
import Introduction from './(components)/sections/introduction'

export default function Page() {
  return (
    <div className="about px-20">
      <Introduction />
      <AboutEncryptedBoard />
    </div>
  )
}