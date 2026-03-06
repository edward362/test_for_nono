import { formatLiters, formatCups } from '../utils/hydration';
import { Info, Droplets } from 'lucide-react';

interface Props {
    goalMl: number;
}

export function HydrationResult({ goalMl }: Props) {
    if (goalMl === 0) {
        return (
            <div className="glass-panel result-container" style={{ minHeight: '300px', justifyContent: 'center' }}>
                <Droplets size={48} color="var(--color-text-muted)" style={{ opacity: 0.5, marginBottom: '1rem' }} />
                <p style={{ color: 'var(--color-text-muted)', textAlign: 'center' }}>
                    Enter your metrics above to calculate your personalized daily hydration goal.
                </p>
            </div>
        );
    }

    const liters = formatLiters(goalMl);
    const cups = formatCups(goalMl);

    return (
        <div className="glass-panel result-container">
            <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Your Daily Goal</h2>
            <p className="subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>Based on your unique profile</p>

            <div className="water-blob">
                <div className="blob-content">
                    <div className="blob-value">{liters.split(' ')[0]}</div>
                    <div className="blob-unit">Liters</div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary-light)' }}>
                    approx. {cups} cups
                </span>
                <span style={{ color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>
                    or {(goalMl).toLocaleString()} ml
                </span>
            </div>

            <div className="tip-box">
                <Info className="icon" size={20} />
                <div className="tip-text">
                    <strong>Pro tip:</strong> Start your day with a large glass of water, and carry a reusable bottle to sip throughout the day. Your needs may increase if you sweat heavily.
                </div>
            </div>
        </div>
    );
}
