'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { 
  Reveal, 
  SlideWrapper, 
  Blob, 
  AnimatedCounter, 
  AnimatedBar, 
  AnimatedHorizontalBar, 
  RadarChart, 
  DonutChart, 
  ParticleCanvas, 
  MouseSpotlight,
  HeatmapCell,
  Tooltip,
  InteractiveCard
} from '@/components/SlideElements';

export default function EggWarlockDeck() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 11;

  const nextSlide = () => setCurrentSlide((prev) => (prev % totalSlides) + 1);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative w-screen h-screen bg-bg overflow-hidden">
      <MouseSpotlight />
      
      <AnimatePresence mode="wait">
        {currentSlide === 1 && (
          <SlideWrapper key="slide-1">
            <Blob className="w-[520px] h-[520px] -top-[120px] -right-[120px] bg-accent-1 opacity-[0.18] animate-float-slow" />
            <Blob className="w-[320px] h-[320px] -bottom-[80px] -left-[60px] bg-accent-2 opacity-[0.13] animate-float-drift" />
            <Blob className="w-[220px] h-[220px] top-[42%] left-[14%] bg-accent-3 opacity-[0.09] animate-float-slow" />
            <ParticleCanvas interactive={true} count={55} />
            <div className="text-center">
              <Reveal delay={0.1}>
                <div className="text-[100px] mb-4 animate-float">🥚</div>
              </Reveal>
              <Reveal delay={0.3}>
                <h1 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] bg-gradient-to-br from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent tracking-[3px] leading-none mb-4">
                  EGG WARLOCK
                </h1>
              </Reveal>
              <Reveal delay={0.5}>
                <p className="text-[clamp(0.8rem,1.4vw,1.1rem)] color-text-muted tracking-[8px] uppercase mb-2">
                  Descriptorized-Strategic Analytics
                </p>
              </Reveal>
              <Reveal delay={0.7}>
                <p className="text-[0.85rem] text-accent-1 tracking-[4px] uppercase">
                  Hearthstone Standard · April 2026
                </p>
              </Reveal>
            </div>
          </SlideWrapper>
        )}

        {currentSlide === 2 && (
          <SlideWrapper key="slide-2">
            <Blob className="w-[380px] h-[380px] -top-[80px] -right-[80px] bg-accent-1 opacity-[0.09] animate-float-slow" />
            <Blob className="w-[260px] h-[260px] -bottom-[60px] -left-[40px] bg-accent-2 opacity-[0.07] animate-float-drift" />
            <Reveal>
              <p className="text-[0.7rem] tracking-[6px] uppercase text-accent-1 mb-1.5">DECK SNAPSHOT</p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] tracking-[2px] mb-6">By the Numbers</h2>
            </Reveal>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Dust Cost', value: 8080, color: 'accent-1', suffix: '', tooltip: 'Total crafting cost for the full deck' },
                { label: 'Total Cards', value: 30, color: 'accent-2', suffix: '', tooltip: 'Standard deck size' },
                { label: 'Meta Win Rate', value: 51, color: 'accent-3', suffix: '%', tooltip: 'Global average across all ranks' },
                { label: 'Legendaries', value: 3, color: 'accent-1', suffix: ' Legs', tooltip: 'Key power cards in the deck' },
              ].map((stat, i) => (
                <Reveal key={i} delay={0.1 + i * 0.1}>
                  <Tooltip content={stat.tooltip}>
                    <div className={`bg-${stat.color}/10 border border-${stat.color}/20 rounded-[14px] p-4 text-center transition-transform hover:-translate-y-1 focus:ring-2 focus:ring-${stat.color} outline-none`}>
                      <div className={`text-[2.4rem] font-black text-${stat.color} animate-glow-pulse`}>
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-[0.65rem] tracking-[3px] uppercase text-text-muted mt-1">{stat.label}</div>
                    </div>
                  </Tooltip>
                </Reveal>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3.5">
              {[
                { title: 'ARCHETYPE', value: 'Mid-Range Combo', desc: 'Egg evolution win condition', color: 'accent-1' },
                { title: 'FORMAT', value: 'Standard', desc: 'Year of the Scarab · 2026', color: 'accent-2' },
                { title: 'PEAK PERFORMANCE', value: 'Top 2K Legend', desc: 'Reported 100% WR runs Jan 2026', color: 'accent-3' },
              ].map((item, i) => (
                <Reveal key={i} delay={0.5 + i * 0.1}>
                  <div className={`bg-${item.color}/5 border border-${item.color}/15 rounded-xl p-3.5 border-l-[3px] border-l-${item.color}`}>
                    <div className={`text-[0.65rem] tracking-[3px] uppercase text-${item.color} mb-1.5`}>{item.title}</div>
                    <div className="text-[1rem] font-bold text-text">{item.value}</div>
                    <div className="text-[0.75rem] text-text-muted mt-1">{item.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </SlideWrapper>
        )}

        {currentSlide === 3 && (
          <SlideWrapper key="slide-3">
            <Blob className="w-[340px] h-[340px] -top-[70px] -left-[70px] bg-accent-2 opacity-[0.09] animate-float-drift" />
            <Blob className="w-[240px] h-[240px] -bottom-[50px] -right-[40px] bg-accent-1 opacity-[0.07] animate-float-slow" />
            <Reveal>
              <p className="text-[0.7rem] tracking-[6px] uppercase text-accent-2 mb-1.5">RESOURCE PROFILE</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] tracking-[2px] mb-6">Mana Curve Analysis</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-7 items-center">
              <Reveal delay={0.2}>
                <div className="flex items-end gap-2.5 h-[150px] pb-7 relative">
                  {[
                    { label: '0', val: 0, h: 0, c1: '#9d5cff', c2: '#7b3de0' },
                    { label: '1', val: 6, h: 100, c1: '#9d5cff', c2: '#7b3de0' },
                    { label: '2', val: 6, h: 100, c1: '#ff4f8b', c2: '#cc2e6b' },
                    { label: '3', val: 5, h: 83, c1: '#b8b0e0', c2: '#8880b0' },
                    { label: '4', val: 3, h: 50, c1: '#b8b0e0', c2: '#8880b0' },
                    { label: '5', val: 4, h: 67, c1: '#b8b0e0', c2: '#8880b0' },
                    { label: '6', val: 2, h: 33, c1: '#6b6490', c2: '#4a4365' },
                    { label: '7+', val: 4, h: 67, c1: '#ffb84f', c2: '#cc8a20' },
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      {bar.val > 0 && <div className="text-[0.6rem] font-bold text-accent-1 mb-0.5">{bar.val}</div>}
                      <AnimatedBar value={bar.h} color1={bar.c1} color2={bar.c2} delay={i * 0.07} />
                      <div className="text-[0.6rem] text-text-muted mt-1">{bar.label}</div>
                    </div>
                  ))}
                  <div className="absolute bottom-7 left-0 right-0 h-[1px] bg-accent-1/20"></div>
                </div>
                <p className="text-[0.65rem] text-text-muted text-center mt-1">Mana cost distribution (30 cards)</p>
              </Reveal>
              <div className="flex flex-col gap-2.5">
                {[
                  { title: 'CURVE STRATEGY', color: 'accent-1', text: 'Heavy 1-2 drop package (12 cards) enables explosive early setup for The Egg of Khelos on turn 3.' },
                  { title: 'MID GAME (3-5)', color: 'accent-2', text: "12 cards anchor the Egg evolution window — Hellfire, Rafaam&apos;s Last Stand, Possessed Animancer, Sleep Paralysis." },
                  { title: 'LATE PAYOFFS (7+)', color: 'accent-3', text: 'Endbringer Umbra (7), Asphyxiodon (8), Krog Crater King (9) — finisher package closes once Khelos spawns.' },
                ].map((box, i) => (
                  <Reveal key={i} delay={0.4 + i * 0.1}>
                    <div className={`bg-${box.color}/10 border border-${box.color}/20 rounded-xl p-3 px-4`}>
                      <div className={`text-[0.65rem] tracking-[3px] uppercase text-${box.color} mb-1`}>{box.title}</div>
                      <p className="text-[0.82rem] text-text-secondary leading-relaxed">{box.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </SlideWrapper>
        )}

        {currentSlide === 4 && (
          <SlideWrapper key="slide-4">
            <Blob className="w-[350px] h-[350px] -top-[60px] -right-[60px] bg-accent-3 opacity-[0.09] animate-float-slow" />
            <Blob className="w-[220px] h-[220px] -bottom-[40px] -left-[30px] bg-accent-1 opacity-[0.07] animate-float-drift" />
            <Reveal>
              <p className="text-[0.7rem] tracking-[6px] uppercase text-accent-3 mb-1.5">DECK COMPOSITION</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] tracking-[2px] mb-6">Card Breakdown by Role</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-5.5">
              <div className="flex flex-col gap-2.5">
                {[
                  { icon: '🥚', label: 'Egg Engine', val: '5 cards', color: 'accent-1' },
                  { icon: '💀', label: 'Removal', val: '8 cards', color: 'accent-2' },
                  { icon: '⚡', label: 'Activators', val: '4 cards', color: 'accent-3' },
                  { icon: '🛡️', label: 'Threats / Finishers', val: '5 cards', color: 'accent-1' },
                  { icon: '🏰', label: 'Locations', val: '2 cards', color: 'accent-2' },
                ].map((role, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.1}>
                    <div className={`bg-${role.color}/5 border border-${role.color}/15 rounded-xl p-3 px-4 flex items-center justify-between`}>
                      <span className="text-[0.85rem] font-semibold text-text">{role.icon} {role.label}</span>
                      <span className={`text-[0.8rem] text-${role.color} font-bold`}>{role.val}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.6} className="flex flex-col items-center justify-center gap-4">
                <DonutChart />
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-[2px] bg-accent-1 shrink-0"></div><span className="text-[0.78rem] text-text-secondary">Minions — 14 (47%)</span></div>
                  <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-[2px] bg-accent-2 shrink-0"></div><span className="text-[0.78rem] text-text-secondary">Spells — 14 (47%)</span></div>
                  <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-[2px] bg-accent-3 shrink-0"></div><span className="text-[0.78rem] text-text-secondary">Locations — 2 (6%)</span></div>
                </div>
              </Reveal>
            </div>
          </SlideWrapper>
        )}

        {currentSlide === 5 && (
          <SlideWrapper key="slide-5">
            <Blob className="w-[400px] h-[400px] -top-[90px] -right-[90px] bg-accent-1 opacity-[0.1] animate-float-slow" />
            <Blob className="w-[300px] h-[300px] -bottom-[70px] -left-[50px] bg-accent-2 opacity-[0.08] animate-float-drift" />
            <ParticleCanvas interactive={false} count={18} />
            <Reveal>
              <p className="text-[0.7rem] tracking-[6px] uppercase text-accent-1 mb-1.5">STRATEGIC CORE</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] tracking-[2px] mb-6">Egg Evolution Win Condition</h2>
            </Reveal>
            <div className="grid grid-cols-4 gap-3 mb-3.5">
              {[
                { icon: '🥚', stage: 'STAGE 1 · TURN 3', title: 'The Egg of Khelos', desc: '0/3 · Costs 3 mana. Tutored by Holy Eggbearer (2-mana) for consistency', color: 'accent-1' },
                { icon: '⚡', stage: 'STAGE 2 · TURNS 3-5', title: 'Activate the Egg', desc: 'Abusive Sergeant gives +2 ATK. Conflagrate/Spirit Bomb deal direct damage to pop it', color: 'accent-2' },
                { icon: '🌀', stage: 'STAGE 3 · TURNS 4-6', title: 'Khelos Emerges', desc: '20/20 Khelos stat line. Elise the Navigator duplicates for second copy insurance', color: 'accent-3' },
                { icon: '👑', stage: 'STAGE 4 · TURNS 7-9', title: 'Close the Game', desc: 'Endbringer Umbra (7), Krog Crater King (9), Asphyxiodon (8) protect and close with Khelos', color: 'accent-1' },
              ].map((step, i) => (
                <Reveal key={i} delay={0.2 + i * 0.1} className="relative">
                  <div className={`bg-${step.color}/10 border border-${step.color}/20 rounded-xl p-3.5 text-center h-full`}>
                    <div className="text-[1.8rem] mb-1.5">{step.icon}</div>
                    <div className={`text-[0.65rem] tracking-[2px] uppercase text-${step.color} mb-1`}>{step.stage}</div>
                    <div className="text-[0.82rem] font-bold text-text">{step.title}</div>
                    <div className="text-[0.72rem] text-text-muted mt-1">{step.desc}</div>
                  </div>
                  {i < 3 && <div className={`absolute -right-2 top-1/2 -translate-y-1/2 text-[1rem] text-${step.color} z-10`}>→</div>}
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.7} className="bg-accent-1/5 border border-accent-1/15 rounded-xl p-3 px-4.5 flex items-center gap-3">
              <span className="text-[1.3rem]">🔑</span>
              <p className="text-[0.82rem] text-text-secondary leading-relaxed">
                <strong className="text-text">Key synergy:</strong> Hellfire (3 AoE) doubles as self-damage to pop an Egg already on board, progressing the chain while clearing the opponent&apos;s minions simultaneously.
              </p>
            </Reveal>
          </SlideWrapper>
        )}

        {currentSlide === 6 && (
          <SlideWrapper key="slide-6">
            <Blob className="w-[360px] h-[360px] -top-[80px] -right-[80px] bg-accent-2 opacity-[0.08] animate-float-drift" />
            <Blob className="w-[240px] h-[240px] -bottom-[55px] -left-[40px] bg-accent-3 opacity-[0.07] animate-float-slow" />
            <Reveal>
              <p className="text-[0.7rem] tracking-[6px] uppercase text-accent-2 mb-1.5">GAME PLAN</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] tracking-[2px] mb-5">Mulligan Strategy</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-5.5">
              <div className="flex flex-col gap-2.5">
                <Reveal delay={0.2} className="text-[0.7rem] tracking-[3px] uppercase text-green-500 mb-0.5">✅ ALWAYS KEEP</Reveal>
                {[
                  { icon: '🥚', title: 'Holy Eggbearer (2)', desc: 'Tutors Egg — highest priority card in any opener' },
                  { icon: '⚡', title: 'Abusive Sergeant (1)', desc: 'Cheapest ATK buff to activate egg turn 3-4' },
                  { icon: '🌀', title: 'The Egg of Khelos (3)', desc: 'Core win condition — keep unless facing aggro' },
                ].map((item, i) => (
                  <Reveal key={i} delay={0.3 + i * 0.1}>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-2.5 px-3.5 flex gap-2.5 items-start">
                      <span className="text-[1rem] shrink-0">{item.icon}</span>
                      <div>
                        <div className="text-[0.82rem] font-bold text-text">{item.title}</div>
                        <div className="text-[0.72rem] text-text-muted">{item.desc}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
                <Reveal delay={0.7} className="text-[0.7rem] tracking-[3px] uppercase text-red-500 mb-0.5 mt-1.5">❌ ALWAYS MULLIGAN</Reveal>
                <Reveal delay={0.8}>
                  <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-2.5 px-3.5">
                    <div className="text-[0.82rem] font-bold text-text">Krog, Asphyxiodon, Eldritch Tentacles</div>
                    <div className="text-[0.72rem] text-text-muted">7-9 mana cards brick opening hands; never keep</div>
                  </div>
                </Reveal>
              </div>
              <div className="flex flex-col gap-2.5">
                <Reveal delay={0.2} className="text-[0.7rem] tracking-[3px] uppercase text-accent-3 mb-0.5">⚠️ MATCHUP-CONDITIONAL</Reveal>
                {[
                  { title: 'vs. Aggro (DH, Hunter)', desc: 'Ditch the Egg. Keep Drain Soul, Hellfire, Conflagrate — prioritize survival over combo setup' },
                  { title: 'vs. Control (Priest, Warrior)', desc: 'Keep Elise the Navigator (4) for duplicate Egg insurance against removal-heavy decks' },
                  { title: 'vs. Death Knight', desc: 'Egg most reliable here (DK leeches proc it). Keep full combo. Silences are rare vs DK.' },
                ].map((item, i) => (
                  <Reveal key={i} delay={0.3 + i * 0.1}>
                    <div className="bg-accent-3/10 border border-accent-3/20 rounded-xl p-2.5 px-3.5">
                      <div className="text-[0.82rem] font-bold text-text">{item.title}</div>
                      <div className="text-[0.72rem] text-text-muted mt-1">{item.desc}</div>
                    </div>
                  </Reveal>
                ))}
                <Reveal delay={0.7}>
                  <div className="bg-accent-1/10 border border-accent-1/20 rounded-xl p-2.5 px-3.5 mt-1.5">
                    <div className="text-[0.65rem] tracking-[2px] uppercase text-accent-1 mb-1">COIN RULE</div>
                    <div className="text-[0.78rem] text-text-secondary">On coin: Holy Eggbearer T1, Egg T2 (coined), Abusive Sergeant T3 to pop = Turn 3 Khelos</div>
                  </div>
                </Reveal>
              </div>
            </div>
          </SlideWrapper>
        )}

        {currentSlide === 7 && (
          <SlideWrapper key="slide-7">
            <Blob className="w-[360px] h-[360px] -top-[70px] -left-[70px] bg-accent-1 opacity-[0.09] animate-float-slow" />
            <Blob className="w-[240px] h-[240px] -bottom-[50px] -right-[40px] bg-accent-2 opacity-[0.06] animate-float-drift" />
            <Reveal>
              <p className="text-[0.7rem] tracking-[6px] uppercase text-accent-1 mb-1.5">COMPETITIVE LANDSCAPE</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] tracking-[2px] mb-5">Matchup Breakdown</h2>
            </Reveal>
            <Reveal delay={0.2} className="group/heatmap">
              <div className="grid grid-cols-[150px_repeat(4,1fr)] gap-1">
                <div></div>
                {['Early Game', 'Mid Game', 'Late Game', 'Overall'].map((h, i) => (
                  <div key={i} className="p-1.5 text-center text-[0.62rem] tracking-[2px] uppercase text-text-muted">{h}</div>
                ))}

                <div className="p-1.5 px-2.5 text-[0.8rem] font-semibold text-text-secondary flex items-center">💀 Death Knight</div>
                <HeatmapCell title="Strong" desc="Egg fires reliably via DK leeches. Strong T1-T4 presence." gradient="radial-gradient(circle at 35% 35%,rgba(34,197,94,0.65),rgba(34,197,94,0.25))" shadow="inset 0 0 12px rgba(34,197,94,0.2),0 0 8px rgba(34,197,94,0.15)" />
                <HeatmapCell title="Good" desc="Khelos difficult for DK to answer cleanly" gradient="radial-gradient(circle at 35% 35%,rgba(34,197,94,0.5),rgba(34,197,94,0.15))" shadow="inset 0 0 10px rgba(34,197,94,0.15)" />
                <HeatmapCell title="Good" desc="Krog + Khelos too much to handle late" gradient="radial-gradient(circle at 35% 35%,rgba(132,204,22,0.55),rgba(132,204,22,0.2))" shadow="inset 0 0 10px rgba(132,204,22,0.15)" />
                <HeatmapCell title="FAVORED" desc="~55-58% win rate vs DK" gradient="radial-gradient(circle at 35% 35%,rgba(34,197,94,0.7),rgba(34,197,94,0.3))" shadow="inset 0 0 14px rgba(34,197,94,0.25),0 0 10px rgba(34,197,94,0.2)" />

                <div className="p-1.5 px-2.5 text-[0.8rem] font-semibold text-text-secondary flex items-center">⚔️ Warrior</div>
                <HeatmapCell title="Fair" desc="Slow Warrior can&apos;t pressure early Egg setup" gradient="radial-gradient(circle at 35% 35%,rgba(250,204,21,0.5),rgba(250,204,21,0.15))" shadow="inset 0 0 10px rgba(250,204,21,0.15)" />
                <HeatmapCell title="Fair" desc="Watch for Execute/Slam clearing Khelos" gradient="radial-gradient(circle at 35% 35%,rgba(250,204,21,0.45),rgba(250,204,21,0.12))" />
                <HeatmapCell title="Good" desc="Khelos + Umbra outscales armor stacks" gradient="radial-gradient(circle at 35% 35%,rgba(34,197,94,0.45),rgba(34,197,94,0.15))" />
                <HeatmapCell title="SLIGHT+" desc="~52-53% win rate" gradient="radial-gradient(circle at 35% 35%,rgba(132,204,22,0.5),rgba(132,204,22,0.18))" />

                <div className="p-1.5 px-2.5 text-[0.8rem] font-semibold text-text-secondary flex items-center">🔮 Mage</div>
                <HeatmapCell title="Tough" desc="Mage freeze spells prevent Egg activation" gradient="radial-gradient(circle at 35% 35%,rgba(249,115,22,0.45),rgba(249,115,22,0.15))" />
                <HeatmapCell title="Fair" desc="If Egg survives freeze window, advantage shifts" gradient="radial-gradient(circle at 35% 35%,rgba(250,204,21,0.4),rgba(250,204,21,0.12))" />
                <HeatmapCell title="Good" desc="Khelos overwhelms Mage&apos;s reactive plays" gradient="radial-gradient(circle at 35% 35%,rgba(34,197,94,0.4),rgba(34,197,94,0.12))" />
                <HeatmapCell title="EVEN" desc="~48-51% win rate" gradient="radial-gradient(circle at 35% 35%,rgba(250,204,21,0.5),rgba(250,204,21,0.18))" />

                <div className="p-1.5 px-2.5 text-[0.8rem] font-semibold text-text-secondary flex items-center">😈 Demon Hunter</div>
                <HeatmapCell title="Rough" desc="Aggro DH deals face damage before Egg setup" gradient="radial-gradient(circle at 35% 35%,rgba(239,68,68,0.55),rgba(239,68,68,0.2))" shadow="inset 0 0 12px rgba(239,68,68,0.2)" />
                <HeatmapCell title="Tough" desc="Need Hellfire or Conflagrate to stabilize" gradient="radial-gradient(circle at 35% 35%,rgba(249,115,22,0.45),rgba(249,115,22,0.15))" />
                <HeatmapCell title="Fair" desc="Eldritch Tentacles can reset board if alive" gradient="radial-gradient(circle at 35% 35%,rgba(250,204,21,0.4),rgba(250,204,21,0.12))" />
                <HeatmapCell title="UNFAVRD" desc="~40-45% win rate vs Aggro DH" gradient="radial-gradient(circle at 35% 35%,rgba(239,68,68,0.55),rgba(239,68,68,0.2))" shadow="inset 0 0 12px rgba(239,68,68,0.15)" />
              </div>
            </Reveal>
            <Reveal delay={0.6} className="mt-2.5 flex gap-4 flex-wrap">
              {[
                { label: 'Favorable', color: 'rgba(34,197,94,0.7)' },
                { label: 'Even', color: 'rgba(250,204,21,0.5)' },
                { label: 'Unfavorable', color: 'rgba(249,115,22,0.5)' },
                { label: 'Challenging', color: 'rgba(239,68,68,0.55)' },
              ].map((l, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-[2px]" style={{ background: l.color }}></div>
                  <span className="text-[0.7rem] text-text-muted">{l.label}</span>
                </div>
              ))}
            </Reveal>
          </SlideWrapper>
        )}

        {currentSlide === 8 && (
          <SlideWrapper key="slide-8">
            <Blob className="w-[380px] h-[380px] -top-[80px] -right-[80px] bg-accent-3 opacity-[0.1] animate-float-slow" />
            <Blob className="w-[260px] h-[260px] -bottom-[60px] -left-[40px] bg-accent-1 opacity-[0.08] animate-float-drift" />
            <Reveal>
              <p className="text-[0.7rem] tracking-[6px] uppercase text-accent-3 mb-1.5">DECK PROFILE</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] tracking-[2px] mb-5">Strengths & Weaknesses</h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-5.5 items-center">
              <Reveal delay={0.2} className="flex justify-center">
                <RadarChart />
              </Reveal>
              <div className="flex flex-col gap-2.5">
                <Reveal delay={0.4} className="text-[0.65rem] tracking-[3px] uppercase text-green-500 mb-0.5">✅ STRENGTHS</Reveal>
                <Reveal delay={0.5}>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-2.5 px-3.5">
                    <div className="text-[0.82rem] font-bold text-text">Combo Power: 90/100</div>
                    <div className="text-[0.72rem] text-text-muted mt-0.5">20/20 Khelos from a 3-mana investment is among the game&apos;s most efficient stats-per-mana</div>
                  </div>
                </Reveal>
                <Reveal delay={0.6}>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-2.5 px-3.5">
                    <div className="text-[0.82rem] font-bold text-text">Removal Suite: 78/100</div>
                    <div className="text-[0.72rem] text-text-muted mt-0.5">Hellfire, Sleep Paralysis, Conflagrate cover AoE, single target, and burn requirements</div>
                  </div>
                </Reveal>
                <Reveal delay={0.8} className="text-[0.65rem] tracking-[3px] uppercase text-red-500 mb-0.5 mt-1">❌ WEAKNESSES</Reveal>
                <Reveal delay={0.9}>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-2.5 px-3.5">
                    <div className="text-[0.82rem] font-bold text-text">Aggro Defense: 38/100</div>
                    <div className="text-[0.72rem] text-text-muted mt-0.5">Frail 1-2 drops can&apos;t contest burst damage from aggressive decks before Egg fires</div>
                  </div>
                </Reveal>
                <Reveal delay={1.0}>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-2.5 px-3.5">
                    <div className="text-[0.82rem] font-bold text-text">Silence Vulnerability</div>
                    <div className="text-[0.72rem] text-text-muted mt-0.5">Single copy of Egg of Khelos is silenced without Elise Navigator backup — key failure point</div>
                  </div>
                </Reveal>
              </div>
            </div>
          </SlideWrapper>
        )}

        {currentSlide === 9 && (
          <SlideWrapper key="slide-9">
            <Blob className="w-[340px] h-[340px] -top-[65px] -right-[65px] bg-accent-1 opacity-[0.09] animate-float-slow" />
            <Blob className="w-[220px] h-[220px] -bottom-[45px] -left-[35px] bg-accent-3 opacity-[0.07] animate-float-drift" />
            <Reveal>
              <p className="text-[0.7rem] tracking-[6px] uppercase text-accent-1 mb-1.5">CARD ANALYSIS</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] tracking-[2px] mb-5">Key Cards Explained</h2>
            </Reveal>
            <div className="grid grid-cols-3 gap-3.5">
              {[
                { icon: '🥚', type: '★ LEGENDARY · 3 MANA', title: 'The Egg of Khelos', desc: '0/3 Dormant. Gains a stage each time it receives buffs or damage.', details: 'Hatches into Khelos the Shadowborn (20/20) at Stage 4. Can survive Hellfire via its 3 health. This is the primary win condition of the deck.', color: 'accent-1' },
                { icon: '🪺', type: 'RARE · 2 MANA', title: 'Holy Eggbearer', desc: '2/2 Battlecry: Discover a copy of The Egg of Khelos and add it to your hand.', details: 'The single most important tutor — guarantees Egg on T3 from T2 Eggbearer. Essential for consistency in all matchups.', color: 'accent-2' },
                { icon: '🗺️', type: '★ LEGENDARY · 4 MANA', title: 'Elise the Navigator', desc: '3/3 Battlecry: Shuffle a copy of your Egg of Khelos into your deck.', details: 'Shuffles a copy for each stage it has NOT completed. Anti-silence insurance and a second win condition for long games.', color: 'accent-3' },
                { icon: '👺', type: '★ LEGENDARY · 7 MANA', title: 'Endbringer Umbra', desc: 'Battlecry: advance all your deathrattle minions by 1 stage.', details: 'Critical 7-mana play that can immediately trigger Khelos if the Egg is at Stage 3. Can also trigger other deathrattles in the deck.', color: 'accent-1' },
                { icon: '🦈', type: '★ LEGENDARY · 9 MANA', title: 'Krog, Crater King', desc: 'Massive finisher. If played alongside or after Khelos (20/20).', details: 'Most opponents cannot deal with two overwhelming threats in a single turn. Provides a secondary massive body to close games.', color: 'accent-2' },
                { icon: '🔥', type: 'COMMON · 3 MANA', title: 'Hellfire', desc: 'Deal 3 damage to all characters — including your own Egg.', details: 'Masterful dual-purpose: AoE board clear AND egg activation. Core to the combo chain and survival against aggro.', color: 'accent-3' },
              ].map((card, i) => (
                <Reveal key={i} delay={0.2 + i * 0.1}>
                  <InteractiveCard {...card} />
                </Reveal>
              ))}
            </div>
          </SlideWrapper>
        )}

        {currentSlide === 10 && (
          <SlideWrapper key="slide-10">
            <Blob className="w-[390px] h-[390px] -top-[90px] -right-[90px] bg-accent-1 opacity-[0.1] animate-float-slow" />
            <Blob className="w-[270px] h-[270px] -bottom-[65px] -left-[45px] bg-accent-2 opacity-[0.08] animate-float-drift" />
            <Reveal>
              <p className="text-[0.7rem] tracking-[6px] uppercase text-accent-1 mb-1.5">PERFORMANCE ANALYTICS</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] tracking-[2px] mb-5">Meta Performance & Win Rates</h2>
            </Reveal>
            <div className="grid grid-cols-[1.3fr_1fr] gap-5.5">
              <Reveal delay={0.2}>
                <div className="text-[0.65rem] tracking-[3px] uppercase text-text-muted mb-2.5">Win Rate by Variant (March 2026 · MetaStats Data)</div>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: 'Abusive Sergeant v.', val: 51.49, color: 'linear-gradient(90deg,#9d5cff,#c084fc)' },
                    { label: 'Eternal Toil v.', val: 51.27, color: 'linear-gradient(90deg,#ff4f8b,#f472b6)' },
                    { label: "Herald Egg v. (Mar&apos;26)", val: 48.5, color: 'linear-gradient(90deg,#ffb84f,#fde68a)' },
                    { label: 'Deathwing Shell v.', val: 43.27, color: 'linear-gradient(90deg,#6b6490,#9b97b8)' },
                    { label: 'Ultragigasaur v.', val: 41.75, color: 'linear-gradient(90deg,#4a4365,#6b6490)' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3.5 w-full">
                      <span className="w-[170px] text-[0.8rem] text-text-secondary text-right shrink-0">{row.label}</span>
                      <div className="flex-1 h-[22px] bg-accent-1/10 rounded-[11px] overflow-hidden border border-accent-1/15">
                        <AnimatedHorizontalBar value={row.val} color1={row.color.split(',')[1]} color2={row.color.split(',')[2].replace(')', '')} delay={i * 0.1} />
                      </div>
                      <span className="w-[56px] text-[0.8rem] font-bold text-accent-1 shrink-0">{row.val}%</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2.5 text-[0.7rem] text-text-muted">192–291 games per variant · Standard · March 2026</div>
              </Reveal>
              <div className="flex flex-col gap-2.5">
                <Reveal delay={0.4} className="bg-accent-1/10 border border-accent-1/20 rounded-[13px] p-3.5 text-center">
                  <div className="text-[0.62rem] tracking-[3px] uppercase text-accent-1 mb-1.5">PEAK WIN RATE</div>
                  <div className="text-[2.8rem] font-black text-accent-1 leading-none animate-glow-pulse">~87%</div>
                  <div className="text-[0.72rem] text-text-muted mt-1">Reported short-run streak Nov 2025 · small sample</div>
                </Reveal>
                <Reveal delay={0.6} className="bg-accent-2/10 border border-accent-2/20 rounded-[13px] p-3.5 text-center">
                  <div className="text-[0.62rem] tracking-[3px] uppercase text-accent-2 mb-1.5">BEST LEGEND FINISH</div>
                  <div className="text-[2.4rem] font-black text-accent-2 leading-none">Top 2K</div>
                  <div className="text-[0.72rem] text-text-muted mt-1">Jan 2026 · flawless 100% WR run reported</div>
                </Reveal>
                <Reveal delay={0.8} className="bg-accent-3/10 border border-accent-3/20 rounded-[13px] p-3.5 text-center">
                  <div className="text-[0.62rem] tracking-[3px] uppercase text-accent-3 mb-1.5">OPTIMAL VARIANT</div>
                  <div className="text-[1.1rem] font-extrabold text-accent-3 leading-tight">Abusive Sergeant</div>
                  <div className="text-[0.72rem] text-text-muted mt-1">Fastest Egg activation · highest consistent WR</div>
                </Reveal>
              </div>
            </div>
          </SlideWrapper>
        )}

        {currentSlide === 11 && (
          <SlideWrapper key="slide-11">
            <Blob className="w-[550px] h-[550px] -top-[130px] -right-[130px] bg-accent-1 opacity-[0.16] animate-float-slow" />
            <Blob className="w-[350px] h-[350px] -bottom-[90px] -left-[70px] bg-accent-2 opacity-[0.12] animate-float-drift" />
            <Blob className="w-[230px] h-[230px] top-[38%] left-[12%] bg-accent-3 opacity-[0.09] animate-float-slow" />
            <ParticleCanvas interactive={true} count={55} />
            <div className="text-center">
              <Reveal delay={0.1}>
                <div className="text-[80px] mb-3 animate-float">🥚</div>
              </Reveal>
              <Reveal delay={0.3}>
                <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-[3px] bg-gradient-to-br from-accent-1 via-accent-2 to-accent-3 bg-clip-text text-transparent leading-none mb-3">
                  VERDICT
                </h1>
              </Reveal>
              <Reveal delay={0.5}>
                <p className="text-[clamp(0.85rem,1.5vw,1.1rem)] text-text-secondary max-w-[640px] mx-auto mb-5.5 leading-relaxed">
                  Egg Warlock is a legitimate legend-viable archetype offering a unique combo identity. The Abusive Sergeant variant (~51.5% WR) is the recommended build — efficient, resilient, and capable of explosive Turn 3 Khelos plays that few decks answer cleanly.
                </p>
              </Reveal>
              <div className="grid grid-cols-3 gap-3.5 max-w-[700px] mx-auto">
                {[
                  { title: 'PLAY IF', color: 'accent-1', text: 'You enjoy proactive combo setups and rewarding tight technical play with the Egg chain' },
                  { title: 'AVOID IF', color: 'accent-2', text: 'The meta is flooded with aggro or silence-heavy control — Egg vulnerability hurts' },
                  { title: 'DUST BUDGET', color: 'accent-3', text: '8,080 dust · 3 Legendaries · Accessible for a combo deck of this power level' },
                ].map((box, i) => (
                  <Reveal key={i} delay={0.7 + i * 0.1}>
                    <div className={`bg-${box.color}/10 border border-${box.color}/20 rounded-xl p-3.5 h-full`}>
                      <div className={`text-[0.62rem] tracking-[3px] uppercase text-${box.color} mb-1.5`}>{box.title}</div>
                      <div className="text-[0.8rem] text-text-secondary leading-relaxed">{box.text}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </SlideWrapper>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3.5 z-[100] bg-accent-1/10 backdrop-blur-xl px-5.5 py-2 rounded-[40px] border border-accent-1/20">
        <button 
          aria-label="Previous Slide"
          className="w-9 h-9 border-none bg-accent-1/10 text-accent-1 rounded-full text-[1.1rem] cursor-pointer flex items-center justify-center transition-colors hover:bg-accent-1/25 focus:outline-none focus:ring-2 focus:ring-accent-1"
          onClick={prevSlide}
        >
          ‹
        </button>
        <div className="flex gap-1.5" role="tablist" aria-label="Slide Selection">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button 
              key={i} 
              role="tab"
              aria-selected={i + 1 === currentSlide}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 border-none p-0 focus:outline-none focus:ring-2 focus:ring-accent-1 ${i + 1 === currentSlide ? 'bg-accent-1 scale-140' : 'bg-accent-1/20'}`}
              onClick={() => setCurrentSlide(i + 1)}
            />
          ))}
        </div>
        <button 
          aria-label="Next Slide"
          className="w-9 h-9 border-none bg-accent-1/10 text-accent-1 rounded-full text-[1.1rem] cursor-pointer flex items-center justify-center transition-colors hover:bg-accent-1/25 focus:outline-none focus:ring-2 focus:ring-accent-1"
          onClick={nextSlide}
        >
          ›
        </button>
        <span className="text-[0.75rem] text-text-muted min-w-[36px] text-center" aria-live="polite">
          Slide {currentSlide} of {totalSlides}
        </span>
      </div>
    </main>
  );
}
