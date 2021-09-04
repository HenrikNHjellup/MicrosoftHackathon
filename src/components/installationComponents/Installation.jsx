import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {Card} from "react-bootstrap";

const Installation = (props) => {   

	render(); {
		return (
			

			<div className="ShowProducts">

					<Card>
						<Card.Img fluid variant="top" src={`../../shoes/${object.name}.jpg`} onError={(e)=>{e.target.onerror = null; e.target.src="../../shoes/404-shoe.jpg"}}/> {/*src="../../shoes/converse.jpg" />*/}
						<Card.Body>
							<Card.Title>{object.name}</Card.Title>

							<Card.Text>
								{object.longDesc}
							</Card.Text>

							<Card.Text>
							{"Sizes available: " + object.sizes}
							</Card.Text>

							<Card.Text>
							{"Colors available: " + object.colors}
							</Card.Text>

							<Card.Text style={{ fontWeight: "bold" }}>
								{"$" + object.price}
							</Card.Text>
						</Card.Body>
					</Card>

			</div>
		)
	}
}

export default Installation;