import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import KanjiPage from './pages/Kanji';
import DictionaryPage from './pages/Dictionary';
import GrammarPage from './pages/Grammar';
import QuizPage from './pages/Quiz';

function App() {
  return (
    <Router>
      <div className="min-h-screen  p-8">
        {/* Menu */}
        <nav className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Japanese Learning</h1>
          <div className="flex gap-4">
            <NavButton to="/kanji">Kanji</NavButton>
            <NavButton to="/dictionary">Dictionary</NavButton>
            <NavButton to="/grammar">Grammar</NavButton>
            <NavButton to="/quiz">Quiz</NavButton>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kanji" element={<KanjiPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/grammar" element={<GrammarPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Reusable styled navigation button
const NavButton = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
  >
    {children}
  </Link>
);

// Home page component
function HomePage() {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl mb-4">Welcome to Japanese Learning!</h2>
      <p>Select a category above to begin studying.</p>
    </div>
  );
}

export default App;