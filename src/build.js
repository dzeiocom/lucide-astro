import fs from 'fs/promises'
import Lucide from "lucide-static"

const componentTemplate = (icon) => `---
export interface Props {
	size?: number
	width?: number
	height?: number
	strokeWidth?: number
	stroke?: string
	fill?: string
	class?: string
	viewBox?: string
	strokeLinecap?: "round" | "butt" | "square" | "inherit"
	strokeLinejoin?: "round" | "inherit" | "miter" | "bevel"
}

const {
	size = 24,
	strokeWidth = 2,
	width = size,
	height = size,
	stroke = 'currentColor',
	strokeLinecap = 'round',
	strokeLinejoin = 'round',
	fill = 'none',
	viewBox = '0 0 24 24'
} = Astro.props

---

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={Astro.props.class}
	width={width}
	height={height}
	fill={fill}
	viewBox={viewBox}
	stroke={stroke}
	stroke-width={strokeWidth}
	stroke-linecap={strokeLinecap}
	stroke-linejoin={strokeLinejoin}
>
	${icon.replace(/<svg(?:.|\n)*?>((?:.|\n)*)<\/svg>/gm, '$1').replace(/  /g, '\t').trim()}
</svg>
`

await fs.rm('./dist', { recursive: true, force: true})
await fs.mkdir('./dist')

try {
	let index = ''
	for (const name in Lucide) {
		const icon = Lucide[name]
		const fullName = name.slice(0, 1).toUpperCase() + name.slice(1)
		const filePath = `./dist/${fullName}.astro`;
		// await fs.ensureDir(path.dirname(filePath));
		await fs.writeFile(filePath, componentTemplate(icon), "utf-8");
		index += `export { default as ${fullName} } from './${fullName}.astro'\n`
	}
	await fs.writeFile('./dist/index.js', index, 'utf-8')
	await fs.writeFile('./dist/index.d.ts', index, 'utf-8')
} catch (e) {
	console.error('Error building the Library', e)
}