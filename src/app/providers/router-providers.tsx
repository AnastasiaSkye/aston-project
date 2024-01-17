import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterProviders = (component: () => React.ReactNode) => () => (
	<BrowserRouter>
		<Suspense fallback='Loading...'>
			{component()}
		</Suspense>
	</BrowserRouter>
);