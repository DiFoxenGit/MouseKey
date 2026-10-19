import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

function checkDirectory(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const path = join(directory, entry.name)
    if (entry.isDirectory()) checkDirectory(path)
    else if (path.endsWith('.md')) {
      const text = readFileSync(path, 'utf8')
      const links = [...text.matchAll(/\]\(([^)\s]+)\)|<img[^>]+src="([^"]+)"/g)]
      for (const match of links) {
        const url = match[1] ?? match[2]
        if (url.startsWith('#') || /^[a-z]+:/i.test(url)) continue
        const target = decodeURIComponent(url.split('#')[0])
        if (!existsSync(resolve(dirname(path), target))) throw new Error(`${path}: missing ${target}`)
      }
    }
  }
}
checkDirectory('.')
console.log('Local documentation links and images: OK')
