import { z } from 'zod'
import { parse, isAfter } from 'date-fns'

const timeRegex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/

export const menuSchema = z
  .object({
    menuName: z.string().min(1, 'Menu name is required'),
    openDayStart: z.string().min(1, 'Start day is required'),
    openDayEnd: z.string().min(1, 'End day is required'),
    openTime: z
      .string()
      .min(1, 'Start time is required')
      .regex(timeRegex, 'Invalid time format (HH:MM)'),
    closeTime: z
      .string()
      .min(1, 'End time is required')
      .regex(timeRegex, 'Invalid time format (HH:MM)'),
  })
  .refine((data) => Number(data.openDayEnd) >= Number(data.openDayStart), {
    message: 'End day must be greater than or equal to start day',
    path: ['openDayEnd'],
  })
  .refine(
    (data) => {
      const startTime = parse(data.openTime, 'HH:mm', new Date())
      const endTime = parse(data.closeTime, 'HH:mm', new Date())
      return isAfter(endTime, startTime)
    },
    {
      message: 'End time must be after start time',
      path: ['closeTime'],
    }
  )

export const categorySchema = z.object({
  name: z.string().min(1, 'Category name is required'),
  menuId: z.number(),
})

export const itemSchema = z.object({
  name: z.string().min(1, 'Item name is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z
    .string()
    .min(1, 'Enter a valid number')
    .refine((val) => !isNaN(parseFloat(val)), {
      message: 'Enter a valid number',
    })
    .transform((val) => parseFloat(val)),
  vat: z
    .string()
    .min(1, 'Enter a valid number')
    .refine((val) => !isNaN(parseFloat(val)), {
      message: 'Enter a valid number',
    })
    .transform((val) => parseFloat(val)),
  menuId: z.number(),
  categoryId: z.number(),
})
