import './App.css';
import Navbar from './components/Navbar/Navbar2'
import Banner from  './components/Banner/Banner'
import Blog from './components/Blog/Blog'
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Blog />
      <Footer/>
      <h3 className="italic text-red-700">hello</h3>
      <section class="bg-white py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
                <h2 class="text-2xl font-semibold text-gray-800">Latest Posts</h2>

                <div class="flex flex-col items-center justify-center mt-6">
                    <a class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Easy, Free Laravel CI Using GitHub Actions</h3>
                            <span class="block text-gray-600 font-light text-sm">20 Jan 2020</span>
                        </div>
                    </a>

                    <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Pest: a delightful PHP Testing Framework</h3>
                            <span class="block text-gray-600 font-light text-sm">29 Oct 2019</span>
                        </div>
                    </a>

                    <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Using inline SVGs in Vue components</h3>
                            <span class="block text-gray-600 font-light text-sm">15 Oct 2019</span>
                        </div>
                    </a>

                    <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Acceptance Testing Laravel & VueJs Apps with Codeception</h3>
                            <span class="block text-gray-600 font-light text-sm">3 Oct 2019</span>
                        </div>
                    </a>
                </div>

                <div class="flex items-center justify-center mt-12">
                    <a class="flex items-center text-gray-600 hover:underline hover:text-gray-500" href="#">
                        <span>View More</span>

                        <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
      {/* bootstrapp */}
      <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
    {/* right */}
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
      {/* boo */}
      <img class="transform scale-150 md:scale-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkB6-QfKoQRQX13bYpo8lnvWTDlgnisP2f2dnEBREYawgTpU6GdRmirdGGeTl4cWB-jr8&usqp=CAU/" alt="" />

      <div class="min-h-screen bg-gray-500 py-6 flex flex-col justify-center sm:py-12">
  <div class="flex space-x-4 px-4 justify-around">

    <div class="bg-gradient-to-t from-black via-pink-900 to-pink-700  h-72 w-28 md:w-96 md:rounded-3xl rounded-full shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">

      <img class="rounded-full w-16 h-16 shadow-sm absolute -top-8 transform md:scale-110 duration-700" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />


      <div class="transform -rotate-90 md:rotate-0 align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8">Alice Porter</div>
      <ul class="text-lg text-gray-300 font-light hidden md:block">
        <li>🍙 Otaku, Over 9.000</li>
        <li>🍕 Lover, Ñam ñam jejeje</li>
        <li>❤ NY</li>
      </ul>


      <div class="flex w-full justify-around">
        <button class=" rounded-full w-16 h-16 shadow-sm bg-pink-400 bg-opacity-40 backdrop-blur-lg" src="https://randomuser.me/api/portraits/women/17.jpg" alt="">
          <img class="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/2362/2362719.svg?token=exp=1618564954~hmac=10f97ba27ae869c1901e136068278327/" alt="" />
        </button>
        <button class="hidden md:block | rounded-full w-16 h-16 shadow-sm bg-yellow-400 bg-opacity-40 backdrop-blur-lg" src="https://randomuser.me/api/portraits/women/17.jpg" alt="">
          <img class="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/1256/1256468.svg?token=exp=1618558810~hmac=ba07805284d7548e9f5a51136fd2239d/" alt="" />
        </button>
        <button class="hidden md:block | rounded-full w-16 h-16 shadow-sm bg-red-400 bg-opacity-40 backdrop-blur-lg" src="https://randomuser.me/api/portraits/women/17.jpg" alt="">
          <img class="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/1256/1256450.svg?token=exp=1618558812~hmac=898fb277bfa2d329029c133292caacab/" alt="" />
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
