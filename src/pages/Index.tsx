import { Smartphone, Shield, Truck, DollarSign, MessageCircle, ChevronRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-iphone.jpg";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-4 px-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Smartphone className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-display text-xl font-bold tracking-tight">
          Paraguai<span className="text-primary">Store</span>
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#vantagens" className="hover:text-foreground transition-colors">Vantagens</a>
        <a href="#produtos" className="hover:text-foreground transition-colors">Produtos</a>
        <a href="#depoimentos" className="hover:text-foreground transition-colors">Depoimentos</a>
        <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
      </nav>
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero-bg relative min-h-screen flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/30 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
    </div>
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary-foreground/80">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Direto de Ciudad del Este
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-primary-foreground">
          iPhone original,{" "}
          <span className="text-gradient">preço do Paraguai</span>
        </h1>
        <p className="text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
          Compre seu iPhone direto do Paraguai com garantia, segurança e o melhor preço do Brasil. Entrega para todo o país.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground text-lg hover:opacity-90 transition-all glow-red"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <a
            href="#produtos"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/20 px-8 py-4 font-semibold text-primary-foreground/90 text-lg hover:bg-primary-foreground/5 transition-all"
          >
            Ver Produtos
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <img
          src={heroImage}
          alt="iPhone disponível na ParaguaiStore"
          className="w-full max-w-xl rounded-2xl animate-float"
        />
      </div>
    </div>
  </section>
);

const vantagens = [
  {
    icon: DollarSign,
    title: "Melhor Preço",
    desc: "Preços direto de Ciudad del Este, sem intermediários. Economia real de até 40%.",
  },
  {
    icon: Shield,
    title: "Garantia Total",
    desc: "Todos os aparelhos com garantia e nota fiscal. Compra 100% segura.",
  },
  {
    icon: Truck,
    title: "Entrega Brasil",
    desc: "Enviamos para todo o Brasil com rastreamento completo e seguro.",
  },
  {
    icon: Smartphone,
    title: "100% Original",
    desc: "Apenas iPhones originais Apple, lacrados de fábrica com todos os acessórios.",
  },
];

const Vantagens = () => (
  <section id="vantagens" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Por que comprar <span className="text-primary">conosco?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A ParaguaiStore conecta você diretamente ao Paraguai com segurança e confiança.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vantagens.map((v) => (
          <div key={v.title} className="card-elevated rounded-2xl bg-card p-8 text-center space-y-4">
            <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <v.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold">{v.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const produtos = [
  { nome: "iPhone 16 Pro Max", storage: "256GB", preco: "R$ 7.499", cor: "Titânio Natural" },
  { nome: "iPhone 16 Pro", storage: "128GB", preco: "R$ 6.299", cor: "Titânio Preto" },
  { nome: "iPhone 16", storage: "128GB", preco: "R$ 4.999", cor: "Azul Ultramarino" },
  { nome: "iPhone 15", storage: "128GB", preco: "R$ 3.899", cor: "Preto" },
  { nome: "iPhone 15 Plus", storage: "128GB", preco: "R$ 4.499", cor: "Rosa" },
  { nome: "iPhone 14", storage: "128GB", preco: "R$ 3.299", cor: "Meia-Noite" },
];

const Produtos = () => (
  <section id="produtos" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Nossos <span className="text-primary">Produtos</span>
        </h2>
        <p className="text-muted-foreground text-lg">Confira os modelos disponíveis. Preços atualizados diariamente.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((p) => (
          <div key={p.nome + p.storage} className="card-elevated rounded-2xl bg-card overflow-hidden group">
            <div className="h-48 hero-bg flex items-center justify-center relative overflow-hidden">
              <Smartphone className="w-20 h-20 text-primary-foreground/40 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                DISPONÍVEL
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-display text-xl font-bold">{p.nome}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{p.storage}</span>
                <span>•</span>
                <span>{p.cor}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="font-display text-2xl font-bold text-primary">{p.preco}</span>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  Comprar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const CTA = () => (
  <section id="contato" className="py-24 hero-bg relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/40 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/40 blur-[100px]" />
    </div>
    <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
        Garanta seu iPhone agora
      </h2>
      <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
        Fale com a gente pelo WhatsApp e receba uma cotação personalizada. Atendimento rápido e sem compromisso.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-4 font-semibold text-primary-foreground text-lg hover:opacity-90 transition-all glow-red"
        >
          <MessageCircle className="w-5 h-5" />
          Chamar no WhatsApp
        </a>
        <a
          href="tel:+5500000000000"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/20 px-10 py-4 font-semibold text-primary-foreground/90 text-lg hover:bg-primary-foreground/5 transition-all"
        >
          <Phone className="w-5 h-5" />
          Ligar Agora
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold">
            Paraguai<span className="text-primary">Store</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2025 paraguaistore.com.br — Todos os direitos reservados
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Termos</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Vantagens />
      <Produtos />
      
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
