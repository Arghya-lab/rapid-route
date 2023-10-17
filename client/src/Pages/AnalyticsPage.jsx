import { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import humanReadableDate from "../util/convertIsoToHumanReadableDate";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

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
    <>
    {/* delete shorturl */}
      <NavBar />
      <div className="flex h-[calc(100%-9.2rem)]">
        <div className="m-1 w-[calc(100vw-280px)] overflow-y-auto">
          <div className="w-full bg-base-200 rounded-lg p-4">
            <p className="font-bold text-xl text-accent-focus">
              {urlInfo.name}
            </p>
            <p className="text-error-content">
              <span className="font-semibold text-base-content">Id : </span>
              {shortId}
            </p>
            <p className="text-error-content">
              <span className="font-semibold text-base-content">
                Redirect URL : 
              </span>
              {urlInfo.redirectUrl}
            </p>
            <div className="flex justify-between">
              <p className="text-error-content">
                <span className="font-semibold text-base-content">
                  Total visit : 
                </span>
                {urlInfo.visited}
              </p>
              {urlInfo.createdAt && (
                <p className="text-error-content">
                  {humanReadableDate(urlInfo.createdAt)}
                </p>
              )}
            </div>
          </div>
          {data.length != 0 ? (
            <table className="my-3 w-full bg-base-200 border-collapse">
              <thead className="bg-base-content text-base-300">
                <tr>
                  <th className="border-2 p-2 font-semibold text-lg">
                    ipAddress
                  </th>
                  <th className="border-2 p-2 w-2/3 font-semibold text-lg">
                    userAgent
                  </th>
                  <th className="border-2 p-2 font-semibold text-lg">time</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id}>
                    <td className="border-2 p-2">{item.ipAddress}</td>
                    <td className="border-2 p-2">{item.userAgent}</td>
                    <td className="border-2 p-2">
                      {humanReadableDate(item.timestamp)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-lg font-mono text-info text-center my-12">
              No analytic to show.
            </p>
          )}
        </div>
        <SideBar />
      </div>
      <Footer />
    </>
  );
}

export default AnalyticsPage;
