import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const noah: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-2970),
  end: getDate(-2020),
  title: 'Noah',
  content: 'Noah',
  id: 'noah',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-2970),
      content: 'Born<br><b>Genesis 5:28</b>',
    },
    {
      start: getDate(-2490),
      content: 'God gives pronouncement of flood in 120 years<br><b>Genesis 6:3</b>',
    },
    {
      start: getDate(-2370, 11),
      content: 'Flood starts<br><b>Genesis 7:11</b>',
    },
    {
      start: getDate(-2370, 12),
      content: 'Flood rains stop<br><b>Genesis</b>',
    },
    {
      start: getDate(-2369, 4),
      content: 'Ark rests on Ararat<br><b>Genesis</b>',
    },
    {
      start: getDate(-2369, 6),
      content: 'Mountaintops are visible<br><b>Genesis</b>',
    },
    {
      start: getDate(-2369, 9),
      content: 'Noah removed part of the roof<br><b>Genesis</b>',
    },
    {
      start: getDate(-2369, 11),
      content: 'Noah and family exit the ark<br><b>Genesis</b>',
    },
    {
      start: getDate(-2020),
      content: 'Died at 950<br><b>Genesis 9:29</b>',
    },
  ],
}
