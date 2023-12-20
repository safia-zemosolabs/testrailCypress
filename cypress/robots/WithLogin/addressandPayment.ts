import { BaseEyes, BaseHands } from "../BaseRobot";

export class AddressRobotEyes extends BaseEyes {
  seesAddressFormPopUp() {
    this.seesClassElementVisible("a-popover-wrapper");
  }
  verifyEnteredAddress() {
    this.seesDomContainMultipleText(
      ".displayAddressDiv",
      "Safia Khanam",
      "13-3-36",
      "Karwan"
    );
  }
  verifyBank() {
    this.seesDomContainText("#payment-information", "State Bank of India");
  }

  seesPrintLastDeliveryDate() {
    let deliveryMsg = "";
    let deliveryDate;

    cy.get(".shipment-top-row")
      .eq(0)
      .within(() => {
        cy.get("span")
          .eq(0)
          .then(($value) => {
            deliveryMsg = $value.text();
            deliveryDate = deliveryMsg.split(" ");
            cy.log(`Last Delivery : ${deliveryDate[5]}`);
            console.log("Last Delivery = " + deliveryDate[5]);
          });
      });
  }
}

export class AddressRobotHands extends BaseHands {
  openMyOrders() {
    this.clickOnDomElement("#nav-orders");
  }
  selectPrevYearOrderDetails() {
    this.clickOnDomElement(".a-dropdown-prompt");
    this.clickOnDomElementsWithIndex(".a-popover-wrapper", "li", 3);
  }
  selectFirstItemAndOrder() {
    this.newTabOpening(".order", 0, "a", 5);
    this.clickOnDomElement("#buyNow input");
  }
  addNewAddressToDelivery() {
    this.clickChildDomWithParentDom("a", "#addressChangeLinkId");
    cy.wait(3000);
    this.clickChildDomWithParentDom("a", "#add-new-address-popover-link");
    cy.wait(3000);
  }
  fillTheAddressFormAndSubmit() {
    cy.get(".a-input-text-group input").each(($elem, index) => {      

      cy.get(".a-input-text-group input")
        .eq(index)
        .type(Address[index], { force: true });
    });

    this.clickOnDomElement('[data-action="form-submit-button-click"]');
    cy.wait(7000);
  }
  selectNetBankingOption() {
    this.checkRadioWithParentAndChildDom(
      '[type="radio"]',
      '[value="instrumentId=NetBanking&isExpired=false&paymentMethod=NB&tfxEligible=false"]'
    );
  }
  selectBank() {
    this.clickDomAndSelect("select", 0, "State Bank of India");
    cy.wait(2000);
    this.clickOnDomElementWithIndexForce(
      '[name="ppw-widgetEvent:SetPaymentPlanSelectContinueEvent"]',
      0
    );
  }
}

export const Address = [
  "Safia Khanam",
  "8179828464",
  "500006",
  "13-3-36",
  "Karwan",
  "MESCO college of Pharmacy",
  "Hyderabad",
];
