/// <reference types="Cypress" />
import "../support/e2e";

export abstract class BaseEyes {
  seesTextWithId(id: string, text: string) {
    cy.get(`#${id}`).should("have.text", text);
    return this;
  }

  doesNotseesTextWithId(id: string, text: string) {
    cy.get(`#${id}`).should("not.have.text", text);
    return this;
  }

  seesIdVisible(id: string) {
    cy.get(`#${id}`).should("be.visible");
    return this;
  }

  doesNotseesIdVisible(id: string) {
    cy.get(`#${id}`).should("not.be.visible");
    return this;
  }

  seesTextWithClass(domClass: string, text: string) {
    cy.get(`.${domClass}`).should("have.text", text);
    return this;
  }

  seesDomVisibleWithCustomMatcher(domlabel: string, matcher: string) {
    cy.get(`[${domlabel}=${matcher}]`).should("be.visible");
    return this;
  }

  seesDomVisible(domlabel: string) {
    cy.get(domlabel)
      // .scrollIntoView()
      .should("be.visible");
    return this;
  }

  seesTextWithClassAndIndex(domClass: string, index: number, text: string) {
    cy.get(`.${domClass}`).eq(index).should("have.text", text);
    return this;
  }

  hasLengthForDomWithClass(domClass: string, length: number) {
    cy.get(`.${domClass}`).should("have.length", length);
    return this;
  }

  hasLengthForDom(parentDomClass: string, childDom: string, length: number) {
    cy.get(parentDomClass).find(childDom).should("have.length", length);
    return this;
  }

  seesDomContainText(dom: string, text: string) {
    cy.get(dom).should("contain", text);
    return this;
  }

  doesNotseesDom(dom: string) {
    cy.get(dom).should("not.be.visible");
    return this;
  }

  seesTextInAgGridCell(rowId: string, colId: string, text: string) {
    cy.get(`[row-id=${rowId}]`)
      .find(`[col-id=${colId}]`)
      .should("have.text", text);
    return this;
  }

  clickOnDataGridRow(rowId: string) {
    cy.get(`[data-id=${rowId}]`).find(".MuiDataGrid-cellCheckbox").click();
    return this;
  }

  seesAgGridColumnSelected(rowId: string, colId: string) {
    cy.get(`[row-id=${rowId}]`)
      .find(`[col-id=${colId}]`)
      .should("have.class", "ag-cell-range-selected");
    return this;
  }

  seesAgGridRowSelected(rowIndexId: string) {
    cy.get(`[aria-rowindex=${rowIndexId}]`).should(
      "have.class",
      "ag-row-selected"
    );
    return this;
  }

  seesMinimumNumberOfElementsInDom(
    dom: string,
    childDomClass: string,
    minimumLength: number
  ) {
    cy.get(dom)
      .find(`.${childDomClass}`)
      .should("have.length.greaterThan", minimumLength);
    return this;
  }

  seesNumberOfElementsInDom(
    dom: string,
    childDomClass: string,
    length: number
  ) {
    cy.get(dom).find(`.${childDomClass}`).should("have.length", length);
    return this;
  }

  seesPathNameInUrl(path: string) {
    cy.location("pathname").should("eq", path);
    return this;
  }

  seesDomDisabled(dom: string) {
    cy.get(dom).should("be.disabled");
    return this;
  }

  seesDomEnabled(dom: string) {
    cy.get(dom).should("not.be.disabled");
    return this;
  }

  seesIdVisibleWithProps(id: string, text: string) {
    cy.get(id).filter(`:contains("${text}")`).should("be.visible");
  }

  seesTextInElement(domlabel: string, matcher: string, text: string) {
    cy.get(`[${domlabel}=${matcher}]`).should("contain", text);
    return this;
  }

  seesTextInElementCount(
    element: Cypress.Chainable<JQuery<HTMLElement>>,
    text: string
  ) {
    element.should("contain", text);
    return this;
  }

