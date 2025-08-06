import "../scss/style.scss";
import burger from "./files/burger.js";
import inputmask from "./files/inputmask.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tabs from "./files/tabs.js";

spoller();
burger();
sliders();
mediaAdaptive();
tabs();

Fancybox.bind("[data-fancybox]", {});
inputmask();
