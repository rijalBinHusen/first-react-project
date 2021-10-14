import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailsTitle from "parts/PageDetailsTitle.js"
import FeaturedImage from "parts/FeaturedImage.js"

import ItemDetails from "json/itemDetails.json"

export default class DetailsPage extends Component {
	
	componentDidMount() {
		window.title = "Details Page";
		window.scrollTo(0, 0);
	}

	render() {
		const breadcumb = [
        	{ pageTitle: "Home", pageHref: ""},
        	{ pageTitle: "House Details", pageHref: ""}
    	]

	return (
		<>
			<Header {...this.props}></Header>
			<PageDetailsTitle
				breadcumb={breadcumb}
				data={ItemDetails}
			></PageDetailsTitle>
			<FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
		</>
		)
	}
}