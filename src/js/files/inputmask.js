export default function inputmask() {
  const inputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask(" +399 99999999");
  im.mask(inputs);
}
