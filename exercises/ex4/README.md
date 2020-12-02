# Exercise 4 - SAP Analytics Cloud Dashboard

In this exercise, you will connect SAP IoT to SAP Analytics Cloud and create a dashboard to show the latest.


## Exercise 4.1 - Create a Dashboard

After completing these steps you will have a dashboard to monitor the maximum and the average temperature of every delivery with the monitored material.

1.	Start SAP Analytics Cloud using the provided link and log in.

2.	Click on <b>Create</b> and then select <b>Story</b>
<br>![](/exercises/ex4/images/createDashboard1.png)

3.	In the next window click on <b>Add a Canvas Package</b>
<br>![](/exercises/ex4/images/createDashboard2.png)

4.	From the new story Canvas Page select <b>Chart</b>
<br>![](/exercises/ex4/images/createDashboard3.png)

5.	In the new pop up window select the <b>Vaccine</b> model

6.	In the New Document screen, go to <b>Designer</b>
<br>![](/exercises/ex4/images/createDashboard4.png)

7.	Under <b>Measures</b> click on <b>Add Measure</b>
<br>![](/exercises/ex4/images/createDashboard5.png)

8.	Under <b>Measures</b> select <b>Create Calculation</b>
<br>![](/exercises/ex4/images/createDashboard6.png)

9. Calculation Editor is opening. Here select <b>Calculated Measure</b> under <b>Type</b>

10.	Under Edit Formula you can create your own formulas. For example, to calculate Average Temperature please write sum and help text is displayed. Choose the suggested type. Afterwards click on Operators and choose "/". Finally write count and choose the example from the suggested types.
<br>![](/exercises/ex4/images/createDashboard7.png)

11.	Click <b>OK</b>

12.	Under <b>Measures</b> select <b>TEMPERATURE_MAX</b>

13. Under <b>Dimension</b> select <b>SALES_ORDER</b>

14. The chart shows now the average as well as the maximum temperature of your deliveries

## Summary

Now you have created a dashboard using SAP Analytics Cloud to visualize the maximum and the average measured temperature of your deliveries.
