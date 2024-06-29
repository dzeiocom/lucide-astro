# lucide-astro

<a href="https://discord.gg/BsNNqNJ4Yj">
	<img src="https://img.shields.io/discord/1143555541004726272?color=%235865F2&label=Discord" alt="Discord Link">
</a>
<a href="https://github.com/dzeiocom/lucide-astro/stargazers">
	<img src="https://img.shields.io/github/stars/dzeiocom/lucide-astro?style=flat-square" alt="Github stars">
</a>
<a href="https://github.com/dzeiocom/lucide-astro/actions/workflows/build_publish.yml">
	<img src="https://img.shields.io/github/actions/workflow/status/dzeiocom/lucide-astro/build_publish.yml?style=flat-square" alt="Build passing" />
</a>

Astro library to get the Lucide.dev icons to the Astro Framework

_We follow the Lucide versions for our release, with the exception of the patches_

## Installation

```
npm i lucide-astro
```

```
yarn add lucide-astro
```

```
pnpm add lucide-astro
```

## Usage

You can import each icons individually like below

```astro
---
import { WifiOff } from 'lucide-astro'
---

<Layout>
	<WifiOff />
</Layout>
```

## Compile

1. run `npm i` to install the dependencies
2. run `npm run build` to launch the build
3. done! you can publish it or use it as you like

## Attributions

Use the awesome icons from [Lucide](https://lucide.dev/)

based on [astro-feather](https://github.com/gabrlyg/astro-feather)
