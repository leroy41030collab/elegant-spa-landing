import { Sparkles, Award, Leaf, HeartHandshake, Phone, Mail, MapPin, Instagram, Facebook, Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Reviews />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-gradient-primary grid place-items-center">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-serif text-xl tracking-wide">Aura<span className="text-primary"> Beauty</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href="#servizi" className="hover:text-foreground transition-colors">Servizi</a>
          <a href="#perche" className="hover:text-foreground transition-colors">Perché noi</a>
          <a href="#galleria" className="hover:text-foreground transition-colors">Galleria</a>
          <a href="#recensioni" className="hover:text-foreground transition-colors">Recensioni</a>
        </nav>
        <a
          href="#prenota"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Prenota
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-soft blur-3xl opacity-70" aria-hidden />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent blur-3xl opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Centro Estetico Premium
          </span>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Valorizza la tua
            <span className="block italic text-primary">bellezza naturale</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Trattamenti professionali personalizzati per il tuo benessere. Un'esperienza di pura eleganza, pensata su misura per te.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#prenota"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-4 text-sm font-medium shadow-soft hover:shadow-elegant transition-all"
            >
              Prenota una consulenza
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#servizi" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Scopri i trattamenti →
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="font-serif text-3xl text-foreground">12+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Anni di esperienza</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-3xl text-foreground">5.000+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Clienti soddisfatte</div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-border" />
            <div className="hidden sm:block">
              <div className="font-serif text-3xl text-foreground">30+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Trattamenti</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img src={heroImg} alt="Atmosfera spa di lusso con orchidee bianche e lavanda" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-card rounded-2xl shadow-soft border border-border p-5 max-w-[220px] animate-float">
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-2 text-sm text-foreground leading-snug">"Un'esperienza che ti trasforma."</p>
            <p className="mt-1 text-xs text-muted-foreground">— Giulia M.</p>
          </div>
          <div className="hidden sm:block absolute -top-4 -right-4 bg-gradient-gold rounded-full px-5 py-3 text-xs uppercase tracking-[0.18em] text-gold-foreground shadow-soft">
            Luxury Spa
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { title: "Trattamenti viso", desc: "Pulizia profonda, idratazione e luminosità con prodotti d'eccellenza.", icon: Sparkles },
  { title: "Epilazione laser", desc: "Tecnologia di ultima generazione per risultati duraturi e indolori.", icon: Leaf },
  { title: "Trattamenti corpo", desc: "Modellanti, drenanti e rilassanti per ritrovare equilibrio e benessere.", icon: HeartHandshake },
  { title: "Anti-age", desc: "Protocolli avanzati per contrastare i segni del tempo con dolcezza.", icon: Award },
];

