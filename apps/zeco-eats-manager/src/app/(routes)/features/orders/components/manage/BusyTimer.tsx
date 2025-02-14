'use client'

import { useEffect, useState } from 'react'

export default function BusyTimer({ busyTime }: { busyTime: number }) {
  const [time, setTime] = useState({
    min: busyTime,
    sec: 59,
  })

  useEffect(() => {
    setTime({ min: busyTime, sec: 59 })
  }, [busyTime])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.sec === 0) {
          return {
            min: prevTime.min - 1,
            sec: 59,
          }
        }
        return {
          min: prevTime.min,
          sec: prevTime.sec - 1,
        }

        //TODO
        //notify user when timer dies
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <span>
      {time.min}:{time.sec < 10 ? `0${time.sec}` : time.sec}
    </span>
  )
}
