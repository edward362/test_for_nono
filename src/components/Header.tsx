import { Droplet, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="glass-panel" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                }}>
                    <Droplet size={28} color="white" />
                </div>
                <div>
                    <h1 style={{ fontSize: '1.75rem', margin: 0, lineHeight: 1.2 }}>Hydro<span className="text-gradient">Track</span></h1>
                    <p className="subtitle" style={{ margin: 0, fontSize: '0.875rem' }}>Your daily hydration companion</p>
                </div>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input-base"
                        style={{
                            paddingLeft: '2.75rem',
                            width: '240px',
                            borderRadius: 'var(--radius-full)',
                            background: 'var(--color-surface)',
                        }}
                    />
                </div>

                <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <Link to="/" style={{
                        textDecoration: 'none',
                        color: 'var(--color-text-main)',
                        fontWeight: 600,
                        fontSize: '1rem',
                        transition: 'color var(--transition-fast)'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-main)'}
                    >Home</Link>

                    <Link to="/pricing" style={{
                        textDecoration: 'none',
                        color: 'var(--color-text-main)',
                        fontWeight: 600,
                        fontSize: '1rem',
                        transition: 'color var(--transition-fast)'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-main)'}
                    >Pricing</Link>
                </nav>
            </div>
        </header>
    );
}
