type ArticleProps = {
  imgSrc: string,
  title: string,
  desc: string,
  date: string,
  link: string
}

function Article(props:ArticleProps) {
  return (
    <div className="rounded shadow shadow-gray-700 overflow-hidden max-w-xs grid justify-between">
        <div className="max-h-[240px] overflow-hidden">
          <img src={props.imgSrc} className="max-w-xs w-full"/>
        </div>
        
        <div className="p-4">
          <p className="text-gray-300 text-sm">{props.date}</p>
          <p className="text-lg font-semibold pt-3 line-clamp-1">{props.title}</p>
          <p className="pt-3 text-sm line-clamp-3">{props.desc}</p>
        </div>
        <div className="py-2 px-4 grid justify-end items-center">
          <button className="bg-blue-600 px-4 py-1 rounded-full">Read Full</button>
        </div>
    </div>
  )
}

export default Article