import { Check } from 'lucide-react';

export function Pricing() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', padding: '2rem 0' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Simple, transparent pricing</h1>
                <p className="subtitle" style={{ fontSize: '1.125rem' }}>Choose the plan that's right for your hydration journey</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                width: '100%',
                maxWidth: '800px'
            }}>
                {/* Monthly Plan */}
                <div className="glass-panel" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    position: 'relative',
                    transition: 'all var(--transition-normal)'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>Monthly Access</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Perfect for getting started</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', textDecoration: 'line-through' }}>$9.99</span>
                        <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-text-main)', lineHeight: 1 }}>$4.99</span>
                        <span style={{ color: 'var(--color-text-muted)', fontWeight: 500, alignSelf: 'flex-end', paddingBottom: '0.5rem' }}>/mo</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Check size={20} color="var(--color-primary)" />
                            <span style={{ color: 'var(--color-text-main)' }}>Daily hydration tracking</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Check size={20} color="var(--color-primary)" />
                            <span style={{ color: 'var(--color-text-main)' }}>Customizable metrics</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Check size={20} color="var(--color-primary)" />
                            <span style={{ color: 'var(--color-text-main)' }}>Basic insights</span>
                        </div>
                    </div>

                    <button className="input-base" style={{
                        marginTop: 'auto',
                        background: 'transparent',
                        borderColor: 'var(--color-primary)',
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textAlign: 'center'
                    }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary-light)'; e.currentTarget.style.color = 'white'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                    >
                        Subscribe Monthly
                    </button>
                </div>

                {/* Lifetime Plan */}
                <div className="glass-panel" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    border: '2px solid var(--color-primary)',
                    position: 'relative',
                    transform: 'scale(1.05)',
                    boxShadow: 'var(--shadow-glow)',
                    zIndex: 1
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                        color: 'white',
                        padding: '0.35rem 1.25rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        whiteSpace: 'nowrap'
                    }}>
                        BEST VALUE
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>Lifetime Access</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Pay once, hydrated forever</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-text-main)', lineHeight: 1 }}>$12.99</span>
                        <span style={{ color: 'var(--color-text-muted)', fontWeight: 500, alignSelf: 'flex-end', paddingBottom: '0.5rem' }}>one-off</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Check size={20} color="var(--color-primary)" />
                            <span style={{ color: 'var(--color-text-main)' }}>Everything in Monthly</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Check size={20} color="var(--color-primary)" />
                            <span style={{ color: 'var(--color-text-main)' }}>Advanced analytics & history</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Check size={20} color="var(--color-primary)" />
                            <span style={{ color: 'var(--color-text-main)' }}>Priority support</span>
                        </div>
                    </div>

                    <button className="input-base" style={{
                        marginTop: 'auto',
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                        border: 'none',
                        color: 'white',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textAlign: 'center',
                        boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
                    }}>
                        Get Lifetime Access
                    </button>
                </div>
            </div>
        </div>
    );
}
