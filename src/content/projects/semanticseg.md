---
title: "Semantic Segmentation of Pets"
description: "A U-Net trained from scratch with PyTorch Lightning on the Oxford-IIIT Pet dataset."
category: "Deep Learning for Computer Vision"
order: 3
---

**Code:** [github.com/PSRahul/semanticseg](https://github.com/PSRahul/semanticseg)

A U-Net based neural network was trained from scratch using PyTorch Lightning on top of PyTorch. The dropout probability was varied to optimise the network.

## Dataset

[Oxford-IIIT Pet Dataset](https://www.robots.ox.ac.uk/~vgg/data/pets/) — O. M. Parkhi, A. Vedaldi, A. Zisserman, C. V. Jawahar, "Cats and Dogs", IEEE Conference on Computer Vision and Pattern Recognition.

## Training setup

- **Optimiser:** Adam with the default learning rate of $10^{-3}$.
- **Loss:** cross-entropy between predicted pixel labels and ground truth.
- **Callbacks:** early stopping and best-validation-loss checkpoints.

## Results

![Pet segmentation results, example 1](/assets/images/semanticseg/1.webp)
![Pet segmentation results, example 2](/assets/images/semanticseg/2.webp)
