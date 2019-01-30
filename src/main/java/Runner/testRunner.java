package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\alimj\\eclipse-workspace\\Training2017_Oct\\CrmBddFrameWork\\src\\main\\java\\Features" /// the path of feature file
		,glue = {"stepDefinitions"},  ///// the path of the step definition files 
		format = {"pretty","html:test-outout", "json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},//To generate different reports
		monochrome = true,   /////// display the console output in a proper readable format 
		dryRun = false  /// To check the mapping is proper between feature file and step definition file 
		)




public class testRunner {
	

}
