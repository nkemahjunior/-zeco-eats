export default function TabHeading({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center rounded-3xl bg-primary px-12 py-4">
      <p className="text-lg font-bold text-secondary">{text}</p>
    </div>
  )
}
