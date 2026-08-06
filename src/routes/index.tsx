import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Gem,
  Ruler,
  Layers,
  ShieldCheck,
  RefreshCw,
  Footprints,
  Heart,
} from "lucide-react";
import { CtaButton } from "@/components/vb/CtaButton";
import { LeadForm } from "@/components/vb/LeadForm";
import logo from "@/assets/Logotipo_Via_Bella.svg.asset.json";
import simbolo from "@/assets/Simbolo.svg.asset.json";
import heroDesktop from "@/assets/banner-hero-desktop.png.asset.json";
import heroMobile from "@/assets/banner-hero-mobile.png.asset.json";
import loja from "@/assets/imagem-secao-2.png.asset.json";
import prod1 from "@/assets/Imagem_produtos_1.jpg.asset.json";
import prod2 from "@/assets/Imagem_produtos_2.jpg.asset.json";
import prod3 from "@/assets/Imagem_produtos_3.jpg.asset.json";
import prod4 from "@/assets/Imagem_produtos_4.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Via Bella | Seja revendedor oficial de calçados femininos" },
      {
        name: "description",
        content:
          "Leve para sua loja uma marca desejada pelas consumidoras. Coleções femininas de calçados com design atual, acabamento cuidadoso e giro rápido. Cadastre-se para revender Via Bella.",
      },
      { property: "og:title", content: "Via Bella | Seja revendedor oficial" },
      {
        property: "og:description",
        content:
          "Calçados femininos com design atual e acabamento cuidadoso para lojistas que querem vitrines desejadas.",
      },
      { property: "og:image", content: `https://id-preview--dc4ba6b6-7fb5-4edb-956e-098a075c1fb4.lovable.app${heroDesktop.url}` },
      { name: "twitter:image", content: `https://id-preview--dc4ba6b6-7fb5-4edb-956e-098a075c1fb4.lovable.app${heroDesktop.url}` },
    ],
  }),
  component: Index,
});

const beneficios = [
  {
    icon: Sparkles,
    title: "Leitura de tendência aplicada",
    text: "Cada coleção nasce da observação do que a consumidora já está procurando: plataformas, tiras cruzadas, monogramas e acabamentos em metal dourado.",
  },
  {
    icon: Gem,
    title: "Vitrine que valoriza a loja",
    text: "Modelos com presença visual forte, que compõem bem entre si e elevam a percepção de valor de toda a sua exposição.",
  },
  {
    icon: Layers,
    title: "Mix pensado para vender junto",
    text: "Do casual ao mais elaborado, o mix cobre diferentes ocasiões de uso e permite montar pedidos equilibrados desde o primeiro contato.",
  },
  {
    icon: Footprints,
    title: "Conforto como argumento de venda",
    text: "Solados leves, entressolas macias e forma amigável ao pé: a cliente experimenta, sente a diferença e a conversão acontece no balcão.",
  },
  {
    icon: RefreshCw,
    title: "Renovação constante",
    text: "Novidades entram em ciclo contínuo, mantendo sua vitrine sempre atual sem depender de uma única coleção por temporada.",
  },
  {
    icon: ShieldCheck,
    title: "Relação direta e organizada",
    text: "Atendimento comercial próximo, com orientação de mix e acompanhamento do seu pedido do início ao fim.",
  },
];

const diferenciais = [
  { icon: Gem, t: "Design exclusivo", d: "Desenhos próprios, com identidade reconhecível na prateleira." },
  { icon: Ruler, t: "Acabamento", d: "Costuras, recortes e ferragens conferidos peça por peça." },
  { icon: Sparkles, t: "Tendências", d: "Formas e volumes alinhados ao momento da moda feminina." },
  { icon: Footprints, t: "Conforto", d: "Plataformas leves e palmilhas macias para uso prolongado." },
  { icon: ShieldCheck, t: "Qualidade", d: "Materiais selecionados com padrão constante entre os pares." },
  { icon: Layers, t: "Variedade", d: "Papetes, slides, rasteiras e modelos fechados no mesmo mix." },
  { icon: Heart, t: "Modelos femininos", d: "Estética elegante e delicada em todas as linhas." },
  { icon: RefreshCw, t: "Atualização constante", d: "Lançamentos frequentes para manter o giro." },
];

