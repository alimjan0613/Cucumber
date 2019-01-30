package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinitions {

	WebDriver driver;

	@Given("^User is already on login page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", 
				"C:\\Users\\alimj\\eclipse-workspace\\Training2017_Oct\\CrmBddFrameWork\\resorces\\chromedriver.exe");

		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com");
		driver.manage().window().maximize();

	}

	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);

	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username , String password) throws Exception {
		driver.findElement(By.name("username")).sendKeys(username);
		Thread.sleep(1000);
		driver.findElement(By.name("password")).sendKeys(password);

	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		WebElement LoginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", LoginBtn);
	    
	}
	
	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		String title = driver.getTitle();
		System.out.println("Home page title is ::" + title);
		Assert.assertEquals("CRMPRO", title);
		
	  
	}
	
	@Then("^user closes the browser$")
	public void user_closes_the_browser()  {
	    driver.close();
	    driver.quit();
	}


}
