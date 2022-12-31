---
permalink: /projects/dcgan/
title: "Human Face Generator"
---


## [GitHub Link](https://github.com/PSRahul/dcgan)



A deep convolutional GAN was trained from scratch on the Large scale CelebFaces dataset[1] consisting of 200k images of faces.

A random sample vector as well as a dropout was used in both the Discriminator and the Generator to induce noise.

Various values of dropouts were tried.

### Training Method 

Download the images into <code>data/celeba/</code> folder in the same directory.

<code>./train.py --d1 [argument] --d2 [argument] </code>

<code>d1 and d2</code> are dropout values that are applied on the odd and even layers of the network respectively.They can be independently chosen.

### Sample Generation

<code>./sample_generator.py --d1 [argument] --d2 [argument] </code>

Model state dictionaries for models with different dropouts values are provided for trained models in <code>models</code> folder


## Sample Image Results

<center><img src="/assets/images/dcgan/dp12dp20.png" alt="PnP Based Pose Estimation"></center>
<center><img src="/assets/images/dcgan/dp17dp27_2.png" alt="PnP Based Pose Estimation"></center>
<center><img src="/assets/images/dcgab/dp17dp27.png" alt="PnP Based Pose Estimation"></center>
<center><img src="/assets/images/dcgan/dp16dp20_2.png" alt="PnP Based Pose Estimation"></center>
