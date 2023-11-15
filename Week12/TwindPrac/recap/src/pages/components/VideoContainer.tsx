import { VIDEOS } from "@/vodeo" 
import {VideoCard} from "./VideoCard"

export const VideoContainer = () => {
	return <div>
        {VIDEOS.map(video => <div className="p-2"> <VideoCard video={video} /> </div>)}
	</div>
}