export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-teal-500 text-2xl">
        Book a section
      </h1>
      <p className="flex flex-col font-medium text-blue-400 text-align border border-green-200 pt-4 py-10 lg:hidden">
        In this exercise you will draw your own storyboard on paper. Take a photo with your phone and insert a picture of storyboard below, or upload it separately along with the other deliverables.

        You should spend approximately 15-20 minutes on this activity. Use the space below to include your storyboard, or upload to the Course Management System. Remember, we are not looking for artistic pieces – stick figures are okay!

      </p>
      <button className="py-2 px-4 bg-blue-500 text-white rounded 
        cursor-pointer text-lg">
        Click me
      </button>
      <div className=" py-4 px-2 bg-green-400 hover:blue">
        Hover me
      </div>
      <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-gray-50 shadow-lg dark:bg-slate-800 md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0 bg-white">
            <img className="h-52 w-full object-cover md:h-full md:w-48" src="/travelapp/public/person-1.png" alt="My image alt description" />
          </div>
          <div className="p-8">
            <a href="#" className="mt-1 block text-lg font- bold leading-tight text-gray-800"> My awesome card</a>
            <p className="mt-2 text-gray-500">
            Lorem ipsum 
dolor sit amet, consectetur adipiscing elit. Donec 
accumsan eros elementum massa dignissim.
            </p>
          </div>
        </div>
      </div>
      
    </main>
  );
}
