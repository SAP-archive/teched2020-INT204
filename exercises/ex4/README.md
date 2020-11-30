# Exercise 4 - SAP Analytics Cloud Dashboard

In this exercise, you will connect SAP IoT to SAP Analytics Cloud and create a dashboard to show the latest.

## Exercise 4.1 - Create a Data Model

After completing these steps you will have created a data model in SAC which is ready to be consumed in your dashboard afterwards.

1.	Start SAP Analytics Cloud using the provided link and log in.

2. Click on <b>Create</b> and then select <b>Model</b>
<br>![](/exercises/ex4/images/createModel1.png)

3.	In the new screen, select <b>Get Data from a data source</b>
<br>![](/exercises/ex4/images/createModel2.png)

4. At top right under <b>Connect to live data</b>, click <b>Live Data connection</b>
<br>![](/exercises/ex4/images/createModel3.png)


5.	In the popup window, select <b>SAP HANA</b> for System Type, <b>TrainingEU</b> for Connection and <b>VaccineModelXX</b> (XX stands for your Group Number) as Data Source

6.	Click on <b>OK</b>
<br>![](/exercises/ex4/images/createModel4.png)

7.	New model screen is displayed listing all the generated / configured aggregates.
8.	Click <b>Save</b>
<br>![](/exercises/ex4/images/createModel5.png)

9.	Save it as <b>NewModelXX</b> and click on <b>OK</b>
<br>![](/exercises/ex4/images/createModel6.png)



## Exercise 4.2 - Create a Dashboard

After completing these steps you will have a dashboard to monitor the maximum and the average temperature of every delivery with the monitored material.

1.	Click on <b>Create</b> and then select <b>Story</b>
<br>![](/exercises/ex4/images/createDashboard1.png)

2.	In the next window click on <b>Add a Canvas Package</b>
<br>![](/exercises/ex4/images/createDashboard2.png)

3.	From the new story Canvas Page select <b>Chart</b>
<br>![](/exercises/ex4/images/createDashboard3.png)

4.	In the new pop up window select the model you created before

5.	In the New Document screen, go to <b>Designer</b>
<br>![](/exercises/ex4/images/createDashboard4.png)

6.	Under <b>Measures</b> click on <b>Add Measure</b>
<br>![](/exercises/ex4/images/createDashboard5.png)

7.	Under <b>Measures</b> select <b>Create Calculation</b>
<br>![](/exercises/ex4/images/createDashboard6.png)

8. Calculation Editor is opening. Here select <b>Calculated Measure</b> under <b>Type</b>

9.	Under Edit Formula you can create your own formulas. For example, to calculate Average Temperature please write sum and help text is displayed. Choose the suggested type. Afterwards click on Operators and choose "/". Finally write count and choose the example from the suggested types.
<br>![](/exercises/ex4/images/createDashboard7.png)

10.	Click <b>OK</b>

11.	Under <b>Measures</b> select <b>TEMPERATURE_MAX</b>

12. Under <b>Dimension</b> select <b>SALES_ORDER</b>

13. The chart shows now the average as well as the maximum temperature of your deliveries

## Summary

Now you have created a dashboard using SAP Analytics Cloud to visualize the maximum and the average measured temperature of your deliveries.
