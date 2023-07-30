import AI from "./(home)/AI";
import Tech from "./(home)/Tech";
import Trending from "./(home)/Trending";
import Other from "./(shared)/Other";
import Sidebar from "./(shared)/Sidebar";
import Subscribe from "./(shared)/Subscribe";


export default function Home() {
  return (
    <main className="px-10 leading-7">
     <Trending />
    
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <AI />
          <Tech />
          <Other />
          <div className="hidden md:block">
          <Subscribe />
          </div>

        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
