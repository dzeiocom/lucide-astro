import fs from 'node:fs/promises'
/**
 * Javascript script linked to `upgrade.sh`
 */
const upstreamPackage = 'lucide-static'

;(async () => {
	const pkg = JSON.parse(await fs.readFile('./package.json', 'utf8'))
	const pkgVersion = pkg.version

	const check = await fetch(`https://registry.npmjs.com/${upstreamPackage}`).then((it) => it.json())
	const newVersion = check['dist-tags']?.latest
	if (!newVersion) {
		console.error('no new version found :(')
		process.exit(1)
	}
	if (newVersion === pkgVersion || !newVersion) {
		console.log('no diff in version, ending')
		process.exit(1)
	}
	console.log('diff in version, update needed')
	pkg.version = newVersion
	pkg.devDependencies[upstreamPackage] = newVersion
	await fs.writeFile('./package.json', JSON.stringify(pkg, undefined, '\t') + '\n')
})()