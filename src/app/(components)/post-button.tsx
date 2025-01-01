import { Icones, AddEncryptionIcon } from "@/components/ui/icons"

function UI({ Icon }: {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}) {
  return (
    <button className="border-primary border-2">
      <Icones Icon={Icon} />
    </button>
  )
}

export default function PostButton() {
  return (
    <UI Icon={AddEncryptionIcon} />
  )
}