'use client'
// 日付の表示はクライアントコンポーネントにする

import Cipher from '@/components/ui/cipher'
import styles from './post-card.module.css'
import { Icones, LockIcon, MentionIcon } from '@/components/ui/icons'
import Menus from './menus'
import { PostData } from '@/types'

function formatCreateAt(iso: string) {
  // 手抜き工事だけど動けばいいんだよ動けば
  // しっかりやるならライブラリを導入しよう
  const date = new Date(iso)
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}

/** 各投稿のコンポーネント  */
// `Post`だと投稿を意味する`post`と名前が被るので`PostCard`とした
export default function PostCard({ post }: { post: PostData }) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['top-line']}>
        <span className={styles['date']}>{formatCreateAt(post.createdAt)}</span>
        <span className={styles['public-key']}>
          <Icones Icon={LockIcon} position="left-of-text" />
          <Cipher color='white'>{post.publicKeyDigest}</Cipher>
        </span>
        <Menus post={post} />
      </div>
      <Cipher className={styles.cipher}>{post.body}</Cipher>
      {post.sign.has ? <VerifyText text={post.sign.verifyKey} /> : null}
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