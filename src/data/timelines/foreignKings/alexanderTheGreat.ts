import { getDate } from '@/utils'
import { foreignKingsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const alexanderTheGreat: NestedTimelineItem = {
  start: getDate(-356),
  end: getDate(-323),
  title: 'Alexander The Great',
  content: 'Alexander The Great',
  id: 'alexanderTheGreat',
  group: foreignKingsGroup,
  timeline: [
    {
      start: getDate(-356),
      content: 'Born at Pella',
    },
    {
      start: getDate(-336),
      content: 'Ascends throne',
    },
    {
      start: getDate(-334),
      content: 'Invades Persia, defeats Persians at Granicus',
    },
    {
      start: getDate(-333),
      content: 'Defeats Persians at Issus',
    },
    {
      start: getDate(-332),
      content: 'Conquers Gaza, overthrows island city of Tyre, enters Jerusalem, conquers Egypt',
    },
    {
      start: getDate(-332),
      content: 'Founds Alexandria',
    },
    {
      start: getDate(-331),
      content: 'Defeats Persians at Guagamela, Persia empire falls, enters Babylon',
    },
    {
      start: getDate(-323),
      content: 'Dies',
    },
  ],
}
