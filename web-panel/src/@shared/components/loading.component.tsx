import { useNProgress } from "@tanem/react-nprogress"

const Loading: React.FC<{ isRouteChanging: boolean }> = ({
	isRouteChanging,
}) => {
	const { animationDuration, isFinished, progress } = useNProgress({
		isAnimating: isRouteChanging,
	})

	return (
		<>
			<style jsx>{`
				.container-loading {
					opacity: ${isFinished ? 0 : 1};
					pointerevents: none;
					transition: opacity ${animationDuration}ms linear;
				}

				.xbar {
					background: #3ba66c;
					height: 2px;
					left: 0;
					margin-left: ${(-1 + progress) * 100}%;
					position: fixed;
					top: 0;
					transition: margin-left ${animationDuration}ms linear;
					width: 100%;
					z-index: 1031;
				}

				.xspinner {
					box-shadow: 0 0 10px #3ba66c, 0 0 5px #3ba66c;
					display: block;
					height: 100%;
					opacity: 1;
					position: absolute;
					right: 0;
					transform: rotate(3deg) translate(0px, -4px);
					width: 100px;
				}
			`}</style>
			<div className="container-loading">
				<div className="xbar">
					<div className="xspinner" />
				</div>
			</div>
		</>
	)
}

export default Loading
