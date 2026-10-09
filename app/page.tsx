"use client";

import { useEffect, useRef, useState } from "react";

const whatsappMessage = encodeURIComponent(
  "Olá, Gabriel! Quero saber mais sobre personal presencial ou consultoria online."
);
const whatsappNumber = "5535998044984";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const contactEmail = "gabrielbl13i@hotmail.com";
const instagramUrl = "https://www.instagram.com/treinadorgabriel10/";

type SkillIconName = "training" | "online" | "progress" | "strength" | "weightLoss" | "health";

const benefits: Array<{ icon: SkillIconName; label: string }> = [
  { icon: "training", label: "Treino personalizado" },
  { icon: "online", label: "Consultoria online" },
  { icon: "progress", label: "Evolução" },
  { icon: "strength", label: "Hipertrofia" },
  { icon: "weightLoss", label: "Emagrecimento" },
  { icon: "health", label: "Saúde" },
];

const choiceCards = [
  {
    icon: "01",
    title: "Treino individual",
    text: "Cada sessão respeita seu nível, sua rotina e o resultado que você quer alcançar.",
  },
  {
    icon: "02",
    title: "Consultoria online",
    text: "Planejamento, vídeos explicativos e ajustes à distância para você treinar com direção onde estiver.",
  },
  {
    icon: "03",
    title: "Acompanhamento diário",
    text: "Suporte próximo para ajustar a rota, manter o foco e vencer as semanas difíceis.",
  },
  {
    icon: "04",
    title: "Avaliações frequentes",
    text: "Dados claros para acompanhar sua evolução e fazer cada treino render mais.",
  },
  {
    icon: "05",
    title: "Resultados reais",
    text: "Estratégia, consistência e método — sem promessas mágicas ou treino genérico.",
  },
  {
    icon: "06",
    title: "Atendimento humanizado",
    text: "Uma parceria de verdade, com escuta, incentivo e atenção em cada detalhe.",
  },
];

const steps = [
  ["01", "Avaliação física", "Entendemos seu histórico, sua rotina e seu ponto de partida."],
  ["02", "Planejamento personalizado", "Criamos uma estratégia objetiva, segura e possível de seguir."],
  ["03", "Treinos semanais", "Você treina com técnica, intensidade e acompanhamento próximo."],
  ["04", "Evolução constante", "Medimos, ajustamos e avançamos até o resultado acontecer."],
];

const transformations = [
  {
    name: "Mariana",
    time: "12 semanas",
    result: "−9 kg",
    before:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=78",
    after:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=700&q=82",
  },
  {
    name: "Rafael",
    time: "16 semanas",
    result: "+6 kg massa",
    before:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=700&q=78",
    after:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=82",
  },
  {
    name: "Camila",
    time: "10 semanas",
    result: "−7 kg",
    before:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=700&q=78",
    after:
      "https://images.unsplash.com/photo-1609899464726-209befaac5bc?auto=format&fit=crop&w=700&q=82",
  },
];

const testimonials = [
  {
    name: "Amanda Ribeiro",
    role: "Aluna há 8 meses",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=82",
    text: "Eu já tinha tentado treinar várias vezes, mas nunca conseguia manter constância. Com o Gabriel, finalmente entendi o processo e hoje treino com confiança.",
  },
  {
    name: "Lucas Martins",
    role: "Aluno online",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=82",
    text: "O acompanhamento online é muito mais próximo do que eu imaginava. Tenho treino, direção e ajustes rápidos. Em quatro meses, meu corpo e minha disposição mudaram.",
  },
  {
    name: "Beatriz Souza",
    role: "Aluna há 1 ano",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=180&q=82",
    text: "O diferencial é o cuidado. Cada exercício tem um motivo, cada evolução é celebrada e eu nunca me sinto sozinha no processo.",
  },
];

