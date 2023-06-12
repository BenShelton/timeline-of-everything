import { DateType } from 'vis-timeline'

export function getDate (year: number, month = 1, day = 1): Date {
  if (year < 0) {
    return new Date(year, month - 1, day)
  } else {
    return new Date(`${String(year).padStart(4, '0')}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`)
  }
}

export function link (href: string): string {
  return `<a href="${href}" target="_blank">Reference</a>`
}

export function prettyDate (date: DateType): string {
  const d = new Date(date)
  const str = d.toLocaleDateString()
  return str.startsWith('01/01/')
    ? (str.split('/').pop() ?? '')
    : str
}
