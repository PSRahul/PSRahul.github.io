---
permalink: /projects/semanticseg/
title: "Semantic Segmentation of Pets"
---

## [GitHub Link](https://github.com/PSRahul/semanticseg)

A U-Net based neural network was trained from scratch using Pytorch Lightning wrapper over the Pytorch Framework.

The dropout probability was varied to optimise the network.

## Dataset
https://www.robots.ox.ac.uk/~vgg/data/pets/  

O. M. Parkhi, A. Vedaldi, A. Zisserman, C. V. Jawahar  
Cats and Dogs   
IEEE Conference on Computer Vision and Pattern Recognition  

## Model
A U-Net based neural network was trained from scratch using Pytorch Lightning wrapper over the Pytorch Framework.

The dropout probability was varied to optimise the network.

### Optimiser 
Adam with the default learning rate of 1<sup>-3</sup>.

### Loss   
Cross Entropy Loss of classified pixel labels and ground data.

### Callbacks
Early Stopping , Best Validation loss checkpoints.

## Results

<center><img src="/assets/images/semanticseg/1.png" alt="PnP Based Pose Estimation"></center>
<center><img src="/assets/images/semanticseg/2.png" alt="PnP Based Pose Estimation"></center>
