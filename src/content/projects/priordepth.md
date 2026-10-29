---
title: "PriorDepth"
description: "Joint monocular depth and camera-motion estimation from video, combining KeyPointNet and MonoDepth2."
category: "Deep Learning for Computer Vision"
featured: true
order: 1
---

**Code:** [github.com/PSRahul/PriorDepth](https://github.com/PSRahul/PriorDepth) · [Project presentation](https://github.com/PSRahul/PriorDepth/blob/main/PriorDepth_Project.pptx)

As part of the Advanced Topics in 3D Computer Vision practical, this project aimed to build a model that estimates the depth of objects as well as the movement of the camera from a video sequence. The model combines two state-of-the-art deep learning models:

1. **KeyPointNet**, from [Neural Outlier Rejection for Self-Supervised Keypoint Learning](https://arxiv.org/abs/1912.10615), for estimating the most descriptive keypoints in an image.
2. **DepthNet**, from [MonoDepth2 — Digging Into Self-Supervised Monocular Depth Estimation](https://arxiv.org/abs/1806.01260), for monocular depth estimation. Using only an RGB image, the network is trained to output the relative depth of the objects in the image.

The network was designed to be trained end-to-end on autonomous driving datasets such as the [KITTI Vision Benchmark Suite](https://www.cvlibs.net/datasets/kitti/). The architecture is shown below.

![PriorDepth architecture](/assets/images/priordepth/priordepth1.webp)

The DepthNet was fine-tuned on a separate sequence using transfer learning so the model, originally trained on KITTI, could adapt to it. The images below show the input video sequence and the depth predicted by the model.

![Input video sequence](/assets/images/priordepth/priordepth2.webp)

![Depth predicted by the model](/assets/images/priordepth/priordepth3.webp)

The keypoints from the trained KeyPointNet are further filtered by descriptor distance and matching score for more robust matching. The figures below show the keypoint matches before and after applying the distance-based filters.

![Keypoint matches before filtering](/assets/images/priordepth/priordepth4.webp)

![Keypoint matches after distance-based filtering](/assets/images/priordepth/priordepth5.webp)
