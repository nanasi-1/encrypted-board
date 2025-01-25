'use client'

import { ClipboardIcon, CheckIcon, CloseIcon, Icones } from "@/components/ui/icons";
import { TextBox } from "@/components/ui/text-box";
import Cipher from "@/components/ui/cipher";
import styles from './index.module.css'
import { useEffect, useState } from "react";

function CopyButton({ target, className, iconClassname }: {
  className?: string
  iconClassname?: string
  target: string
}) {
  const [status, setStatus] = useState<'pending' | 'done' | 'error'>('pending')

  const handleClick = () => {
    navigator.clipboard.writeText(target)
      .then(() => setStatus('done'))
      .catch(e => {
        console.error(e)
        setStatus('error')
      })
  }

  useEffect(() => {
    if (status === 'pending') return
    const id = setTimeout(() => setStatus('pending'), 1000)
    return () => clearTimeout(id)
  }, [status])
  
  return (
    <button className={className} onClick={handleClick}>
      <Icones 
        color="black" 
        className={"text-2xl " + iconClassname} 
        Icon={status === 'pending' 
          ? ClipboardIcon 
          : status === 'done' ? CheckIcon : CloseIcon
        } 
      />
    </button>
  )
}

export default function KeyBox({ label, children, className }: {
  children: string
  className?: string
  label: React.ReactNode
}) {
  return (
    <TextBox className={`${styles['key-box']} ${className}`}>
      <span className="my-2 font-bold block border-r border-primary">{label}</span>
      <div className="my-2 max-h-[1.4rem] overflow-y-scroll">
        <Cipher color="white">{children}</Cipher>
      </div>
      {/* Clipboard APIの存在チェック */}
      {typeof window?.navigator?.clipboard?.writeText === 'function' ?
        <CopyButton target={children} className="bg-primary text-black font-bold" />
        : null
      }
    </TextBox>
  )
}