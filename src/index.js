import { Model } from "survey-core";
import "survey-js-ui";
import "survey-core/survey-core.min.css";
import * as SurveyTheme from "survey-core/themes";
import { json } from "./json";
import * as SurveyCore from "survey-core";
import noUiSlider from "nouislider";
import { nouislider } from "surveyjs-widgets";
import "nouislider/distribute/nouislider.css";

nouislider(SurveyCore);

const survey = new Model(json);
survey.applyTheme(SurveyTheme.FlatLightPanelless);

survey.onComplete.add((sender, options) => {
  console.log(JSON.stringify(sender.data, null, 3));
});

// Render Survey
survey.render(document.getElementById("surveyElement"));

// Add labels dynamically after sliders are rendered
const sliders = document.querySelectorAll(".nouislider");
const labels = [
  [
    "Eu não me senti ouvido, compreendido,\ne respeitado.",
    "Eu me senti ouvido, compreendido e\nrespeitado.",
  ],
  [
    "Nós não trabalhamos ou falamos sobre o\nque eu queria trabalhar e falar.",
    "Nós trabalhamos ou falamos sobre o que eu queria trabalhar e\nfalar.",
  ],
  [
    "Senti falta de algo na sessão de hoje.",
    "No geral, a sessão de hoje foi boa para mim.",
  ],
  [
    "A abordagem do terapeuta não foi\nadequada para mim.",
    "A abordagem do terapeuta foi\nadequada para mim.",
  ],
];

sliders.forEach((slider, index) => {
  const labelContainer = document.createElement("div");
  labelContainer.classList.add("slider-labels");

  labels[index].forEach((label, labelIndex) => {
    const labelElement = document.createElement("span");
    labelElement.textContent = label;
    labelElement.classList.add(labelIndex === 0 ? "label-left" : "label-right");
    labelContainer.appendChild(labelElement);
  });

  slider.parentNode.insertBefore(labelContainer, slider.nextSibling);
});
