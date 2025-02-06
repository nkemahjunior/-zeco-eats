import { z } from 'zod'
import { categorySchema, itemSchema, menuSchema } from './schemas/menuSchemas'

export type Menu = z.infer<typeof menuSchema>
export type Category = z.infer<typeof categorySchema>
export type MenuItem = z.infer<typeof itemSchema>
