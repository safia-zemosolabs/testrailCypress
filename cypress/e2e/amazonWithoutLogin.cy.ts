import {
  MobilesRobotEyes,
  MobilesRobotHands,
} from "../robots/WithoutLogin/mobiles";
import {
  TodaysDealDependencies,
  TodaysDealRobotEyes,
  TodaysDealRobotHands,
} from "../robots/WithoutLogin/todaysDeal";

const RobotDependencies = new TodaysDealDependencies();
const dealRobotEyes = new TodaysDealRobotEyes();
const dealRobotHands = new TodaysDealRobotHands();
const MobileRobotEyes = new MobilesRobotEyes();
const MobileRobotHands = new MobilesRobotHands();

context("Amazon Web Page testing with Cypress", () => {
  beforeEach(() => {
    RobotDependencies.visitPage();
  });

  Cypress.on("uncaught:exception", () => {
    return false;
  });

  describe("Amazon Web Page testing before login", () => {
    it("visit Amazon Web Page and add item to cart C1", () => {
      dealRobotHands.clickOnTodaysDeals();
      // dealRobotHands.clickOnThirdItem();
      // dealRobotHands.clickOnAnyItem();
      // dealRobotHands.clickToSelectMinQuantityOfItem();
      // dealRobotHands.clickOnAddToCart();
      // dealRobotHands.clickGoToCart();
      // dealRobotEyes.seesMinQuantity();
    });

    it("Search for Mobiles and get last mobile details C2", () => {
      //dealRobotHands.clickOnThirdItem();
      MobileRobotHands.searchMobiles();
      // MobileRobotHands.clickSearchIcon();
      // MobileRobotEyes.scrollBottom();
      // MobileRobotHands.clickOnLastMobile();
      // MobileRobotHands.clickSideNavBar();
      // MobileRobotHands.clickOnMobilePhones();
    });
  });
});
