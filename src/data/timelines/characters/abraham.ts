import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const abraham: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-2018),
  end: getDate(-1843),
  title: 'Abraham',
  content: 'Abraham',
  id: 'abraham',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-2018),
      content: 'Born<br><b>Genesis 11:26</b>',
    },
    {
      start: getDate(-1943),
      content: 'Crosses the Euphrates, enters Canaan<br><b>Genesis 12:4</b>',
    },
    {
      start: getDate(-1933),
      content: 'Lot is rescued<br><b>Genesis 14:6</b>',
    },
    {
      start: getDate(-1932),
      content: 'Becomes father to Ishmael<br><b>Genesis 16:15,16</b>',
    },
    {
      start: getDate(-1919),
      content: 'Covenant of circumcision is made<br><b>Genesis 17:1,10,24</b>',
    },
    {
      start: getDate(-1918),
      content: 'Becomes father to Isaac<br><b>Genesis 21:2,5</b>',
    },
    {
      start: getDate(-1913),
      content: 'Beginning of 400 year affliction<br><b>Genesis 21:8-13</b>',
    },
    {
      start: getDate(-1881),
      content: 'Sarah dies<br><b>Genesis 23:1</b>',
    },
    {
      start: getDate(-1843),
      content: 'Dies at 175<br><b>Genesis 25:7</b>',
    },
  ],
}
