import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "App";
import { MobileApp } from "components/pages/MobileApp/MobileApp";

const Router: FC<{}> = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/mobile-app' element={<MobileApp />} />
			</Routes>
		</BrowserRouter>
	);
};

export { Router };
