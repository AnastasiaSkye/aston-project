const accent = '#1074d2'
const light0 = '#fbfbff'
const dark0 = '#031628'
const borderRadius = '7px'

export const toastOptionsLight = {
	style: {
		border: `1px solid ${accent}`,
		color: accent,
		background: light0,
		borderRadius: borderRadius
	},
	iconTheme: {
		primary: accent,
		secondary: light0
	}
}

export const toastOptionsDark = {
	style: {
		border: `1px solid ${light0}`,
		color: light0,
		background: dark0,
		borderRadius: borderRadius
	},
	iconTheme: {
		primary: light0,
		secondary: dark0
	}
}