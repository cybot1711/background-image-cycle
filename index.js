const cycleBackground = (element, ...images) => {
	let backgrounds = [ ...images ]
		document.querySelector( element ).style.background = `url(${backgrounds[ Math.floor( Math.random() * backgrounds.length ) ]})`
}

export default cycleBackground

