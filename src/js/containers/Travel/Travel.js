import React, { Component, Fragment } from 'react';

import Background from 'components/Background';
import Reef1 from 'assets/images/reef-1.jpg';

import SBMap from 'assets/images/sb-map.png';

const items = [
	{
		__html: `<div style="width:320px;height:300px;margin:auto" class="airbnb-embed-frame" data-id="12642692" data-view="home"><a href="https://www.airbnb.com/rooms/12642692?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/12642692?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget" rel="nofollow">Mission Suite private downtown studio</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></div>`
	},
	{
		__html: `<div style="width:320px;height:300px;margin:auto" class="airbnb-embed-frame" data-id="3458769" data-view="home"><a href="https://www.airbnb.com/rooms/3458769?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/3458769?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget" rel="nofollow">Mesa Studio</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></div>`
	},
	{
		__html: `<div style="width:320px;height:300px;margin:auto" class="airbnb-embed-frame" data-id="36637607" data-view="home"><a href="https://www.airbnb.com/rooms/36637607?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/36637607?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget" rel="nofollow">Sparkling Clean 1 bedroom very private guesthouse</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></div>`
	},
	{
		__html: `<div style="width:320px;height:300px;margin:auto" class="airbnb-embed-frame" data-id="36733543" data-view="home"><a href="https://www.airbnb.com/rooms/36733543?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/36733543?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget" rel="nofollow">Lighthouse Keeper&#x27;s House, close to the beach</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></div>`
	},
	{
		__html: `<div style="width:320px;height:300px;margin:auto" class="airbnb-embed-frame" data-id="37181102" data-view="home"><a href="https://www.airbnb.com/rooms/37181102?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/37181102?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget" rel="nofollow">Mid Century Peace and Quiet</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></div>`
	},
	{
		__html: `<div style="width:320px;height:300px;margin:auto" class="airbnb-embed-frame" data-id="36116812" data-view="home"><a href="https://www.airbnb.com/rooms/36116812?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/36116812?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget" rel="nofollow">Charming SB Studio with Mountain Views</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></div>`
	},
	{
		__html: `<div style="width:320px;height:300px;margin:auto" class="airbnb-embed-frame" data-id="18077156" data-view="home"><a href="https://www.airbnb.com/rooms/18077156?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/18077156?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget" rel="nofollow">SB Peace and Quiet</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></div>`
	},
	{
		__html: `<div style="width:320px;height:300px;margin:auto" class="airbnb-embed-frame" data-id="1365570" data-view="home"><a href="https://www.airbnb.com/rooms/1365570?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/1365570?s=66&amp;shared_item_type=1&amp;virality_entry_point=1&amp;sharer_id=2285803&amp;source=embed_widget" rel="nofollow">Tiny Cottage in the Oaks, Midtown Santa Barbara</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></div>`
	}
]

const hotels = [
	{
		name: 'The Eagle Inn',
		href: 'https://www.theeagleinn.com/'
	},
	{
		name: 'The Wayfarer',
		href: 'https://www.wayfarersb.com/'
	},
	{
		name: 'Harbor view Inn',
		href: 'https://www.harborviewinnsb.com/'
	},
	{
		name: 'Cabrillo Inn',
		href: 'https://www.cabrilloinn.com/'
	},
	{
		name: 'The Lemon Tree (relatively close to the house )',
		href: 'https://www.treeinns.com/'
	},
	{
		name: 'The Goodland (Goleta)',
		href: 'https://www.thegoodland.com/'
	},

	{
		name: 'Villa Rosa Inn',
		href: 'https://www.villarosainnsb.com/'
	},
	{
		name: 'Best western',
		href: 'https://www.bestwestern.com/en_US/book/hotels-in-santa-barbara/best-western-beachside-inn/propertyCode.05172.html'
	},
	{
		name: 'The El Encanto',
		href: 'https://www.belmond.com/hotels/north-america/usa/ca/santa-barbara/belmond-el-encanto/'
	},
	{
		name: 'Four Seasons Biltmore',
		href: 'https://www.fourseasons.com/santabarbara/'
	}
]

class Travel extends Component {
	render() {
		return (
			<Fragment>
				<div className="page">
					<div className="container">
						<section>
							<div className="grid-flex center">
								<div className="col-10">
										<img src={SBMap} alt="map" />
								</div>
							</div>
						</section>
						<section>
							<div className="grid-flex center">
								<div className="col-10 stagger-in-items">
									<h6>Getting to Santa Barbara.</h6>
									<h4>Airports</h4>
									<p className="my-1">
										<a target="_blank" href="https://www.flylax.com/">Los Angeles Airport</a>
									</p>
									<p className="my-1">It takes about 1 hour 40 minutes to get to Santa Barbara from LAX</p>
									<p className="my-1">
										<a target="_blank" href="http://hollywoodburbankairport.com/">Burbank Airport</a>
									</p>
									<p className="my-1">It takes about 1 hour 30 minutes to get to Santa Barbara from Burbank</p>
									<p className="my-1">
										<a target="_blank" href="https://www.santabarbaraca.gov/gov/depts/flysba/default.asp">Santa Barbara Airport</a>
									</p>
								</div>
							</div>
						</section>
						<section>
							<div className="grid-flex center break-lg">
								<div className="col-10 stagger-in-items">
									<h6>Travel & Accomadations</h6>
									<h4>Hotels</h4>
									<div className="mb-4">
										{hotels.map(hotel => (
											<p className="my-1">
												<a href={hotel.href} target="_blank">{hotel.name}</a>
											</p>
										))}
									</div>

									<h4>AirBnB Options</h4>
									<ul className="grid-flex my-3">
										{items.map( (item, index) => (
											<li className="col-6 align-center" dangerouslySetInnerHTML={item} key={index} />
										))}
									</ul>
								</div>
							</div>
						</section>
					</div>
				</div>
				<Background image={Reef1} />
			</Fragment>
		);
	}
}

export default Travel;
