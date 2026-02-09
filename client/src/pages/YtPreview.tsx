import { useSearchParams } from "react-router-dom";
import { yt_html } from "../assets/assets";

const YtPreview = () => {
  const [searchParams] = useSearchParams();

  const thumbnailUrl = searchParams.get("thumbnail_url");
  const title = searchParams.get("title");

  // fallback safety
  const finalHtml = yt_html
    .replace(
      "%%THUMBNAIL_URL%%",
      thumbnailUrl ? decodeURIComponent(thumbnailUrl) : ""
    )
    .replace(
      "%%TITLE%%",
      title ? decodeURIComponent(title) : ""
    );

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      <iframe
        srcDoc={finalHtml}
        title="YouTube Thumbnail Preview"
        width="100%"
        height="100%"
        allowFullScreen
        className="border-none"
      />
    </div>
  );
};

export default YtPreview;
