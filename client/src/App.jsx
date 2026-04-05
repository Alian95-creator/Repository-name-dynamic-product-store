import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container-app flex items-center justify-between py-4">
          <h1 className="text-xl font-bold tracking-tight">
            🛍️ Store<span className="text-gray-500">X</span>
          </h1>
          <p className="text-sm text-gray-500 hidden sm:block">
            Modern Product UI
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container-app py-6">
        <Home />
      </main>
    </div>
  );
}

export default App;