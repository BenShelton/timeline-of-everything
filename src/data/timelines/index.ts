import { NestedTimelineItem } from '@/data/types'

function processFiles (files: Record<string, Record<string, NestedTimelineItem>>): NestedTimelineItem[] {
  return Object.entries(files).map(([k, v]) => {
    const name = k.split('/').pop()?.replace('.ts', '')
    const item = v[name || '']
    if (!item) {
      console.warn(`Could not find item: ${k}`)
      return {} as NestedTimelineItem
    }
    return item
  })
}

const characterFiles = import.meta.globEager('./characters/*.ts')
export const characters = processFiles(characterFiles)

const eventFiles = import.meta.globEager('./events/*.ts')
export const events = processFiles(eventFiles)
