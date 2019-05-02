// Compiled using marko@4.16.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-express$0.0.0/views/uf/lista.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEachProp = require("marko/src/runtime/helper-forEachProperty"),
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><title>Lista de ufs</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Lista de UFs</h1><table border=\"1\"><thead><tr><td>Id</td><td>Nome</td><td>UF</td></tr></thead><tbody><tr>");

  var for__13 = 0;

  marko_forEachProp(list, function(uf) {
    var keyscope__14 = "[" + ((for__13++) + "]");

    out.w("<td>" +
      marko_escapeXml(uf.id) +
      "</td><td>" +
      marko_escapeXml(uf.nome) +
      "</td><td>" +
      marko_escapeXml(uf.sigla) +
      "</td>");
  });

  out.w("</tr></tbody></table>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "18");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-express$0.0.0/views/uf/lista.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
