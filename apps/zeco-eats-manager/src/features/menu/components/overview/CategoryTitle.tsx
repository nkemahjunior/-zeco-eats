export default function CategoryTitle({
  category,
  itemsQty,
}: {
  category: string
  itemsQty: number
}) {
  return (
    <div className="flex flex-col justify-center">
      <span className="font-medium">{category}</span>
      <span className="text-textTint">{itemsQty} items</span>
    </div>
  )
}
