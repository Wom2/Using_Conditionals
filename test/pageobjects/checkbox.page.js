import Page from "./page.js";

class Checkbox extends Page {

  get checkbox1 () {
    return $('//form/input[1]');
  }
  get checkbox2 () {
    return $('//form/input[2]');
  }
  open () {
    return super.open('checkboxes');
  }
}

export default new Checkbox();