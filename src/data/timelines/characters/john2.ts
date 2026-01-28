import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const john2: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
  },
  start: getDate(-5),
  end: getDate(100),
  title: 'John (Apostle)',
  content: 'John (Apostle)',
  id: 'johnApostle',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-5),
      content: 'Estimated birth date',
    },
    {
      start: getDate(98),
      content: 'Traditionally wrote gospel & 3 letters in Ephesus',
    },
    {
      start: getDate(100),
      content: 'Traditionally believed to have died in Ephesus during reign of Emperor Trajan',
    },
  ],
}
