import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/common/Layout";
import Main from "../pages/Main"

const Router = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Main />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
