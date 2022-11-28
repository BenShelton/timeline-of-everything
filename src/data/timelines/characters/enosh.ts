import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const enosh: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-3791),
  end: getDate(-2886),
  title: 'Enosh',
  content: 'Enosh',
  id: 'enosh',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3791),
      content: 'Born<br><b>Genesis 5:6</b>',
    },
    {
      start: getDate(-3701),
      content: 'Kenan is born at 90<br><b>Genesis 5:9</b>',
    },
    {
      start: getDate(-2886),
      content: 'Died at 905<br><b>Genesis 5:11</b>',
    },
  ],
}