  seesElementVisible(element: Cypress.Chainable<JQuery<HTMLElement>>) {
    element.should("be.visible");
    return this;
  }

  getElementWithDataTestId(dataTestId: string) {
    return cy.get(`[data-testid=${dataTestId}]`).should("exist");
  }

  getElementById(id: string) {
    return cy.get(`#${id}`);
  }

  seesTextWithinId(id: string, text: string) {
    cy.get(`#${id}`)
      // .scrollIntoView()
      .within(() => {
        cy.contains(text);
      });
  }

  seesDomWithText(dom: string, text: string) {
    cy.get(dom).contains(text).should("exist");
  }

  seesTextVisible(text: string) {
    cy.contains(text).should("exist");
  }

  seesDomVisibleWithIndex(domlabel: string) {
    cy.get(domlabel).should("be.visible").eq(0);
    return this;
  }

  seesClassElementVisible(id: string) {
    cy.get(`.${id}`).should("be.visible");
    return this;
  }

  seesDomContainMultipleText(
    dom: string,
    val1: string,
    val2: string,
    val3: string
  ) {
    cy.get(dom)
      .should("contain", val1)
      .and("contain", val2)
      .and("contain", val3);
    return this;
  }

  scrollToBottom() {
    cy.scrollTo("bottom", { easing: "linear" });
  }
}

export class BaseHands {
  newTabOpening(dom1: string, i1: number, dom2: string, i2: number) {
    cy.get(dom1)
      .eq(i1)
      .within(() => {
        cy.get(dom2)
          .eq(i2)
          .invoke("removeAttr", "target")
          .click({ force: true });
      });
    return this;
  }

  clickOnDomElementsWithIndex(dom1: string, dom2: string, index: number) {
    cy.get(dom1).find(dom2).eq(index).click();
    return this;
  }

  clickChildDomWithParentDom(dom1: string, dom2: string) {
    cy.get(dom1).filter(dom2).click();
    return this;
  }

  checkRadioWithParentAndChildDom(dom1: string, dom2: string) {
    cy.get(dom1).filter(dom2).check({ force: true });
    return this;
  }

  clickOnId(id: string) {
    cy.get(`#${id}`).click({ scrollBehavior: false });
    return this;
  }

  clickOnDataGridRow(rowId: string) {
    cy.get(`[data-id=${rowId}]`).find(".MuiDataGrid-cellCheckbox").click();
    return this;
  }

  clickOnDomElement(dom: string) {
    cy.get(dom).click({
      scrollBehavior: false,
    });
    return this;
  }

  clickOnDomElementWithIndex(dom: string, index: number) {
    cy.get(dom, { timeout: 2000 }).eq(index).click();
    return this;
  }

  clickOnDomElementWithIndexForce(dom: string, index: number) {
    cy.get(dom).eq(index).click({ force: true });
    return this;
  }

  clickOnParentDomUsingChildDomsWithIndexs(
    dom1: string,
    index1: number,
    dom2: string,
    index2: number,
    dom3: string,
    index3: number
  ) {
    cy.get(dom1).eq(index1).find(dom2).eq(index2).find(dom3).eq(index3).click();
    return this;
  }

  clickOnTextWithDomElement(dom: string, text: string) {
    cy.get(dom, { timeout: 1000 }).contains(text).click();
    return this;
  }

  clickOnTextWithDomElementForce(dom: string, text: string) {
    cy.get(dom).contains(text).click({ force: true });
    return this;
  }

  doubleClickOnId(id: string) {
    cy.get(`#${id}`).dblclick();
    return this;
  }

  doubleClickAndDragOnAgGrid(rowId: string, colId: string) {
    cy.get(`[row-id=${rowId}]`)
      .find(`[col-id=${colId}]`)
      .trigger("mousedown", { which: 1, pageX: 600, pageY: 100 })
      .trigger("mousemove", { which: 1, pageX: 600, pageY: 600 })
      .trigger("mouseup", { which: 1, pageX: 600, pageY: 6000 });
    return this;
  }

