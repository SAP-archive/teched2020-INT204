# Exercise 2 - Create an IoT Rules to monitor your Deliveries

In this exercise you will create a rule to monitor the current temperature of your delivery. In addition you will create an action to trigger a warning in S/4HANA in case the threshold is violated.

## Exercise 2.1 - Create a Rule Context

After completing these steps you will have created a rule context which can be used to create new IoT rules.

1.	Select the <b>Rule Projects</b> application under IoT Rules and Actions
<br>![](/exercises/ex2/images/rc1.png)

2.	Click on <b>Create</b> to create a new Rule Context 

3.	Enter vaccinerulecontextXX in the field <b>Name</b>
4.	Enter any <b>Short Text</b> and <b>Description</b>
<br>![](/exercises/ex2/images/rc2.png)

5.	Click <b>Add</b> to add a new property set under the tab <b>Property Set-based</b>
<br>![](/exercises/ex2/images/rc3.png)

6. In the dialog, select your Package and your Thing Type. Select the measurement property set which is displayed and click <b>OK</b>. 
7. Click <b>Save and Continue</b>
<br>![](/exercises/ex2/images/rc4.png)


## Exercise 2.2 - Create an IoT Streaming Rule

After completing these steps you will have created a rule running on data which is ingested into SAP IoT.

1. Stay in the <b>Rule Porjects</b> app

2. Click <b>Create Rule > Streaming Cloud > Event Creation</b>
<br>![](/exercises/ex2/images/ru1.png)

3. Enter a <b>Rule Name</b>, a <b>Short Text</b> and a <b>Description</b>

4. In the <b>Input and Output</b> tab select your Rule Context as <b>Input</b>

5. CLick on <b>Confirm</b>
<br>![](/exercises/ex2/images/ru2.png)


6. In the <b>Rule Editor</b> enter an <b>If</b> Statement to compare the measured temperature with your threshold. Use <b>Ctrl+Space</b> in the rule input field to get a value help. The result should look like:
```
Handling_Unit_Condition.temperature > Handling_Unit_Condition_Generi91427.maxTemp 
```

7. Click on <b>Activate</b> to activate your rule
<br>![](/exercises/ex2/images/ru3.png)

## Exercise 2.3 - Create an Action

After completing these steps you will have created an integration into S/4HANA situation handling framework.

1. In the Fiori Launchpad open the <b>Actions</b> app.
<br>![](/exercises/ex2/images/ac1.png)

2. Click on <b>Create</b> to create a new Action.

3. Enter a <b>Name</b> and a <b>Description</b>.

4. Select <b>Event from Rule</b> as <b>Triggered By:</b>

5. Select your <b>Rule</b>

6. Keep the <b>Action Type</b> to <b>Service Integration</b>

7. Remove the <b>Trigger subsequent event</b> checkbox

8. Select the <b>E5Z_Sandbox Destination<b>
<br>![](/exercises/ex2/images/ac2.png)

9. Enter the following JSON in the <b>Request body</b>
```json
{
	"alias": "IOT_S4_SIT_SO",
	"guid": "123456789",
	"data": {
		"device": {
			"customerid": "${S4_References.CUSTOMERID}",
			"salesorder": "${S4_References.SALESORDER}",
			"salesorderitem": "${S4_References.SALESORDERITEM}",
			"thresholdvalue": "${Handling_Unit_Condition.Generi91427.maxTemp}",
      			"actualvalue": "${Handling_Unit_Condition.temperature}"
		}
	}
}
```


## Summary

You've now created a streaming rule on your IoT data. 

Continue to send Data into SAP IoT - [Exercise 3 - Send Data to SAP IoT](../ex3/README.md)
