import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class TodaysDealDependencies extends BaseDependencies {
  visitPage() {
    cy.fixture("data.json").then((Data) => {
      this.accessUrl(Data.url);
    });
  }
}

export class TodaysDealRobotEyes extends BaseEyes {
  seesMinQuantity() {
    this.seesTextWithinId("quantity", "1");
  }

  seesTextWithIdOnScreen(text: string) {
    this.seesTextWithId("slot-2", text);
  }

  seesElementWithTestId() {
    return this.getElementWithDataTestId("grid-deals-container")
      .children()
      .eq(1)
      .should("exist");
  }
}

export class TodaysDealRobotHands extends BaseHands {
  clickOnTodaysDeals() {
    this.clickOnTextElement("Today's Deals");
  }

  clickOnThirdItem() {
    this.clickOnDataTestIdWithIndex("deal-card", 2);
  }

  clickOnAnyItem() {
    cy.get("body").then(($body) => {
      if ($body.find('[data-component-type="s-search-result"]').length > 0) {
        this.newTabOpening(
          '[data-component-type="s-search-result"]',
          0,
          "a",
          0
        );
      } else if ($body.find("ul").length > 0) {
        this.clickOnParentDomUsingChildDomsWithIndexs("ul", 2, "li", 0, "a", 0);
      }
    });
  }

  clickToSelectMinQuantityOfItem() {
    this.clickDomAndSelect(".a-dropdown-container > #quantity", 0, 0);
  }

  clickOnAddToCart() {
    this.clickOnDomElement("#add-to-cart-button");
    cy.wait(6000);
  }

  clickGoToCart() {
    cy.get("body", { timeout: 4000 }).then(($body) => {
      if ($body.find("#attach-accessory-pane").length > 0) {
        this.clickOnDomElement("#attach-view-cart-button-form .a-button-input");
      } else if ($body.find("#attach-warranty").length > 0) {
        this.clickOnTextWithDomElementForce("#attachSiNoCoverage", "Skip");
        this.clickOnTextWithDomElement("#sw-atc-buy-box", "Go to Cart");
      } else {
        this.clickOnTextWithDomElement("#sw-atc-buy-box", "Go to Cart");
      }
    });
  }
}

