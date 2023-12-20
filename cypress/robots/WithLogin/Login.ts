import { BaseHands } from "../BaseRobot";

export class LoginRobotHands extends BaseHands {
  clickOnLoginBtn() {
    this.clickOnDomElementWithIndexForce('[data-nav-role="signin"]', 2);
  }

  loginUsingCrediantials() {
    cy.fixture("data.json").then((data) => {
      this.wait(7000);
      this.typeTextonId("ap_email", data.email);
      this.clickChildDomWithParentDom("input", "#continue");
      this.wait(20000);
      this.typeTextonId("ap_password", data.password);
      this.clickChildDomWithParentDom("input", "#signInSubmit");
    });
  }
}
