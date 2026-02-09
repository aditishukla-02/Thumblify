import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SoftBackdrop from "../components/SoftBackdrop";
import { dummyThumbnails, type IThumbnail } from "../assets/assets";

const MyGeneration = () => {
  const navigate = useNavigate();

  const aspectRatioClassMap: Record<
    "16:9" | "1:1" | "9:16",
    string
  > = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  };

  const [thumbnails, setThumbnails] = useState<IThumbnail[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchThumbnails = async () => {
    setLoading(true);
    setTimeout(() => {
      setThumbnails(dummyThumbnails);
      setLoading(false);
    }, 600);
  };

  const handleDownload = (image_url: string) => {
    window.open(image_url, "_blank");
  };

  const handleDelete = (id: string) => {
    setThumbnails((prev) => prev.filter((thumb) => thumb._id !== id));
  };

  useEffect(() => {
    fetchThumbnails();
  }, []);

  return (
    <>
      <SoftBackdrop />

      <div className="mt-32 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-zinc-200">
            My Generations
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            View and manage all your AI-generated thumbnails
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[260px] rounded-2xl bg-white/5 border border-white/10 animate-pulse"
              />
            ))}
          </div>
        )}

        {/* GRID */}
        {!loading && thumbnails.length > 0 && (
          <div className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-8">
            {thumbnails.map((thumb) => {
              const aspectClass =
                aspectRatioClassMap[thumb.aspect_ratio];

              return (
                <div
                  key={thumb._id}
                  onClick={() => navigate(`/generate/${thumb._id}`)}
                  className="mb-8 break-inside-avoid group relative cursor-pointer rounded-2xl bg-white/5 border border-white/10 shadow-xl transition hover:shadow-2xl"
                >
                  {/* IMAGE */}
                  <div
                    className={`relative overflow-hidden rounded-t-2xl ${aspectClass} bg-black`}
                  >
                    <img
                      src={thumb.image_url}
                      alt={thumb.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* ACTIONS */}
                  <div className="absolute inset-0 flex items-end justify-center gap-3 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 pb-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(thumb.image_url);
                      }}
                      className="rounded-md bg-white/80 px-4 py-2 text-xs font-medium hover:scale-105 transition"
                    >
                      Download
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(thumb._id);
                      }}
                      className="rounded-md bg-red-500/80 px-4 py-2 text-xs font-medium hover:scale-105 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* EMPTY */}
        {!loading && thumbnails.length === 0 && (
          <div className="mt-24 text-center text-zinc-400">
            <p>No thumbnails generated yet.</p>
            <p className="mt-2 text-sm">
              Generate your first AI thumbnail to see it here.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MyGeneration;