const colecoes = [
  {
    img: prod1.url,
    cat: "Papetes plataforma",
    d: "Tiras cruzadas em couro caramelo com ferragem dourada e plataforma alta.",
  },
  {
    img: prod2.url,
    cat: "Slides monograma",
    d: "Estampa exclusiva em base off-white, um dos modelos de maior apelo visual.",
  },
  {
    img: prod3.url,
    cat: "Tamancos & flats",
    d: "Preto com detalhe em brilho na lateral do solado: versátil e fácil de vender.",
  },
  {
    img: prod4.url,
    cat: "Rasteiras trançadas",
    d: "Tiras trançadas bicolor sobre solado confortável para o dia a dia.",
  },
];

const passos = [
  { n: "01", t: "Preencha o formulário", d: "Leva menos de um minuto: nome, loja, cidade, estado e WhatsApp." },
  { n: "02", t: "Nossa equipe entra em contato", d: "Um consultor comercial fala com você pelo WhatsApp informado." },
  { n: "03", t: "Conheça as coleções", d: "Você recebe a apresentação dos modelos disponíveis e das linhas em destaque." },
  { n: "04", t: "Faça seu primeiro pedido", d: "Monte o mix ideal para o perfil da sua loja com orientação da equipe." },
];

const faq = [
  {
    q: "Quem pode comprar?",
    a: "Lojas de calçados, boutiques, multimarcas, lojas femininas e representantes comerciais. O atendimento é exclusivo para revenda.",
  },
  { q: "Existe pedido mínimo?", a: "Confirmar com a equipe comercial." },
  {
    q: "Como funciona o atendimento?",
    a: "Após o cadastro, um consultor entra em contato pelo WhatsApp informado e acompanha você na escolha do mix e no envio do pedido.",
  },
  {
    q: "Como recebo o catálogo?",
    a: "O catálogo atualizado é enviado pela equipe comercial no contato após o cadastro.",
  },
  { q: "Atendem todo o Brasil?", a: "Confirmar com a equipe comercial." },
  { q: "Quais são as condições de pagamento e prazos?", a: "Confirmar com a equipe comercial." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6">
        <img src={logo.url} alt="Via Bella" className="h-9 w-auto brightness-0 opacity-80" />
        <CtaButton href="#cadastro" variant="light" className="hidden sm:inline-flex">
          Quero revender
        </CtaButton>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-4">
        <div className="overflow-hidden rounded-[2.5rem] surface-dark shadow-soft">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
            <div className="px-7 pt-10 pb-2 sm:px-12 lg:py-14">
              <span className="inline-block rounded-full border border-dark-foreground/25 px-4 py-1.5 text-[12px] uppercase tracking-[0.18em] text-dark-foreground/80">
                Programa de revenda
              </span>
              <h1 className="mt-6 text-[2rem] leading-[1.12] sm:text-[2.7rem]">
                Leve para sua loja a marca que a sua cliente já procura.
              </h1>
              <p className="mt-5 max-w-xl text-[15px] text-dark-foreground/80">
                Via Bella desenvolve calçados femininos com design atual, acabamento cuidadoso e
                modelos que acompanham as tendências de cada estação — a combinação que sustenta
                vitrines desejadas e giro consistente para o lojista.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 pb-8 lg:pb-0">
                <CtaButton href="#cadastro">Quero revender Via Bella</CtaButton>
              </div>
            </div>
            <div className="relative h-[320px] lg:h-[520px]">
              <img
                src={heroDesktop.url}
                alt="Cliente usando papete plataforma Via Bella em couro caramelo"
                className="hidden h-full w-full object-cover sm:block"
              />
              <img
                src={heroMobile.url}
                alt="Cliente usando papete plataforma Via Bella em couro caramelo"
                className="h-full w-full object-cover sm:hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 2 */}
      <section className="mx-auto max-w-[1440px] px-5 py-16">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.18em] text-primary">Bloco 02</p>
          <h2 className="mt-3 text-[1.75rem] sm:text-[2.1rem]">Por que revender Via Bella?</h2>
          <p className="mt-4 text-[15px] text-muted-foreground">
            Um fornecedor de calçado feminino precisa entregar mais do que produto: precisa entregar
            previsibilidade de venda. É esse o compromisso da Via Bella com cada lojista.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b) => (
            <article
              key={b.title}
              className="rounded-3xl border border-border bg-card/80 p-7 transition-shadow duration-300 hover:shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[1.05rem]">{b.title}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BLOCO 3 — PROVA SOCIAL */}
      <section className="mx-auto max-w-[1440px] px-5 py-16">
        <div className="grid items-center gap-8 overflow-hidden rounded-[2.5rem] border border-border bg-card/80 p-6 sm:p-10 lg:grid-cols-2">
          <img
            src={loja.url}
            alt="Coleções Via Bella expostas em vitrine de loja"
            className="h-full max-h-[420px] w-full rounded-3xl object-cover"
          />
          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-primary">Bloco 03</p>
            <h2 className="mt-3 text-[1.75rem] sm:text-[2.1rem]">Marca pronta para a vitrine</h2>
            <p className="mt-4 text-[15px] text-muted-foreground">
              As imagens desta página são registros reais das nossas coleções e da forma como elas se
              apresentam no ponto de venda — sem montagem, sem promessa fora da realidade.
            </p>
            <ul className="mt-6 space-y-3 text-[15px]">
              {[
                "Catálogo com múltiplas linhas femininas: papetes plataforma, slides monograma, rasteiras trançadas e modelos flat.",
                "Fotografia de produto própria, pronta para você usar na divulgação da sua loja.",
                "Presença visual consistente entre coleções, o que facilita a exposição conjunta.",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-secondary px-5 py-4 text-[14px] text-muted-foreground">
              Dados de tempo de mercado, alcance digital e depoimentos de lojistas:{" "}
              <strong className="text-foreground">confirmar com a equipe comercial.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 4 — COLEÇÕES */}
      <section className="mx-auto max-w-[1440px] px-5 py-16">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.18em] text-primary">Bloco 04</p>
          <h2 className="mt-3 text-[1.75rem] sm:text-[2.1rem]">Conheça nossas coleções</h2>
          <p className="mt-4 text-[15px] text-muted-foreground">
            Linhas desenvolvidas para conviverem na mesma vitrine: paleta harmônica, volumes atuais e
            faixas de uso complementares. Veja alguns dos modelos que compõem o mix.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {colecoes.map((c) => (
            <article key={c.cat} className="group overflow-hidden rounded-3xl border border-border bg-card">
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={`${c.cat} Via Bella`}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[1.05rem]">{c.cat}</h3>
                <p className="mt-2 text-[14px] text-muted-foreground">{c.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BLOCO 5 */}
      <section className="mx-auto max-w-[1440px] px-5 py-16">
        <div className="rounded-[2.5rem] surface-dark p-8 sm:p-12">
          <p className="text-[12px] uppercase tracking-[0.18em] text-primary-foreground/70">Bloco 05</p>
          <h2 className="mt-3 max-w-xl text-[1.75rem] text-dark-foreground sm:text-[2.1rem]">
            O que você encontra na Via Bella
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((d) => (
              <div
                key={d.t}
                className="rounded-3xl border border-dark-foreground/15 bg-dark-foreground/5 p-6 transition-colors duration-300 hover:border-primary/60"
              >
                <d.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-[1rem] text-dark-foreground">{d.t}</h3>
                <p className="mt-2 text-[14px] text-dark-foreground/70">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 6 */}
      <section className="mx-auto max-w-[1440px] px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-primary">Bloco 06</p>
            <h2 className="mt-3 text-[1.75rem] sm:text-[2.1rem]">
              Por que lojistas escolhem a Via Bella
            </h2>
            <img src={simbolo.url} alt="" className="mt-8 h-16 w-auto opacity-20 brightness-0" />
          </div>
          <div className="space-y-5 text-[15px] text-muted-foreground">
            <p>
              Trabalhar com calçado feminino exige um parceiro que entenda de moda e de operação. A
              Via Bella cuida das duas frentes: desenvolve coleções com leitura de tendência e
              mantém um processo organizado, do primeiro contato ao acompanhamento do pedido.
            </p>
            <p>
              A credibilidade vem da constância. O padrão de acabamento se repete entre pares e entre
              coleções, o que reduz troca, protege a reputação da sua loja e faz a cliente voltar
              procurando a marca pelo nome.
            </p>
            <p>
              O atendimento é direto e próximo: você fala com quem conhece o produto, recebe
              orientação de mix conforme o perfil da sua região e conta com apoio para fortalecer a
              venda no balcão — não apenas para fechar um pedido.
            </p>
            <div className="pt-2">
              <CtaButton href="#cadastro" variant="light">
                Falar com a equipe
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 7 */}
      <section className="mx-auto max-w-[1440px] px-5 py-16">
        <p className="text-[12px] uppercase tracking-[0.18em] text-primary">Bloco 07</p>
        <h2 className="mt-3 text-[1.75rem] sm:text-[2.1rem]">Como funciona</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((p) => (
            <div key={p.n} className="rounded-3xl border border-border bg-card/80 p-7">
              <span className="font-display text-[1.6rem] text-primary">{p.n}</span>
              <h3 className="mt-3 text-[1.05rem]">{p.t}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCO 8 — FAQ */}
      <section className="mx-auto max-w-[1440px] px-5 py-16">
        <p className="text-[12px] uppercase tracking-[0.18em] text-primary">Bloco 08</p>
        <h2 className="mt-3 text-[1.75rem] sm:text-[2.1rem]">Perguntas frequentes</h2>
        <div className="mt-8 space-y-3">
          {faq.map((f) => (
            <details
              key={f.q}
              className="group rounded-3xl border border-border bg-card/80 px-6 py-5 open:shadow-soft"
            >
              <summary className="cursor-pointer list-none text-[15px] font-semibold text-foreground marker:hidden">
                {f.q}
              </summary>
              <p className="mt-3 text-[15px] text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* BLOCO FINAL */}
      <section id="cadastro" className="mx-auto max-w-[1440px] px-5 py-16">
        <div className="grid items-center gap-10 rounded-[2.5rem] surface-dark p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[1.9rem] text-dark-foreground sm:text-[2.3rem]">
              Sua vitrine merece uma marca desejada.
            </h2>
            <p className="mt-5 text-[15px] text-dark-foreground/80">
              A revenda Via Bella é feita para lojistas que querem se diferenciar: coleções femininas
              com design próprio, acabamento cuidadoso e renovação constante. Cadastre sua loja e
              receba a apresentação completa das coleções pela nossa equipe comercial.
            </p>
            <ul className="mt-6 space-y-2 text-[14px] text-dark-foreground/70">
              <li>Atendimento exclusivo para revenda</li>
              <li>Orientação de mix conforme o perfil da sua loja</li>
              <li>Contato direto pelo WhatsApp</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className="mx-auto max-w-[1440px] px-5 pb-12 pt-4 text-center">
        <img src={logo.url} alt="Via Bella" className="mx-auto h-8 w-auto opacity-60 brightness-0" />
        <p className="mt-4 text-[13px] text-muted-foreground">
          Via Bella · Calçados femininos · Atendimento exclusivo para lojistas
        </p>
      </footer>
    </div>
  );
}
