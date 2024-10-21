import { booksGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'
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
  const parsedDate = new Date(date)
  const dateParts = parsedDate.toISOString().split('T')[0].split('-')
  const [y, m, d] = !dateParts[0] ? dateParts.slice(1) : dateParts
  let output = ''
  if (d !== '01') output += d + '-'
  if (m !== '01') output += m + '-'
  output += parsedDate.getFullYear() < 0 ? String(Number(y)) : y
  return output
}

interface BookDetails {
  book: string
  completed: Date
  written?: string
  writer?: string
  covered?: string
}
export function bookTimelineItem (details: BookDetails): NestedTimelineItem {
  const notes: string[] = []
  if (details.written) notes.push(`Place Written: ${details.written}`)
  if (details.writer) notes.push(`Writer: ${details.writer}`)
  if (details.covered) notes.push(`Time Covered: ${details.covered}`)
  return {
    displayOptions: {
      complete: true,
    },
    start: details.completed,
    title: details.book,
    content: details.book,
    id: 'book-' + details.book.toLowerCase(),
    group: booksGroup,
    notes: notes.join('\n'),
    timeline: [],
  }
}
