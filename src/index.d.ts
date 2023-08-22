/// <reference types="astro/astro-jsx" />

export interface Props extends astroHTML.JSX.SVGAttributes {
	size?: number
	// https://github.com/withastro/astro/pull/8189
	width?: number
}
