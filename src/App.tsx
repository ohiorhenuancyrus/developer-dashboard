import { useState } from 'react'

/* ── icons (inline SVG) ── */
const Icon = {
  Sun: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ),
  Moon: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  Menu: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Github: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  Star: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Fork: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/>
      <path d="M6 9v6M18 9a9 9 0 0 1-9 9"/>
    </svg>
  ),
  Link: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  Code: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Book: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  Trophy: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 7 4 7 4 3 20 3 20 7 16 7"/>
      <path d="M8 21v-4h8v4"/>
      <path d="M4 7c0 6 4 10 8 10s8-4 8-10"/>
      <line x1="10" y1="21" x2="14" y2="21"/>
    </svg>
  ),
}

/* ── data ── */
const NAV_ITEMS = ['Profile', 'Projects', 'Skills', 'Repositories', 'Learning']

const SKILLS = [
  { name: 'TypeScript', level: 92, cat: 'Language', color: '#3178c6' },
  { name: 'React', level: 88, cat: 'Frontend', color: '#61dafb' },
  { name: 'Node.js', level: 80, cat: 'Backend', color: '#68a063' },
  { name: 'Python', level: 76, cat: 'Language', color: '#f7c948' },
  { name: 'PostgreSQL', level: 71, cat: 'Database', color: '#336791' },
  { name: 'Docker', level: 65, cat: 'DevOps', color: '#2496ed' },
  { name: 'GraphQL', level: 60, cat: 'API', color: '#e10098' },
  { name: 'Rust', level: 42, cat: 'Language', color: '#ce422b' },
]

const PROJECTS = [
  {
    name: 'Synaptic UI',
    desc: 'Accessible component library with 60+ primitives, full keyboard nav, and a themeable design token system.',
    stack: ['TypeScript', 'React', 'Storybook'],
    stars: 1240,
    status: 'production',
    color: '#00d4ff',
  },
  {
    name: 'Vaultex',
    desc: 'End-to-end encrypted note-taking app with real-time collaboration, conflict resolution via CRDT.',
    stack: ['Rust', 'WebAssembly', 'SvelteKit'],
    stars: 876,
    status: 'beta',
    color: '#7c3aed',
  },
  {
    name: 'Grafana Flux',
    desc: 'Plugin ecosystem for Grafana adding AI-assisted anomaly detection and natural language queries.',
    stack: ['Go', 'Python', 'React'],
    stars: 543,
    status: 'alpha',
    color: '#f59e0b',
  },
  {
    name: 'DevFlow CLI',
    desc: 'Terminal productivity suite — smart git shortcuts, project scaffolding, and environment bootstrapping.',
    stack: ['Node.js', 'Ink', 'TypeScript'],
    stars: 398,
    status: 'production',
    color: '#10b981',
  },
]

const REPOS = [
  { name: 'synaptic-ui', lang: 'TypeScript', stars: 1240, forks: 89, updated: '2h ago', color: '#3178c6' },
  { name: 'vaultex', lang: 'Rust', stars: 876, forks: 52, updated: '1d ago', color: '#ce422b' },
  { name: 'grafana-flux', lang: 'Go', stars: 543, forks: 41, updated: '3d ago', color: '#00add8' },
  { name: 'devflow-cli', lang: 'TypeScript', stars: 398, forks: 28, updated: '5d ago', color: '#3178c6' },
  { name: 'crdt-experiments', lang: 'Rust', stars: 211, forks: 16, updated: '1w ago', color: '#ce422b' },
  { name: 'ml-notebooks', lang: 'Python', stars: 187, forks: 34, updated: '2w ago', color: '#f7c948' },
]

const LEARNING = [
  { topic: 'Advanced Rust Patterns', provider: 'Jon Gjengset', progress: 72, total: 24, done: 17, color: '#ce422b' },
  { topic: 'Distributed Systems Design', provider: 'MIT OpenCourseWare', progress: 58, total: 32, done: 19, color: '#7c3aed' },
  { topic: 'WebGPU & Real-time Graphics', provider: 'WebGPU Fundamentals', progress: 35, total: 18, done: 6, color: '#00d4ff' },
  { topic: 'Category Theory for Programmers', provider: 'Bartosz Milewski', progress: 20, total: 40, done: 8, color: '#10b981' },
]

const STATS = [
  { label: 'Contributions', value: '2,847', sub: 'this year' },
  { label: 'Repositories', value: '64', sub: 'public' },
  { label: 'Stars Earned', value: '3,254', sub: 'total' },
  { label: 'Pull Requests', value: '412', sub: 'merged' },
]

