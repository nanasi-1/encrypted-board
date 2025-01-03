import { Icones, LockIcon } from "@/components/ui/icons";
import FixedButtons from "./(components)/fixed-buttons";
import Posts from "./(components)/posts";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>,
}) {
  const page = (await searchParams).page ?? '1';
  const currentPage = parseInt(page instanceof Array ? page[0] : page);

  return (
    <>
      <div className="justify-center flex items-center flex-col gap-y-4 mb-12">
        <div className="bg-black px-3 py-1">
          <h1 className="text-center text-3xl font-bold text-primary">Hello World!</h1>
        </div>
        <p>
          <Icones Icon={LockIcon} color="primary" position="left-of-text" />
          <span>暗号掲示板は現在準備中です</span>
        </p>
        <p>
          <a href="https://github.com/nanasi-1/encrypted-board" target="_blank" className="text-secondary underline">GitHub</a>
        </p>
      </div>
      <Posts currentPage={currentPage} />
      <FixedButtons />
    </>
  );
}
