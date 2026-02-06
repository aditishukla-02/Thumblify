import type { AspectRatio, IThumbnail } from " .. /assets/assets"

const PreviewPanel = ({thumbnail, isLoading, aspectRatio} :
{thumbnail: IThumbnail, isLoading: boolean; aspectRatio:
AspectRatio}) => {

return(
<div className="relative mx-auto w-full max-w-2x1">
<div className={ `relative overflow-hidden ${} `}>

</div>
</div>

)

}

export default PreviewPanel