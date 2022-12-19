import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const cain: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-3996),
  end: getDate(-3096),
  title: 'Cain',
  content: 'Cain',
  id: 'cain',
  group: charactersGroup,
  notes: 'Estimated to be 100 when he killed Abel and live for 900 years.',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3996),
      content: 'Born about this time<br><b>Genesis 4:1</b>',
    },
    {
      start: getDate(-3896),
      content: 'Kills Abel sometime before this<br><b>Genesis 4:8</b>',
    },
    {
      start: getDate(-3096),
      content: 'Estimated death, assuming he lived for 900 years',
    },
  ],
}
