import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const adam: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
  },
  start: getDate(-4026, 10),
  end: getDate(-3096),
  title: 'Adam',
  content: 'Adam',
  id: 'adam',
  group: charactersGroup,
  notes: 'Estimated birth date',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-4026, 10),
      content: 'Created<br><b>Genesis 2:7</b>',
    },
    {
      start: getDate(-3996),
      content: 'Cain & Abel born about this time<br><b>Genesis 4:1, 2</b>',
    },
    {
      start: getDate(-3896),
      content: 'Seth is born at 130<br><b>Genesis 5:3</b>',
    },
    {
      start: getDate(-3096),
      content: 'Died at 930<br><b>Genesis 5:5</b>',
    },
  ],
}
