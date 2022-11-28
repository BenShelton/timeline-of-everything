import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const ishmael: NestedTimelineItem = {
  className: 'incomplete',
  start: getDate(-1932),
  end: getDate(-1795),
  title: 'Ishmael',
  content: 'Ishmael',
  id: 'ishmael',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1932),
      content: 'Born<br><b>Genesis 16:15,16</b>',
    },
    {
      start: getDate(-1795),
      content: 'Dies at 137<br><b>Genesis 25:17</b>',
    },
  ],
}
