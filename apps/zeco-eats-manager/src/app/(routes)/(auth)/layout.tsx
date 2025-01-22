export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <body>{children}</body>
    </div>
  )
}
