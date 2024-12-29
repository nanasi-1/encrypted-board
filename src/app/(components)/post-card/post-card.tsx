import Cipher from '@/components/ui/cipher'
import styles from './post-card.module.css'
import { Icones, KeyIcon, LockIcon, MentionIcon, MenuDotsIcon } from '@/components/ui/icons'

/** 各投稿のコンポーネント  */
// `Post`だと投稿を意味する`post`と名前が被るので`PostCard`とした
export default function PostCard() {
  const cipher = "M28KODvCFBfdSNoGMSL8hnipVB+gCOGjkG59qOaWsSx5x04A7TaTbg/G+7SHniVsOuJZC/KcjYjXmtQfOF1EKQa1qhALU8Z4lk7kFXog5TLl+RLtkn3Qt1DhPxwKr4oRbqW4YXrNVjWNx/6XptqZ212mdzKlM17YOGuPYdCKXXd43pAwak4/RRNF86V6Pxn98JgwWYbPwWsKv5LKiDEpM0lotuZBywJ9pMuoL1Ie+aan8QRI3m6Uel4QP5h4SbYvvZSu6tR5QQInXr6a7TpMejVuNiYsPcubsFFTIB8cad22VJAwQ6EgUW5Qv3q7K7iT1l60rVa3TCuqf9nd0X8ywUCHYs8eV+TRmd/I8tjLYbk8EQYGcwiMAYL4wCAXMa5HI5pmDuGEXaroMZcY3bjQsZ7ckT6JZgB0AWQ3gcty2IjTCf/XSFspWiGmwjHmPwRajRQRIKOh9kQ6cTrlbwdrDM24fBOY69jkRuAd9dHsU/dz/G2wjl3HPmyW0NhvKFD2rx1oA8wLU9v22otM4XIWRU91CN3xXfJdsLNFUdRJWERtqG4Jbf83NMB+mdYBfVmYqs26YUBIvN5kWUFaDRC1zcOjWudLIIE9Jft3EE71mbegV3yBhbA4VIiH4POGPrUP++iGs25ZwBa2pMcroyUOoQMSXQtLxViPBcwzhDrvy9s="
  const verify = 'mJ+DKwsUH9B7l2oIMQlCZi0'

  return (
    <div className={styles['wrapper']}>
      <div className={styles['top-line']}>
        <span className={styles['date']}>2024/12/28 18:56</span>
        <span className={styles['public-key']}>
          <Icones Icon={LockIcon} position="left-of-text" />
          <Cipher color='white'>wAcrImJaLu2iwSz+q428Z7</Cipher>
        </span>
        <Menus />
      </div>
      <Cipher className={styles.cipher}>{cipher}</Cipher>
      {verify ? <VerifyText text={verify} /> : null}
    </div>
  )
}

function Menus({ onKeyClick, onMoreClick }: {
  onKeyClick?: () => void,
  onMoreClick?: () => void,
}) {
  const KEY_ICON_SIZE = 1.2
  const MORE_ICON_SIZE = 1.3

  return (
    <ul className={styles['menu']}>
      <li>
        <button onClick={onKeyClick}>
          <Icones width={`${KEY_ICON_SIZE}rem`} height={`${KEY_ICON_SIZE}rem`} Icon={KeyIcon} />
        </button>
      </li>
      <li>
        <button onClick={onMoreClick}>
          <Icones width={`${MORE_ICON_SIZE}rem`} height={`${MORE_ICON_SIZE}rem`} color="white" Icon={MenuDotsIcon} />
        </button>
      </li>
    </ul>
  )
}

function VerifyText({ text }: { text: React.ReactNode }) {
  return (
    <div className='text-sm mt-2.5'>
      <Icones Icon={MentionIcon} position="left-of-text" />
      <Cipher color='white' className="opacity-85">{text}</Cipher>
    </div>
  )
}