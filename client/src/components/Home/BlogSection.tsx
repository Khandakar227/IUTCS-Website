import Article from "./Article";

export default function BlogSection() {
  return (
    <div className="section py-24">
        <p className="text-blue-300">Blogs</p>
        <div className="flex md:justify-between justify-center items-center md:grid-cols-2 gap-4">
            <p className="py-2 font-bold text-4xl font-kanit w-full">Tech Tales, Insights and more</p>
            <div>
                <button className="bg-blue-600 rounded-full px-4 py-3 min-w-[130px]"> See more </button>
            </div>
        </div>
        <div className="pt-6 flex justify-evenly items-center">
            <Article/>
            <Article/>
            <Article/>
        </div>
    </div>
  )
}
