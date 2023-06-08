import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Ratings = ({ value, text }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div style={{ color: "#FFDF00" }} className="mb-1">
          <span>
            {value >= 1 ? (
              <FaStar />
            ) : value >= 0.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
          <span>
            {value >= 2 ? (
              <FaStar />
            ) : value >= 1.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
          <span>
            {value >= 3 ? (
              <FaStar />
            ) : value >= 2.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
          <span>
            {value >= 4 ? (
              <FaStar />
            ) : value >= 3.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
          <span>
            {value >= 5 ? (
              <FaStar />
            ) : value >= 4.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </span>
        </div>
        {text && <span className="mx-3">{text} Reviews</span>}
      </div>
    </>
  );
};

export default Ratings;
