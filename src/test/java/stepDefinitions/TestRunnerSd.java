package stepDefinitions;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome= true,
		plugin={"pretty","html:target/html-cucumber","json:target/cucumber.json"},
		features="src/test/java/featureSwaglab",
		glue="stepDefinitions",
		
		tags = {"@Login or @Addtocart"} // run all the browser scenarios except WIP
		
		
		)
public class TestRunnerSd {

}
