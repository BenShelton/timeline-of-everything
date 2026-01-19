import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const tabernacle: NestedTimelineItem = {
  id: 'tabernacle',
  displayOptions: {
    complete: false,
  },
  start: getDate(-1512),
  end: getDate(-1026),
  title: 'Tabernacle',
  content: 'Tabernacle',
  group: significantEventsGroup,
  // TODO: Remaining timeline: https://wol.jw.org/en/wol/d/r1/lp-e/1200004295
  timeline: [
    {
      start: getDate(-1512, 3),
      content: 'Tabernacle built in wilderness at Mount Sinai<br><b>Deuteronomy 10:1-5</b>',
    },
    {
      start: getDate(-1026),
      content: 'Stored at temple<br><b>1 Kings 8:4</b>',
    },
  ],
}
