package CucumberTest;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * Hello world!
 *
 */
public class SeleniumTest {
	private static WebDriver driver = null;

	public static void main(String[] args) {
		// Create a new instance of the Firefox driver

		driver = new ChromeDriver();

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		driver.get("https://login.yahoo.com/");

		driver.findElement(By.xpath("//*[@id='login-username']")).sendKeys("test@yahoo.com");

		driver.findElement(By.xpath("//*[@id='login-passwd']")).sendKeys("test123");

		driver.findElement(By.xpath("//*[@id='login-signin']")).click();
		
		String title = driver.getTitle();
		Assert.assertEquals("Yahoo – login", title);

		driver.quit();
	}
}
