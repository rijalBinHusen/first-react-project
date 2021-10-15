import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailsTitle from "parts/PageDetailTitle.js"
import FeaturedImage from "parts/FeaturedImage.js";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";

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
			<section className="container">
				<div className="row">
					<div className="col-7 pr-5">
						<PageDetailDescription data={ItemDetails}></PageDetailDescription>
					</div>
					<div className="col-5">
						<BookingForm itemDetails={ItemDetails}></BookingForm>
					</div>
				</div>
			</section>

			<Categories data={ItemDetails.categories}></Categories>
		</>
		)
	}
}