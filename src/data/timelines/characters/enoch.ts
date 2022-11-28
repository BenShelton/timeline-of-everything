import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const enoch: NestedTimelineItem = {
  className: 'incomplete',
  start: getDate(-3404),
  end: getDate(-3039),
  title: 'Enoch',
  content: 'Enoch',
  id: 'enoch',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3404),
      content: 'Born<br><b>Genesis 5:18</b>',
    },
    {
      start: getDate(-3339),
      content: 'Methusaleh is born at 65<br><b>Genesis 5:21</b>',
    },
    {
      start: getDate(-3039),
      content: '"Transferred" at 365<br><b>Genesis 5:24</b>',
    },
  ],
}
