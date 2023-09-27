package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class AddToCartSd {

	WebDriver driver=Hooks.driver;
	
	@When("I click the cart button of the product to add it to cart")
	public void i_click_the_cart_button_of_the_product_to_add_it_to_cart() {
		WebElement AddTocart=driver.findElement(By.name("add-to-cart-sauce-labs-backpack"));
		AddTocart.click();
	}

	@And("I click on shopping cart")
	public void i_click_on_shopping_cart() throws InterruptedException {
		WebElement Cart=driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
		Cart.click();
		Thread.sleep(1000);
	}

	@Then("I verify the item on cart page with {string}")
	public void i_verify_the_item_on_cart_page_with(String Expmsg) throws InterruptedException {
		WebElement Cart=driver.findElement(By.className("inventory_item_name"));
		String Actmsg=Cart.getText();
		Assert.assertEquals(Actmsg, Expmsg);
		Thread.sleep(1000);
	}
}
