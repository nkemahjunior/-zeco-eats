'use client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useMenuId } from '../../hooks/menuHooks'
import {
  colorTimePoint,
  convert24HrTo12Hr,
  createHours,
  createTimePoints,
  daysOfTheWeek,
} from '../../utils/menuUtils'

import LinkButton from '@/shared/components/button/LinkButton'
import { restaurantMenusOptions } from '../../api/queries/options/menuOptions'

interface ChartData {
  day: string
  startTime: string
  endTime: string
}

export default function ScheduleChart() {
  const menuId = useMenuId()
  const { data: menus } = useSuspenseQuery(restaurantMenusOptions)
  const curMenu = menus.find((el) => el.id === menuId)

  const startTime = curMenu?.time?.split(' - ')[0]
  const endTime = curMenu?.time?.split(' - ')[1]

  const menuDays = curMenu?.open_days
    ?.split(', ')
    .map((day) => day.toLocaleLowerCase())

  const menuDaysSet = new Set<string>(menuDays)

  const chartData: ChartData[] = daysOfTheWeek.map((day) => ({
    day: day.toUpperCase(),
    startTime: menuDaysSet.has(day.toLocaleLowerCase()) ? startTime || '' : '',
    endTime: menuDaysSet.has(day.toLocaleLowerCase()) ? endTime || '' : '',
  }))

  return (
    <div className="w-full space-y-12">
      <div>
        <LinkButton href="schedule/edit">Edit Schedule</LinkButton>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-[80rem] xl:w-full">
          <thead className="w-full">
            <tr className="w-full">
              <th className=""></th>
              {createHours().map((el, i) => (
                <th
                  key={i}
                  className={`text-textTint w-[50rem] pb-2 text-start`}
                >
                  <div className="-ml-4">
                    <span>{el === 0 ? 12 : convert24HrTo12Hr(el)}</span>
                    <span className="pl-1">
                      {el < 12 ? 'am' : el === 24 ? 'am' : 'pm'}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-background w-full">
            {chartData?.map((restauHrs, i) => (
              <tr
                key={i}
                className="border-backgroundBorder hover:bg-background relative cursor-pointer border-b-[0px] border-solid transition-colors duration-300 last:border-b-0"
              >
                <td className="border-backgroundBorder bg-backgroundShade2 h-16 w-[8rem] border-r-[1px] border-solid py-6 pl-4">
                  {restauHrs.day}
                </td>

                {createHours().map((hour, tdIx) => (
                  <td
                    key={tdIx}
                    className={`h-16 ${hour === 24 ? 'w-[10rem] bg-white px-2' : ''} border-backgroundBorder border-r-[1px] border-solid py-6 last:border-r-0`}
                  >
                    <div
                      className={`flex h-full w-full items-center ${hour === 24 ? 'hidden' : ''}`}
                    >
                      {createTimePoints(hour, 6).map((timePoint, tpIdx) => (
                        <span
                          key={tpIdx}
                          className={`inline-block h-full w-full ${colorTimePoint(restauHrs.startTime || '', restauHrs.endTime || '', timePoint.value) && 'bg-primary'}`}
                        ></span>
                      ))}
                    </div>

                    {hour === 24 && (
                      <div className="text-secondary font-medium">
                        {restauHrs?.startTime} - {restauHrs?.endTime}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
