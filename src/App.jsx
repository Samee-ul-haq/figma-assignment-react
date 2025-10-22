import AboutWidget from './components/AboutWidget';
import GalleryWidget from './components/GalleryWidget';

function App() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE (intentionally empty) */}
      <div></div>

      {/* RIGHT SIDE (widgets container) */}
      <div className="flex flex-col gap-8">
        <AboutWidget />
        <GalleryWidget />
      </div>
    </main>
  );
}

export default App;