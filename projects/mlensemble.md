---
permalink: /projects/mlensemble/
title: "Ensemble Methods"
---

### Machine Learning Ensemble Methods

<center><img src="/assets/images/ensemble/mnist.png" alt="Sample Images from MNIST Dataset" width="450" height="450"></center>.

This project investigates the power of ensemble machine learning models for the MNIST dataset. The individual components are made up of 
+ Random Forests
+ Extra Trees
+ Support Vector Machines

Two varieties of ensembling are constructed. They are

#### Ensemble 1 - Soft Voting Classifier

<center><img src="/assets/images/ensemble/soft_voting.png" alt="Sample Images from MNIST Dataset" width="600" height="300"></center>.

This combines the 3 classifier algorithms and performs a voting mechanism to determine the class that the image belongs to.

#### Ensemble 2 - Stacking Classifier

<center><img src="/assets/images/ensemble/stacking.png" alt="Sample Images from MNIST Dataset" width="600" height="300"></center>.


Stacking Classifier uses a two tier architecture. In the first stage, the output of three classifier are stacked and fed into a random forest classifier. This mimics a feature extraction stage followed by classifier, which is quite common in deep neural networks.


#### Results

##### Individual Models

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-pm1l{background-color:#FFF;color:#24292F;text-align:center;vertical-align:middle}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-3dm3{border-color:inherit;font-family:inherit;text-align:center;vertical-align:top}
.tg .tg-a6gw{background-color:#c0c0c0;border-color:inherit;font-family:inherit;font-weight:bold;text-align:center;vertical-align:top
  }
@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;margin: auto 0px;}}</style>
<div class="tg-wrap"><table class="tg">
<thead>
  <tr>
    <th class="tg-a6gw">Model</th>
    <th class="tg-a6gw">Test Set Accuracy<br>(in percentage)</th>
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
    <td class="tg-pm1l">Support Vector Machines</td>
    <td class="tg-baqh">96.46</td>
  </tr>
</tbody>
</table></div>

##### Ensemble Models

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;margin:0px auto;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-3dm3{border-color:inherit;font-family:inherit;text-align:center;vertical-align:top}
.tg .tg-a6gw{background-color:#c0c0c0;border-color:inherit;font-family:inherit;font-weight:bold;text-align:center;vertical-align:top
  }
@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;margin: auto 0px;}}</style>
<div class="tg-wrap"><table class="tg">
<thead>
  <tr>
    <th class="tg-a6gw">Model</th>
    <th class="tg-a6gw">Test Set Accuracy<br>(in percentage)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-3dm3">Soft Voting Classifier</td>
    <td class="tg-3dm3">97.42</td>
  </tr>
  <tr>
    <td class="tg-3dm3">Stacking Classifier</td>
    <td class="tg-3dm3">97.08</td>
  </tr>
</tbody>
</table></div>