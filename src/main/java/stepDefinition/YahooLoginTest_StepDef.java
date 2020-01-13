package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;


public class YahooLoginTest_StepDef {
	
	WebDriver driver = null;
	
	@Given("^user opens yahoo login page$")
	public void user_opens_yahoo_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://login.yahoo.com/");
	    
	}

	@Then("^user enters loginid$")
	public void user_enters_loginid() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id='login-username']")).sendKeys("kmanprit999@yahoo.com");
		driver.findElement(By.xpath("//*[@id='login-signin']")).click();
	   
	}

	@Then("^user enters password$")
	public void user_enters_password() throws Throwable {
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id='login-passwd']")).sendKeys("Manu@123");
	   
	}

	@Then("^get the title of yahoo login page and verify$")
	public void get_the_title_of_yahoo_login_page_and_verify() throws Throwable {
		
		String title = driver.getTitle();
		Assert.assertEquals("Yahoo – login", title);
	}
	
	@Then("^user clicks on signin button$")
	public void user_clicks_on_signin_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id='login-signin']")).click();
	   
	}
	
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.quit();
	   
	}
	
}
