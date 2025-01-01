import Cipher from '@/components/ui/cipher'
import styles from './post-card.module.css'
import { Icones, LockIcon, MentionIcon } from '@/components/ui/icons'
import Menus from './menus'
import { PostData } from '@/types'

/** 各投稿のコンポーネント  */
// `Post`だと投稿を意味する`post`と名前が被るので`PostCard`とした
export default function PostCard({ post }: { post: PostData}) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['top-line']}>
        <span className={styles['date']}>{post.createdAt}</span>
        <span className={styles['public-key']}>
          <Icones Icon={LockIcon} position="left-of-text" />
          <Cipher color='white'>wAcrImJaLu2iwSz+q428Z7</Cipher>
        </span>
        <Menus />
      </div>
      <Cipher className={styles.cipher}>{post.body}</Cipher>
      {post.sign.has ? <VerifyText text={post.sign.signKeyDigest} /> : null}
    </div>
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