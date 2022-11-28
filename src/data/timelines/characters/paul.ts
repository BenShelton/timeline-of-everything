import { getDate, link } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const paul: NestedTimelineItem = {
  className: 'incomplete circa-start',
  start: getDate(1),
  // TODO: Death
  // end: getDate(99),
  title: 'Paul',
  content: 'Paul',
  id: 'paul',
  group: charactersGroup,
  notes: 'Estimated to be 33 at first mention',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(34),
      content: 'Watches Stephen being stoned<br>' +
        '<b>Acts 7:58</b><br>' +
        link('https://wol.jw.org/en/wol/d/r1/lp-e/1102009041#h=42'),
    },
  ],
}
