export default function ResultModal({ plainText }: { 
  plainText: string 
}) {
  return (
    <div>
      <h1>Result Modal</h1>
      <div>
        {plainText}
      </div>
    </div>
  )
}