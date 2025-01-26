import Cipher from "@/components/ui/cipher";

export default function Introduction() {
  return (
    <section className='border border-primary bg-black py-5 px-7 mb-10'>
      <div className='mb-5'>
        <Cipher>
          $ echo Hello World! <br />
          $ ssh -T encrypted-board <br />
          guest <br />
        </Cipher>
      </div>
      <div>
        <h1 className="text-primary font-bold mb-2">初めての方へ</h1>
        <p>暗号掲示板をご覧いただきありがとうございます。</p>
        <p>
          当掲示板を正しく使用していただくため、そして公開鍵暗号について知っていただくため、<br />
          ぜひこの文章をご一読ください。
        </p>
      </div>
    </section>
  )
}
