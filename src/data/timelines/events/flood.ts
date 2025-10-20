import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const flood: NestedTimelineItem = {
  start: getDate(-2370, 11),
  end: getDate(-2369, 11),
  title: 'Flood',
  content: 'Flood (Global Deluge)',
  type: 'box',
  group: significantEventsGroup,
  timeline: [
    {
      start: getDate(-2490),
      content: 'God\'s pronouncement as to mankind<br><b>Genesis 6:3</b>',
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
  ],
}
