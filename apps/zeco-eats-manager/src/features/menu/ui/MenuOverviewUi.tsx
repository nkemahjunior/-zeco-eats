'use client'
import Line from '@/shared/components/Line'
import MenuHours from '../components/overview/MenuHours'
import MenuTitle from '../components/overview/MenuTitle'
import MenuCategoryAndItems from '../components/overview/MenuCategoryAndItems'
import CreateNewMenu from '../components/noMenu/CreateNewMenu'

export default function MenuOverviewUi() {
  return (
    // <div className="space-y-8">
    //   <MenuTitle />
    //   <MenuHours />
    //   <Line />
    //   <MenuCategoryAndItems />
    // </div>
    // <CreateNewMenu  />
    <>
      <CreateNewMenu />
    </>
  )
}
