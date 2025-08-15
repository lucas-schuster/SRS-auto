export const json = {
  title: "Escala de Avaliação da Sessão (SRS V.3.0)",
  description:
    "Por favor, avalie a sessão de hoje colocando uma marca na linha no ponto que melhor se encaixa com sua experiência.",
  elements: [
    {
      type: "nouislider",
      name: "relacionamento_srs",
      title: "**Relacionamento**",
      rangeMin: 0,
      rangeMax: 10,
      step: 0.1,
      tooltips: true,
      pips: {
        mode: "positions",
        values: [0, 20, 40, 60, 80, 100],
        density: 5,
      },
      labels: [
        "Eu não me senti ouvido, compreendido,\ne respeitado.",
        "Eu me senti ouvido, compreendido e\nrespeitado.",
      ],
    },
    {
      type: "nouislider",
      name: "objetivos_topicos_srs",
      title: "**Objetivos e tópicos**",
      rangeMin: 0,
      rangeMax: 10,
      step: 0.1,
      tooltips: true,
      pips: {
        mode: "positions",
        values: [0, 20, 40, 60, 80, 100],
        density: 5,
      },
      labels: [
        "Nós não trabalhamos ou falamos sobre o\nque eu queria trabalhar e falar.",
        "Nós trabalhamos ou falamos sobre o que eu queria trabalhar e\nfalar.",
      ],
    },
    {
      type: "nouislider",
      name: "geral_srs",
      title: "**Geral**",
      rangeMin: 0,
      rangeMax: 10,
      step: 0.1,
      tooltips: true,
      pips: {
        mode: "positions",
        values: [0, 20, 40, 60, 80, 100],
        density: 5,
      },
      labels: [
        "Senti falta de algo na sessão de hoje.",
        "No geral, a sessão de hoje foi boa para mim.",
      ],
    },
    {
      type: "nouislider",
      name: "abordagem_srs",
      title: "**A abordagem do terapeuta foi adequada para mim?**",
      rangeMin: 0,
      rangeMax: 10,
      step: 0.1,
      tooltips: true,
      pips: {
        mode: "positions",
        values: [0, 20, 40, 60, 80, 100],
        density: 5,
      },
      labels: [
        "A abordagem do terapeuta não foi\nadequada para mim.",
        "A abordagem do terapeuta foi\nadequada para mim.",
      ],
    },
  ],
};
