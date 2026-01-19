import { getDate, link } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const paul: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: false,
  },
  start: getDate(1),
  end: getDate(66),
  title: 'Paul',
  content: 'Paul',
  id: 'paul',
  group: charactersGroup,
  notes: 'Estimated to be 33 at first mention',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(1),
      content: 'Estimated birth date',
    },
    {
      start: getDate(34),
      content: 'Watches Stephen being stoned<br>' +
        '<b>Acts 7:58</b><br>' +
        link('https://wol.jw.org/en/wol/d/r1/lp-e/1102009041#h=42'),
    },
    {
      start: getDate(66),
      content: 'Assumed death during imprisonment<br><b>2 Timothy 4:5</b>',
    },
  ],
}
