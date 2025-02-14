export const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export const createHours = () => {
  let initialHour = 0

  const minOpenDuration = 3
  const hrsInADay = 24

  return Array.from({ length: hrsInADay / minOpenDuration + 1 }, () => {
    const hour = initialHour
    initialHour = initialHour + minOpenDuration
    return hour
  })
}

export const convert24HrTo12Hr = (hour: number) => {
  if (hour <= 12) return hour
  else return hour - 12
}

export const createTimePoints = (
  initialHour: number,
  length: number
): {
  display: string
  value: string
}[] => {
  if (initialHour === 24)
    return [
      {
        display: `24:00:00`,
        value: `24:00:00`,
      },
    ] // next day 12 am. 00:00 will mean 12 am same day when converted by date object
  let initialMin = 0
  //6 points in 3hr gap
  return Array.from({ length: length }, () => {
    const time = `${initialHour < 10 ? `0${initialHour}` : initialHour}:${initialMin < 10 ? `0${initialMin}` : initialMin}:00`
    initialHour = initialMin === 0 ? initialHour : initialHour + 1
    initialMin = initialMin === 0 ? 30 : 0
    //return time

    return {
      display: time,
      value: time,
    }
  })
}

export function getDayOfWeek(dayNumber: number): string {
  switch (dayNumber) {
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    case 7:
      return 'Sunday'
    default:
      throw new Error('Invalid day number. Please pass a valid number.')
  }
}

export function getDayNumber(dayName: string): number {
  switch (dayName.toLowerCase()) {
    case 'monday':
      return 1
    case 'tuesday':
      return 2
    case 'wednesday':
      return 3
    case 'thursday':
      return 4
    case 'friday':
      return 5
    case 'saturday':
      return 6
    case 'sunday':
      return 7
    default:
      throw new Error('Invalid day name. Please pass a valid day.')
  }
}

// const generateStartAndEndTime = () => {

//     let initialHour = 0
//     let initialMin = 0
//     return Array.from({ length: 48 }, () => {
//         const time = {
//             start: `${initialHour < 10 ? `0${initialHour}` : initialHour}:${initialMin < 10 ? `0${initialMin}` : initialMin}:00`,
//             end:''
//         }
//     })
// }

export const colorTimePoint = (
  restauStart: string,
  restauEnd: string,
  timePointTime: string
) => {
  const startTime = new Date(`1970-01-01T${restauStart}`) //Z
  const endTime = new Date(`1970-01-01T${restauEnd}`)
  const timePoint = new Date(`1970-01-01T${timePointTime}`)

  return (
    timePoint >= startTime && timePoint <= endTime /*||
    (timePoint >= startTime &&
      endTime.getHours() === 0 &&
      endTime.getMinutes() === 0)*/
  )
}
