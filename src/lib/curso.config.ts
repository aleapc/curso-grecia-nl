// A CONFIG DE CURSO — o que muda entre SKUs mora AQUI e só aqui.

export const curso = {
  /**
   * Identidade do SKU, e ela NÃO é cosmética: é o namespace de localStorage.
   * Todos os cursos servem de aleapc.github.io/<curso>/, e localStorage é por
   * ORIGEM, não por caminho — sem isto, os cursos leem e sobrescrevem o
   * progresso uns dos outros.
   */
  sku: 'curso-grecia-nl',
  /** Idioma do comprador (a voz-guia). */
  buyerLang: 'nl',
  /** Idioma do destino (a fala nativa ensinada). */
  targetLang: 'el',
  /** Par para o link do Google Tradutor: sl = comprador, tl = destino. */
  translatorPair: { sl: 'nl', tl: 'el' },
  /** Moeda do destino. */
  destCurrency: 'EUR',
  /**
   * Vazio DE PROPÓSITO: o comprador neerlandês usa euro e o destino também.
   * Não há conversão a fazer, e o /bolso mostra a nota «mesma moeda» em vez de
   * um conversor inútil. Pela mesma razão, o alerta de conversão dinâmica de
   * moeda (DCC) — que é o item de dinheiro nº 1 da linha anglófona — NÃO se
   * aplica a esta coluna: ele só existe quando o cartão é de outra moeda.
   */
  homeCurrencies: [] as string[],
  timeZone: 'Europe/Athens'
} as const;

export type CursoConfig = typeof curso;
