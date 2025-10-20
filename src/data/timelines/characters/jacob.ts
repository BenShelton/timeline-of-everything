import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const jacob: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-1858),
  end: getDate(-1711),
  title: 'Jacob',
  content: 'Jacob',
  id: 'jacob',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1858),
      content: 'Born<br><b>Genesis 25:24-26</b>',
    },
    {
      start: getDate(-1781),
      content: 'Flees to Haran<br><b>Genesis 28:2</b>',
    },
    {
      start: getDate(-1781),
      end: getDate(-1774),
      content: 'Serves Laban 7 years for Rachel<br><b>Genesis 28:18-20</b>',
    },
    {
      start: getDate(-1774),
      content: 'Tricked into marrying Leah, then marries Rachel<br><b>Genesis 28:23-30</b>',
    },
    {
      start: getDate(-1774),
      end: getDate(-1767),
      content: 'Serves Laban another 7 years for Rachel<br><b>Genesis 28:30</b>',
    },
    {
      start: getDate(-1767),
      content: 'Becomes father to Joseph<br><b>Genesis 30:23, 24</b>',
    },
    {
      start: getDate(-1761),
      content: 'Returns to Canaan from Haran<br><b>Genesis 31:18, 41</b>',
    },
    {
      start: getDate(-1761),
      content: 'Around this time, wrestles an angel and is called Israel<br><b>Genesis 33:24-28</b>',
    },
    {
      start: getDate(-1728),
      content: 'Family enters Egypt<br><b>Genesis 45:6,46:26,47:9</b>',
    },
    {
      start: getDate(-1711),
      content: 'Dies at 146 (in his 147th year)<br><b>Genesis 48:28</b>',
    },
  ],
}
