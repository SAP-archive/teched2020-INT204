# Exercise 1 - Exercise 1 Description

In this exercise, we will explore the so called Thing Model. In Delivery Insights enabled by SAP IoT we want to monitor certain materials which are part of a delivery. Therefore we have a model describing the material with it's thresholds and instances describing the sales orders items.

After completing these steps you will understand the IoT Thing Model used to monitor deliveries.

1.	Start SAP Internet of Things using the provided link and log in.

2.	Access the <b>Thing Modeler</b> app on the Fiori Launchpad
<br>![](/exercises/ex1/images/tm1.png)

3. In the upper left corner of the Thing Modeler App you can select your package. Therefore search for your number which was provided to you earlier and click on the package.
<br>![](/exercises/ex1/images/tm2.png)

4. Now you should see the Thing Model of your material. You can start exploring it. You will notice that it consits of <b>Basic Data</b> which is provided by S/4HANA and also some properties called <b>Measured Values</b>. Those are the acutal sensor values which can be provided by IoT sensors.

5. As a next step you will create an individual threshold for the temperature sensor in your sales order item. Therefore click on <b>Things</b>.
<br>![](/exercises/ex1/images/tm3.png)

6. Next click on <b>Measured Values</b> and enter an individual threshold for your sales order item.
<br>![](/exercises/ex1/images/tm4.png)


## Summary

You've now created a threshold for your sales order item. This threshold will be used in the next excercise to create a rule to monitor your deliveries.

Continue to - [Exercise 2 - Create an IoT Rules to monitor your Deliveries](../ex2/README.md)

