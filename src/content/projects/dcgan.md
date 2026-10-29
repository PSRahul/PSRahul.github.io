---
title: "Human Face Generator"
description: "A deep convolutional GAN trained from scratch on 200k CelebA faces, studying the effect of dropout."
category: "Generative Models"
order: 3
---

**Code:** [github.com/PSRahul/dcgan](https://github.com/PSRahul/dcgan)

A deep convolutional GAN was trained from scratch on the Large-scale CelebFaces (CelebA) dataset of 200k face images.

A random sample vector as well as dropout was used in both the discriminator and the generator to induce noise. Various dropout values were tried.

## Training

Download the images into the `data/celeba/` folder in the same directory, then run:

```bash
./train.py --d1 [argument] --d2 [argument]
```

`d1` and `d2` are dropout values applied to the odd and even layers of the network respectively. They can be chosen independently.

## Sample generation

```bash
./sample_generator.py --d1 [argument] --d2 [argument]
```

State dictionaries for trained models with different dropout values are provided in the `models` folder.

## Sample results

![Grid of GAN-generated faces, dropout run dp12/dp20](/assets/images/dcgan/dp12dp20.webp)
![Grid of GAN-generated faces, dropout run dp17/dp27, second sample](/assets/images/dcgan/dp17dp27_2.webp)
![Grid of GAN-generated faces, dropout run dp17/dp27](/assets/images/dcgan/dp17dp27.webp)
![Grid of GAN-generated faces, dropout run dp16/dp20](/assets/images/dcgan/dp16dp20_2.webp)
