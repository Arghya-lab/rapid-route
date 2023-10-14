import { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import humanReadableDate from "../util/convertIsoToHumanReadableDate";

function AnalyticsPage() {
  const [data, setData] = useState([]);
  const [urlInfo, setUrlInfo] = useState({});
  const [shortId, setShortId] = useState("");
  const token = localStorage.getItem("token");
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  useEffect(() => {
    const hash = window.location.hash;
    setShortId(hash.slice(1));
  }, []);

  useEffect(() => {
    if (shortId) {
      (async () => {
        const res = await fetch(`${baseApiUrl}/url/${shortId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json", Authorization: token },
        });
        const json = await res.json();
        if (json.success) {
          setUrlInfo(json.data);
        } else {
          console.log(json.error);
        }
      })();

      (async () => {
        const res = await fetch(`${baseApiUrl}/analytics/${shortId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json", Authorization: token },
        });
        const json = await res.json();
        if (json.success) {
          setData(json.data);
        } else {
          console.log(json.error);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortId]);

  return (
    <div className="flex h-full">
      <div>
        <div className="p-4">
          <p>{urlInfo.name}</p>
          <p>
            <span className="font-semibold text-neutral">Id:</span> {shortId}
          </p>
          <p>
            <span className="font-semibold text-neutral">Redirect URL:</span>
            {urlInfo.redirectUrl}
          </p>
          <div className="flex justify-between">
            <p>
              <span className="font-semibold text-neutral">Total visit:</span>
              {urlInfo.visited}
            </p>
            {urlInfo.createdAt && <p>{humanReadableDate(urlInfo.createdAt)}</p>}
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ipAddress</th>
              <th>userAgent</th>
              <th>time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.ipAddress}</td>
                <td>{item.userAgent}</td>
                <td>{humanReadableDate(item.timestamp)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SideBar />
    </div>
  );
}

export default AnalyticsPage;
