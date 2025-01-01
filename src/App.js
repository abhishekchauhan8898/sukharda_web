import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="w-full bg-bgLight">
      <NavBar />

      <div className="h-[90vh] w-full flex flex-col items-center justify-center">
        <p className="text-xl font-bold text-amber-500">Jai Mata Di !!!</p>

        <p className="text-6xl font-extrabold text-red-600">
          Sukharda
        </p>
        <div className="mt-12">
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Today's Efforts,
            </span>{" "}
            Future's Rewards
          </h1>
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            We intend to make this world a better place unlocking long-term value and drive growth, riding on technology,
            innovation, and unity
          </p>
        </div>
        <p className="mt-24 text-2xl font-medium text-blue-400">We're coming soon ...</p>
      </div>
    </div>
  );
}

export default App;
