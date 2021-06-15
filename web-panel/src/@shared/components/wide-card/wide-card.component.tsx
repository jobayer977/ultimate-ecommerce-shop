import Image from "next/image"
import Link from "next/link"
import React from "react"

interface IFProps {
	image: string
	title: string
	link?: any
}
const WideCardComponent: React.FC<IFProps> = ({ image, title, link = "" }) => {
	return (
		<>
			<div className="single-cat-item">
				<figure className="category-thumb">
					<Link href={link}>
						<a>
							<Image
								src={String(image)}
								alt="Picture of the author"
								width={500}
								height={500}
							/>
						</a>
					</Link>

					<figcaption className="category-name">
						<Link href={link}>
							<a>{title}</a>
						</Link>
					</figcaption>
				</figure>
			</div>
		</>
	)
}

export default WideCardComponent
