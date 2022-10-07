import Card from "./card";
import Radio from "./radio";

const components = {
  Card,
  Radio,
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

const API = {
  install,
};
export default API;
