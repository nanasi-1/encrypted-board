import Cipher from "@/components/ui/cipher";
import { ColorStrong } from "../ui";

export default function Introduction() {
  return (
    <section className='border border-primary bg-black py-5 px-7 mb-10'>
      <div className='mb-5'>
        <Cipher>
          $ echo Hello World! <br />
          $ ssh guest@encrypted-board <br />
        </Cipher>
      </div>
      <div>
        <h1 className="text-primary font-bold mb-2">初めての方へ</h1>
        <p className="mb-2">暗号掲示板をご覧いただき、誠にありがとうございます。</p>
        <p>
          当掲示板を使うには、<ColorStrong>公開鍵暗号</ColorStrong>についての知識が必要となります。<br />
          公開鍵暗号について知っていただくため、ぜひこのページをご一読ください。<br />
        </p>
      </div>
    </section>
  )
}
