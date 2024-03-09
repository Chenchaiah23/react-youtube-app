import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { FETCH_VIDEO } from "../utils/constants";
import store from "../utils/store";
import SuggestVideoCard from "./SuggestVideoCard";

const WatchPage = () => {
  const dispatch = useDispatch();
  const allVids = useSelector((store) => store.allVideos);
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState([]);
  const getVideoInfo = async () => {
    const data = await fetch(FETCH_VIDEO + "&id=" + searchParams.get("v"));
    const json = await data.json();
    //console.log(json.items[0].snippet.title)
    setVideoInfo(json.items[0]);
  };
  useEffect(() => {
    dispatch(closeMenu());
    getVideoInfo();
  }, []);
  //console.log('all',allVids.allVideos.map(v => console.log('allll',v)))
  //const {snippet, statistics} = videoInfo && videoInfo?.snippet;
  //const { title } = snippet;
  return (
    <div className="grid grid-flow-col">
      <div className="col-span-11 p-5 w-full">
        <iframe
          width="100%"
          height="650"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="col-span-1">
        {allVids.allVideos.map((v) => (
          <Link to={"/watch?v="+v.id}><SuggestVideoCard video={v} /></Link>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
