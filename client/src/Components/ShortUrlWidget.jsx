import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import humanReadableDate from "../util/convertIsoToHumanReadableDate";
import { toast } from "react-toastify";

function ShortUrlWidget({ shortId, name, redirectUrl, createdAt, visited }) {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleAnalyticBtnClick = () => {
    navigate(`/analytic/#${shortId}`);
  };

  const handleCopyBtnClick = () => {
    navigator.clipboard.writeText(`${baseUrl}/${shortId}`);
    toast.info("Copied");
  };

  return (
    <div className="w-full bg-base-200 rounded-lg p-4">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-accent-focus">{name}</p>
          <button
            className="tooltip"
            data-tip="Click to copy"
            onClick={handleCopyBtnClick}>
            <i className="fa-regular fa-copy"></i>
          </button>
        </div>
        <p className="text-error-content">
          <span className="font-semibold text-base-content">Id : </span>
          {shortId}
        </p>
        <p className="text-error-content">
          <span className="font-semibold text-base-content">
            Redirect URL :
          </span>
          {redirectUrl}
        </p>
        <div className="flex justify-between">
          <p className="text-error-content">
            <span className="font-semibold text-base-content">
              Total visit :
            </span>
            {visited}
          </p>
          <p className="text-error-content">{humanReadableDate(createdAt)}</p>
        </div>
      </div>
      <div className="text-center">
        <button
          className="btn btn-wide btn-sm btn-accent"
          onClick={handleAnalyticBtnClick}>
          Analytic
        </button>
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
