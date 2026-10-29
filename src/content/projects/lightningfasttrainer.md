---
title: "Lightning Fast Trainer"
description: "YAML-configurable PyTorch Lightning recipes for training and evaluating image classifiers."
category: "Training Frameworks"
order: 1
---

**Code:** [github.com/PSRahul/lightning_fast_trainer](https://github.com/PSRahul/lightning_fast_trainer)

This project provides quick recipes in [PyTorch Lightning](https://lightning.ai/) for training as well as inference of object classification models.

The intention is to have an extremely YAML-configurable and extensible framework that can be used to quickly start training models already available on PyTorch Hub on custom datasets and evaluate metrics.

Key features:

- Fully functional network and data modules configured by custom configuration files.
- Logging of losses to TensorBoard for the training, validation and test sets.
- Learning rates tuned with Optuna before training starts.
- Training on GPU servers with containerised Docker images.
- Supports ResNet (ResNet-18, ResNet-50) and Vision Transformer (ViT-B/16) architectures.
- Automatic model checkpoint saving and retrieval.

Setup and training instructions are on the GitHub page.
