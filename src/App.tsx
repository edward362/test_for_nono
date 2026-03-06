import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { MetricsForm } from './components/MetricsForm';
import { HydrationResult } from './components/HydrationResult';
import type { Metrics } from './utils/hydration';
import { calculateHydration } from './utils/hydration';

function App() {
  const [metrics, setMetrics] = useState<Metrics>({
    weight: 70, // default weight
    activity: 'moderate',
    climate: 'temperate',
  });

  const hydrationGoal = useMemo(() => calculateHydration(metrics), [metrics]);

  return (
    <div className="container" style={{
      animation: 'slide-up 0.5s ease-out forwards',
      opacity: 0, // initial state for animation
    }}>
      <Header />

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* Left Column: Form */}
        <MetricsForm metrics={metrics} onChange={setMetrics} />

        {/* Right Column: Result */}
        <HydrationResult goalMl={hydrationGoal} />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem 0',
        color: 'var(--color-text-muted)',
        fontSize: '0.875rem',
        marginTop: '2rem'
      }}>
        <p>Built with ❤️ using React & TypeScript</p>
      </footer>
    </div>
  );
}

export default App;
