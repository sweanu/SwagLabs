package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefinition {
	
	WebDriver driver=Hooks.driver;
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() {
	    driver.get("https://www.saucedemo.com/");
	}

	@When("I enter the username as {string}")
	public void i_enter_the_username_as(String UsernameVal) {
	    WebElement Username=driver.findElement(By.id("user-name"));
	    Username.sendKeys(UsernameVal);
	}

	@When("I enter the password as {string}")
	public void i_enter_the_password_as(String PasswordVal) {
		WebElement Username=driver.findElement(By.id("password"));
	    Username.sendKeys(PasswordVal);
	}

	@When("I click the login button")
	public void i_click_the_login_button() {
		WebElement loginbtn=driver.findElement(By.name("login-button"));
		loginbtn.click();
	}

	@Then("I should land on home page {string}")
	public void i_should_land_on_home_page(String ExpHomePage) {
	   String ActHomePage=driver.getCurrentUrl();
	   Assert.assertEquals(ActHomePage, ExpHomePage);
	   
	}

	@Then("I should get an error message as {string}")
	public void i_should_get_an_error_message_as(String expError) {
		WebElement error=driver.findElement(By.cssSelector("h3[data-test=\"error\"]"));
		String errormsg=error.getText();
		Assert.assertEquals(errormsg, expError);
	}
}
