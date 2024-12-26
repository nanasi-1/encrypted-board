export default function Home() {
  return (
    <div className="flex items-center flex-col gap-y-4 pt-10">
      <div className="bg-black px-3 py-1">
        <h1 className="text-center text-3xl font-bold text-primary">Hello World!</h1>
      </div>
      <p>暗号掲示板は現在準備中です</p>
      <p>
        <a href="https://github.com/nanasi-1/encrypted-board" className="text-secondary underline">GitHub</a>
      </p>
    </div>
  );
}
