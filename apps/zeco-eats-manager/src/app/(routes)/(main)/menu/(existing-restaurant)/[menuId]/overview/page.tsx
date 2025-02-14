import MenuOverviewUi from '@/features/menu/ui/MenuOverviewUi'

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
