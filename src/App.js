import React, { useEffect, useState } from 'react';
import './App.css';
import LazyBgImage from './LazyBgImage';

function App() {
	const [src, setSrc] = useState('https://picsum.photos/200/300');

	useEffect(() => {
		setInterval(function () {
			const timestamp = new Date().getTime() / 1000;

			setSrc(false); // Otherwise the image will not be updated

			setSrc('https://picsum.photos/200/300?t' + timestamp);
		}, 2000);
	}, []);

	return (
		<div className="App">
			<LazyBgImage src={src} />
		</div>
	);
}

export default App;
