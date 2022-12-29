---
permalink: /projects/camtracking/
title: "Camera Tracking and Pose Estimation"
---

### [GitHub Link](https://github.com/PSRahul/camtracking)

The project aimed to find the pose and position of a visually feature-rich object from a series of images.

#### Task 1

In the first task, the positions of the rotating camera, indicated by the blue arrow need to be figured out using Perspective-n-Point (PnP) algorithm.

PnP Algorithm uses the correspondences between the real world dimensions of the boxes and the pixel position of the visible corner of the boxes in the image.

<img src="https://github.com/PSRahul/camtracking/blob/main/pnp.gif" alt="Computer man" style="width:48px;height:48px;">

#### Task 2

In this task, instead of using visible corner points as inputs for the Perspective-n-Point (PnP) algorithm, the SIFT keypoints are used to establish correspondences.

