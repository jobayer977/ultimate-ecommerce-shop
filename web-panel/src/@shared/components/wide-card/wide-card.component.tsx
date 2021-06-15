import Image from "next/image"
import React from "react"

interface IFProps {
	image: string
	title: string
}
const WideCardComponent: React.FC<IFProps> = ({ image, title }) => {
	return (
		<>
			<div className="single-cat-item">
				<figure className="category-thumb">
					<a href="#">
						<Image
							src={String(image)}
							alt="Picture of the author"
							width={500}
							height={500}
						/>
					</a>

					<figcaption className="category-name">
						<a href="#">{title}</a>
					</figcaption>
				</figure>
			</div>
		</>
	)
}

export default WideCardComponent
