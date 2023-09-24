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
        <div className="pt-12 flex gap-4 justify-evenly items-stretch">
            <Article
              title="Cipher Quest for the freshers"
              desc={`Calling all tech enthusiasts and adventure seekers! Get ready to embark on an unforgettable journey with the IUT Computer Society as we kickstart your University life with an electrifying "Cipher Quest"!!`}
              date="11-09-2023"
              imgSrc="/cipher_quest.jpg"
              link="/"  
            />
            <Article
              title="IUT_সংশপ্তক securing 1st runners-up position in the CoU-BRACNet Inter University Programming Contest!"
              desc={`It is with immense pleasure that we extend our warmest congratulations to team IUT_সংশপ্তক for securing the prestigious 1st runners-up position in the CoU-BRACNet Inter University Programming Contest 2023! Your dedication and sheer brilliance have illuminated our path, and we couldn't be prouder.`}
              date="17-09-2023"
              imgSrc="/CoU-BRACNet.jpg"
              link="/"
            />
            <Article
              title="Basis Game Development Workshop"
              desc={`BASIS is going to organise an workshop designed to provide growth opportunities for technology enthusiasts. In partnership with IUT Computer Society(IUTCS) & IUT Career and Business Society (IUTCBS) , an enlightening series of workshops focused on Game Development, XR, and NFT is set to commence.`}
              date="23-08-2023"
              imgSrc="/basis_game_dev.jpg"
              link="/"
            />
        </div>
    </div>
  )
}
