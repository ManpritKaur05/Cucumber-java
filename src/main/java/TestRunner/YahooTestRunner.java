package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/main/java/stepDefinition/yahootest.feature" }, glue = {
		"stepDefinition" }, format = { "pretty", "html:/Users/Manprit/workspace/Cucumber-java/reports" })

public class YahooTestRunner {

}
