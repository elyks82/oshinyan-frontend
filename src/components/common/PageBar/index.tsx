import { Link } from "react-router-dom";

const PageBar = ({ page }: { page: string }) => {
  return (
    <div className="flex gap-2 py-4">
      <Link to="/" className="">
        TOP
      </Link>
      <span>&gt;&nbsp;</span>
      <Link to="#">{page}</Link>
    </div>
  );
};

export default PageBar;
