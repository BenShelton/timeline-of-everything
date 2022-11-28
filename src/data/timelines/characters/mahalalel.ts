import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const mahalalel: NestedTimelineItem = {
  className: 'incomplete',
  start: getDate(-3631),
  end: getDate(-2736),
  title: 'Mahalalel',
  content: 'Mahalalel',
  id: 'mahalalel',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3631),
      content: 'Born<br><b>Genesis 5:12</b>',
    },
    {
      start: getDate(-3566),
      content: 'Jared is born at 65<br><b>Genesis 5:15</b>',
    },
    {
      start: getDate(-2736),
      content: 'Died at 895<br><b>Genesis 5:17</b>',
    },
  ],
}
