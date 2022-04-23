const CardTeam = ({imgUrl,title,subTitle}) => {
    return (
        <div className="relative">
            <img src={imgUrl} alt={title} className="w-48 h-60 lg:h-52 xl:h-60 object-cover rounded-md shadow-md" />
            <div className="bg-gradient-to-t from-black via-transparent absolute inset-0 rounded"></div>
            <div className="absolute bottom-2 left-3 text-white text-sm">
                <p className="font-semibold">{title}</p>
                <p>{subTitle}</p>
            </div>
        </div>
    )
}

export default CardTeam