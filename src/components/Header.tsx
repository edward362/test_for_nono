import { Droplet } from 'lucide-react';

export function Header() {
    return (
        <header className="glass-panel" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
            <div style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
            }}>
                <Droplet size={28} color="white" />
            </div>
            <div>
                <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Hydro<span className="text-gradient">Track</span></h1>
                <p className="subtitle" style={{ marginBottom: 0, fontSize: '0.875rem' }}>Your daily hydration companion</p>
            </div>
        </header>
    );
}
