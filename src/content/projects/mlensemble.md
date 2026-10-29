---
title: "Ensemble Methods"
description: "Soft-voting and stacking ensembles of random forests, extra trees and SVMs on MNIST."
category: "Machine Learning"
order: 1
---

![Sample digits from the MNIST dataset](/assets/images/ensemble/mnist.webp)

This project investigates the power of ensemble machine learning models on the MNIST dataset. The individual components are:

- Random Forests
- Extra Trees
- Support Vector Machines

Two kinds of ensemble are constructed.

## Ensemble 1 — Soft voting classifier

![Soft voting classifier diagram](/assets/images/ensemble/soft_voting.webp)

This combines the three classifiers and uses a voting mechanism to determine the class the image belongs to.

## Ensemble 2 — Stacking classifier

![Stacking classifier diagram](/assets/images/ensemble/stacking.webp)

The stacking classifier uses a two-tier architecture. In the first stage, the outputs of the three classifiers are stacked and fed into a random forest classifier. This mimics a feature-extraction stage followed by a classifier, which is common in deep neural networks.

## Results

### Individual models

| Model                   | Test set accuracy (%) |
| ----------------------- | :-------------------: |
| Random Forests          |         96.87         |
| Extra Trees             |         97.07         |
| Support Vector Machines |         96.46         |

### Ensemble models

| Model                  | Test set accuracy (%) |
| ---------------------- | :-------------------: |
| Soft Voting Classifier |         97.42         |
| Stacking Classifier    |         97.08         |
