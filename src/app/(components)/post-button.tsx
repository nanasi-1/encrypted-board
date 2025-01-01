import { Icones, LockIcon } from "@/components/ui/icons"

function UI() {
  return (
    <button className="border-primary border-2">
      <Icones Icon={LockIcon} />
    </button>
  )
}

export default function PostButton() {
  return (
    <UI />
  )
}