import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import humanReadableDate from "../util/convertIsoToHumanReadableDate";

function ShortUrlWidget({ shortId, name, redirectUrl, createdAt, visited }) {
  const navigate = useNavigate()
  const handleAnalyticBtnClick = () => {
    navigate(`/analytic/#${shortId}`)
  }

  return (
    <div className="w-full bg-purple-500 rounded-lg p-4 text-white">
      <div className="p-4">
        <p>{name}</p>
        <p>
          <span className="font-semibold text-neutral">Id:</span> {shortId}
        </p>
        <p>
          <span className="font-semibold text-neutral">Redirect URL:</span>
          {redirectUrl}
        </p>
        <div className="flex justify-between">
          <p>
            <span className="font-semibold text-neutral">Total visit:</span>
            {visited}
          </p>
          <p>{humanReadableDate(createdAt)}</p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-wide btn-sm" onClick={handleAnalyticBtnClick}>Analytic</button>
      </div>
    </div>
  );
}

ShortUrlWidget.propTypes = {
  shortId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  redirectUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  visited: PropTypes.number.isRequired,
};

export default ShortUrlWidget;
