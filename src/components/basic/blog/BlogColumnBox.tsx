import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ColumnType } from "../../../constant/type";
import { formatDateTime } from "../../../utils/functions";

const BlogColumnBox = (props: ColumnType) => {
  const navigate = useNavigate();
  const goColumnDetail = (id: number) => {
    navigate(`/column/${id}`);
  };
  const [hoverAction, setHoverAction] = useState(false);
  return (
    <div
      className=" m-auto w-full xs:max-w-[480px] xs:m-auto md:max-w-[312px] md:h-[420px] mb-[15px] bg-white border"
      onMouseOver={() => setHoverAction(true)}
      onMouseLeave={() => setHoverAction(false)}
    >
      <div
        className="h-[234px] cursor-pointer border-b"
        onClick={() => {
          props.id && goColumnDetail(props.id);
        }}
      >
        <img
          src={props.hero_image}
          className="h-full m-auto object-cover"
          alt={props.cat_name}
        />
      </div>
      <div className="p-4">
        <p className="h-[100px] py-2 tracking-tighter text-xl border-b border-[#ccc]">
          {props.title}
        </p>
        <div className="flex justify-between py-4">
          <div className="flex gap-2">
            <img src="/assets/imgs/icons/pen.webp" alt="pen" />
            <Link
              to={`column/${props.id}`}
              className={`border-b border-black ${
                hoverAction && "text-[#0000FF]"
              }`}
            >
              {props.cat_name}
            </Link>
          </div>
          <p>{formatDateTime(props.created_date)}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogColumnBox;
