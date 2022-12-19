import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const abel: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-3996),
  end: getDate(-3896),
  title: 'Abel',
  content: 'Abel',
  id: 'abel',
  group: charactersGroup,
  notes: 'Estimated to be 100 when killed. Killed sometime before Seth was born.',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3996),
      content: 'Born about this time<br><b>Genesis 4:2</b>',
    },
    {
      start: getDate(-3896),
      content: 'Killed by Cain sometime before this<br><b>Genesis 4:8</b>',
    },
  ],
}
