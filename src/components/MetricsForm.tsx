import type { ChangeEvent } from 'react';
import type { Metrics, ActivityLevel, Climate } from '../utils/hydration';
import { Sun, Cloud, ThermometerSun, Flame, Activity, Coffee, Mountain, Bike } from 'lucide-react';

interface Props {
    metrics: Metrics;
    onChange: (metrics: Metrics) => void;
}

export function MetricsForm({ metrics, onChange }: Props) {
    const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        onChange({ ...metrics, weight: isNaN(val) ? 0 : val });
    };

    const handleActivity = (level: ActivityLevel) => {
        onChange({ ...metrics, activity: level });
    };

    const handleClimate = (climate: Climate) => {
        onChange({ ...metrics, climate });
    };

    return (
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Weight Input */}
            <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="weight-input">Body Weight (kg)</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input
                        id="weight-input"
                        type="number"
                        min="10"
                        max="300"
                        value={metrics.weight || ''}
                        onChange={handleWeightChange}
                        className="input-base"
                        placeholder="e.g. 70"
                        style={{ fontSize: '1.25rem', paddingRight: '3rem' }}
                    />
                    <span style={{ position: 'absolute', right: '1rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>kg</span>
                </div>
            </div>

            {/* Activity Level */}
            <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Daily Activity Level</label>
                <div className="selection-grid">
                    <button
                        type="button"
                        className={`selection-card ${metrics.activity === 'sedentary' ? 'active' : ''}`}
                        onClick={() => handleActivity('sedentary')}
                    >
                        <Coffee className="icon" size={24} />
                        <span className="selection-title">Sedentary</span>
                    </button>
                    <button
                        type="button"
                        className={`selection-card ${metrics.activity === 'light' ? 'active' : ''}`}
                        onClick={() => handleActivity('light')}
                    >
                        <Activity className="icon" size={24} />
                        <span className="selection-title">Light</span>
                    </button>
                    <button
                        type="button"
                        className={`selection-card ${metrics.activity === 'moderate' ? 'active' : ''}`}
                        onClick={() => handleActivity('moderate')}
                    >
                        <Bike className="icon" size={24} />
                        <span className="selection-title">Moderate</span>
                    </button>
                    <button
                        type="button"
                        className={`selection-card ${metrics.activity === 'active' ? 'active' : ''}`}
                        onClick={() => handleActivity('active')}
                    >
                        <Mountain className="icon" size={24} />
                        <span className="selection-title">Active</span>
                    </button>
                </div>
            </div>

            {/* Climate */}
            <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Local Climate</label>
                <div className="selection-grid">
                    <button
                        type="button"
                        className={`selection-card ${metrics.climate === 'temperate' ? 'active' : ''}`}
                        onClick={() => handleClimate('temperate')}
                    >
                        <Cloud className="icon" size={24} />
                        <span className="selection-title">Temperate</span>
                    </button>
                    <button
                        type="button"
                        className={`selection-card ${metrics.climate === 'hot' ? 'active' : ''}`}
                        onClick={() => handleClimate('hot')}
                    >
                        <Sun className="icon" size={24} />
                        <span className="selection-title">Hot</span>
                    </button>
                    <button
                        type="button"
                        className={`selection-card ${metrics.climate === 'dry' ? 'active' : ''}`}
                        onClick={() => handleClimate('dry')}
                    >
                        <ThermometerSun className="icon" size={24} />
                        <span className="selection-title">Dry</span>
                    </button>
                    <button
                        type="button"
                        className={`selection-card ${metrics.climate === 'very_hot' ? 'active' : ''}`}
                        onClick={() => handleClimate('very_hot')}
                    >
                        <Flame className="icon" size={24} />
                        <span className="selection-title">Very Hot</span>
                    </button>
                </div>
            </div>

        </div>
    );
}