  typeTextonDom(locatorName: string, locatorValue: string, text: string) {
    cy.get(`[${locatorName}="${locatorValue}"]`).type(text, { force: true });
    return this;
  }

  typeTextWithClassElement(dom: string, text: string) {
    cy.get(`.${dom}`).type(text);
    return this;
  }

  typeTextonId(id: string, text: string) {
    cy.get(`#${id}`).type(text, { force: true });
    return this;
  }

  clickOnChildDom(parentId: string, dom: string, index: number) {
    cy.get(`#${parentId} ${dom}`).eq(index).click();
    return this;
  }

  ClickOnTextWithClassAndIndex(domClass: string, index: number) {
    cy.get(`[class=${domClass}]`).eq(index).click();
    return this;
  }

  scrollToWithClassName(domClass: string, direction: PositionType) {
    cy.get(`.${domClass}`).scrollTo(direction);
    return this;
  }

  clickOnAgGridRow(rowId: string) {
    cy.get(`[row-id=${rowId}]`).find(".ag-selection-checkbox").click();
    return this;
  }

  wait(milliSecs: number) {
    cy.wait(milliSecs);
    return this;
  }

  clickOnIdWithMatcher(domlabel: string, matcher: string) {
    cy.get(`[${domlabel}="${matcher}"]`).click({
      scrollBehavior: false,
    });
    return this;
  }

  clickOnTextElement(text: string) {
    cy.contains(text).click({ force: true });
  }

  clickOnNthDomElement(dom: string, index: number) {
    cy.get(dom).eq(index).click();
    return this;
  }

  enterValueInPlaceholder(placeholder: string, text: string) {
    cy.get(`input[placeholder="${placeholder}"]`).type(text);
  }

  clickOnDataTestId(dataTestId: string) {
    cy.get(`[data-testid=${dataTestId}]`).click();
    return this;
  }

  clickOnDataTestIdWithIndex(id: string, index: number) {
    cy.get(`[data-testid=${id}]`).eq(index).click();
    return this;
  }

  clickOnButton(name: string) {
    cy.get("button").each((ele) => {
      if (ele.text() === name) {
        ele.click();
      }
    });
  }

  getElementById(element: string, id: string) {
    return cy.get(`${element}#${id}`);
  }

  getElementsById(id: string) {
    return cy.get(`#${id}`);
  }

  getElementWithDataTestId(dataTestId: string) {
    return cy.get(`[data-testid=${dataTestId}]`).should("exist");
  }

  clickOnIdWithProps(domlabel: string, matcher: string, text: string) {
    cy.get(`[${domlabel}="${matcher}"]`)
      .filter(`:contains("${text}")`)
      .click({ scrollBehavior: false });
    return this;
  }

  clicksOnTextWithinId(id: string, text: string) {
    cy.get(`#${id}`)
      // .scrollIntoView()
      .within(() => {
        cy.contains(text).click({ scrollBehavior: false });
      });
  }

  clickDomAndSelect(dom: string, index: number, value: string | number) {
    cy.get(dom).eq(index).select(value, { force: true });
    return this;
  }

  clickOnIdWithView(id: string) {
    cy.get(`#${id}`)
      // .scrollIntoView()
      .click({ scrollBehavior: false });
    return this;
  }

  clickOnClassWithText(className: string) {
    cy.get(className).click();
  }
}

export class BaseDependencies {
  visitUrl(url: string) {
    const HOST = Cypress.env("APP_URL");
    cy.visit(`${HOST}${url}`);
    return this;
  }

  accessUrl(url: string) {
    cy.visit(`${url}`);
    return this;
  }

  login() {
    cy.get("#email").type(Cypress.env("USER_NAME"));
    cy.get("#password").type(Cypress.env("PASSWORD"));
    cy.get("#login_submit").click();
    return this;
  }
}

type PositionType =
  | "topLeft"
  | "top"
  | "topRight"
  | "left"
  | "center"
  | "right"
  | "bottomLeft"
  | "bottom"
  | "bottomRight";