/* ── components ── */
function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    production: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    beta: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    alpha: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
  }
  return (
    <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border ${map[status] ?? ''}`}>
      {status}
    </span>
  )
}

function SkillBar({ skill, light }: { skill: typeof SKILLS[0]; light: boolean }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
          <span className="text-sm font-medium" style={{ color: light ? '#0d0f14' : '#e8eaf0' }}>{skill.name}</span>
          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded" style={{
            color: light ? '#6b7494' : '#6b7494',
            backgroundColor: light ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.04)'
          }}>{skill.cat}</span>
        </div>
        <span className="font-mono text-xs" style={{ color: light ? '#6b7494' : '#6b7494' }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: light ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.06)' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
        />
      </div>
    </div>
  )
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border p-5 ${className}`} style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
      {children}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
      <span className="font-mono text-xs px-2 py-1 rounded" style={{ color: 'var(--primary)', backgroundColor: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)' }}>
        ~/
      </span>
      {children}
    </h2>
  )
}

/* ── main ── */
export default function App() {
  const [light, setLight] = useState(false)
  const [active, setActive] = useState('Profile')
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigate = (item: string) => {
    setActive(item)
    setMobileOpen(false)
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={light ? 'light' : ''} style={{ minHeight: '100vh', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 border-b" style={{ borderColor: 'var(--border)', backgroundColor: light ? 'rgba(244,245,248,0.92)' : 'rgba(13,15,20,0.92)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-mono font-bold" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>A</div>
            <span className="font-mono text-sm font-semibold hidden sm:block" style={{ color: 'var(--foreground)' }}>alex.dev</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => navigate(item)}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-all"
                style={{
                  color: active === item ? 'var(--primary)' : 'var(--muted-foreground)',
                  backgroundColor: active === item ? 'rgba(0,212,255,0.08)' : 'transparent',
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLight(!light)}
              className="w-8 h-8 rounded-md flex items-center justify-center transition-colors"
              style={{ color: 'var(--muted-foreground)', backgroundColor: 'var(--secondary)' }}
            >
              {light ? <Icon.Moon /> : <Icon.Sun />}
            </button>
            <button
              className="md:hidden w-8 h-8 rounded-md flex items-center justify-center"
              style={{ color: 'var(--muted-foreground)', backgroundColor: 'var(--secondary)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <Icon.X /> : <Icon.Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t px-4 py-3 flex flex-col gap-1" style={{ borderColor: 'var(--border)' }}>
            {NAV_ITEMS.map(item => (
              <button
                key={item}
                onClick={() => navigate(item)}
                className="text-left px-3 py-2 rounded-md text-sm font-medium"
                style={{
                  color: active === item ? 'var(--primary)' : 'var(--muted-foreground)',
                  backgroundColor: active === item ? 'rgba(0,212,255,0.08)' : 'transparent',
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-20">

        {/* ── PROFILE ── */}
        <section id="profile">
          <div className="grid md:grid-cols-[1fr_320px] gap-8 items-start">
            {/* Left: bio */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs" style={{ color: 'var(--muted-foreground)' }}>
                <span style={{ color: 'var(--primary)' }}>▶</span>
                <span>whoami</span>
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-3">
                  Alex Chen
                </h1>
                <p className="text-lg font-mono" style={{ color: 'var(--primary)' }}>
                  Senior Software Engineer
                </p>
                <p className="mt-4 leading-relaxed" style={{ color: 'var(--muted-foreground)', maxWidth: '55ch' }}>
                  Building tools that developers love. Obsessed with performance, ergonomics, and open source. Currently shipping distributed systems infrastructure at a stealth startup.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['San Francisco, CA', 'Open to work', '8 yrs exp'].map(tag => (
                  <span key={tag} className="font-mono text-xs px-3 py-1.5 rounded-full border" style={{ color: 'var(--muted-foreground)', borderColor: 'var(--border)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                  <Icon.Github /> GitHub
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all hover:border-current" style={{ color: 'var(--muted-foreground)', borderColor: 'var(--border)' }}>
                  <Icon.Link /> Portfolio
                </a>
              </div>
            </div>

            {/* Right: stats */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map(s => (
                <Card key={s.label} className="text-center">
                  <div className="text-2xl font-bold font-mono" style={{ color: 'var(--primary)' }}>{s.value}</div>
                  <div className="text-xs font-medium mt-1">{s.label}</div>
                  <div className="font-mono text-[10px] mt-0.5" style={{ color: 'var(--muted-foreground)' }}>{s.sub}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROJECTS.map(p => (
              <Card key={p.name} className="flex flex-col gap-4 group hover:border-current transition-all" style={{ '--tw-border-opacity': 1 } as React.CSSProperties}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                      <h3 className="font-bold text-base">{p.name}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>{p.desc}</p>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map(s => (
                      <span key={s} className="font-mono text-[11px] px-2 py-0.5 rounded" style={{ color: 'var(--muted-foreground)', backgroundColor: 'var(--muted)' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 font-mono text-xs shrink-0 ml-2" style={{ color: 'var(--muted-foreground)' }}>
                    <Icon.Star /> {p.stars.toLocaleString()}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {SKILLS.map(s => <SkillBar key={s.name} skill={s} light={light} />)}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {['AWS', 'GCP', 'Kubernetes', 'Terraform', 'Redis', 'Kafka', 'Next.js', 'tRPC', 'Prisma', 'Vitest', 'Playwright', 'CI/CD'].map(tag => (
              <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded border" style={{ color: 'var(--muted-foreground)', borderColor: 'var(--border)' }}>
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── REPOSITORIES ── */}
        <section id="repositories">
          <SectionTitle>Repositories</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REPOS.map(r => (
              <Card key={r.name} className="flex flex-col gap-3 hover:translate-y-[-1px] transition-all cursor-pointer">
                <div className="flex items-center gap-2">
                  <Icon.Github />
                  <span className="font-mono text-sm font-semibold" style={{ color: 'var(--primary)' }}>{r.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono" style={{ color: 'var(--muted-foreground)' }}>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: r.color }} />
                      {r.lang}
                    </span>
                    <span className="flex items-center gap-1"><Icon.Star /> {r.stars}</span>
                    <span className="flex items-center gap-1"><Icon.Fork /> {r.forks}</span>
                  </div>
                  <span>{r.updated}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Contribution heatmap (decorative) */}
          <Card className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">2,847 contributions in the last year</span>
              <span className="font-mono text-xs" style={{ color: 'var(--muted-foreground)' }}>2025–2026</span>
            </div>
            <ContributionGrid light={light} />
          </Card>
        </section>

        {/* ── LEARNING ── */}
        <section id="learning" className="pb-20">
          <SectionTitle>Learning Progress</SectionTitle>
          <div className="space-y-4">
            {LEARNING.map(l => (
              <Card key={l.topic}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${l.color}15`, border: `1px solid ${l.color}30` }}>
                    <Icon.Book />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start sm:items-center justify-between gap-2 flex-wrap mb-2">
                      <div>
                        <h3 className="font-semibold text-sm">{l.topic}</h3>
                        <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--muted-foreground)' }}>{l.provider}</p>
                      </div>
                      <span className="font-mono text-xs shrink-0" style={{ color: 'var(--muted-foreground)' }}>{l.done}/{l.total} lessons</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--muted)' }}>
                        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${l.progress}%`, backgroundColor: l.color }} />
                      </div>
                      <span className="font-mono text-xs w-8 text-right shrink-0" style={{ color: l.color }}>{l.progress}%</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Achievement strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Courses Completed', value: '34', icon: <Icon.Book /> },
              { label: 'Certifications', value: '7', icon: <Icon.Trophy /> },
              { label: 'Hours Logged', value: '1,840', icon: <Icon.Code /> },
              { label: 'Streak', value: '62d', icon: <Icon.Star /> },
            ].map(a => (
              <Card key={a.label} className="text-center">
                <div className="flex justify-center mb-2" style={{ color: 'var(--primary)' }}>{a.icon}</div>
                <div className="font-mono text-xl font-bold">{a.value}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>{a.label}</div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

/* ── Contribution heatmap ── */
function ContributionGrid({ light }: { light: boolean }) {
  const weeks = 52
  const days = 7
  const seed = (w: number, d: number) => {
    const h = Math.sin(w * 31 + d * 7) * 43758.5453
    return h - Math.floor(h)
  }
  const levels = (v: number) => {
    if (v < 0.35) return 0
    if (v < 0.55) return 1
    if (v < 0.72) return 2
    if (v < 0.88) return 3
    return 4
  }
  const colors = light
    ? ['#e5e7eb', '#bfdbfe', '#60a5fa', '#2563eb', '#1d4ed8']
    : ['rgba(255,255,255,0.05)', 'rgba(0,212,255,0.15)', 'rgba(0,212,255,0.35)', 'rgba(0,212,255,0.65)', '#00d4ff']

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px]" style={{ minWidth: 'max-content' }}>
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }).map((_, d) => {
              const v = seed(w, d)
              const lv = levels(v)
              return (
                <div
                  key={d}
                  className="w-[10px] h-[10px] rounded-[2px]"
                  style={{ backgroundColor: colors[lv] }}
                  title={`${lv * 3} contributions`}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
