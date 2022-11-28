import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const jared: NestedTimelineItem = {
  className: 'incomplete',
  start: getDate(-3566),
  end: getDate(-2604),
  title: 'Jared',
  content: 'Jared',
  id: 'jared',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3566),
      content: 'Born<br><b>Genesis 5:15</b>',
    },
    {
      start: getDate(-3404),
      content: 'Enoch is born at 162<br><b>Genesis 5:18</b>',
    },
    {
      start: getDate(-2604),
      content: 'Died at 962<br><b>Genesis 5:20</b>',
    },
  ],
}
