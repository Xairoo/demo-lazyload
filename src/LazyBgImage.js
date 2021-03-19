import React, { useEffect } from 'react';
import LazyLoad from 'vanilla-lazyload';

const callback_loaded = function (e) {
	// console.log('callback_loaded', e);
};
const callback_loading = function (e) {
	// console.log('callback_loading', e);
};

// Only initialize it one time for the entire application
if (!document.lazyLoadAssetCover) {
	document.lazyLoadAssetCover = new LazyLoad({
		elements_selector: '.cover',
		callback_loading: callback_loading,
		callback_loaded: callback_loaded,
	});
}

const LazyBgImage = (props) => {
	useEffect(() => {
		document.lazyLoadAssetCover.update();
	}, [props.src]);

	console.log(props.src);

	if (props.src) {
		return <div className="cover" data-bg={props.src} />;
	} else {
		return null;
	}
};

export default LazyBgImage;
