import Checkbox from "../pageobjects/checkbox.page.js";

describe("If statement exercise", () => {
    it("should should check if checkbox 1 is selected", async () => {
      await Checkbox.open()
    
      await (browser).pause(1000)  
        
      if (await (Checkbox.checkbox1).isSelected()) {
          return "nope"
      }
      else {
          (Checkbox.checkbox1).click()
      }
      await (browser).pause(1000)
    })
    
    it("should unselect checkbox2", async () => {
      await (browser).pause(1000)  
        
      if (await (Checkbox.checkbox2).isSelected()) {
          (Checkbox.checkbox2).click()
      }
      else {
          return "nope"
      }
      await (browser).pause(1000)
    })

    it("should ensure box 1 is seleceted while box 2 is not", async () => {
      await (browser).pause(1000)

      await expect(Checkbox.checkbox1).toBeSelected()

      if (await !expect(Checkbox.checkbox2).toHaveAttribute('checked')) {
        return "placeholder"
      }
      else {
        return "wombat"
      }

      await (browser).pause(1000)
    })
})