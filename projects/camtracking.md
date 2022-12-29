---
permalink: /projects/camtracking/
title: "Camera Tracking and Pose Estimation"
---

### [GitHub Link](https://github.com/PSRahul/camtracking)

The project aimed to find the pose and position of a visually feature-rich object from a series of images.

#### Task 1

In the first task, the positions of the rotating camera, (indicated by the blue arrows) need to be figured out using Perspective-n-Point (PnP) algorithm. PnP Algorithm uses the correspondences between the real-world dimensions of the boxes and the pixel position of the visible corner of the boxes in the image.

<img src="/assets/pnp.gif" alt="PnP Based Pose Estimation" style="width:48px;height:48px;">

#### Task 2

In this task, instead of using visible corner points as inputs for the Perspective-n-Point (PnP) algorithm, the SIFT key points are used to establish correspondences. To find the 3D world coordinates of the SIFT descriptor points, a ray box intersection technique is used.

The red points in the image below show the SIFT descriptor points verified by back-projecting the 3D coordinators from the ray box intersection method.

<img src="/assets/sift_matching.gif" alt="SIFT Keypoint based Pose Estimation">

#### Task 3



<img src="/assets/ransac.gif" alt="RANSAC based Pose Estimation">

#### Task 4



<img src="/assets/reprojection_pose.gif" alt="Pose through Re-Projection Error">    