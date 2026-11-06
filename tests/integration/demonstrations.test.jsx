import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroDemonstration from '@/components/hero/HeroDemonstration';
import AgentWorkflow from '@/components/demonstrations/AgentWorkflow';

describe('Interactive Product Demonstrations', () => {
  it('switches tabs in HeroDemonstration cleanly between modes', () => {
    render(<HeroDemonstration />);

    // Default mode is Autonomous Task
    expect(screen.getByText(/Autonomous Task/i)).toBeInTheDocument();
    expect(screen.getByText(/apply_patch/i)).toBeInTheDocument();

    // Click Vibe Coding Loop tab
    const vibeBtn = screen.getByRole('button', { name: /vibe coding loop/i });
    fireEvent.click(vibeBtn);
    expect(screen.getByText(/Continuous Vibe Watcher Active/i)).toBeInTheDocument();

    // Click Speculative Arena tab
    const specBtn = screen.getByRole('button', { name: /speculative arena/i });
    fireEvent.click(specBtn);
    expect(screen.getByText(/Branch A: SIMD-JSON/i)).toBeInTheDocument();
    expect(screen.getByText(/Branch B: FlatBuffers/i)).toBeInTheDocument();

    // Click Captured TUI tab
    const tuiBtn = screen.getByRole('button', { name: /captured tui/i });
    fireEvent.click(tuiBtn);
    expect(screen.getByAltText(/M31A Ratatui Terminal User Interface Preview/i)).toBeInTheDocument();
  });

  it('navigates through steps in AgentWorkflow and updates technical details', () => {
    render(<AgentWorkflow />);

    // Default step is User Intent
    expect(screen.getByText(/Phase 01/i)).toBeInTheDocument();
    expect(screen.getByText(/m31a-cli \/ m31a-tui/i)).toBeInTheDocument();

    // Click Planning step
    const planningBtn = screen.getByRole('button', { name: /03 Planning/i });
    fireEvent.click(planningBtn);

    expect(screen.getByText(/Phase 03/i)).toBeInTheDocument();
    expect(screen.getByText(/m31a-agent-engine/i)).toBeInTheDocument();
  });
});
