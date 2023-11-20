function _fillTemplate(args) {
  const templateContent = (() => {
    if ("templateContent" in args) {
      return args.templateContent;
    } else {
      return document.getElementById(args.templateId).innerHTML;
    }
  })();

  // row_elem.content
  const row_temp = Handlebars.compile(templateContent);
  const row_text = row_temp(args.data);

  const tbody_elem = document.getElementById(args.dstId);
  tbody_elem.innerHTML += row_text;
}

function _wrapReady(fn) {
  return function (...args) {
    $(document).ready(() => fn(...args));
  };
}

const fillTemplate = _wrapReady(_fillTemplate);
