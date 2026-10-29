---
title: "CLIPtheCenter"
description: "Master thesis: few-shot object detection by extending CenterNet with CLIP and DINO class codes."
category: "Master Thesis"
featured: true
order: 1
---

**Code:** [github.com/PSRahul/CLIPtheCenterv4](https://github.com/PSRahul/CLIPtheCenterv4) · [Thesis report](https://drive.google.com/file/d/1j4-uYm8dd5p1KbLtyhy-uRk4VocWOe3m/view?usp=share_link) · [Presentation](https://drive.google.com/file/d/1fEG_yb3i2UI4MiTTkp3W14b6IKn44U0g/view?usp=sharing)

Most modern machine learning techniques based on neural networks need large amounts of well-annotated training data to demonstrate outstanding performance. However, obtaining instance-level annotations like object bounding boxes in real-world settings is tedious, and it is still a significant challenge in many industrial applications of neural networks. Additionally, the distribution of classes in real-world datasets is inherently imbalanced. This thesis deals with the challenge of few-shot object detection. Given a set of base classes with abundant labeled data and a set of novel classes with few support images, this thesis aims to devise algorithms that can predict and classify the object instances belonging to both the base and novel classes in a query image.

In the first part of the thesis, a representative multi-modal model, CLIP, as well as a self-supervised model, DINO, are experimented with to test the efficacy of different pretraining strategies. Then, algorithms based on class codes are introduced to classify the query image into target novel classes. Finally, experiments were performed on the CUB-200 dataset. With the proposed classification algorithm, the CLIP encoder demonstrated strong few-shot capability with just ten support images per class and competed with a fully supervised ResNet-50 model.

In the second part of the thesis, a novel few-shot object detector, CLIPtheCenter, is designed that extends CenterNet for the task of few-shot object detection. Generalization experiments are performed on a dataset consisting of fifteen base classes and five novel classes from the PASCAL VOC dataset. As a result, CLIPtheCenter doubled the class-agnostic detection performance compared to a vanilla CenterNet on this base class split. Furthermore, when classification performance is also taken into account, CLIPtheCenter tripled the performance of CenterNet on the base class split when CLIP encoder-based class codes are used for class assignments. Finally, ablation studies verified the underlying intuitions for these performance gains.

## Architecture

![CLIPtheCenter architecture](/assets/images/clipthecenter/5.webp)

## Sample results

![CLIPtheCenter detection result, example 1](/assets/images/clipthecenter/1.webp)
![CLIPtheCenter detection result, example 2](/assets/images/clipthecenter/2.webp)
![CLIPtheCenter detection result, example 3](/assets/images/clipthecenter/3.webp)
![CLIPtheCenter detection result, example 4](/assets/images/clipthecenter/4.webp)
