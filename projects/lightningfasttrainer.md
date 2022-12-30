---
permalink: /projects/lightningfasttrainer/
title: "Lightning Fast Trainer"
---

## [GitHub Link](https://github.com/PSRahul/lightning_fast_trainer)

This project provides quick recipes in [PyTorch Lightning](https://www.pytorchlightning.ai/) for training as well as inference of object classification models.

The intention is to have an extremely YAML configurable and extensible framework that can be used to quickly start training models that are already available on PyTorch Hub on custom datasets and evaluate metrics.

Some of the important features are
+ Fully functional network and data modules configurable by the custom configuration files
+ Logging of losses into Tensorboard for training, validation as well as the test set.
+ Model Optimises learning rates with Optuna before starting the training.
+ Possibility of trainer in GPU servers with Containerzed Docker images.
+ Currently supports ResNet architecture (ResNet18, 
ResNet50) as well as Vision Transformer models (ViT B-16).
+ Automatic Model Checkpoint Retrieval and Saving 

Setup and training instructions are available on the GitHub page.