function Services() {
  return (
    <section id="servizi" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-primary mb-4">I nostri servizi</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Un trattamento <span className="italic text-primary">per ogni esigenza</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Protocolli personalizzati eseguiti da specialisti certificati, con prodotti selezionati tra le eccellenze del settore.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative bg-card rounded-3xl p-7 border border-border/70 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-primary-soft text-primary grid place-items-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary font-medium">
                Scopri di più
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { title: "Specialisti certificati", desc: "Un team formato continuamente sulle tecniche più avanzate del settore beauty.", icon: Award },
  { title: "Prodotti di alta qualità", desc: "Selezioniamo solo brand premium dermatologicamente testati e sostenibili.", icon: Leaf },
  { title: "Trattamenti personalizzati", desc: "Ogni protocollo è studiato sulla tua pelle, sul tuo ritmo e sui tuoi obiettivi.", icon: HeartHandshake },
];

function WhyUs() {
  return (
    <section id="perche" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-primary mb-4">Perché sceglierci</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
            L'eleganza è nei <span className="italic text-primary">dettagli</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="relative text-center p-8 lg:p-10 rounded-3xl bg-card border border-border/60 hover:shadow-elegant transition-shadow"
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-serif italic text-sm text-muted-foreground bg-background px-3">0{i + 1}</span>
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-gold grid place-items-center shadow-soft">
                <r.icon className="h-7 w-7 text-gold-foreground" />
              </div>
              <h3 className="mt-6 font-serif text-2xl">{r.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  { src: g3, alt: "Sala trattamento spa di lusso", className: "row-span-2" },
  { src: g1, alt: "Crema viso di lusso con orchidea" },
  { src: g6, alt: "Petali di rosa e lavanda" },
  { src: g2, alt: "Sieri e prodotti premium" },
  { src: g4, alt: "Asciugamani spa e candele" },
  { src: g5, alt: "Trattamento mani e benessere", className: "row-span-2" },
];

function Gallery() {
  return (
    <section id="galleria" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-primary mb-4">Galleria</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Atmosfere <span className="italic text-primary">di benessere</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Uno sguardo all'esperienza che ti aspetta nel nostro studio: spazi raffinati, dettagli curati e prodotti d'eccellenza.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${img.className ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { name: "Giulia M.", role: "Cliente da 3 anni", text: "Ogni visita ad Aura è un piccolo rituale. Pelle radiosa, ambiente meraviglioso e personale sempre attento. Lo consiglio davvero a tutte." },
  { name: "Sara B.", role: "Trattamento viso", text: "Finalmente un centro che ascolta. Il protocollo personalizzato ha trasformato la mia pelle in poche settimane. Risultati visibili e duraturi." },
  { name: "Martina R.", role: "Epilazione laser", text: "Professionalità e cura del dettaglio impeccabili. Mi sono sentita coccolata dall'inizio alla fine. Aura è la mia nuova oasi." },
];

function Reviews() {
  return (
    <section id="recensioni" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.22em] text-primary mb-4">Recensioni</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Le parole delle <span className="italic text-primary">nostre clienti</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-card rounded-3xl border border-border/60 p-8 lg:p-10 hover:shadow-soft transition-shadow">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-serif text-xl leading-snug text-foreground">"{r.text}"</blockquote>
              <figcaption className="mt-7 pt-6 border-t border-border/60">
                <div className="font-medium">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="prenota" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-gradient-primary text-primary-foreground px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-28 text-center">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />

          <span className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Prima consulenza gratuita
          </span>
          <h2 className="relative mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl mx-auto">
            Inizia oggi il tuo percorso <span className="italic">di bellezza</span>
          </h2>
          <p className="relative mt-5 text-primary-foreground/85 text-lg max-w-xl mx-auto">
            Prenota un appuntamento e lascia che i nostri specialisti ti guidino verso il trattamento più adatto a te.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+390000000000" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-4 text-sm font-medium hover:bg-card transition-colors">
              <Phone className="h-4 w-4" />
              Chiama ora
            </a>
            <a href="mailto:info@aurabeauty.it" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-gold-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition-opacity">
              Prenota online
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-gradient-primary grid place-items-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-serif text-xl">Aura<span className="text-primary"> Beauty</span></span>
          </div>
          <p className="mt-5 text-muted-foreground max-w-sm leading-relaxed">
            Un'oasi di benessere dove tradizione e innovazione si incontrano per esaltare la tua bellezza naturale.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg mb-4">Contatti</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a href="tel:+390000000000" className="hover:text-foreground transition-colors">+39 000 000 0000</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a href="mailto:info@aurabeauty.it" className="hover:text-foreground transition-colors">info@aurabeauty.it</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>Via della Bellezza 12<br />20121 Milano, Italia</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg mb-4">Orari</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex justify-between gap-4"><span>Lun – Ven</span><span className="text-foreground">9:00 – 20:00</span></li>
            <li className="flex justify-between gap-4"><span>Sabato</span><span className="text-foreground">9:00 – 18:00</span></li>
            <li className="flex justify-between gap-4"><span>Domenica</span><span className="text-foreground">Chiuso</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aura Beauty Studio. Tutti i diritti riservati.</p>
          <p>Design con cura, per la tua bellezza.</p>
        </div>
      </div>
    </footer>
  );
}
