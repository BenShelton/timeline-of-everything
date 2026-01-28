import { getDate, link } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const stephen: NestedTimelineItem = {
  displayOptions: {
    circaStart: true,
  },
  start: getDate(3, 6),
  end: getDate(33, 12),
  title: 'Stephen',
  content: 'Stephen',
  id: 'stephen',
  group: charactersGroup,
  notes: 'Estimated to be 30 at first mention',
  timeline: [
    {
      start: getDate(3, 6),
      content: 'Estimated birth date',
    },
    {
      start: getDate(33, 6),
      content: 'Assigned to distribute food<br>' +
        '<b>Acts 6:1-7</b>',
    },
    {
      start: getDate(33, 12),
      content: 'Accused of blasphemy & brought before Sanhedrin<br>' +
        'Received a vision of Jehovah & Jesus<br>' +
        'Stoned to death<br>' +
        '<b>Acts 6:8-7:60</b><br>' +
        link('https://wol.jw.org/en/wol/d/r1/lp-e/1102009041#h=42'),
    },
  ],
}
