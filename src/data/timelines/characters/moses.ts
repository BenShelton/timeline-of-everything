import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const moses: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-1593),
  end: getDate(-1473),
  title: 'Moses',
  content: 'Moses',
  id: 'moses',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1593),
      content: 'Born<br><b>Exodus 2:2</b>',
    },
    {
      start: getDate(-1553),
      content: 'Flees to Midian<br><b>Exodus 2:15</b>',
    },
    {
      start: getDate(-1514),
      content: 'Burning Bush<br><b>Exodus 3:2</b>',
    },
    {
      start: getDate(-1513, 3),
      content: 'On Nisan 14, leads Exodus from Egypt<br><b>Exodus 12:40,41</b>',
    },
    {
      start: getDate(-1513, 4),
      content: 'Manna begins forming<br><b>Exodus 16:1-4</b>',
    },
    {
      start: getDate(-1513, 5),
      content: 'Law Covenant with Israel on Mount Sinai<br><b>Exodus 19:1</b>',
    },
    {
      start: getDate(-1513, 12),
      content: 'Finishes writing Genesis',
    },
    {
      start: getDate(-1512),
      content: 'Finishes writing Exodus & Leviticus',
    },
    {
      start: getDate(-1473),
      content: 'Completes writing Numbers, Deuteronomy & Job',
    },
    {
      start: getDate(-1473),
      content: 'Died<br><b>Deuteronomy 34:5</b>',
    },
  ],
}
