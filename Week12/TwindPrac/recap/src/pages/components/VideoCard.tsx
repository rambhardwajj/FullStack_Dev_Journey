
import type { Video } from "@/vodeo"

export const VideoCard = ({video}: {video: Video }) =>{
	 return <div>
		<img src= { video.thumbnail }  />
		<div>
			{video.title}
		</div>
		<div>
			{video.viewCount}
		</div>
	</div>
}