import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const joseph: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-1767),
  end: getDate(-1657),
  title: 'Joseph',
  content: 'Joseph',
  id: 'joseph',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1767),
      content: 'Born<br><b>Genesis 30:22-24</b>',
    },
    {
      start: getDate(-1750),
      content: 'Sold into slavery by his brothers<br><b>Genesis 37:2</b>',
    },
    {
      start: getDate(-1739),
      content: "Interprets baker's dream<br><b>Genesis 40:1-22</b>",
    },
    {
      start: getDate(-1737),
      content: 'Made prime minister<br><b>Genesis 41:40,46</b>',
    },
    {
      start: getDate(-1737),
      end: getDate(-1730),
      content: 'Becomes father to Manasseh and Ephraim<br><b>Genesis 41:50-52</b>',
    },
    {
      start: getDate(-1730),
      content: 'Famine begins<br><b>Genesis 41:54</b>',
    },
    {
      start: getDate(-1728),
      content: 'Family enters Egypt<br><b>Genesis 45:6,46:26,47:9</b>',
    },
    {
      start: getDate(-1723),
      content: 'Famine ends<br><b>Genesis 41:54</b>',
    },
    {
      start: getDate(-1657),
      content: 'Dies at 110<br><b>Genesis 50:26</b>',
    },
  ],
}
