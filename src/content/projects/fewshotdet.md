---
title: "Few-Shot Detection with Self-Supervised Backbones"
description: "Do self-supervised backbones (DINO, DetCO) help a Faster R-CNN detector when labelled data is scarce? A TUM Data Innovation Lab project with PreciTaste."
category: "Deep Learning for Computer Vision"
order: 3
---

**Code, report and slides:** [github.com/PSRahul/FewShotDet](https://github.com/PSRahul/FewShotDet)

This project looked at how self-supervised pretraining of the backbone affects a [Faster R-CNN](https://arxiv.org/abs/1506.01497) object detector when only a few labelled examples are available. It was part of the [Data Innovation Lab](https://www.di-lab.tum.de/vergangene-projekte/ss2021-precibake-few-shot-object-detection-using-self-supervised-learning/) practical course at TUM, run with the machine learning team at PreciTaste (then PreciBake). The models are built with [Detectron2](https://github.com/facebookresearch/detectron2).

## Key results

**Classification pretraining doesn't always transfer to detection.** A ResNet-50 feature extractor was pretrained with the self-supervised methods [DINO](https://arxiv.org/abs/2104.14294) and [DetCO](https://arxiv.org/abs/2102.04803) and then used in the detector. Only the contrastive methods that preserve global and contextual image embeddings improved detection.

**A feature pyramid network speeds up training.** Adding an FPN to the ResNet backbone trained much faster and reached similar accuracy for the same number of epochs. It also makes objects at different scales easier to detect.

The [report](https://github.com/PSRahul/FewShotDet/blob/main/Project%20Report.pdf) and [presentation](https://github.com/PSRahul/FewShotDet/blob/main/Project%20Presentation.pdf) have the full setup and results.
