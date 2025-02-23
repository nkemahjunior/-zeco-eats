import StoreUi from '@/features/store/ui/StoreUi'

export default async function page({
  params,
}: {
  params: Promise<{ storeId: string }>
}) {
  const storeId = (await params).storeId
  return (
    <>
      <StoreUi storeId={storeId} />
    </>
  )
}
