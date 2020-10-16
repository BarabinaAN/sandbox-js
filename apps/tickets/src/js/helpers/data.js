import { format } from 'date-fns'

export function fotmatDate(str, type) {
   const date = new Date(str)

   return format(date, type)
}