import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const williamTyndale: NestedTimelineItem = {
  displayOptions: {
    circaStart: true,
  },
  start: getDate(1494),
  end: getDate(1536),
  title: 'William Tyndale',
  content: 'William Tyndale',
  id: 'williamTyndale',
  group: charactersGroup,
  timeline: [
    {
      start: getDate(1506),
      end: getDate(1515),
      content: 'Goes to university from age 12-21',
    },
    {
      start: getDate(1525),
      content: 'Begins printing New Testament in English secretly in Cologne, Germany<br>A printer drunkenly boasts about project and he escapes',
    },
    {
      start: getDate(1526),
      content: 'First finished printing of New Testament in English<br>Ends up having to sell Bibles to a priest to be burned in order to keep funding printing',
    },
    {
      start: getDate(1527),
      end: getDate(1529),
      content: 'Around this time, loses partial Hebrew scripture translation in a shipwreck',
    },
    {
      start: getDate(1530),
      content: 'First finished printing of Pentateuch in English in Antwerp, Germany<br>First time Jehovah (written Iehouah) is used<br>Declares Henry VIII\'s attempted divorce would be unscriptural making him a target',
    },
    {
      start: getDate(1534),
      content: 'Finishes revision of Greek scriptures after others plagiarised and altered his work',
    },
    {
      start: getDate(1535),
      content: 'Tricked and imprisoned<br>Sends letter from prison asking for clothes and his Bible translation tools, similar to Paul in the 1st Century',
    },
    {
      start: getDate(1536),
      content: 'Strangled and burned<br>Reportedly his final words being "Lord open the king\'s eyes", and within 4 years Henry VIII was forced to provide English Bibles to churches',
    },
  ],
}
