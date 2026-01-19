import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const joseph2: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-22),
  end: getDate(18),
  title: 'Joseph',
  content: 'Joseph',
  id: 'josephFatherOfJesus',
  group: charactersGroup,
  notes: 'Estimated to be 20 when Mary gave birth to Jesus',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-22),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-2),
      content: 'Mary gives birth to Jesus<br><b>Luke 1:7</b>',
    },
    {
      start: getDate(10),
      content: 'Leaves 12 year old Jesus at temple<br><b>Luke 2:42,43</b>',
    },
    {
      start: getDate(13),
      content: 'Trains 15 year old Jesus as an apprentice carpenter<br><b>Matthew 13:35</b>',
    },
    {
      start: getDate(18),
      content: 'Estimated death date when Jesus was 20',
    },
  ],
}
