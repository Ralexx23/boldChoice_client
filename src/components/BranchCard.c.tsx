import { Link } from "react-router-dom";

const BranchCard = ({ branch, alt, src }: any) => {
  return (
    <Link to={`/branch/${branch}`} className="link_cardBranch">
      <div className="cardBranch">
        <img src={src} alt={alt} className="w-36" />
      </div>

      <h1 className="">{branch}</h1>
    </Link>
  );
};

export default BranchCard;
