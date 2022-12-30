---
permalink: /projects/mlensemble/
title: "Ensemble Methods"
---

### Machine Learning Ensemble Methods

<center><img src="/assets/images/ensemble/mnist.png" alt="Sample Images from MNIST Dataset" width="450" height="450"></center>.

This project investigates the power of ensemble machine learning models. The individual components are made up of 
+ Random Forests
+ Extra Trees
+ Support Vector Machines

Two varieties of ensembling are constructed

#### Ensemble 1 - Soft Voting Classifier

<center><img src="/assets/images/ensemble/soft_voting.png" alt="Sample Images from MNIST Dataset" width="600" height="450"></center>.

This combines the 3 classifier algorithms and performs a voting mechanism to determine the class that the image belongs to.

#### Ensemble 2 - Stacking Classifier

<center><img src="/assets/images/ensemble/stacking.png" alt="Sample Images from MNIST Dataset" width="600" height="450"></center>.


Stacking Classifier uses a two tier architecture. In the first stage, the output of three classifier are stacked and fed into a random forest classifier. This mimics a feature extraction stage followed by classifier, which is quite common in deep neural networks.


#### Results

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-3dm3{border-color:inherit;font-family:inherit;text-align:center;vertical-align:top}
.tg .tg-5x9i{border-color:inherit;font-family:inherit;font-weight:bold;text-align:center;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-5x9i">Model</th>
    <th class="tg-5x9i">Test Set Accuracy<br>(in percentage)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-3dm3">Random Forests</td>
    <td class="tg-3dm3">96.87</td>
  </tr>
  <tr>
    <td class="tg-3dm3">Extra Forests</td>
    <td class="tg-3dm3">97.07</td>
  </tr>
  <tr>
    <td class="tg-3dm3">Support Vector Machines</td>
    <td class="tg-3dm3">96.46</td>
  </tr>
</tbody>
</table>


