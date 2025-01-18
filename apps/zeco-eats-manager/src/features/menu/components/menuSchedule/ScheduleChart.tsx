import {
  colorTimePoint,
  convert24HrTo12Hr,
  createHours,
  createTimePoints,
} from '../../utils/menuUtils'

import LinkButton from '@/shared/components/button/LinkButton'

const fakeData = [
  { day: 'Monday', startTime: '09:00:00', endTime: '12:30:00' },
  { day: 'Tuesday', startTime: '10:00:00', endTime: '13:45:00' },
  { day: 'Wednesday', startTime: '08:15:00', endTime: '11:00:00' },
  { day: 'Thursday', startTime: '14:00:00', endTime: '17:30:00' },
  { day: 'Friday', startTime: '13:00:00', endTime: '16:15:00' },
  { day: 'Saturday', startTime: '00:00:00', endTime: '10:45:00' },
  { day: 'Sunday', startTime: '11:00:00', endTime: '24:00:00' },
]

//   const extractTime = (time: string) => {
//     return time.split(":"); // [hours, min, sec]
//   };

export default function ScheduleChart() {
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
            {fakeData.map((restauHrs, i) => (
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
                          className={`inline-block h-full w-full ${colorTimePoint(restauHrs.startTime, restauHrs.endTime, timePoint) && 'bg-primary'}`}
                        ></span>
                      ))}
                    </div>

                    {hour === 24 && (
                      <div className="text-secondary font-medium">
                        {restauHrs.startTime} - {restauHrs.endTime}
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
