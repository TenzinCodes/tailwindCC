export default function App() {
  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className='p-5'>
      {/* Generic color, padding, margin, bg color, width, height, border, radius */}

      <h1 className="text-center text-lg text-green-400">HELLO</h1>
      <div className="w-full h-10 bg-violet-200 border=2 border-violet-600 rounded-md my-4 p-2">
        <p className="text-center font-mono font-extrabold">a div</p>
      </div>
      <div className="fixed w-10 h-10 bg-red-500 top-0"></div>

      {/* Flexbox */}
      <div className="flex justify-between ">
        <div className="h-16 w-16 rounded-full bg-blue-500">
        </div>
        <div className="h-16 w-16 rounded-full bg-blue-500">
        </div>
        <div className="h-16 w-16 rounded-full bg-blue-500">
        </div>
      </div>

      {/* grid */}
      <div className="grid grid-cols-3 gap-2 mt-3">
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
      </div>

      {/* media queries 
  'sm'  (640px)
  'md'  (768px)
  'lg'  (1024px)
  'xl'  (1280px)
  '2xl' (1536px)

  Can also customize breakpoints in tailwind.config.js file

  Don’t think of sm: as meaning “on small screens”, think of it as “at the small breakpoint“.

  Use unprefixed utilities to target mobile, and override them at larger breakpoints.

  IE: Correct: <div className="text-center sm:text-left"></div>
      Wrong: <div className="sm:text-center"></div>

      Top html will center all in that className but will be overridden at 640px to be text left.
      Bottom html will text center anything that is a minimum of 640px.
  */}


      {/* max-[size] means that at atleast this size and under it will trigger. */}

      <div className="md:block hidden">
        <p> I will appear for devices &gt; 768px</p>
      </div>
      <div className="max-md:block hidden">
        <p> I will appear for devices &lt; 768px</p>
      </div>

      {/*
    my = margin y
    px = padding x
    ring = box shadows (ie: ring-[size])
    ring-inset = inside box shadow the element
  */}

      <button className="my-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:ring-4 focus:ring-inset focus:ring-red-500 active:bg-blue-800">
        Button
      </button>


      {/* 
  first: first node in the ul
  odd: odd numbered li
  even: even numbered li
  space: spacing in between the li
 */}

      <ul className="my-2 space-y-2">
        <li className="bg-white p-2 first:bg-yellow-100" >Item 1</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200" >Item 2</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200" >Item 3</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200" >Item 4</li>
        <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200" >Item 5</li>
      </ul>

      {/* for DARKMODE add to config file and add 'dark: to the className of any element' 
  tracking = space in between texts of the element
  shadow-xl = a number of different shadow effects
  */}

      <div className="card">
        <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">Text element</h3>
        <p className="mt-2 text-small text-slate-500 dark:text-blue-100"> A longer p tag element</p>
        <button
          id="toggleDark"
          className="text-blue-900 px-4 py-2 text-sm font-medium mt-8 bg-blue-100 rounded-md" 
          onClick={toggleDarkMode}
        > Toggle Dark Mode
        </button>
      </div>

      {/* how to customize styles (2 options)  */}

      {/*option 1 (add square brackets for specific) */}
      <p className="text-[20px] text-[#973F29] bg-[#ae9595] p-[16px]"> Chestnut Color</p>

      {/* option 2 use the tailwind config file to extend colors and give variables i.e 'chestnut in the text- classNamename' */}
      <p className="text-[20px] text-chestnut bg-[#ae9595] p-[16px]"> Chestnut Color</p>


    </div>
  )
}
