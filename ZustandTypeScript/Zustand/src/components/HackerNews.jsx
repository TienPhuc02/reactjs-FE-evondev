import { useEffect } from "react";
import { useNewStore } from "../store/fetch-store";

const HackerNews = () => {
  const { fetch, hits, errorMessage, loading } = useNewStore((state) => state);
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="p-5 max-w-lg mx-auto">
      {loading && (
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      )}
      <div className="flex gap-5 flex-wrap">
        {!loading &&
          hits.length > 0 &&
          hits.map((item) => {
            return (
              <div
                className="p-3 border border-slate-100 rounded-xl"
                key={item.title}
              >
                {item.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
