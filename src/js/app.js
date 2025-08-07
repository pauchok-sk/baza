import "../scss/style.scss";
import anchors from "./files/anchors.js";
import burger from "./files/burger.js";
import inputmask from "./files/inputmask.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import quiz from "./files/quiz.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tabs from "./files/tabs.js";

spoller();
burger();
sliders();
mediaAdaptive();
tabs();
inputmask();
quiz();
anchors();

Fancybox.bind("[data-fancybox]", {});
// Fancybox.show([{src: "#modal-connect", type: "inline"}])