const plans = [
  {
    name: "Mensal",
    eyebrow: "Comece agora",
    description: "Para dar o primeiro passo com acompanhamento profissional.",
    features: ["Planejamento individual", "Avaliação inicial", "Suporte pelo WhatsApp"],
  },
  {
    name: "Trimestral",
    eyebrow: "Melhor escolha",
    description: "Tempo, método e constância para construir uma evolução visível.",
    features: ["Tudo do plano mensal", "Reavaliações mensais", "Ajustes prioritários", "Bônus de mobilidade"],
    featured: true,
  },
  {
    name: "Semestral",
    eyebrow: "Transformação completa",
    description: "Para quem quer consolidar hábitos e buscar sua melhor versão.",
    features: ["Tudo do trimestral", "Estratégia de longo prazo", "Condições especiais"],
  },
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    const pointer = { x: 0, y: 0 };
    const particles = Array.from({ length: 44 }, (_, index) => ({
      x: (index * 83) % 1200,
      y: (index * 47) % 760,
      radius: index % 7 === 0 ? 1.7 : 0.8,
      speed: 0.08 + (index % 5) * 0.025,
      alpha: 0.12 + (index % 4) * 0.07,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 10;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 10;
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        particle.y -= particle.speed;
        if (particle.y < -4) particle.y = height + 4;
        const gradient = context.createRadialGradient(
          particle.x + pointer.x,
          particle.y + pointer.y,
          0,
          particle.x + pointer.x,
          particle.y + pointer.y,
          7
        );
        gradient.addColorStop(0, `rgba(255,92,31,${particle.alpha})`);
        gradient.addColorStop(1, "rgba(255,92,31,0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(particle.x + pointer.x, particle.y + pointer.y, 7, 0, Math.PI * 2);
        context.fill();
      }
      frame = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}

function CountUp({ end, suffix = "", prefix = "+" }: { end: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let animation = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const startedAt = performance.now();
        const duration = 1300;
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(end * eased));
          if (progress < 1) animation = requestAnimationFrame(tick);
        };
        animation = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animation);
    };
  }, [end]);

  return (
    <span ref={ref} className="number-value">
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

type ArrowDirection = "up-right" | "right" | "left" | "down";

function ArrowIcon({
  direction = "up-right",
  className = "",
}: {
  direction?: ArrowDirection;
  className?: string;
}) {
  return (
    <span
      className={`arrow-icon arrow-${direction}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    />
  );
}

function SkillIcon({ name }: { name: SkillIconName }) {
  const paths: Record<SkillIconName, React.ReactNode> = {
    training: (
      <>
        <path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" />
      </>
    ),
    online: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4M8.5 10.5a5 5 0 0 1 7 0M10.5 12.5a2.2 2.2 0 0 1 3 0" />
      </>
    ),
    progress: (
      <>
        <path d="M4 19V5M4 19h16M7 15l4-4 3 2 5-6" />
        <path d="M15 7h4v4" />
      </>
    ),
    strength: (
      <>
        <path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />
        <path d="M9 9v6M15 9v6" />
      </>
    ),
    weightLoss: (
      <>
        <path d="M7 19h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z" />
        <path d="M9 9a3.5 3.5 0 0 1 6 0M12 9l2-2" />
      </>
    ),
    health: (
      <>
        <path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.7a4.6 4.6 0 0 1 8.8 1.9Z" />
        <path d="M7 12h2l1.2-2.5L12 14l1.3-2H17" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

type EvaluationModalProps = {
  onClose: () => void;
};

function EvaluationModal({ onClose }: EvaluationModalProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Olá, Gabriel! Quero solicitar minha avaliação gratuita.",
      "",
      `Nome: ${form.get("name")}`,
      `WhatsApp: ${form.get("phone")}`,
      `Modalidade: ${form.get("modality")}`,
      `Objetivo principal: ${form.get("goal")}`,
      `Observações: ${form.get("notes") || "Não informado"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    event.currentTarget.reset();
    onClose();
  };

  return (
    <div className="evaluation-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="evaluation-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="evaluation-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="evaluation-close" type="button" aria-label="Fechar formulário" onClick={onClose}>×</button>
        <span className="evaluation-eyebrow">AVALIAÇÃO GRATUITA</span>
        <h2 id="evaluation-title">Conte um pouco<br /><em>sobre você.</em></h2>
        <p>Preencha os dados abaixo. Ao enviar, sua solicitação será preparada para o WhatsApp do Gabriel.</p>

        <form className="evaluation-form" aria-label="Solicitar avaliação gratuita" onSubmit={handleSubmit}>
          <label>
            <span>Nome completo</span>
            <input name="name" type="text" placeholder="Como podemos te chamar?" autoComplete="name" required autoFocus />
          </label>
          <label>
            <span>WhatsApp</span>
            <input name="phone" type="tel" placeholder="(00) 00000-0000" autoComplete="tel" required />
          </label>
          <label>
            <span>Modalidade</span>
            <select name="modality" defaultValue="" required>
              <option value="" disabled>Selecione uma opção</option>
              <option>Personal presencial em Itamonte</option>
              <option>Consultoria online</option>
            </select>
          </label>
          <label>
            <span>Objetivo principal</span>
            <select name="goal" defaultValue="" required>
              <option value="" disabled>Qual é o seu objetivo?</option>
              <option>Emagrecimento</option>
              <option>Hipertrofia</option>
              <option>Condicionamento físico</option>
              <option>Saúde e qualidade de vida</option>
              <option>Outro objetivo</option>
            </select>
          </label>
          <label className="evaluation-notes">
            <span>Conte um pouco mais <small>(opcional)</small></span>
            <textarea name="notes" rows={3} placeholder="Rotina, dificuldades ou algo que o Gabriel precisa saber." />
          </label>
          <button className="button button-primary evaluation-submit" type="submit">Enviar minha avaliação <ArrowIcon /></button>
          <small className="evaluation-privacy">Seus dados serão usados somente para iniciar o atendimento.</small>
        </form>
      </section>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [evaluationOpen, setEvaluationOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10%" }
    );
    revealElements.forEach((element) => observer.observe(element));

    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  useEffect(() => {
    if (!evaluationOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setEvaluationOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [evaluationOpen]);

  useEffect(() => {
    let lastScroll = Math.max(window.scrollY, 0);
    let frame = 0;
    let stopTimer: number | undefined;

    const updateScrollState = () => {
      const currentScroll = Math.max(window.scrollY, 0);
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );

      const progress = Math.min(currentScroll / scrollableHeight, 1);
      document.documentElement.style.setProperty("--scroll-glow-y", `${8 + progress * 64}vh`);
      setIsScrolled(currentScroll > 18);

      if (currentScroll > lastScroll + 2) {
        setScrollingDown(true);
        window.clearTimeout(stopTimer);
        stopTimer = window.setTimeout(() => setScrollingDown(false), 220);
      } else if (currentScroll < lastScroll - 2) {
        setScrollingDown(false);
      }

      lastScroll = currentScroll;
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(stopTimer);
      cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return (
    <div className={`site-shell${isScrolled ? " has-scrolled" : ""}${scrollingDown ? " scrolling-down" : ""}`}>
      <ParticleCanvas />

      <header className={`site-header${isScrolled ? " is-scrolled" : ""}${scrollingDown ? " is-scrolling-down" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Gabriel Personal — início">
          <span className="brand-mark"><img src="/gabriel-logo.png" alt="" /></span>
          <span>
            <strong>GABRIEL</strong>
            <small>PERSONAL</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav id="main-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#metodo" onClick={closeMenu}>Método</a>
          <a href="#resultados" onClick={closeMenu}>Resultados</a>
          <a href="#planos" onClick={closeMenu}>Planos</a>
          <a href="#depoimentos" onClick={closeMenu}>Depoimentos</a>
          <a className="mobile-nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Agendar avaliação <ArrowIcon direction="right" />
          </a>
        </nav>

        <a className="header-cta button-ripple" href={whatsappUrl} target="_blank" rel="noreferrer">
          <ArrowIcon direction="right" className="header-arrow" /> Agendar avaliação
        </a>
      </header>

      <main id="inicio">
        <section className="hero section-pad">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-copy" data-reveal="left">
            <div className="eyebrow"><span /> PERSONAL PRESENCIAL • CONSULTORIA ONLINE</div>
            <h1>
              Transforme seu corpo com <em>acompanhamento profissional.</em>
            </h1>
            <p className="hero-description">
              Personal presencial e consultoria online com treino individual, suporte próximo e evolução constante.
              Treine com direção onde estiver e comece a construir resultados reais.
            </p>
            <div className="hero-actions">
              <button className="button button-primary button-ripple" type="button" onClick={() => setEvaluationOpen(true)}>
                Quero minha avaliação gratuita <ArrowIcon />
              </button>
              <a className="button button-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">
                <span className="whatsapp-dot">●</span> Falar no WhatsApp
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=75" alt="" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=75" alt="" />
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&q=75" alt="" />
              </div>
              <div>
                <div className="stars" aria-label="5 de 5 estrelas">★★★★★</div>
                <p><strong>+300 alunos</strong> já começaram sua transformação.</p>
              </div>
            </div>
          </div>

          <div className="hero-visual" data-reveal="right">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-frame-back" aria-hidden="true" />
            <div className="hero-visual-index" aria-hidden="true">
              <strong>01</strong>
              <span>PERSONAL<br />PERFORMANCE</span>
            </div>
            <div className="hero-image-frame">
              <img
                className="hero-image"
                src="/gabriel-hero-hq.png"
                alt="Gabriel Personal em uma academia"
                fetchPriority="high"
              />
              <div className="image-vignette" />
              <div className="image-scan" aria-hidden="true" />
              <div className="image-caption"><span>FOCO</span><span>ESTRATÉGIA</span><span>RESULTADO</span></div>
            </div>

            <div className="hero-frame-tag" aria-hidden="true">
              <i /> MOVIMENTO É RESULTADO
            </div>

            <div className="floating-card body-card">
              <span className="card-kicker">EVOLUÇÃO CORPORAL</span>
              <strong>+18%</strong>
              <div className="mini-bars"><i /><i /><i /><i /><i /></div>
            </div>
            <div className="floating-card metrics-card">
              <div><span>IMC</span><strong>22.4</strong></div>
              <div><span>Massa magra</span><strong>+4.8 kg</strong></div>
              <div><span>Gordura</span><strong>−7.2%</strong></div>
            </div>
            <div className="dumbbell dumbbell-one" aria-hidden="true"><i /><b /><i /></div>
            <div className="dumbbell dumbbell-two" aria-hidden="true"><i /><b /><i /></div>
          </div>

          <a className={isScrolled ? "scroll-cue is-hidden" : "scroll-cue"} href="#metodo" aria-label="Rolar para conhecer o método">
            <span>DESCUBRA O MÉTODO</span>
            <span className="scroll-cue-icon"><ArrowIcon direction="down" /></span>
          </a>
        </section>

        <section className="benefit-rail" aria-label="Áreas de atuação" data-reveal="up">
          <div className="benefit-track">
            {[...benefits, ...benefits].map(({ icon, label }, index) => (
              <div className="benefit-item" key={`${label}-${index}`}>
                <span className="benefit-icon"><SkillIcon name={icon} /></span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="trust-strip section-pad" aria-label="Indicadores de confiança" data-reveal="up">
          <div><strong>+300</strong><span>alunos acompanhados</span></div>
          <i />
          <div><strong>+5 anos</strong><span>de experiência</span></div>
          <i />
          <div><strong>98%</strong><span>de satisfação</span></div>
          <i />
          <div><strong>100%</strong><span>foco no seu objetivo</span></div>
        </section>

        <section className="choices section-pad" id="metodo">
          <div className="section-heading" data-reveal="up">
            <div>
              <span className="section-index">01 — O DIFERENCIAL</span>
              <h2>Por que escolher<br /><em>Gabriel Personal?</em></h2>
            </div>
            <p>Você não precisa de mais um treino pronto. Precisa de um plano construído para a sua realidade — e alguém ao seu lado para fazê-lo funcionar.</p>
          </div>
          <div className="choice-grid">
            {choiceCards.map((card, index) => (
              <article className="choice-card" data-reveal="up" style={{ "--delay": `${index * 70}ms` } as React.CSSProperties} key={card.title}>
                <span className="choice-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ArrowIcon className="card-arrow" />
              </article>
            ))}
          </div>
        </section>

        <section className="process section-pad">
          <div className="process-intro" data-reveal="left">
            <span className="section-index">02 — COMO FUNCIONA</span>
            <h2>Uma estratégia simples.<br /><em>Um resultado extraordinário.</em></h2>
            <p>Do primeiro diagnóstico à sua evolução, cada etapa é pensada para tirar a dúvida do caminho e colocar ação no lugar.</p>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Começar minha jornada <ArrowIcon /></a>
          </div>
          <div className="timeline">
            {steps.map(([number, title, text], index) => (
              <article className="timeline-item" data-reveal="right" style={{ "--delay": `${index * 90}ms` } as React.CSSProperties} key={number}>
                <span className="timeline-number">{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ArrowIcon direction={index === steps.length - 1 ? "up-right" : "down"} className="timeline-arrow" />
              </article>
            ))}
          </div>
        </section>

        <section className="results section-pad" id="resultados">
          <div className="section-heading compact" data-reveal="up">
            <div>
              <span className="section-index">03 — TRANSFORMAÇÕES</span>
              <h2>O resultado fala<br /><em>mais alto.</em></h2>
            </div>
            <p>O corpo muda quando método e consistência trabalham juntos. Passe pelas imagens para ver cada evolução.</p>
          </div>
          <div className="transformation-grid">
            {transformations.map((item, index) => (
              <article className="transformation-card" data-reveal="up" style={{ "--delay": `${index * 90}ms` } as React.CSSProperties} key={item.name}>
                <div className="transformation-images">
                  <div><img src={item.before} alt={`${item.name} antes do acompanhamento`} loading="lazy" /><span>ANTES</span></div>
                  <div><img src={item.after} alt={`${item.name} depois do acompanhamento`} loading="lazy" /><span>DEPOIS</span></div>
                </div>
                <div className="transformation-info">
                  <div><strong>{item.name}</strong><span>{item.time}</span></div>
                  <b>{item.result}</b>
                </div>
              </article>
            ))}
          </div>
          <p className="results-note">Resultados variam de acordo com ponto de partida, rotina e comprometimento individual.</p>
        </section>

        <section className="numbers-section section-pad" aria-label="Gabriel Personal em números">
          <div className="number-card" data-reveal="up"><CountUp end={300} /><span>Alunos</span></div>
          <div className="number-card" data-reveal="up"><CountUp end={1500} /><span>Treinos</span></div>
          <div className="number-card" data-reveal="up"><CountUp end={98} suffix="%" prefix="" /><span>Satisfação</span></div>
          <div className="number-card" data-reveal="up"><CountUp end={5} suffix="+" prefix="" /><span>Anos</span></div>
        </section>

        <section className="testimonials section-pad" id="depoimentos">
          <div className="testimonial-stage">
            <div className="testimonial-copy" data-reveal="left">
              <span className="section-index">04 — DEPOIMENTOS</span>
              <h2>Quem começa,<br /><em>não quer parar.</em></h2>
              <div className="testimonial-controls">
                <button type="button" aria-label="Depoimento anterior" onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}><ArrowIcon direction="left" /></button>
                <span className="testimonial-count">{String(activeTestimonial + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
                <button type="button" aria-label="Próximo depoimento" onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}><ArrowIcon direction="right" /></button>
              </div>
            </div>
            <div className="testimonial-slider" data-reveal="right" aria-live="polite">
              {testimonials.map((testimonial, index) => (
                <article className={index === activeTestimonial ? "testimonial-card is-active" : "testimonial-card"} aria-hidden={index !== activeTestimonial} key={testimonial.name}>
                  <div className="quote-mark">“</div>
                  <div className="stars" aria-label="5 de 5 estrelas">★★★★★</div>
                  <blockquote>{testimonial.text}</blockquote>
                  <footer>
                    <img src={testimonial.photo} alt={`Foto de ${testimonial.name}`} loading="lazy" />
                    <div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div>
                    <i>✓</i>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="plans section-pad" id="planos">
          <div className="section-heading compact" data-reveal="up">
            <div>
              <span className="section-index">05 — PLANOS</span>
              <h2>Escolha o ritmo da<br /><em>sua transformação.</em></h2>
            </div>
            <p>Planos para acompanhamento presencial e consultoria online, sempre personalizados após sua avaliação. Escolha seu momento e vamos construir o próximo nível.</p>
          </div>
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <article className={plan.featured ? "plan-card featured" : "plan-card"} data-reveal="up" style={{ "--delay": `${index * 90}ms` } as React.CSSProperties} key={plan.name}>
                {plan.featured && <span className="popular-label">MAIS ESCOLHIDO</span>}
                <span className="plan-eyebrow">{plan.eyebrow}</span>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="plan-divider" />
                <ul>
                  {plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}
                </ul>
                <a className={plan.featured ? "button button-primary button-ripple" : "button button-ghost"} href={whatsappUrl} target="_blank" rel="noreferrer">
                  Consultar disponibilidade <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="differentials section-pad">
          <div className="diagonal-panel">
            <div className="differential-title" data-reveal="left">
              <span className="section-index">06 — ACOMPANHAMENTO COMPLETO</span>
              <h2>Onde você estiver.<br /><em>Do seu jeito.</em></h2>
              <p>Como personal presencial ou na consultoria online, Gabriel cria uma estratégia que cabe na sua vida — com suporte para você não abandonar o processo.</p>
            </div>
            <div className="differential-list" data-reveal="right">
              {["Treinos personalizados", "Suporte pelo WhatsApp", "Avaliações constantes", "Personal presencial", "Consultoria online", "Acompanhamento completo"].map((item, index) => (
                <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><ArrowIcon className="differential-arrow" /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta section-pad" id="contato">
          <div className="cta-ring ring-one" />
          <div className="cta-ring ring-two" />
          <div className="cta-content" data-reveal="up">
            <span className="section-index">SUA MELHOR VERSÃO COMEÇA AQUI</span>
            <h2>Chegou a hora da<br /><em>sua transformação.</em></h2>
            <p>Agende agora sua avaliação gratuita e descubra como alcançar seus objetivos com acompanhamento profissional.</p>
            <div className="hero-actions centered">
              <a className="button button-primary button-large button-ripple" href={whatsappUrl} target="_blank" rel="noreferrer">Quero começar agora <ArrowIcon /></a>
              <a className="button button-ghost" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="whatsapp-dot">●</span> Falar no WhatsApp</a>
            </div>
            <small><span>✓</span> Avaliação sem compromisso <span>•</span> Vagas limitadas por agenda</small>
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <div className="footer-top" data-reveal="up">
          <a className="brand footer-brand" href="#inicio" aria-label="Voltar ao início">
            <span className="brand-mark"><img src="/gabriel-logo.png" alt="" /></span>
            <span><strong>GABRIEL</strong><small>PERSONAL</small></span>
          </a>
          <p>Treino inteligente, acompanhamento próximo e resultados que fazem sentido para a sua vida.</p>
          <a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><span>●</span> Chamar no WhatsApp <ArrowIcon /></a>
        </div>
        <div className="footer-grid" data-reveal="up">
          <div><span>NAVEGAÇÃO</span><a href="#metodo">Método</a><a href="#resultados">Resultados</a><a href="#planos">Planos</a></div>
          <div>
            <span>ATENDIMENTO</span>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            <a href="#contato">Avaliação gratuita</a>
          </div>
          <div><span>MODALIDADES</span><p>Personal presencial</p><p>Consultoria online</p><p>Acompanhamento híbrido</p></div>
          <div><span>LOCALIZAÇÃO</span><p>Atendimento online</p><p>Presencial em Itamonte, MG</p></div>
        </div>
        <div className="footer-bottom" data-reveal="up">
          <span>© {new Date().getFullYear()} Gabriel Personal. Todos os direitos reservados.</span>
          <div className="footer-developer">
            <span>Desenvolvido por <a href="https://jacieljunior.com" target="_blank" rel="noreferrer">Jaciel Junior</a></span>
            <img className="footer-signature-logo" src="/footer-logo.svg" alt="" />
          </div>
        </div>
      </footer>

      {evaluationOpen && <EvaluationModal onClose={() => setEvaluationOpen(false)} />}
    </div>
  );
}
