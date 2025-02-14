import MenuOverviewUi from '@/app/(routes)/features/menu/ui/MenuOverviewUi'

export default async function Page({
  params,
}: {
  params: Promise<{ menuId: string }>
}) {
  const menuId = (await params).menuId
  return (
    <>
      <MenuOverviewUi menuId={menuId} />
    </>
  )
}
