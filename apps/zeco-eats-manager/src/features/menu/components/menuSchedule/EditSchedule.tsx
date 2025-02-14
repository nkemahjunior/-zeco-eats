'use client'
import Heading2 from '@/shared/components/text/Heading2'
import {
  colorTimePoint,
  convert24HrTo12Hr,
  createHours,
  createTimePoints,
  getDayNumber,
  getDayOfWeek,
} from '../../utils/menuUtils'
import CustomSelect from '@/shared/components/inputs/CustomSelect'
import { useMemo, useState } from 'react'
import Button from '@/shared/components/button/Button'
import { editMenuSchedule } from '../../api/mutations/actions/menuActions'
import { useMenuId } from '../../hooks/menuHooks'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'
import { useSuspenseQuery } from '@tanstack/react-query'
import { restaurantMenusOptions } from '../../api/queries/options/menuOptions'

const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export default function EditSchedule() {
  const menuId = useMenuId()
  const { data: menus } = useSuspenseQuery(restaurantMenusOptions)
  const curMenu = menus.find((el) => el.id === menuId)

  const [selectedStartTime, setSelectedStartTime] = useState(
    curMenu?.time?.split(' - ')[0] || ''
  )
  const [selectedEndTime, setSelectedEndTime] = useState(
    curMenu?.time?.split(' - ')[1] || ''
  )

  const [selectedDays, setSelectedDays] = useState<Set<number>>(
    new Set(curMenu?.open_days?.split(', ').map(getDayNumber))
  )

  const [saving, setSaving] = useState(false)
  const router = useRouter()

  const addToSelectedDays = (day: number) => {
    setSelectedDays((prevSelectedDays) => {
      const updatedDays = new Set(prevSelectedDays)
      if (updatedDays.has(day)) {
        updatedDays.delete(day)
      } else {
        updatedDays.add(day)
      }
      return updatedDays
    })
  }

  const saveSchedule = async () => {
    setSaving(true)
    if (selectedDays.size < 1) {
      toast.error('Select a day')
      setSaving(false)
      return
    }
    const schedule = [...selectedDays].map((el) => getDayOfWeek(el)).join(', ')

    const res = await editMenuSchedule(
      selectedStartTime,
      selectedEndTime,
      schedule,
      menuId
    )

    if (res.success) {
      toast.success(res.msg)
      router.push(`/menu/${menuId}/schedule`)
    } else toast.error(res.msg)

    setSaving(false)
  }

  const timePointsSelect = useMemo(() => createTimePoints(0, 49), [])

  return (
    <div className="h-auto w-full">
      {' '}
      <div className="w-full space-y-12">
        <div>
          <ButtonWithIcon
            disable={saving}
            width="w-[8rem]"
            events={{ onClick: saveSchedule }}
          >
            {saving ? (
              <>
                <span>Saving</span>
                <LoadingSpinner />
              </>
            ) : (
              'Save'
            )}
          </ButtonWithIcon>
        </div>
        <div className="border-backgroundBorder h-[26rem] w-full space-y-8 overflow-x-auto rounded-xl border border-solid px-8 py-8 md:h-[20rem]">
          <div className="flex w-[50rem] items-center md:w-full">
            {daysOfTheWeek.map((el, i) => (
              <span
                key={i}
                onClick={() => addToSelectedDays(i + 1)}
                className={`block ${selectedDays.has(i + 1) ? 'bg-secondary text-white' : 'bg-background text-secondary'} w-full cursor-pointer py-4 text-center font-medium`}
              >
                {el}
              </span>
            ))}
          </div>
          <div>
            <div className="flex w-[50rem] items-center md:w-full">
              {createHours().map((hour, i) => (
                <div
                  key={i}
                  className="border-backgroundBorder bg-background flex h-12 w-full items-center border-r-2 border-solid first:border-l last:border-r-0"
                >
                  {createTimePoints(hour, 6).map((timePoint, tpIdx) => (
                    <span
                      key={tpIdx}
                      className={`block h-full w-full ${colorTimePoint(selectedStartTime, selectedEndTime, timePoint.value) && 'bg-primary'}`}
                    ></span>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex w-[50rem] items-center md:w-full">
              {createHours().map((el, i) => (
                <div key={i} className="-ml-2 w-full">
                  <span>{el === 0 ? 12 : convert24HrTo12Hr(el)}</span>
                  <span className="pl-1">
                    {el < 12 ? 'am' : el === 24 ? 'am' : 'pm'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-[12rem] flex w-full flex-wrap items-center gap-x-20 px-8 md:-mt-[6.5rem]">
        <div className="space-y-4">
          <Heading2 text="Start time" />

          <CustomSelect
            data={timePointsSelect}
            // initialDisplay={selectedStartTime}
            // initialValue={selectedStartTime}
            onchange={(arg: string) => setSelectedStartTime(arg)}
          />
        </div>
        <div className="space-y-4">
          <Heading2 text="End time" />
          <CustomSelect
            data={timePointsSelect}
            // initialDisplay={selectedEndTime}
            // initialValue={selectedEndTime}
            onchange={(arg: string) => setSelectedEndTime(arg)}
          />
        </div>
      </div>
    </div>
  )
}
