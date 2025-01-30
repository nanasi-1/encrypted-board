import { Icones, LockIcon } from "@/components/ui/icons";
import FixedButtons from "./(components)/fixed-buttons";
import Posts from "./(components)/posts";
import Cipher from "@/components/ui/cipher";

function Introduction() {
  return (
    <div className="border border-primary bg-black mb-8 px-8 py-5">
      <Cipher className="block mb-1">
        $ node ./index.js <br />
        &gt; 暗号掲示板へようこそ<br />
      </Cipher>
      <Cipher className="block">
        $ curl -X GET {process.env['URL']}/api/posts <br />
        {/* TODO 遅延実装する &gt; 投稿を取得しています...<br /> */}
        &gt; 投稿の取得が完了しました
      </Cipher>
    </div>
  )
}

export default async function Home({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>,
}) {
  const page = (await searchParams).page ?? '1';
  const currentPage = parseInt(page instanceof Array ? page[0] : page);

  return (
    <>
      <div className="px-[10%]">
        <Introduction />
        <Posts currentPage={currentPage} />
      </div>
      <FixedButtons />
    </>
  );
}
