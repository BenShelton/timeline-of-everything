import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const rebekah: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-1900),
  end: getDate(-1775),
  title: 'Rebekah',
  content: 'Rebekah',
  id: 'rebekah',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1900),
      content: 'Estimated birth date<br><b>Genesis 22:23</b>',
    },
    {
      start: getDate(-1775),
      content: 'Estimated death date at 125',
    },
  ],
}
