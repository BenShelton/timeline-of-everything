import { getDate } from '@/utils'
import { significantEventsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const arkOfTheCovenant: NestedTimelineItem = {
  id: 'arkOfTheCovenant',
  displayOptions: {
    complete: true,
    circaEnd: true,
  },
  start: getDate(-1512),
  end: getDate(-607),
  title: 'Ark of the Covenant',
  content: 'Ark of the Covenant',
  group: significantEventsGroup,
  timeline: [
    {
      start: getDate(-1512),
      content: 'Stone tablets added to temporary ark<br><b>Deuteronomy 10:1-5</b>',
    },
    {
      start: getDate(-1511),
      content: 'Bezalel completes ark which is then anointed<br><b>Exodus 40:9,20,21</b><br>' +
        'Tablets, golden jar of manna and Aaron\'s rod that budded added<br><b>Exodus 16:32-34</b>',
    },
    {
      start: getDate(-1510),
      end: getDate(-1466),
      content: 'Sometime between these dates the jar and rod were removed<br><b>1 Kings 8:9</b>',
    },
    {
      start: getDate(-1467),
      content: 'Moved to Shiloh<br><b>Joshua 18:1</b>',
    },
    {
      start: getDate(-1466),
      end: getDate(-1138),
      content: 'Sometime between these dates was moved to Bethel temporarily for war against Benjaminites<br><b>Judges 20:26,27</b>',
    },
    {
      start: getDate(-1137),
      content: 'Captured by Philistines from Shiloh for 7 months<br><b>1 Samuel 6:1</b>',
    },
    {
      start: getDate(-1137),
      end: getDate(-1069),
      content: 'Kept at Bethshemesh and Kiriath-Jearim for about 70 years<br><b>1 Samuel 6:11-14, 7:1,2</b>',
    },
    {
      start: getDate(-1069),
      content: 'Moved to Jerusalem by David<br><b>2 Samuel 6:15</b>',
    },
    {
      start: getDate(-1027),
      content: 'Moved to temple by Solomon, only tablets still inside<br><b>1 Kings 6:38</b>',
    },
    {
      start: getDate(-1026),
      end: getDate(-643),
      content: 'Sometime between these dates was removed from the temple<br><b>2 Chronicles 35:3</b>',
    },
    {
      start: getDate(-642),
      content: 'King Josiah orders it be returned to the temple<br><b>2 Chronicles 35:3</b>',
    },
    {
      start: getDate(-607),
      content: 'Removed by this point, not listed among spoils of Jerusalem<br><b>2 Chronicles 36:18</b>',
    },
  ],
}
