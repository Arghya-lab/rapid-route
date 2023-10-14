import { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import ShortUrlWidget from "../Components/ShortUrlWidget";

function HomePage() {
  const [urls, setUrls] = useState([]);
  const token = localStorage.getItem("token");

  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  useEffect(() => {
    (async () => {
      const res = await fetch(`${baseApiUrl}/urls`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const json = await res.json();
      if (json.success) {
        setUrls(json.data);
      } else {
        console.log(json.error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-[calc(100%-9.2rem)]">
      <div className="w-full h-full bg-base-100 p-4 rounded-lg m-1 flex flex-col space-y-8 overflow-y-scroll">
        {urls.map((url) => (
          <ShortUrlWidget
            key={url._id}
            shortId={url.shortId}
            name={url.name}
            redirectUrl={url.redirectUrl}
            createdAt={url.createdAt}
            visited={url.visited}
          />
        ))}
      </div>
      <SideBar />
    </div>
  );
}

export default HomePage;
