import React, { useState, useEffect } from 'react';

const PlotMindCaseStudy = () => {
  const [loaded, setLoaded] = useState(false);
  const [activePersona, setActivePersona] = useState(0);
  const [activeIteration, setActiveIteration] = useState(2);
  const [expandedFinding, setExpandedFinding] = useState(null);
  const [activeComponent, setActiveComponent] = useState(0);
  const [activeState, setActiveState] = useState(0);
  const [activeMicroIteration, setActiveMicroIteration] = useState(4);
  const [activeMotion, setActiveMotion] = useState(0);
  
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    setTimeout(() => setLoaded(true), 100);
    return () => document.head.removeChild(link);
  }, []);

  const defined = {
    myContributions: [
      { area: 'Research', tasks: ['Planned and conducted 12 user interviews', 'Designed exit survey instrument (203 responses)', 'Led synthesis sessions with PM', 'Developed personas and journey maps'] },
      { area: 'Strategy', tasks: ['Defined design principles with team input', 'Restructured information architecture', 'Prioritized features with PM using RICE framework', 'Established success metrics with data team'] },
      { area: 'Design', tasks: ['All wireframes and prototypes in Figma', 'Visual design system and tokens', 'Interaction design and motion specifications', 'Accessibility audit and remediation'] },
      { area: 'Execution', tasks: ['Authored 47-page engineering specification', 'Led weekly design reviews', 'QA verification against specifications', 'Post-launch iteration based on analytics'] }
    ],
    designPhilosophy: [
      { belief: 'Data visualization is a conversation, not a presentation', detail: 'Effective tools enable users to interrogate their data and receive immediate feedback. Every interaction should feel like a dialogue—action, response, refinement. This principle made live preview non-negotiable: delaying results until configuration completion breaks the conversational flow.' },
      { belief: 'Defaults are a design decision, not an afterthought', detail: 'The majority of users never modify default settings. The default experience is the primary experience. More time was invested in the default color palette than the color picker—because that is where the impact concentrates.' },
      { belief: 'Power and simplicity are not mutually exclusive', detail: 'The ease-versus-power tradeoff represents a design failure. Superior tools layer complexity: accessible surface, available depth. Both novice and expert users should feel the tool was designed for their needs.' },
      { belief: 'Direct manipulation reduces cognitive load', detail: 'When users can see and manipulate the object of their work directly, comprehension follows naturally. Dragging a column to an axis and observing the chart update requires no translation layer or mental model reconciliation.' }
    ],
    personas: [
      { name: 'Sarah', role: 'Data Analyst', archetype: 'The Pragmatist', quote: "The majority of my time goes to formatting, not analysis.", goals: ['Create presentation-ready charts quickly', 'Explore data without writing code', 'Maintain consistent team styling'], frustrations: ['Formatting takes 3x longer than analysis', 'Difficult to iterate on exec requests', 'Exports lack polish'] },
      { name: 'Marcus', role: 'Product Manager', archetype: 'The Self-Server', quote: "I have to relearn the interface every time I use it.", goals: ['Pull metrics without waiting on data team', 'Track feature adoption in real-time', 'Share live dashboards'], frustrations: ['Blocked 2-3 days for simple requests', 'Low retention of interface patterns', 'Output doesn\'t match brand'] },
      { name: 'Priya', role: 'Data Scientist', archetype: 'The Power User', quote: "There's a gap between spreadsheet tools and code-based solutions.", goals: ['Prototype before writing production code', 'Export reproducible code', 'Statistical visualizations'], frustrations: ['Insufficient for complex analysis', 'No code export', 'Limited customization'] }
    ],
    researchFindings: [
      { finding: 'Users couldn\'t find the primary action', severity: 'Critical', evidence: ['7/12 took >2 min to find "create chart"', 'CTA buried in dropdown with 6 options', 'Heatmaps showed scanning, then giving up'], outcome: 'Time to first click: 47s → 8s' },
      { finding: 'Column mapping was the primary drop-off', severity: 'Critical', evidence: ['73% of sessions showed mapping errors', 'Users typed names manually (no autocomplete)', 'No preview until mapping complete'], outcome: 'Success rate: 34% → 94%' },
      { finding: 'Users wanted guidance without hand-holding', severity: 'High', evidence: ['Power users dismissed tutorial immediately', 'Tutorial completion didn\'t predict success', 'Users liked inline hints, not upfront training'], outcome: 'First-session success: 34% → 71%' },
      { finding: 'Formatting consumed more time than analysis', severity: 'High', evidence: ['Only 25% of time was data config', '6/12 exported to Figma for "polish"', 'Default palette failed brand guidelines'], outcome: 'Styling time: 6.4 min → 1.8 min' },
      { finding: 'Users didn\'t trust auto-save', severity: 'Medium', evidence: ['4/12 manually exported "just in case"', '2 users lost work to browser refresh', 'Auto-save indicator was small gray dot'], outcome: 'Backup exports: 8.3 → 1.2/session' }
    ],
    iterations: [
      { version: 'V1', title: 'Wizard flow', hypothesis: 'Step-by-step flow reduces cognitive load', results: { time: '4:32', success: '67%', sat: '2.8/5' }, learning: 'Absence of preview meant each selection felt uncertain. Users reported feeling constrained.', status: 'rejected' },
      { version: 'V2', title: 'Command palette', hypothesis: 'Keyboard-first interface accelerates power users', results: { time: '2:15/6:40', success: '45%', sat: '4.1/2.1' }, learning: 'Bimodal distribution: expert users excelled, novice users struggled. Only 12% discovered the Cmd+K shortcut.', status: 'partial' },
      { version: 'V3', title: 'Direct manipulation', hypothesis: 'Drag-drop with live preview eliminates guesswork', results: { time: '1:18', success: '94%', sat: '4.6/5' }, learning: 'Immediate comprehension across user types. Live feedback eliminated experimentation hesitancy.', status: 'shipped' }
    ],
    microIterations: [
      { label: 'v3.1', title: 'Basic drop zones', desc: 'Simple dashed borders without type validation', problem: 'Users dropped incompatible column types, resulting in error states' },
      { label: 'v3.2', title: 'Type indicators on columns', desc: 'Added type badges: # for numeric, A for text, D for date', problem: 'Users understood types but still attempted invalid drops' },
      { label: 'v3.3', title: 'Zone validation feedback', desc: 'Zones display green (valid) or red (invalid) on hover', problem: 'Red state felt punitive. Users became hesitant to experiment.' },
      { label: 'v3.4', title: 'Softer invalid state', desc: 'Invalid state shows grayed zone with explanatory tooltip', problem: 'Improved experience, but tooltips were frequently missed' },
      { label: 'v3.5', title: 'Final: type-matched affordances', desc: 'Zones only highlight for compatible column types. Incompatible zones remain neutral.', problem: 'Shipped. 94% task success rate achieved.' }
    ],
    motionSpecs: [
      { name: 'Column drag start', duration: '150ms', easing: 'ease-out', desc: 'Scale to 1.05, add shadow (0 8px 24px rgba(0,0,0,0.15)), reduce original opacity to 0.4' },
      { name: 'Drop zone activation', duration: '200ms', easing: 'ease-in-out', desc: 'Border transitions from dashed gray to solid accent, background fades to accent/8%' },
      { name: 'Successful drop', duration: '300ms', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', desc: 'Column snaps to zone with slight overshoot (spring), original fades out' },
      { name: 'Chart update', duration: '400ms', easing: 'ease-out', desc: 'Bars grow from baseline. Staggered by 30ms per bar. Fade in legends simultaneously.' },
      { name: 'Invalid drop return', duration: '250ms', easing: 'ease-in-out', desc: 'Column returns to origin with subtle horizontal shake (±4px, 3 cycles)' }
    ],
    states: [
      { name: 'Empty state', desc: 'New user, no data connected' },
      { name: 'Loading', desc: 'Data processing or chart rendering' },
      { name: 'Error: data', desc: 'Malformed CSV, type mismatches' },
      { name: 'Error: render', desc: 'Too many points, browser limit' },
      { name: 'Partial mapping', desc: 'X-axis set, Y-axis empty' },
      { name: 'Column overflow', desc: '50+ columns in dataset' },
      { name: 'Long names', desc: '40+ character column names' }
    ],
    accessibility: [
      { area: 'Keyboard navigation', solution: 'Complete drag-drop alternative via keyboard: Tab to column, Enter to select, Arrow keys to navigate zones, Enter to place. Focus ring visible at all times (3px accent, 2px offset).', testing: 'Validated with 2 keyboard-only users. Task completion time 2.5x mouse but 100% completion rate.' },
      { area: 'Screen readers', solution: 'Live regions announce chart changes. Columns have role="option" with type and name. Drop zones have aria-dropeffect. Data table view available as chart alternative.', testing: 'Validated with NVDA user. Successfully created chart with initial coaching. Added landmark regions based on feedback.' },
      { area: 'Color independence', solution: 'All color encodings paired with pattern fills (stripes, dots, crosshatch). Toggle available in toolbar. Palette validated with Coblis simulator for protanopia, deuteranopia, tritanopia.', testing: 'Validated with colorblind user (deuteranopia). Pattern mode enabled complete comprehension.' },
      { area: 'Motion sensitivity', solution: 'prefers-reduced-motion media query support: chart updates render instantly instead of animated, drag operations show ghost outline instead of physics-based movement.', testing: 'Not formally validated. Implemented per WCAG 2.1 guidelines.' }
    ],
    tradeoffs: [
      { decision: 'No mobile support', wantedTo: 'Design responsive experience from project start', reality: 'Timeline constraints precluded mobile design. Drag-drop paradigm requires fundamental rethinking for touch interfaces. Created desktop-only technical debt.', wouldChange: 'At minimum, design touch-friendly architecture even without immediate implementation.' },
      { decision: 'Limited chart types at launch', wantedTo: 'Ship 12 chart types for competitive parity', reality: 'Scoped to 5 types (bar, line, scatter, area, pie) to meet deadline. Power users expressed dissatisfaction.', wouldChange: 'Same decision. The 5 types address 90% of use cases. Histogram shipped in week 8.' },
      { decision: 'AI suggestions underperformed', wantedTo: 'Implement ML-powered recommendations', reality: 'Data science support came late in project. Shipped rules-based system instead. Some suggestions lacked value.', wouldChange: 'Involve data scientist from week 1, or defer AI features entirely to subsequent release.' },
      { decision: 'Visual design not A/B tested', wantedTo: 'Validate aesthetic direction quantitatively', reality: 'Assumed visual improvements without validation. A/B testing focused exclusively on interaction model.', wouldChange: 'Run preference tests at minimum. Visual design decisions warrant evidence.' }
    ],
    outcomes: [
      { metric: '7-day activation', before: '23%', after: '52%', change: '+126%' },
      { metric: 'Time to first chart', before: '8.5 min', after: '2.3 min', change: '-73%' },
      { metric: 'First-session success', before: '34%', after: '71%', change: '+109%' },
      { metric: 'Support tickets', before: '340/mo', after: '89/mo', change: '-74%' }
    ]
  };

  const colors = {
    accent: '#2563EB',
    accentLight: '#3B82F6',
    accentDark: '#1D4ED8',
    green: '#059669',
    orange: '#D97706',
    red: '#DC2626',
    purple: '#7C3AED',
    white: '#FFFFFF',
    gray: { 50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DB', 400: '#9CA3AF', 500: '#6B7280', 600: '#4B5563', 700: '#374151', 800: '#1F2937', 900: '#111827' }
  };

  // Reusable Components
  const BrowserFrame = ({ children, url = 'app.plotmind.io', title, dark }) => (
    <div style={{ marginBottom: title ? '0' : '24px' }}>
      <div style={{ background: dark ? colors.gray[900] : colors.gray[800], borderRadius: '12px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
        <div style={{ padding: '10px 14px', background: dark ? colors.gray[800] : colors.gray[700], display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            {['#FF5F57', '#FFBD2E', '#28CA41'].map((c, i) => <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />)}
          </div>
          <div style={{ flex: 1, background: dark ? colors.gray[700] : colors.gray[600], borderRadius: '6px', padding: '5px 12px', fontSize: '11px', color: colors.gray[400] }}>{url}</div>
        </div>
        <div style={{ background: colors.gray[100] }}>{children}</div>
      </div>
      {title && <div style={{ fontSize: '11px', color: colors.gray[400], textAlign: 'center', marginTop: '8px' }}>{title}</div>}
    </div>
  );

  const Section = ({ children, id, wide, bg }) => (
    <section id={id} style={{ padding: '56px 0', background: bg || colors.white }}>
      <div style={{ maxWidth: wide ? '1200px' : '920px', margin: '0 auto', padding: '0 32px' }}>{children}</div>
    </section>
  );

  const SectionLabel = ({ children }) => <div style={{ fontSize: '11px', fontWeight: 600, color: colors.accent, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{children}</div>;
  const SectionTitle = ({ children }) => <h2 style={{ fontSize: '26px', fontWeight: 600, color: colors.gray[900], margin: '0 0 16px 0', fontFamily: "'Source Serif 4', serif", letterSpacing: '-0.01em' }}>{children}</h2>;
  const SubsectionTitle = ({ children, style = {} }) => <h3 style={{ fontSize: '16px', fontWeight: 600, color: colors.gray[800], margin: '40px 0 12px 0', ...style }}>{children}</h3>;
  const P = ({ children, style = {} }) => <p style={{ fontSize: '15px', lineHeight: 1.75, color: colors.gray[600], margin: '0 0 16px 0', maxWidth: '680px', ...style }}>{children}</p>;
  const Divider = () => <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 32px' }}><div style={{ height: '1px', background: colors.gray[200] }} /></div>;

  // Sketch/Hand-drawn style component
  const SketchBox = ({ children, label }) => (
    <div style={{ background: '#FFFEF5', border: '2px solid #E5E2D3', borderRadius: '4px', padding: '16px', position: 'relative', transform: 'rotate(-0.5deg)' }}>
      {label && <div style={{ position: 'absolute', top: '-10px', left: '12px', background: '#FFFEF5', padding: '0 6px', fontSize: '10px', color: colors.gray[500], fontStyle: 'italic' }}>{label}</div>}
      {children}
    </div>
  );

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: colors.white, color: colors.gray[900], opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease', fontSize: '15px' }}>
      
      {/* Header */}
      <header style={{ padding: '14px 32px', borderBottom: `1px solid ${colors.gray[200]}`, position: 'sticky', top: 0, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '13px', color: colors.gray[500] }}>Portfolio / PlotMind</div>
          <div style={{ fontSize: '12px', color: colors.gray[400] }}>Q2 2024 · 12 weeks</div>
        </div>
      </header>

      {/* Hero */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 20px 0', fontFamily: "'Source Serif 4', serif" }}>
              Redesigning PlotMind's chart creation experience
            </h1>
            <P style={{ fontSize: '17px', color: colors.gray[500], maxWidth: '480px' }}>
              Transforming a powerful but confusing data visualization tool into an intuitive 
              experience—improving 7-day activation by 126%.
            </P>
            <div style={{ display: 'flex', gap: '24px', marginTop: '32px', fontSize: '14px' }}>
              {[
                { label: 'Role', value: 'Lead Product Designer' },
                { label: 'Timeline', value: '12 weeks' },
                { label: 'Team', value: '1 PM, 2 Eng, 1 DS' }
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ fontSize: '11px', color: colors.gray[400], marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</div>
                  <div style={{ fontWeight: 500, color: colors.gray[700] }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero metric */}
          <div style={{ background: colors.gray[50], borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: colors.gray[400], marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>7-day activation rate</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <span style={{ fontSize: '48px', fontWeight: 300, color: colors.gray[400], textDecoration: 'line-through', textDecorationColor: colors.red }}>23%</span>
              <span style={{ fontSize: '24px', color: colors.gray[400] }}>→</span>
              <span style={{ fontSize: '64px', fontWeight: 600, color: colors.accent }}>52%</span>
            </div>
            <div style={{ fontSize: '14px', color: colors.green, fontWeight: 500, marginTop: '8px' }}>+126% improvement</div>
          </div>
        </div>
      </Section>

      {/* Final Product - High Fidelity */}
      <Section wide bg={colors.gray[50]}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ fontSize: '12px', color: colors.gray[400], marginBottom: '4px' }}>THE SHIPPED PRODUCT</div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: colors.gray[800] }}>Drag-and-drop chart creation with live preview</div>
        </div>
        
        <BrowserFrame url="app.plotmind.io/charts/revenue-q3-2024">
          <div style={{ padding: '0', background: '#F8FAFC' }}>
            {/* App header */}
            <div style={{ padding: '12px 20px', background: colors.white, borderBottom: `1px solid ${colors.gray[200]}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '28px', height: '28px', background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.purple} 100%)`, borderRadius: '6px' }} />
                <div style={{ fontSize: '14px', fontWeight: 600, color: colors.gray[800] }}>PlotMind</div>
                <div style={{ height: '20px', width: '1px', background: colors.gray[200] }} />
                <div style={{ fontSize: '13px', color: colors.gray[500] }}>My Charts</div>
                <div style={{ fontSize: '13px', color: colors.gray[500] }}>/</div>
                <div style={{ fontSize: '13px', color: colors.gray[800] }}>Revenue Q3 2024</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ padding: '6px 12px', fontSize: '12px', color: colors.gray[600], background: colors.white, border: `1px solid ${colors.gray[200]}`, borderRadius: '6px' }}>Export</div>
                <div style={{ padding: '6px 12px', fontSize: '12px', color: colors.white, background: colors.accent, borderRadius: '6px' }}>Share</div>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: colors.gray[200], marginLeft: '8px' }} />
              </div>
            </div>
            
            {/* Main workspace */}
            <div style={{ display: 'flex', minHeight: '520px' }}>
              {/* Left panel - Data */}
              <div style={{ width: '240px', background: colors.white, borderRight: `1px solid ${colors.gray[200]}`, padding: '16px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: colors.gray[400], marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Data Source</div>
                  <div style={{ padding: '10px 12px', background: colors.gray[50], borderRadius: '8px', border: `1px solid ${colors.gray[200]}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', background: colors.green + '15', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600, color: colors.green }}>CSV</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 500, color: colors.gray[800] }}>sales_2024.csv</div>
                      <div style={{ fontSize: '11px', color: colors.gray[400] }}>12,847 rows · 8 columns</div>
                    </div>
                  </div>
                </div>
                
                <div style={{ fontSize: '10px', fontWeight: 600, color: colors.gray[400], marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Columns</div>
                {[
                  { name: 'date', type: 'date', icon: 'D', mapped: 'X-axis' },
                  { name: 'revenue', type: 'number', icon: '#', mapped: 'Y-axis' },
                  { name: 'region', type: 'string', icon: 'Aa', mapped: 'Color' },
                  { name: 'customers', type: 'number', icon: '#', mapped: null },
                  { name: 'product_category', type: 'string', icon: 'Aa', mapped: null },
                  { name: 'sales_rep', type: 'string', icon: 'Aa', mapped: null },
                  { name: 'deal_size', type: 'number', icon: '#', mapped: null },
                  { name: 'is_enterprise', type: 'boolean', icon: 'B', mapped: null }
                ].map((col, i) => (
                  <div key={i} style={{
                    padding: '10px 12px',
                    background: col.mapped ? colors.accent + '08' : colors.white,
                    border: `1px solid ${col.mapped ? colors.accent + '30' : colors.gray[200]}`,
                    borderRadius: '8px',
                    marginBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'grab',
                    transition: 'all 0.15s ease'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '24px', height: '24px', borderRadius: '6px',
                        background: col.type === 'number' ? colors.accent + '15' : col.type === 'date' ? colors.green + '15' : col.type === 'boolean' ? colors.purple + '15' : colors.orange + '15',
                        color: col.type === 'number' ? colors.accent : col.type === 'date' ? colors.green : col.type === 'boolean' ? colors.purple : colors.orange,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '11px', fontWeight: 600
                      }}>{col.icon}</div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 500, color: colors.gray[800], fontFamily: "'IBM Plex Mono', monospace" }}>{col.name}</div>
                        <div style={{ fontSize: '10px', color: colors.gray[400] }}>{col.type}</div>
                      </div>
                    </div>
                    {col.mapped && <div style={{ fontSize: '10px', color: colors.accent, fontWeight: 500, background: colors.accent + '15', padding: '2px 8px', borderRadius: '4px' }}>{col.mapped}</div>}
                  </div>
                ))}
              </div>
              
              {/* Center - Chart canvas */}
              <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
                {/* Chart type selector */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '4px', background: colors.white, padding: '4px', borderRadius: '10px', border: `1px solid ${colors.gray[200]}` }}>
                    {[
                      { type: 'Bar', icon: '▮▮▮', active: true },
                      { type: 'Line', icon: '⟋', active: false },
                      { type: 'Scatter', icon: '•••', active: false },
                      { type: 'Area', icon: '▲', active: false },
                      { type: 'Pie', icon: '◔', active: false }
                    ].map((t, i) => (
                      <div key={i} style={{
                        padding: '8px 16px',
                        background: t.active ? colors.gray[800] : 'transparent',
                        color: t.active ? colors.white : colors.gray[500],
                        borderRadius: '7px',
                        fontSize: '13px',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer'
                      }}>
                        <span style={{ fontSize: '10px' }}>{t.icon}</span>
                        {t.type}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: colors.gray[400] }}>Auto-saved 2s ago</span>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.green }} />
                  </div>
                </div>
                
                {/* Chart */}
                <div style={{ flex: 1, background: colors.white, borderRadius: '12px', border: `1px solid ${colors.gray[200]}`, padding: '24px', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 600, color: colors.gray[900], marginBottom: '4px' }}>Revenue by Region</div>
                    <div style={{ fontSize: '13px', color: colors.gray[400] }}>Q3 2024 · Monthly breakdown · All products</div>
                  </div>
                  
                  {/* Y-axis + bars */}
                  <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
                    {/* Y-axis labels */}
                    <div style={{ width: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingRight: '12px', paddingBottom: '30px' }}>
                      {['$80k', '$60k', '$40k', '$20k', '$0'].map((l, i) => (
                        <div key={i} style={{ fontSize: '11px', color: colors.gray[400], textAlign: 'right' }}>{l}</div>
                      ))}
                    </div>
                    
                    {/* Chart area */}
                    <div style={{ flex: 1, position: 'relative', borderLeft: `1px solid ${colors.gray[200]}`, borderBottom: `1px solid ${colors.gray[200]}` }}>
                      {/* Grid lines */}
                      {[0.25, 0.5, 0.75].map((pct, i) => (
                        <div key={i} style={{ position: 'absolute', left: 0, right: 0, top: `${pct * 100}%`, height: '1px', background: colors.gray[100] }} />
                      ))}
                      
                      {/* Bars */}
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '0 20px 0 20px' }}>
                        {[
                          { month: 'Jul', values: [52, 38, 28] },
                          { month: 'Aug', values: [58, 42, 32] },
                          { month: 'Sep', values: [48, 45, 35] },
                          { month: 'Oct', values: [72, 48, 42] },
                          { month: 'Nov', values: [65, 52, 45] },
                          { month: 'Dec', values: [78, 58, 52] }
                        ].map((group, i) => (
                          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', marginBottom: '8px' }}>
                              {group.values.map((v, j) => (
                                <div key={j} style={{
                                  width: '18px',
                                  height: `${v * 2.8}px`,
                                  background: [colors.accent, colors.green, colors.orange][j],
                                  borderRadius: '3px 3px 0 0',
                                  position: 'relative'
                                }}>
                                  {/* Subtle gradient overlay for polish */}
                                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 50%)', borderRadius: '3px 3px 0 0' }} />
                                </div>
                              ))}
                            </div>
                            <div style={{ fontSize: '11px', color: colors.gray[500] }}>{group.month}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '16px', paddingTop: '16px', borderTop: `1px solid ${colors.gray[100]}` }}>
                    {[
                      { label: 'North America', color: colors.accent, value: '$423k' },
                      { label: 'Europe', color: colors.green, value: '$283k' },
                      { label: 'Asia Pacific', color: colors.orange, value: '$234k' }
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: item.color }} />
                        <span style={{ fontSize: '13px', color: colors.gray[600] }}>{item.label}</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: colors.gray[800] }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right panel - Mappings & AI */}
              <div style={{ width: '260px', background: colors.white, borderLeft: `1px solid ${colors.gray[200]}`, padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Axis mappings */}
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: colors.gray[400], marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Axis Mappings</div>
                  {[
                    { label: 'X-axis', value: 'date', type: 'date', color: colors.green, required: true },
                    { label: 'Y-axis', value: 'revenue', type: 'number', color: colors.accent, required: true },
                    { label: 'Color', value: 'region', type: 'string', color: colors.orange, required: false }
                  ].map((m, i) => (
                    <div key={i} style={{
                      padding: '12px',
                      background: colors.gray[50],
                      borderRadius: '10px',
                      marginBottom: '8px',
                      borderLeft: `3px solid ${m.color}`
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <div style={{ fontSize: '11px', color: colors.gray[400] }}>{m.label}</div>
                        {m.required && <div style={{ fontSize: '9px', color: colors.gray[400] }}>Required</div>}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ fontSize: '14px', fontWeight: 500, color: colors.gray[800], fontFamily: "'IBM Plex Mono', monospace" }}>{m.value}</div>
                        <div style={{ fontSize: '10px', color: colors.gray[400], background: colors.gray[200], padding: '1px 6px', borderRadius: '3px' }}>{m.type}</div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Empty drop zone */}
                  <div style={{
                    padding: '16px',
                    border: `2px dashed ${colors.gray[300]}`,
                    borderRadius: '10px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '11px', color: colors.gray[400], marginBottom: '2px' }}>Size (optional)</div>
                    <div style={{ fontSize: '12px', color: colors.gray[400] }}>Drop a number column</div>
                  </div>
                </div>
                
                {/* AI Insights */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: colors.gray[400], marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    AI Insights
                  </div>
                  
                  <div style={{ padding: '12px', background: colors.accent + '08', borderRadius: '10px', marginBottom: '10px', border: `1px solid ${colors.accent}20` }}>
                    <div style={{ fontSize: '13px', color: colors.gray[700], marginBottom: '8px', lineHeight: 1.5 }}>Try a <strong>line chart</strong> to better show the upward trend over time.</div>
                    <div style={{ fontSize: '12px', color: colors.accent, fontWeight: 500, cursor: 'pointer' }}>Apply suggestion →</div>
                  </div>
                  
                  <div style={{ padding: '12px', background: colors.gray[50], borderRadius: '10px', marginBottom: '10px' }}>
                    <div style={{ fontSize: '11px', color: colors.gray[400], marginBottom: '4px' }}>Trend</div>
                    <div style={{ fontSize: '20px', fontWeight: 600, color: colors.green }}>+18%</div>
                    <div style={{ fontSize: '11px', color: colors.gray[500] }}>Month-over-month growth</div>
                  </div>
                  
                  <div style={{ padding: '12px', background: colors.orange + '08', borderRadius: '10px', border: `1px solid ${colors.orange}20` }}>
                    <div style={{ fontSize: '11px', color: colors.orange, fontWeight: 500, marginBottom: '4px' }}>Outlier detected</div>
                    <div style={{ fontSize: '12px', color: colors.gray[600], lineHeight: 1.5 }}>December APAC revenue is 40% above the 6-month trend.</div>
                  </div>
                </div>
                
                {/* Quick actions */}
                <div style={{ borderTop: `1px solid ${colors.gray[200]}`, paddingTop: '16px' }}>
                  <div style={{ fontSize: '11px', color: colors.gray[400], marginBottom: '8px' }}>Quick actions</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {['Add title', 'Add annotation', 'Change colors', 'Export PNG'].map((action, i) => (
                      <div key={i} style={{ padding: '6px 10px', background: colors.gray[100], borderRadius: '6px', fontSize: '11px', color: colors.gray[600], cursor: 'pointer' }}>{action}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BrowserFrame>
      </Section>

      {/* My Specific Contributions */}
      <Section>
        <SectionLabel>My Role</SectionLabel>
        <SectionTitle>What I specifically did</SectionTitle>
        <P>On a team of four, the following outlines my specific ownership versus contribution areas.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '24px' }}>
          {defined.myContributions.map((c, i) => (
            <div key={i} style={{ padding: '20px', background: colors.gray[50], borderRadius: '12px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: colors.gray[800], marginBottom: '12px' }}>{c.area}</div>
              {c.tasks.map((t, j) => (
                <div key={j} style={{ fontSize: '13px', color: colors.gray[600], marginBottom: '6px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: colors.accent }}>·</span>
                  {t}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Design Philosophy */}
      <Section>
        <SectionLabel>Point of View</SectionLabel>
        <SectionTitle>What I believe about data visualization design</SectionTitle>
        <P>These principles informed every decision in this project. They represent a perspective developed through years of work on data exploration tools.</P>
        
        <div style={{ marginTop: '32px' }}>
          {defined.designPhilosophy.map((p, i) => (
            <div key={i} style={{ marginBottom: '32px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}>
              <div style={{ fontSize: '17px', fontWeight: 600, color: colors.gray[900], lineHeight: 1.4 }}>"{p.belief}"</div>
              <div style={{ fontSize: '14px', color: colors.gray[600], lineHeight: 1.7, paddingTop: '4px' }}>{p.detail}</div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Context */}
      <Section>
        <SectionLabel>Context</SectionLabel>
        <SectionTitle>The problem</SectionTitle>
        <P>
          PlotMind had built a technically powerful visualization tool, but growth had stalled. 
          Only 23% of users created a chart within their first week—about half the industry benchmark.
        </P>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', margin: '32px 0' }}>
          {[
            { label: '7-day activation', value: '23%', sub: 'vs. 45% benchmark', bad: true },
            { label: 'Time to first chart', value: '8.5 min', sub: 'for those who succeeded', bad: true },
            { label: 'First-session success', value: '34%', sub: 'completed a chart', bad: true },
            { label: 'Onboarding NPS', value: '12', sub: 'deep in detractor range', bad: true }
          ].map((s, i) => (
            <div key={i} style={{ padding: '20px', background: s.bad ? colors.red + '05' : colors.gray[50], borderRadius: '10px', border: `1px solid ${s.bad ? colors.red + '20' : colors.gray[200]}` }}>
              <div style={{ fontSize: '10px', color: colors.gray[400], marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{s.label}</div>
              <div style={{ fontSize: '32px', fontWeight: 600, color: colors.gray[900] }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: colors.gray[500], marginTop: '4px' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* The Before State */}
      <Section wide bg={colors.gray[50]}>
        <SubsectionTitle style={{ marginTop: 0 }}>What users were dealing with</SubsectionTitle>
        <P>The original interface had three critical problems: buried primary action, form-based mapping, and no preview.</P>
        
        <BrowserFrame url="app.plotmind.io (before redesign)" title="The original interface">
          <div style={{ padding: '20px', minHeight: '380px', background: '#EFEFEF', display: 'flex', gap: '16px' }}>
            {/* Old sidebar */}
            <div style={{ width: '200px', background: '#fff', borderRadius: '4px', padding: '12px', border: '1px solid #ddd' }}>
              <div style={{ padding: '10px 12px', background: '#f0f0f0', borderRadius: '4px', marginBottom: '8px', fontSize: '13px', color: '#555' }}>Dashboard</div>
              <div style={{ padding: '10px 12px', borderRadius: '4px', marginBottom: '8px', fontSize: '13px', color: '#666' }}>My Charts</div>
              <div style={{ padding: '10px 12px', borderRadius: '4px', marginBottom: '8px', fontSize: '13px', color: '#666' }}>Queries</div>
              <div style={{ padding: '10px 12px', borderRadius: '4px', marginBottom: '8px', fontSize: '13px', color: '#666' }}>Settings</div>
              <div style={{ borderTop: '1px solid #eee', margin: '12px 0' }} />
              <div style={{ padding: '10px 12px', borderRadius: '4px', fontSize: '13px', color: '#888', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
                New...
                <span>▾</span>
              </div>
              {/* Dropdown */}
              <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '4px', marginTop: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ padding: '8px 12px', borderBottom: '1px solid #eee', fontSize: '12px', color: '#666' }}>New Folder</div>
                <div style={{ padding: '8px 12px', borderBottom: '1px solid #eee', fontSize: '12px', color: '#666' }}>New Dashboard</div>
                <div style={{ padding: '8px 12px', borderBottom: '1px solid #eee', fontSize: '12px', color: '#666', background: '#E3F2FD', position: 'relative' }}>
                  New Chart
                  <div style={{ position: 'absolute', right: '-80px', top: '50%', transform: 'translateY(-50%)', background: colors.red, color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 600 }}>← BURIED HERE</div>
                </div>
                <div style={{ padding: '8px 12px', borderBottom: '1px solid #eee', fontSize: '12px', color: '#666' }}>New Query</div>
                <div style={{ padding: '8px 12px', borderBottom: '1px solid #eee', fontSize: '12px', color: '#666' }}>Import Data</div>
                <div style={{ padding: '8px 12px', fontSize: '12px', color: '#666' }}>Connect Source</div>
              </div>
            </div>
            
            {/* Old form */}
            <div style={{ flex: 1, background: '#fff', borderRadius: '4px', padding: '24px', border: '1px solid #ddd' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px', color: '#333' }}>Create New Chart</div>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>Data Source *</div>
                <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', background: '#fff' }}>
                  <option>Select a data source...</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>X-Axis Column *</div>
                <input type="text" placeholder="Enter exact column name..." style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', boxSizing: 'border-box' }} />
                <div style={{ fontSize: '10px', color: '#999', marginTop: '4px' }}>Column names are case-sensitive</div>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>Y-Axis Column *</div>
                <input type="text" placeholder="Enter exact column name..." style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', boxSizing: 'border-box' }} />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#555', marginBottom: '6px' }}>Group By (optional)</div>
                <input type="text" placeholder="Enter column name..." style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', boxSizing: 'border-box' }} />
              </div>
              
              <div style={{ padding: '14px 16px', background: '#FFF3CD', borderRadius: '4px', fontSize: '12px', color: '#856404', marginTop: '20px' }}>
                Make sure column names match exactly. Check your data source for the correct spelling.
              </div>
              
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
                <button style={{ padding: '10px 20px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', color: '#666', background: '#fff' }}>Cancel</button>
                <button style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', fontSize: '13px', color: '#fff', background: '#4285F4' }}>Create Chart</button>
              </div>
            </div>
            
            {/* Old preview */}
            <div style={{ width: '280px', background: '#fff', borderRadius: '4px', padding: '24px', border: '1px solid #ddd', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px', opacity: 0.5, color: colors.gray[300] }}>◇</div>
              <div style={{ fontSize: '14px', textAlign: 'center', lineHeight: 1.5 }}>Chart preview will appear after you complete the configuration</div>
            </div>
          </div>
        </BrowserFrame>
      </Section>

      <Divider />

      {/* Research - with artifacts */}
      <Section>
        <SectionLabel>Research</SectionLabel>
        <SectionTitle>Understanding the problem</SectionTitle>
        <P>I ran a 3-week mixed-methods study. Here's not just what I learned, but how I got there.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', margin: '24px 0' }}>
          {[
            { method: 'User interviews', count: '12', detail: '45-60 min each, mix of churned/active/power users' },
            { method: 'Exit survey', count: '203', detail: 'Open-ended "what stopped you?" to churned users' },
            { method: 'Session recordings', count: '50+', detail: 'FullStory recordings of first-time users' },
            { method: 'Competitor audit', count: '8', detail: 'Tableau, Looker, Mode, Hex, Observable, Sheets, Flourish, Metabase' }
          ].map((item, i) => (
            <div key={i} style={{ padding: '16px', background: colors.gray[50], borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 600, color: colors.gray[900] }}>{item.count}</div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: colors.gray[700], marginBottom: '4px' }}>{item.method}</div>
              <div style={{ fontSize: '11px', color: colors.gray[500] }}>{item.detail}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Research Artifacts */}
      <Section wide bg={colors.gray[50]}>
        <SubsectionTitle style={{ marginTop: 0 }}>Synthesis: from raw data to insights</SubsectionTitle>
        <P>Beyond the findings, the following illustrates the synthesis process from raw data to actionable insights.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
          {/* Affinity map */}
          <SketchBox label="Affinity mapping (Miro)">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {[
                { text: 'Unable to locate create action', color: '#FFCDD2', cluster: 'Discovery' },
                { text: 'Unclear starting point', color: '#FFCDD2', cluster: 'Discovery' },
                { text: 'Overwhelmed by options', color: '#FFCDD2', cluster: 'Discovery' },
                { text: 'Required exact column name input', color: '#FFF9C4', cluster: 'Mapping' },
                { text: 'No autocomplete available', color: '#FFF9C4', cluster: 'Mapping' },
                { text: 'Frequent validation errors', color: '#FFF9C4', cluster: 'Mapping' },
                { text: 'No preview during config', color: '#C8E6C9', cluster: 'Feedback' },
                { text: 'Uncertain of output until complete', color: '#C8E6C9', cluster: 'Feedback' },
                { text: 'Default colors inadequate', color: '#E1BEE7', cluster: 'Defaults' },
                { text: 'Output lacks professionalism', color: '#E1BEE7', cluster: 'Defaults' },
                { text: 'Save state unclear', color: '#B3E5FC', cluster: 'Trust' },
                { text: 'Data loss incidents', color: '#B3E5FC', cluster: 'Trust' }
              ].map((note, i) => (
                <div key={i} style={{
                  padding: '8px 10px',
                  background: note.color,
                  borderRadius: '2px',
                  fontSize: '10px',
                  color: '#333',
                  transform: `rotate(${(Math.random() - 0.5) * 4}deg)`,
                  boxShadow: '1px 1px 3px rgba(0,0,0,0.1)'
                }}>{note.text}</div>
              ))}
            </div>
            <div style={{ marginTop: '12px', display: 'flex', gap: '12px', fontSize: '9px' }}>
              <span><span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFCDD2', marginRight: '4px' }} />Discovery</span>
              <span><span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#FFF9C4', marginRight: '4px' }} />Mapping</span>
              <span><span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#C8E6C9', marginRight: '4px' }} />Feedback</span>
              <span><span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#E1BEE7', marginRight: '4px' }} />Defaults</span>
              <span><span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#B3E5FC', marginRight: '4px' }} />Trust</span>
            </div>
          </SketchBox>
          
          {/* Survey themes */}
          <SketchBox label="Exit survey themes (n=203)">
            <div style={{ fontSize: '12px', color: '#333' }}>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Unable to initiate chart creation</span>
                  <span style={{ fontWeight: 600 }}>58%</span>
                </div>
                <div style={{ height: '8px', background: '#eee', borderRadius: '4px' }}>
                  <div style={{ width: '58%', height: '100%', background: colors.red, borderRadius: '4px' }} />
                </div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Column mapping errors blocked progress</span>
                  <span style={{ fontWeight: 600 }}>41%</span>
                </div>
                <div style={{ height: '8px', background: '#eee', borderRadius: '4px' }}>
                  <div style={{ width: '41%', height: '100%', background: colors.orange, borderRadius: '4px' }} />
                </div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Output quality below expectations</span>
                  <span style={{ fontWeight: 600 }}>34%</span>
                </div>
                <div style={{ height: '8px', background: '#eee', borderRadius: '4px' }}>
                  <div style={{ width: '34%', height: '100%', background: colors.orange, borderRadius: '4px' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Complexity exceeded requirements</span>
                  <span style={{ fontWeight: 600 }}>28%</span>
                </div>
                <div style={{ height: '8px', background: '#eee', borderRadius: '4px' }}>
                  <div style={{ width: '28%', height: '100%', background: colors.gray[400], borderRadius: '4px' }} />
                </div>
              </div>
            </div>
          </SketchBox>
        </div>

        {/* Session recording insight */}
        <div style={{ marginTop: '24px' }}>
          <SubsectionTitle>Session recording analysis</SubsectionTitle>
          <P>Analysis of 50+ first-time user sessions revealed consistent patterns. This composite heatmap represents click distribution within the first two minutes.</P>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '16px' }}>
            <BrowserFrame title="Where users clicked">
              <div style={{ padding: '16px', background: '#f5f5f5', minHeight: '240px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '16px', top: '16px', width: '140px', bottom: '16px', background: '#fff', borderRadius: '4px', padding: '8px' }}>
                  {['Dashboard', 'My Charts', 'Queries'].map((item, i) => (
                    <div key={i} style={{ 
                      padding: '8px', 
                      marginBottom: '4px', 
                      fontSize: '11px',
                      background: `rgba(220, 38, 38, ${0.5 - i * 0.15})`,
                      borderRadius: '4px'
                    }}>{item}</div>
                  ))}
                  <div style={{ padding: '8px', fontSize: '11px', background: 'rgba(220, 38, 38, 0.1)', borderRadius: '4px', marginBottom: '4px' }}>Settings</div>
                  <div style={{ padding: '8px', fontSize: '11px', borderRadius: '4px' }}>New... ▾</div>
                </div>
                <div style={{ position: 'absolute', top: '16px', left: '180px', display: 'flex', gap: '8px' }}>
                  {['File', 'Edit', 'View'].map((item, i) => (
                    <div key={i} style={{ padding: '6px 10px', background: `rgba(220, 38, 38, ${0.3 - i * 0.1})`, borderRadius: '4px', fontSize: '11px' }}>{item}</div>
                  ))}
                </div>
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', padding: '12px 16px', background: colors.white, borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', maxWidth: '200px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: colors.red, marginBottom: '4px' }}>73% frustration cluster</div>
                  <div style={{ fontSize: '10px', color: colors.gray[600] }}>Users repeatedly clicked sidebar items looking for "create"</div>
                </div>
              </div>
            </BrowserFrame>
            
            <BrowserFrame title="Where the CTA actually was">
              <div style={{ padding: '16px', background: '#f5f5f5', minHeight: '240px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '16px', top: '16px', width: '140px', bottom: '16px', background: '#fff', borderRadius: '4px', padding: '8px' }}>
                  {['Dashboard', 'My Charts', 'Queries', 'Settings'].map((item, i) => (
                    <div key={i} style={{ padding: '8px', marginBottom: '4px', fontSize: '11px' }}>{item}</div>
                  ))}
                  <div style={{ padding: '8px', fontSize: '11px', background: colors.green + '20', border: `2px solid ${colors.green}`, borderRadius: '4px' }}>
                    New... ▾
                    <div style={{ fontSize: '9px', color: colors.green, marginTop: '2px' }}>↳ Create Chart</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: '24px', right: '24px', textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: colors.gray[500], marginBottom: '4px' }}>Average time to find</div>
                  <div style={{ fontSize: '32px', fontWeight: 600, color: colors.red }}>2+ min</div>
                </div>
              </div>
            </BrowserFrame>
          </div>
        </div>
      </Section>

      {/* Key Findings */}
      <Section>
        <SubsectionTitle style={{ marginTop: 0 }}>Key findings</SubsectionTitle>
        <P>Five primary issues emerged from synthesis. Each finding includes supporting evidence and design response.</P>
        
        {defined.researchFindings.map((finding, i) => (
          <div key={i} style={{ border: `1px solid ${colors.gray[200]}`, borderRadius: '8px', marginBottom: '8px', overflow: 'hidden' }}>
            <div 
              onClick={() => setExpandedFinding(expandedFinding === i ? null : i)}
              style={{ padding: '16px 20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: expandedFinding === i ? colors.gray[50] : colors.white }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', background: finding.severity === 'Critical' ? colors.red + '15' : colors.orange + '15', color: finding.severity === 'Critical' ? colors.red : colors.orange, fontWeight: 600 }}>{finding.severity}</span>
                <span style={{ fontSize: '14px', fontWeight: 500, color: colors.gray[800] }}>{finding.finding}</span>
              </div>
              <span style={{ fontSize: '18px', color: colors.gray[400], fontWeight: 300 }}>{expandedFinding === i ? '−' : '+'}</span>
            </div>
            
            {expandedFinding === i && (
              <div style={{ padding: '0 20px 20px', background: colors.gray[50] }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: colors.gray[500], marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Evidence</div>
                  {finding.evidence.map((e, j) => (
                    <div key={j} style={{ fontSize: '13px', color: colors.gray[600], marginBottom: '4px', display: 'flex', gap: '8px' }}>
                      <span style={{ color: colors.accent }}>·</span>{e}
                    </div>
                  ))}
                </div>
                <div style={{ padding: '12px 16px', background: colors.green + '10', borderRadius: '8px', borderLeft: `3px solid ${colors.green}` }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: colors.green, marginBottom: '4px' }}>OUTCOME AFTER REDESIGN</div>
                  <div style={{ fontSize: '14px', color: colors.gray[800], fontWeight: 500 }}>{finding.outcome}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </Section>

      {/* Personas */}
      <Section bg={colors.gray[50]}>
        <SubsectionTitle style={{ marginTop: 0 }}>Personas</SubsectionTitle>
        <P>Three distinct archetypes emerged from research, each representing a different mental model and success criteria.</P>
        
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', marginTop: '20px' }}>
          {defined.personas.map((p, i) => (
            <button key={i} onClick={() => setActivePersona(i)} style={{
              padding: '10px 20px', background: activePersona === i ? colors.gray[800] : colors.white,
              color: activePersona === i ? colors.white : colors.gray[600],
              border: `1px solid ${activePersona === i ? colors.gray[800] : colors.gray[300]}`,
              borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: 'pointer'
            }}>{p.name}: {p.archetype}</button>
          ))}
        </div>

        <div style={{ background: colors.white, borderRadius: '12px', padding: '24px', border: `1px solid ${colors.gray[200]}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: '32px' }}>
            <div>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: colors.gray[200], marginBottom: '16px' }} />
              <div style={{ fontSize: '20px', fontWeight: 600, color: colors.gray[900], marginBottom: '4px' }}>{defined.personas[activePersona].name}</div>
              <div style={{ fontSize: '14px', color: colors.gray[500] }}>{defined.personas[activePersona].role}</div>
              <div style={{ marginTop: '16px', padding: '12px', background: colors.gray[50], borderRadius: '8px', borderLeft: `3px solid ${colors.accent}` }}>
                <div style={{ fontSize: '13px', fontStyle: 'italic', color: colors.gray[700], lineHeight: 1.5 }}>"{defined.personas[activePersona].quote}"</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: colors.gray[500], marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Goals</div>
              {defined.personas[activePersona].goals.map((g, i) => (
                <div key={i} style={{ fontSize: '14px', color: colors.gray[700], marginBottom: '8px', display: 'flex', gap: '10px' }}>
                  <span style={{ color: colors.green }}>+</span>{g}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: colors.gray[500], marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Frustrations</div>
              {defined.personas[activePersona].frustrations.map((f, i) => (
                <div key={i} style={{ fontSize: '14px', color: colors.gray[700], marginBottom: '8px', display: 'flex', gap: '10px' }}>
                  <span style={{ color: colors.red }}>−</span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* IA Restructure */}
      <Section>
        <SectionLabel>Information Architecture</SectionLabel>
        <SectionTitle>Restructuring the navigation</SectionTitle>
        <P>The first intervention was structural: making the primary action impossible to miss.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '24px' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: colors.red, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Before: Flat hierarchy</div>
            <div style={{ background: colors.gray[50], borderRadius: '12px', padding: '20px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 2 }}>
              <div>├── Dashboard</div>
              <div>├── My Charts</div>
              <div>├── Queries</div>
              <div>├── Settings</div>
              <div>└── <span style={{ background: colors.red + '20', padding: '2px 6px', borderRadius: '3px' }}>New... (dropdown)</span></div>
              <div style={{ paddingLeft: '24px', color: colors.gray[400] }}>├── New Folder</div>
              <div style={{ paddingLeft: '24px', color: colors.gray[400] }}>├── New Dashboard</div>
              <div style={{ paddingLeft: '24px', color: colors.gray[400] }}>├── <span style={{ color: colors.red }}>New Chart ← buried</span></div>
              <div style={{ paddingLeft: '24px', color: colors.gray[400] }}>├── New Query</div>
              <div style={{ paddingLeft: '24px', color: colors.gray[400] }}>└── Import</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: colors.green, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>After: Action-first hierarchy</div>
            <div style={{ background: colors.gray[50], borderRadius: '12px', padding: '20px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: 2 }}>
              <div><span style={{ background: colors.green + '20', padding: '2px 6px', borderRadius: '3px', fontWeight: 600 }}>+ New Chart (primary CTA)</span></div>
              <div style={{ height: '8px' }} />
              <div>├── My Charts</div>
              <div>├── Dashboards</div>
              <div>├── Data Sources</div>
              <div style={{ height: '8px' }} />
              <div style={{ color: colors.gray[400] }}>└── More (dropdown)</div>
              <div style={{ paddingLeft: '24px', color: colors.gray[400] }}>├── New Folder</div>
              <div style={{ paddingLeft: '24px', color: colors.gray[400] }}>├── New Query</div>
              <div style={{ paddingLeft: '24px', color: colors.gray[400] }}>└── Settings</div>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '24px', padding: '16px 20px', background: colors.accent + '08', borderRadius: '10px', borderLeft: `3px solid ${colors.accent}` }}>
          <div style={{ fontSize: '14px', color: colors.gray[800] }}>
            <strong>Design decision:</strong> The primary action receives a dedicated, always-visible button rather than a dropdown item. 
            Secondary creation actions (folders, queries) were relocated to a consolidated menu. This required stakeholder alignment with PM 
            who expressed concern about discoverability of secondary features. Session recordings demonstrating user failure to locate the 
            create action provided supporting evidence.
          </div>
        </div>
      </Section>

      <Divider />

      {/* Exploration - Sketches */}
      <Section>
        <SectionLabel>Exploration</SectionLabel>
        <SectionTitle>Early sketches and dead ends</SectionTitle>
        <P>Prior to Figma, initial concepts were explored on paper. The following represents directions that were ultimately not pursued.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '24px' }}>
          <SketchBox label="Idea: Template gallery first">
            <div style={{ minHeight: '160px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '12px' }}>
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} style={{ aspectRatio: '1', background: '#E8E5D9', borderRadius: '4px' }} />
                ))}
              </div>
              <div style={{ fontSize: '10px', color: '#666', fontStyle: 'italic' }}>"Start with a template"</div>
            </div>
            <div style={{ marginTop: '12px', padding: '8px', background: colors.red + '10', borderRadius: '4px' }}>
              <div style={{ fontSize: '10px', color: colors.red, fontWeight: 600 }}>KILLED</div>
              <div style={{ fontSize: '10px', color: colors.gray[600], marginTop: '2px' }}>Research indicated users preferred starting with their own data. Templates felt constraining.</div>
            </div>
          </SketchBox>
          
          <SketchBox label="Idea: Chat-based interface">
            <div style={{ minHeight: '160px' }}>
              <div style={{ padding: '8px', background: '#E8E5D9', borderRadius: '8px', marginBottom: '8px', fontSize: '10px' }}>Show me revenue by month</div>
              <div style={{ padding: '8px', background: '#D9E5D9', borderRadius: '8px', marginBottom: '8px', fontSize: '10px', marginLeft: '20px' }}>Here is a bar chart of revenue...</div>
              <div style={{ padding: '8px', background: '#E8E5D9', borderRadius: '8px', fontSize: '10px' }}>Add a trend line</div>
            </div>
            <div style={{ marginTop: '12px', padding: '8px', background: colors.orange + '10', borderRadius: '4px' }}>
              <div style={{ fontSize: '10px', color: colors.orange, fontWeight: 600 }}>TOO EARLY</div>
              <div style={{ fontSize: '10px', color: colors.gray[600], marginTop: '2px' }}>Compelling direction but unreliable with current LLM capabilities. Deferred to future roadmap.</div>
            </div>
          </SketchBox>
          
          <SketchBox label="Idea: Spreadsheet-style canvas">
            <div style={{ minHeight: '160px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
                {['A','B','C','D','1','','','','2','','','','3','','',''].map((c, i) => (
                  <div key={i} style={{ padding: '4px', background: '#E8E5D9', fontSize: '9px', textAlign: 'center' }}>{c}</div>
                ))}
              </div>
              <div style={{ marginTop: '8px', height: '60px', background: '#D9E5D9', borderRadius: '4px' }} />
            </div>
            <div style={{ marginTop: '12px', padding: '8px', background: colors.red + '10', borderRadius: '4px' }}>
              <div style={{ fontSize: '10px', color: colors.red, fontWeight: 600 }}>KILLED</div>
              <div style={{ fontSize: '10px', color: colors.gray[600], marginTop: '2px' }}>Users already work in spreadsheets. Adding another does not address the core problem—they seek to move beyond the spreadsheet paradigm.</div>
            </div>
          </SketchBox>
        </div>
      </Section>

      {/* Macro Iterations */}
      <Section wide bg={colors.gray[50]}>
        <SubsectionTitle style={{ marginTop: 0 }}>Three paradigms tested</SubsectionTitle>
        <P>I prototyped three fundamentally different interaction models and tested each with 6 users.</P>
        
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', marginTop: '20px' }}>
          {defined.iterations.map((iter, i) => (
            <button key={i} onClick={() => setActiveIteration(i)} style={{
              padding: '10px 20px', background: activeIteration === i ? colors.gray[800] : colors.white,
              color: activeIteration === i ? colors.white : colors.gray[600],
              border: `1px solid ${activeIteration === i ? colors.gray[800] : colors.gray[300]}`,
              borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: 'pointer'
            }}>{iter.version}: {iter.title}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '32px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{
                fontSize: '11px', padding: '4px 10px', borderRadius: '4px', fontWeight: 600,
                background: defined.iterations[activeIteration].status === 'shipped' ? colors.green + '15' : defined.iterations[activeIteration].status === 'partial' ? colors.orange + '15' : colors.red + '15',
                color: defined.iterations[activeIteration].status === 'shipped' ? colors.green : defined.iterations[activeIteration].status === 'partial' ? colors.orange : colors.red
              }}>{defined.iterations[activeIteration].status === 'shipped' ? 'Shipped' : defined.iterations[activeIteration].status === 'partial' ? 'Partial' : 'Rejected'}</span>
              <span style={{ fontSize: '18px', fontWeight: 600, color: colors.gray[900] }}>{defined.iterations[activeIteration].title}</span>
            </div>
            
            <div style={{ padding: '16px', background: colors.white, borderRadius: '10px', marginBottom: '16px', border: `1px solid ${colors.gray[200]}` }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: colors.accent, marginBottom: '6px', textTransform: 'uppercase' }}>Hypothesis</div>
              <div style={{ fontSize: '14px', color: colors.gray[700], lineHeight: 1.6 }}>{defined.iterations[activeIteration].hypothesis}</div>
            </div>
            
            <div style={{ fontSize: '12px', fontWeight: 600, color: colors.gray[500], marginBottom: '10px', textTransform: 'uppercase' }}>Usability test results (n=6)</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
              {[
                { label: 'Task time', value: defined.iterations[activeIteration].results.time },
                { label: 'Success', value: defined.iterations[activeIteration].results.success },
                { label: 'Satisfaction', value: defined.iterations[activeIteration].results.sat }
              ].map((m, i) => (
                <div key={i} style={{ padding: '12px', background: colors.white, borderRadius: '8px', border: `1px solid ${colors.gray[200]}` }}>
                  <div style={{ fontSize: '10px', color: colors.gray[400], marginBottom: '4px' }}>{m.label}</div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: colors.gray[900] }}>{m.value}</div>
                </div>
              ))}
            </div>
            
            <div style={{
              padding: '16px', borderRadius: '10px', marginTop: '16px',
              background: defined.iterations[activeIteration].status === 'shipped' ? colors.green + '08' : defined.iterations[activeIteration].status === 'partial' ? colors.orange + '08' : colors.red + '08',
              borderLeft: `3px solid ${defined.iterations[activeIteration].status === 'shipped' ? colors.green : defined.iterations[activeIteration].status === 'partial' ? colors.orange : colors.red}`
            }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: colors.gray[700], marginBottom: '6px' }}>KEY LEARNING</div>
              <div style={{ fontSize: '14px', color: colors.gray[700], lineHeight: 1.6 }}>{defined.iterations[activeIteration].learning}</div>
            </div>
          </div>

          <BrowserFrame url="plotmind.io/prototype">
            <div style={{ padding: '20px', minHeight: '360px', background: '#FAFAFA' }}>
              {activeIteration === 0 && (
                <div style={{ maxWidth: '380px', margin: '0 auto' }}>
                  {/* Progress */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                    {[1,2,3,4,5].map(step => (
                      <div key={step} style={{ flex: 1, height: '4px', borderRadius: '2px', background: step <= 2 ? colors.accent : colors.gray[200] }} />
                    ))}
                  </div>
                  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <div style={{ fontSize: '11px', color: colors.gray[400], marginBottom: '6px' }}>Step 2 of 5</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: colors.gray[800] }}>Choose your chart type</div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
                    {['Bar', 'Line', 'Scatter', 'Area', 'Pie', 'Histogram'].map((type, i) => (
                      <div key={i} style={{
                        padding: '16px 8px', textAlign: 'center',
                        border: `2px solid ${i === 0 ? colors.accent : colors.gray[200]}`,
                        borderRadius: '10px', background: i === 0 ? colors.accent + '08' : colors.white,
                        fontSize: '12px', color: colors.gray[700]
                      }}>{type}</div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <button style={{ padding: '10px 20px', border: `1px solid ${colors.gray[200]}`, borderRadius: '6px', background: colors.white, fontSize: '13px', color: colors.gray[600] }}>← Back</button>
                    <button style={{ padding: '10px 20px', border: 'none', borderRadius: '6px', background: colors.accent, fontSize: '13px', color: colors.white }}>Next →</button>
                  </div>
                </div>
              )}
              
              {activeIteration === 1 && (
                <div>
                  <div style={{ background: colors.gray[100], borderRadius: '10px', padding: '20px', marginBottom: '16px', minHeight: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', color: colors.gray[400] }}>
                      <div style={{ fontSize: '14px', marginBottom: '6px' }}>Empty canvas</div>
                      <div style={{ fontSize: '12px' }}>Press ⌘K to start</div>
                    </div>
                  </div>
                  <div style={{ background: colors.gray[800], borderRadius: '10px', padding: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
                    <div style={{ padding: '10px 14px', background: colors.gray[700], borderRadius: '6px', color: colors.gray[300], fontSize: '13px', fontFamily: "'IBM Plex Mono', monospace", marginBottom: '8px' }}>
                      create bar chart with revenue by month
                    </div>
                    {['create bar chart with revenue by month', 'set x-axis to date', 'set y-axis to revenue', 'group by region', 'add trend line'].map((cmd, i) => (
                      <div key={i} style={{
                        padding: '10px 14px', borderRadius: '5px',
                        background: i === 0 ? colors.accent : 'transparent',
                        color: i === 0 ? colors.white : colors.gray[400],
                        fontSize: '12px', fontFamily: "'IBM Plex Mono', monospace", marginBottom: '2px'
                      }}>{cmd}</div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeIteration === 2 && (
                <div style={{ display: 'flex', gap: '16px', height: '320px' }}>
                  {/* Columns */}
                  <div style={{ width: '140px', background: colors.white, borderRadius: '10px', padding: '12px', border: `1px solid ${colors.gray[200]}` }}>
                    <div style={{ fontSize: '9px', color: colors.gray[400], marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Columns</div>
                    {['date', 'revenue', 'region', 'customers'].map((col, i) => (
                      <div key={i} style={{
                        padding: '8px 10px', marginBottom: '6px',
                        background: i < 2 ? colors.accent + '10' : colors.white,
                        border: `1px ${i < 2 ? 'solid' : 'dashed'} ${i < 2 ? colors.accent + '40' : colors.gray[300]}`,
                        borderRadius: '6px', fontSize: '11px', color: colors.gray[700],
                        display: 'flex', alignItems: 'center', gap: '8px', cursor: 'grab'
                      }}>
                        <span style={{
                          width: '18px', height: '18px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: i === 0 ? colors.green + '20' : i < 3 ? colors.accent + '20' : colors.orange + '20',
                          color: i === 0 ? colors.green : i < 3 ? colors.accent : colors.orange,
                          fontSize: '9px', fontWeight: 600
                        }}>{i === 0 ? 'D' : i < 3 ? '#' : 'A'}</span>
                        {col}
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart + zones */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {/* Chart */}
                    <div style={{ flex: 1, background: colors.white, borderRadius: '10px', padding: '16px', border: `1px solid ${colors.gray[200]}`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '8px' }}>
                      {[45, 58, 42, 72, 65, 78].map((h, i) => (
                        <div key={i} style={{ width: '24px', height: `${h * 2}px`, background: colors.accent, borderRadius: '4px 4px 0 0' }} />
                      ))}
                    </div>
                    {/* Drop zones */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div style={{ flex: 1, padding: '12px', border: `2px solid ${colors.green}`, borderRadius: '8px', background: colors.green + '08' }}>
                        <div style={{ fontSize: '9px', color: colors.green, marginBottom: '4px' }}>X-AXIS</div>
                        <div style={{ fontSize: '12px', color: colors.green, fontWeight: 600 }}>date</div>
                      </div>
                      <div style={{ flex: 1, padding: '12px', border: `2px solid ${colors.accent}`, borderRadius: '8px', background: colors.accent + '08' }}>
                        <div style={{ fontSize: '9px', color: colors.accent, marginBottom: '4px' }}>Y-AXIS</div>
                        <div style={{ fontSize: '12px', color: colors.accent, fontWeight: 600 }}>revenue</div>
                      </div>
                      <div style={{ flex: 1, padding: '12px', border: `2px dashed ${colors.gray[300]}`, borderRadius: '8px' }}>
                        <div style={{ fontSize: '9px', color: colors.gray[400], marginBottom: '4px' }}>COLOR</div>
                        <div style={{ fontSize: '11px', color: colors.gray[400] }}>Drop column</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </BrowserFrame>
        </div>
      </Section>

      <Divider />

      {/* Micro Iterations */}
      <Section>
        <SectionLabel>Iteration depth</SectionLabel>
        <SectionTitle>Micro-iterations within V3</SectionTitle>
        <P>While the macro paradigm tested well, implementation details required five additional rounds of refinement. The following documents the evolution of the drop zone interaction.</P>
        
        <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', marginTop: '24px', overflowX: 'auto' }}>
          {defined.microIterations.map((m, i) => (
            <button key={i} onClick={() => setActiveMicroIteration(i)} style={{
              padding: '8px 16px', whiteSpace: 'nowrap',
              background: activeMicroIteration === i ? colors.gray[800] : colors.white,
              color: activeMicroIteration === i ? colors.white : colors.gray[600],
              border: `1px solid ${activeMicroIteration === i ? colors.gray[800] : colors.gray[200]}`,
              borderRadius: '6px', fontSize: '12px', cursor: 'pointer'
            }}>{m.label}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ padding: '24px', background: colors.gray[50], borderRadius: '12px' }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: colors.gray[900], marginBottom: '8px' }}>{defined.microIterations[activeMicroIteration].title}</div>
            <div style={{ fontSize: '14px', color: colors.gray[600], marginBottom: '16px', lineHeight: 1.6 }}>{defined.microIterations[activeMicroIteration].desc}</div>
            <div style={{
              padding: '12px 16px', borderRadius: '8px',
              background: activeMicroIteration === 4 ? colors.green + '10' : colors.orange + '10',
              borderLeft: `3px solid ${activeMicroIteration === 4 ? colors.green : colors.orange}`
            }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: activeMicroIteration === 4 ? colors.green : colors.orange, marginBottom: '4px' }}>
                {activeMicroIteration === 4 ? 'SHIPPED' : 'PROBLEM'}
              </div>
              <div style={{ fontSize: '13px', color: colors.gray[700] }}>{defined.microIterations[activeMicroIteration].problem}</div>
            </div>
          </div>
          
          {/* Visual representation of each iteration */}
          <div style={{ background: colors.white, borderRadius: '12px', padding: '24px', border: `1px solid ${colors.gray[200]}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%' }}>
              {/* Column being dragged */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                <div style={{
                  padding: '10px 16px',
                  background: colors.white,
                  border: `1px solid ${colors.accent}`,
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  display: 'flex', alignItems: 'center', gap: '8px'
                }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '4px', background: colors.orange + '20', color: colors.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600 }}>A</span>
                  region (text)
                </div>
              </div>
              
              {/* Drop zones showing iteration state */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { label: 'X-axis', accepts: 'date', valid: false },
                  { label: 'Y-axis', accepts: 'number', valid: false },
                  { label: 'Color', accepts: 'any', valid: true }
                ].map((zone, i) => {
                  let borderStyle = '2px dashed';
                  let borderColor = colors.gray[300];
                  let bgColor = 'transparent';
                  let showTooltip = false;
                  
                  if (activeMicroIteration === 0) {
                    // v3.1: Basic dashed borders
                    borderColor = colors.gray[300];
                  } else if (activeMicroIteration === 1) {
                    // v3.2: Type indicators (no visual change to zones)
                    borderColor = colors.gray[300];
                  } else if (activeMicroIteration === 2) {
                    // v3.3: Green/red validation
                    borderStyle = '2px solid';
                    borderColor = zone.valid ? colors.green : colors.red;
                    bgColor = zone.valid ? colors.green + '08' : colors.red + '08';
                  } else if (activeMicroIteration === 3) {
                    // v3.4: Softer invalid
                    borderStyle = zone.valid ? '2px solid' : '2px dashed';
                    borderColor = zone.valid ? colors.green : colors.gray[300];
                    bgColor = zone.valid ? colors.green + '08' : 'transparent';
                    showTooltip = !zone.valid && i === 0;
                  } else {
                    // v3.5: Final - only valid zones highlight
                    borderStyle = zone.valid ? '2px solid' : '2px dashed';
                    borderColor = zone.valid ? colors.green : colors.gray[200];
                    bgColor = zone.valid ? colors.green + '08' : 'transparent';
                  }
                  
                  return (
                    <div key={i} style={{ flex: 1, position: 'relative' }}>
                      <div style={{
                        padding: '16px', textAlign: 'center',
                        border: borderStyle, borderColor, borderRadius: '10px',
                        background: bgColor, transition: 'all 0.2s ease'
                      }}>
                        <div style={{ fontSize: '10px', color: zone.valid ? colors.green : colors.gray[400], marginBottom: '4px' }}>{zone.label}</div>
                        <div style={{ fontSize: '11px', color: colors.gray[400] }}>Accepts: {zone.accepts}</div>
                      </div>
                      {showTooltip && (
                        <div style={{
                          position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)',
                          padding: '6px 10px', background: colors.gray[800], color: colors.white,
                          borderRadius: '6px', fontSize: '10px', whiteSpace: 'nowrap'
                        }}>
                          Requires date column
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Motion & Interaction */}
      <Section>
        <SectionLabel>Interaction Design</SectionLabel>
        <SectionTitle>Motion and feedback</SectionTitle>
        <P>Interaction details impact user perception significantly. The following motion specifications were delivered to engineering.</P>
        
        <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', marginTop: '24px', flexWrap: 'wrap' }}>
          {defined.motionSpecs.map((m, i) => (
            <button key={i} onClick={() => setActiveMotion(i)} style={{
              padding: '8px 16px',
              background: activeMotion === i ? colors.gray[800] : colors.white,
              color: activeMotion === i ? colors.white : colors.gray[600],
              border: `1px solid ${activeMotion === i ? colors.gray[800] : colors.gray[200]}`,
              borderRadius: '6px', fontSize: '12px', cursor: 'pointer'
            }}>{m.name}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ padding: '24px', background: colors.gray[50], borderRadius: '12px' }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: colors.gray[900], marginBottom: '16px' }}>{defined.motionSpecs[activeMotion].name}</div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <div style={{ padding: '12px', background: colors.white, borderRadius: '8px' }}>
                <div style={{ fontSize: '10px', color: colors.gray[400], marginBottom: '4px' }}>Duration</div>
                <div style={{ fontSize: '16px', fontWeight: 600, color: colors.gray[900], fontFamily: "'IBM Plex Mono', monospace" }}>{defined.motionSpecs[activeMotion].duration}</div>
              </div>
              <div style={{ padding: '12px', background: colors.white, borderRadius: '8px' }}>
                <div style={{ fontSize: '10px', color: colors.gray[400], marginBottom: '4px' }}>Easing</div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: colors.gray[900], fontFamily: "'IBM Plex Mono', monospace" }}>{defined.motionSpecs[activeMotion].easing}</div>
              </div>
            </div>
            
            <div style={{ fontSize: '13px', color: colors.gray[600], lineHeight: 1.7 }}>{defined.motionSpecs[activeMotion].desc}</div>
          </div>
          
          {/* Motion visualization */}
          <div style={{ background: colors.white, borderRadius: '12px', padding: '24px', border: `1px solid ${colors.gray[200]}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Simplified frame sequence representation */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {[0, 1, 2, 3].map(frame => (
                <div key={frame} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '60px', height: '60px', borderRadius: '8px',
                    background: colors.gray[100], border: `1px solid ${colors.gray[200]}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px', color: colors.gray[400]
                  }}>
                    Frame {frame + 1}
                  </div>
                  <div style={{ fontSize: '9px', color: colors.gray[400], marginTop: '4px' }}>{frame * parseInt(defined.motionSpecs[activeMotion].duration) / 3}ms</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '24px', padding: '16px 20px', background: colors.purple + '08', borderRadius: '10px', borderLeft: `3px solid ${colors.purple}` }}>
          <div style={{ fontSize: '14px', color: colors.gray[700], lineHeight: 1.6 }}>
            <strong>Design rationale:</strong> Motion serves communication, not decoration. Spring easing on successful drops signals completion without requiring text. 
            The shake on invalid drops indicates rejection without punitive feedback. Every animation has a defined purpose.
          </div>
        </div>
      </Section>

      <Divider />

      {/* States and Edge Cases */}
      <Section>
        <SectionLabel>Edge Cases</SectionLabel>
        <SectionTitle>Designing for the unhappy path</SectionTitle>
        <P>Design quality is determined by edge case handling. All states were documented prior to engineering handoff.</P>
        
        <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', marginTop: '24px', flexWrap: 'wrap' }}>
          {defined.states.map((s, i) => (
            <button key={i} onClick={() => setActiveState(i)} style={{
              padding: '8px 16px',
              background: activeState === i ? colors.gray[800] : colors.white,
              color: activeState === i ? colors.white : colors.gray[600],
              border: `1px solid ${activeState === i ? colors.gray[800] : colors.gray[200]}`,
              borderRadius: '6px', fontSize: '12px', cursor: 'pointer'
            }}>{s.name}</button>
          ))}
        </div>
      </Section>

      <Section wide bg={colors.gray[50]}>
        <BrowserFrame title={defined.states[activeState].name + ': ' + defined.states[activeState].desc}>
          <div style={{ padding: '20px', minHeight: '340px', background: '#F8FAFC' }}>
            {activeState === 0 && (
              /* Empty state */
              <div style={{ display: 'flex', height: '300px', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                  <div style={{ width: '80px', height: '80px', background: colors.gray[200], borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: colors.gray[400] }}>+</div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: colors.gray[800], marginBottom: '8px' }}>Create your first chart</div>
                  <div style={{ fontSize: '14px', color: colors.gray[500], marginBottom: '24px', lineHeight: 1.6 }}>Connect a data source or upload a CSV to get started. We'll help you visualize it in seconds.</div>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button style={{ padding: '12px 24px', background: colors.accent, color: colors.white, border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 500 }}>Upload CSV</button>
                    <button style={{ padding: '12px 24px', background: colors.white, color: colors.gray[700], border: `1px solid ${colors.gray[300]}`, borderRadius: '8px', fontSize: '14px' }}>Connect data source</button>
                  </div>
                  <div style={{ marginTop: '24px', fontSize: '13px', color: colors.accent, cursor: 'pointer' }}>Try with sample data →</div>
                </div>
              </div>
            )}
            
            {activeState === 1 && (
              /* Loading state */
              <div style={{ display: 'flex', height: '300px', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '48px', height: '48px', border: `3px solid ${colors.gray[200]}`, borderTopColor: colors.accent, borderRadius: '50%', margin: '0 auto 16px', animation: 'spin 1s linear infinite' }} />
                  <div style={{ fontSize: '14px', color: colors.gray[600] }}>Crunching 12,847 rows...</div>
                  <div style={{ fontSize: '12px', color: colors.gray[400], marginTop: '4px' }}>This usually takes a few seconds</div>
                </div>
              </div>
            )}
            
            {activeState === 2 && (
              /* Data error state */
              <div style={{ display: 'flex', height: '300px', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', maxWidth: '440px' }}>
                  <div style={{ width: '64px', height: '64px', background: colors.red + '15', borderRadius: '50%', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: colors.red, fontWeight: 600 }}>!</div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: colors.gray[800], marginBottom: '8px' }}>We found some issues with your data</div>
                  <div style={{ padding: '16px', background: colors.white, borderRadius: '8px', border: `1px solid ${colors.gray[200]}`, marginBottom: '16px', textAlign: 'left' }}>
                    <div style={{ fontSize: '13px', color: colors.gray[700], marginBottom: '8px' }}>
                      <strong>Column "revenue":</strong> Contains 23 non-numeric values (e.g., "N/A", "#REF!")
                    </div>
                    <div style={{ fontSize: '13px', color: colors.gray[700] }}>
                      <strong>Row 847:</strong> Missing required field "date"
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button style={{ padding: '10px 20px', background: colors.accent, color: colors.white, border: 'none', borderRadius: '6px', fontSize: '13px' }}>Skip invalid rows (12,824 remaining)</button>
                    <button style={{ padding: '10px 20px', background: colors.white, color: colors.gray[700], border: `1px solid ${colors.gray[300]}`, borderRadius: '6px', fontSize: '13px' }}>Re-upload fixed file</button>
                  </div>
                </div>
              </div>
            )}
            
            {activeState === 3 && (
              /* Render error */
              <div style={{ display: 'flex', height: '300px', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                  <div style={{ width: '64px', height: '64px', background: colors.orange + '15', borderRadius: '50%', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: colors.orange, fontWeight: 600 }}>!</div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: colors.gray[800], marginBottom: '8px' }}>Too many data points to render</div>
                  <div style={{ fontSize: '14px', color: colors.gray[500], marginBottom: '20px', lineHeight: 1.6 }}>
                    Your dataset has 847,293 rows. Browsers struggle with more than ~50,000 points.
                  </div>
                  <div style={{ padding: '12px 16px', background: colors.gray[100], borderRadius: '8px', fontSize: '13px', color: colors.gray[600], marginBottom: '16px' }}>
                    Showing sampled view: <strong>50,000 of 847,293 rows</strong>
                  </div>
                  <button style={{ padding: '10px 20px', background: colors.white, color: colors.gray[700], border: `1px solid ${colors.gray[300]}`, borderRadius: '6px', fontSize: '13px' }}>Download full dataset instead</button>
                </div>
              </div>
            )}
            
            {activeState === 4 && (
              /* Partial mapping */
              <div style={{ display: 'flex', gap: '16px', height: '300px' }}>
                <div style={{ width: '160px', background: colors.white, borderRadius: '10px', padding: '12px', border: `1px solid ${colors.gray[200]}` }}>
                  <div style={{ fontSize: '10px', color: colors.gray[400], marginBottom: '8px' }}>COLUMNS</div>
                  {['date', 'revenue', 'region'].map((c, i) => (
                    <div key={i} style={{ padding: '8px', border: `1px solid ${i === 0 ? colors.accent + '40' : colors.gray[200]}`, borderRadius: '6px', marginBottom: '4px', fontSize: '11px', background: i === 0 ? colors.accent + '08' : colors.white }}>{c}</div>
                  ))}
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1, background: colors.white, borderRadius: '10px', border: `1px solid ${colors.gray[200]}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', color: colors.gray[400] }}>
                      <div style={{ fontSize: '14px', marginBottom: '8px' }}>Almost there!</div>
                      <div style={{ fontSize: '12px' }}>Drop a column on Y-axis to see your chart</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <div style={{ flex: 1, padding: '12px', border: `2px solid ${colors.green}`, borderRadius: '8px', background: colors.green + '08' }}>
                      <div style={{ fontSize: '9px', color: colors.green }}>X-AXIS</div>
                      <div style={{ fontSize: '12px', color: colors.green, fontWeight: 500 }}>date</div>
                    </div>
                    <div style={{ flex: 1, padding: '12px', border: `2px dashed ${colors.accent}`, borderRadius: '8px', background: colors.accent + '08', animation: 'pulse 2s infinite' }}>
                      <div style={{ fontSize: '9px', color: colors.accent }}>Y-AXIS (required)</div>
                      <div style={{ fontSize: '11px', color: colors.accent }}>Drop number column</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeState === 5 && (
              /* Column overflow */
              <div style={{ display: 'flex', gap: '16px', height: '300px' }}>
                <div style={{ width: '200px', background: colors.white, borderRadius: '10px', padding: '12px', border: `1px solid ${colors.gray[200]}`, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ fontSize: '10px', color: colors.gray[400] }}>COLUMNS (57)</div>
                    <input type="text" placeholder="Search..." style={{ padding: '4px 8px', border: `1px solid ${colors.gray[200]}`, borderRadius: '4px', fontSize: '10px', width: '80px' }} />
                  </div>
                  <div style={{ flex: 1, overflowY: 'auto' }}>
                    {['date', 'revenue', 'region', 'product_category', 'customer_id', 'sales_rep', 'deal_size', 'quarter', 'year', 'month', 'is_enterprise', '...'].map((c, i) => (
                      <div key={i} style={{ padding: '6px 8px', border: `1px solid ${colors.gray[200]}`, borderRadius: '4px', marginBottom: '3px', fontSize: '10px', color: i === 11 ? colors.gray[400] : colors.gray[700] }}>{c}</div>
                    ))}
                  </div>
                  <div style={{ padding: '8px', background: colors.gray[50], borderRadius: '6px', fontSize: '10px', color: colors.gray[500], marginTop: '8px' }}>Showing 12 of 57 columns</div>
                </div>
                <div style={{ flex: 1, background: colors.white, borderRadius: '10px', border: `1px solid ${colors.gray[200]}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center', color: colors.gray[400], fontSize: '13px' }}>Use search to find columns quickly</div>
                </div>
              </div>
            )}
            
            {activeState === 6 && (
              /* Long column names */
              <div style={{ display: 'flex', gap: '16px', height: '300px' }}>
                <div style={{ width: '220px', background: colors.white, borderRadius: '10px', padding: '12px', border: `1px solid ${colors.gray[200]}` }}>
                  <div style={{ fontSize: '10px', color: colors.gray[400], marginBottom: '8px' }}>COLUMNS</div>
                  {[
                    'monthly_recurring_revenue_usd',
                    'customer_lifetime_value_predicted',
                    'date',
                    'region'
                  ].map((c, i) => (
                    <div key={i} style={{ padding: '8px', border: `1px solid ${colors.gray[200]}`, borderRadius: '6px', marginBottom: '4px', fontSize: '11px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', position: 'relative' }} title={c}>
                      {c}
                      {c.length > 25 && <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '30px', background: 'linear-gradient(90deg, transparent, white)' }} />}
                    </div>
                  ))}
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1, background: colors.white, borderRadius: '10px', border: `1px solid ${colors.gray[200]}`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '8px', padding: '16px' }}>
                    {[40, 55, 45, 70].map((h, i) => (
                      <div key={i} style={{ width: '30px', height: `${h * 2}px`, background: colors.accent, borderRadius: '4px 4px 0 0' }} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <div style={{ flex: 1, padding: '10px', border: `2px solid ${colors.green}`, borderRadius: '8px', background: colors.green + '08', overflow: 'hidden' }}>
                      <div style={{ fontSize: '9px', color: colors.green }}>X-AXIS</div>
                      <div style={{ fontSize: '11px', color: colors.green, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title="monthly_recurring_revenue_usd">monthly_recurri...</div>
                    </div>
                    <div style={{ flex: 1, padding: '10px', border: `2px solid ${colors.accent}`, borderRadius: '8px', background: colors.accent + '08' }}>
                      <div style={{ fontSize: '9px', color: colors.accent }}>Y-AXIS</div>
                      <div style={{ fontSize: '11px', color: colors.accent, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title="customer_lifetime_value_predicted">customer_lifeti...</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </BrowserFrame>
      </Section>

      <Divider />

      {/* Accessibility */}
      <Section>
        <SectionLabel>Accessibility</SectionLabel>
        <SectionTitle>Designing for everyone</SectionTitle>
        <P>Accessibility was a constraint from project initiation, not a post-hoc consideration.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '24px' }}>
          {defined.accessibility.map((a, i) => (
            <div key={i} style={{ padding: '20px', background: colors.gray[50], borderRadius: '12px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: colors.gray[800], marginBottom: '12px' }}>{a.area}</div>
              <div style={{ fontSize: '13px', color: colors.gray[600], marginBottom: '12px', lineHeight: 1.7 }}>{a.solution}</div>
              <div style={{ padding: '10px 12px', background: colors.white, borderRadius: '8px', fontSize: '12px' }}>
                <span style={{ fontWeight: 600, color: colors.gray[700] }}>Testing: </span>
                <span style={{ color: colors.gray[600] }}>{a.testing}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Color palette accessibility */}
      <Section wide bg={colors.gray[50]}>
        <SubsectionTitle style={{ marginTop: 0 }}>Color palette: tested for colorblindness</SubsectionTitle>
        <P>The default palette was designed to maintain distinguishability across all common forms of color vision deficiency.</P>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '20px' }}>
          {[
            { label: 'Normal vision', colors: [colors.accent, colors.green, colors.orange, colors.purple] },
            { label: 'Protanopia', colors: ['#4A6FE3', '#8B8B00', '#C8A030', '#6B5B95'] },
            { label: 'Deuteranopia', colors: ['#4A6FE3', '#9B9B00', '#D4A040', '#7B6BA5'] },
            { label: 'Tritanopia', colors: ['#5080B0', '#40A0A0', '#E08080', '#A060A0'] }
          ].map((view, i) => (
            <div key={i} style={{ padding: '16px', background: colors.white, borderRadius: '10px', border: `1px solid ${colors.gray[200]}` }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: colors.gray[700], marginBottom: '12px' }}>{view.label}</div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                {view.colors.map((c, j) => (
                  <div key={j} style={{ width: '32px', height: '32px', borderRadius: '6px', background: c }} />
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '60px' }}>
                {[40, 55, 35, 50].map((h, j) => (
                  <div key={j} style={{ flex: 1, height: `${h}px`, background: view.colors[j], borderRadius: '3px 3px 0 0' }} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '20px', padding: '16px 20px', background: colors.white, borderRadius: '10px', border: `1px solid ${colors.gray[200]}` }}>
          <div style={{ fontSize: '14px', color: colors.gray[700], lineHeight: 1.6 }}>
            <strong>Pattern fills for complete color independence:</strong> For users requiring additional encoding, pattern fills 
            (stripes, dots, crosshatch) are available as a secondary visual channel. Toggle accessible in toolbar.
          </div>
        </div>
      </Section>

      <Divider />

      {/* Design System Components */}
      <Section>
        <SectionLabel>Design System</SectionLabel>
        <SectionTitle>Components I contributed</SectionTitle>
        <P>Four new components were contributed to PlotMind's design system, each with comprehensive documentation.</P>
        
        <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', marginTop: '24px' }}>
          {[
            { name: 'Column Pill', variants: 5 },
            { name: 'Drop Zone', variants: 4 },
            { name: 'Chart Canvas', variants: 4 },
            { name: 'Suggestion Card', variants: 4 }
          ].map((c, i) => (
            <button key={i} onClick={() => setActiveComponent(i)} style={{
              padding: '10px 18px',
              background: activeComponent === i ? colors.gray[800] : colors.white,
              color: activeComponent === i ? colors.white : colors.gray[600],
              border: `1px solid ${activeComponent === i ? colors.gray[800] : colors.gray[200]}`,
              borderRadius: '8px', fontSize: '13px', cursor: 'pointer'
            }}>{c.name} <span style={{ opacity: 0.5, marginLeft: '4px' }}>({c.variants})</span></button>
          ))}
        </div>
      </Section>

      <Section wide bg={colors.gray[50]}>
        {/* Component documentation view */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Component states */}
          <div style={{ background: colors.white, borderRadius: '12px', padding: '24px', border: `1px solid ${colors.gray[200]}` }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: colors.gray[800], marginBottom: '20px' }}>
              {['Column Pill', 'Drop Zone', 'Chart Canvas', 'Suggestion Card'][activeComponent]} States
            </div>
            
            {activeComponent === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { state: 'Default', style: { bg: colors.white, border: colors.gray[200] } },
                  { state: 'Hover', style: { bg: colors.white, border: colors.accent, shadow: true, lift: true } },
                  { state: 'Dragging', style: { bg: colors.white, border: colors.accent, shadow: true, opacity: 0.9 } },
                  { state: 'Mapped', style: { bg: colors.accent + '08', border: colors.accent + '40' } },
                  { state: 'Disabled', style: { bg: colors.gray[100], border: colors.gray[200], opacity: 0.5 } }
                ].map((variant, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '80px', fontSize: '12px', color: colors.gray[500] }}>{variant.state}</div>
                    <div style={{
                      padding: '10px 14px',
                      background: variant.style.bg,
                      border: `1px solid ${variant.style.border}`,
                      borderRadius: '8px',
                      display: 'flex', alignItems: 'center', gap: '10px',
                      boxShadow: variant.style.shadow ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                      transform: variant.style.lift ? 'translateY(-2px)' : 'none',
                      opacity: variant.style.opacity || 1
                    }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '5px', background: colors.accent + '15', color: colors.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600 }}>#</div>
                      <span style={{ fontSize: '13px', fontFamily: "'IBM Plex Mono', monospace", color: colors.gray[800] }}>revenue</span>
                      {variant.state === 'Mapped' && <span style={{ fontSize: '10px', color: colors.accent, fontWeight: 500 }}>Y-axis</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeComponent === 1 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { state: 'Empty', border: '2px dashed', borderColor: colors.gray[300], bg: 'transparent' },
                  { state: 'Valid hover', border: '2px solid', borderColor: colors.green, bg: colors.green + '08' },
                  { state: 'Invalid hover', border: '2px solid', borderColor: colors.red, bg: colors.red + '08' },
                  { state: 'Filled', border: '2px solid', borderColor: colors.accent, bg: colors.accent + '08' }
                ].map((variant, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '11px', color: colors.gray[500], marginBottom: '8px' }}>{variant.state}</div>
                    <div style={{
                      padding: '16px', textAlign: 'center',
                      border: variant.border, borderColor: variant.borderColor,
                      borderRadius: '10px', background: variant.bg
                    }}>
                      <div style={{ fontSize: '10px', color: variant.borderColor || colors.gray[400], marginBottom: '4px' }}>Y-AXIS</div>
                      {i === 3 ? (
                        <div style={{ fontSize: '13px', fontWeight: 500, color: colors.accent }}>revenue</div>
                      ) : (
                        <div style={{ fontSize: '11px', color: colors.gray[400] }}>
                          {i === 2 ? 'Text not allowed' : 'Drop number column'}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeComponent === 2 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {['Empty', 'Loading', 'Rendered', 'Error'].map((state, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '11px', color: colors.gray[500], marginBottom: '8px' }}>{state}</div>
                    <div style={{ height: '120px', background: colors.gray[100], borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {i === 0 && <div style={{ color: colors.gray[400], fontSize: '11px' }}>Drop columns to start</div>}
                      {i === 1 && <div style={{ width: '24px', height: '24px', border: `2px solid ${colors.gray[300]}`, borderTopColor: colors.accent, borderRadius: '50%' }} />}
                      {i === 2 && (
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                          {[30, 45, 35, 55, 40].map((h, j) => (
                            <div key={j} style={{ width: '12px', height: `${h}px`, background: colors.accent, borderRadius: '2px 2px 0 0' }} />
                          ))}
                        </div>
                      )}
                      {i === 3 && <div style={{ color: colors.red, fontSize: '11px' }}>Render failed</div>}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeComponent === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { type: 'Suggestion', bg: colors.accent + '08', border: colors.accent + '20', icon: '→' },
                  { type: 'Insight', bg: colors.gray[50], border: colors.gray[200], icon: '·' },
                  { type: 'Warning', bg: colors.orange + '08', border: colors.orange + '20', icon: '!' },
                  { type: 'Error', bg: colors.red + '08', border: colors.red + '20', icon: '×' }
                ].map((variant, i) => (
                  <div key={i} style={{ padding: '12px 14px', background: variant.bg, border: `1px solid ${variant.border}`, borderRadius: '10px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '16px' }}>{variant.icon}</div>
                    <div>
                      <div style={{ fontSize: '13px', color: colors.gray[800], marginBottom: '4px' }}>{variant.type} card example</div>
                      <div style={{ fontSize: '12px', color: colors.gray[500] }}>Secondary text goes here</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Specs */}
          <div style={{ background: colors.white, borderRadius: '12px', padding: '24px', border: `1px solid ${colors.gray[200]}` }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: colors.gray[800], marginBottom: '20px' }}>Specifications</div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { label: 'Height', value: activeComponent === 0 ? '44px' : activeComponent === 1 ? '64px min' : activeComponent === 2 ? '240px min' : 'auto' },
                { label: 'Border radius', value: activeComponent === 0 ? '8px' : '10px' },
                { label: 'Padding', value: activeComponent === 0 ? '10px 14px' : activeComponent === 1 ? '16px' : activeComponent === 3 ? '12px 14px' : '24px' },
                { label: 'Font size', value: '13px (name), 10px (meta)' },
                { label: 'Icon size', value: '22px' },
                { label: 'Gap', value: '10px' },
                { label: 'Transition', value: 'all 150ms ease-out' },
                { label: 'Shadow (hover)', value: '0 4px 12px rgba(0,0,0,0.1)' }
              ].map((spec, i) => (
                <div key={i} style={{ padding: '10px 12px', background: colors.gray[50], borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: colors.gray[400], marginBottom: '2px' }}>{spec.label}</div>
                  <div style={{ fontSize: '12px', fontFamily: "'IBM Plex Mono', monospace", color: colors.gray[800] }}>{spec.value}</div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '20px', padding: '12px 14px', background: colors.gray[50], borderRadius: '8px' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: colors.gray[700], marginBottom: '8px' }}>Accessibility</div>
              <div style={{ fontSize: '12px', color: colors.gray[600], lineHeight: 1.6 }}>
                {activeComponent === 0 && 'role="option", aria-selected, keyboard: Enter to grab, arrows to move'}
                {activeComponent === 1 && 'aria-dropeffect, aria-label describes accepted types'}
                {activeComponent === 2 && 'Auto-generated alt text, data table alternative available'}
                {activeComponent === 3 && 'role="alert" for warnings/errors, dismissible with Escape'}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Tradeoffs */}
      <Section>
        <SectionLabel>Tradeoffs</SectionLabel>
        <SectionTitle>What I fought for and lost</SectionTitle>
        <P>Not every proposal was implemented. The following documents constraints, compromises, and retrospective analysis.</P>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
          {defined.tradeoffs.map((t, i) => (
            <div key={i} style={{ padding: '20px', background: colors.gray[50], borderRadius: '12px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: '24px' }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: colors.gray[800], marginBottom: '8px' }}>{t.decision}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: colors.gray[500], marginBottom: '6px', textTransform: 'uppercase' }}>What I wanted</div>
                  <div style={{ fontSize: '13px', color: colors.gray[700], lineHeight: 1.6 }}>{t.wantedTo}</div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: colors.gray[500], marginBottom: '6px', marginTop: '12px', textTransform: 'uppercase' }}>What shipped</div>
                  <div style={{ fontSize: '13px', color: colors.gray[600], lineHeight: 1.6 }}>{t.reality}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: colors.orange, marginBottom: '6px', textTransform: 'uppercase' }}>What I'd change</div>
                  <div style={{ fontSize: '13px', color: colors.gray[700], lineHeight: 1.6 }}>{t.wouldChange}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Outcomes */}
      <Section>
        <SectionLabel>Results</SectionLabel>
        <SectionTitle>Outcomes</SectionTitle>
        <P>Launched June 2024. All primary metrics improved significantly.</P>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', margin: '32px 0' }}>
          {defined.outcomes.map((o, i) => (
            <div key={i} style={{ padding: '20px', background: colors.gray[50], borderRadius: '12px' }}>
              <div style={{ fontSize: '11px', color: colors.gray[400], marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{o.metric}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '14px', color: colors.gray[400], textDecoration: 'line-through' }}>{o.before}</span>
                <span style={{ color: colors.gray[300] }}>→</span>
                <span style={{ fontSize: '32px', fontWeight: 600, color: colors.gray[900] }}>{o.after}</span>
              </div>
              <div style={{ fontSize: '14px', color: colors.green, fontWeight: 600 }}>{o.change}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer style={{ padding: '48px 32px', borderTop: `1px solid ${colors.gray[200]}`, textAlign: 'center' }}>
        <div style={{ fontSize: '12px', color: colors.gray[400] }}>
          PlotMind Case Study · Q2 2024
        </div>
      </footer>

      {/* CSS for animations */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default PlotMindCaseStudy;