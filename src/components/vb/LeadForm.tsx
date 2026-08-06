import { useState } from "react";
import { CtaButton } from "./CtaButton";

const estados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

const field =
  "w-full rounded-2xl border border-border bg-card/90 px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", loja: "", cidade: "", estado: "", whatsapp: "" });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  if (sent) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
        <h3 className="text-xl">Recebemos seu cadastro</h3>
        <p className="mt-3 text-[15px] text-muted-foreground">
          Nossa equipe comercial entrará em contato pelo WhatsApp informado para apresentar as
          coleções e as condições de revenda.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h3 className="text-xl">Quero revender Via Bella</h3>
      <p className="mt-2 text-[14px] text-muted-foreground">
        Preencha os dados abaixo. O contato é feito por nossa equipe comercial.
      </p>
      <div className="mt-6 grid gap-4">
        <input className={field} placeholder="Nome" required value={form.nome} onChange={set("nome")} />
        <input className={field} placeholder="Loja" required value={form.loja} onChange={set("loja")} />
        <div className="grid gap-4 sm:grid-cols-2">
          <input className={field} placeholder="Cidade" required value={form.cidade} onChange={set("cidade")} />
          <select className={field} required value={form.estado} onChange={set("estado")}>
            <option value="">Estado</option>
            {estados.map((uf) => (
              <option key={uf} value={uf}>{uf}</option>
            ))}
          </select>
        </div>
        <input
          className={field}
          placeholder="WhatsApp (DDD + número)"
          required
          inputMode="tel"
          value={form.whatsapp}
          onChange={set("whatsapp")}
        />
      </div>
      <CtaButton type="submit" className="mt-6 w-full justify-between">
        Quero revender Via Bella
      </CtaButton>
    </form>
  );
}
