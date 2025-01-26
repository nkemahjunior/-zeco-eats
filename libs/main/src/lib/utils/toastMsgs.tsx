import { HiX } from 'react-icons/hi'
import { TiTick } from 'react-icons/ti'

export const errorToastMsg = (
  successMsg: string
): [string, { icon: React.ReactNode }] => {
  return [
    successMsg,
    {
      icon: <HiX />,
    },
  ]
}

export const successToastMsg = (
  successMsg: string
): [string, { icon: React.ReactNode }] => {
  return [
    successMsg,
    {
      icon: <TiTick />,
    },
  ]
}
