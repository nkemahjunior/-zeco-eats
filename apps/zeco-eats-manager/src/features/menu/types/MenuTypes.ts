import { z } from 'zod'
import { categorySchema, menuSchema } from './schemas/menuSchemas'

export type Menu = z.infer<typeof menuSchema>
export type Category = z.infer<typeof categorySchema>
