import React from "react";
import { create } from 'react-test-renderer';
import Paginator from "./Paginator";

describe("Paginator Status Component", () => {
	test("pages count is 11 but should be showed only 10", () => {
		const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />)
		const root = component.root;
		const spans = root.findAllByType("span")
		expect(spans.length).toBe(0)

	});

	test("if pages count is more then 10 button NEXT should be present", () => {
		const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />)
		const root = component.root;
		const button = root.findAllByType("button")
		expect(button.length).toBe(1)

	});

});