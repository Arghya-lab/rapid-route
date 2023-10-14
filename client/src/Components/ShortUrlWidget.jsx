import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import humanReadableDate from "../util/convertIsoToHumanReadableDate";

function ShortUrlWidget({ shortId, name, redirectUrl, createdAt, visited }) {
  const navigate = useNavigate()
  const handleAnalyticBtnClick = () => {
    navigate(`/analytic/#${shortId}`)
  }

  return (
    <div className="w-full bg-base-200 rounded-lg p-4">
      <div className="p-4">
        <p className="font-bold text-lg text-accent-focus">{name}</p>
        <p className="text-error-content">
          <span className="font-semibold text-base-content">Id : </span> {shortId}
        </p>
        <p className="text-error-content">
          <span className="font-semibold text-base-content">Redirect URL : </span>
          {redirectUrl}
        </p>
        <div className="flex justify-between">
          <p className="text-error-content">
            <span className="font-semibold text-base-content">Total visit : </span>
            {visited}
          </p>
          <p className="text-error-content">{humanReadableDate(createdAt)}</p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-wide btn-sm btn-accent" onClick={handleAnalyticBtnClick}>Analytic</button>
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
