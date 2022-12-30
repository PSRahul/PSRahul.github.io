---
permalink: /projects/camtracking/
title: "Camera Tracking and Pose Estimation"
---

## [GitHub Link](https://github.com/PSRahul/camtracking)

The project aimed to find the pose and position of a visually feature-rich object from a series of images.

#### Task 1

In the first task, the positions of the rotating camera, (indicated by the blue arrows) need to be figured out using Perspective-n-Point (PnP) algorithm. PnP Algorithm uses the correspondences between the real-world dimensions of the boxes and the pixel position of the visible corner of the boxes in the image.

<center><img src="/assets/camtracking/pnp.gif" alt="PnP Based Pose Estimation"></center>

#### Task 2

In this task, instead of using visible corner points as inputs for the Perspective-n-Point (PnP) algorithm, the SIFT key points are used to establish correspondences. To find the 3D world coordinates of the SIFT descriptor points, a ray box intersection technique is used. The red points in the image below show the SIFT descriptor points verified by back-projecting the 3D coordinators from the ray box intersection method.

<center><img src="/assets/camtracking/sift_matching.gif" alt="SIFT Keypoint based Pose Estimation"></center>

#### Task 3
In this task, as an alternative to the PnP algorithm, the   Random sample consensus (RANSAC) is used for finding the poses of the object. A database of SIFT   points and the 3D correspondences obtained from the previous Task 2 is used as inputs for RANSAC.

<center><img src="/assets/camtracking/ransac.gif" alt="RANSAC based Pose Estimation"></center>

#### Task 4

In the final task, the object poses are found from the first principles by using the reprojection error. The RANSAC based solution is used as the initializer for the first image of the sequence. The poses are obtained by 2nd order iterative optimisation of the loss between the position of SIFT descriptor points and the reprojected SIFT descriptor points from 3D world coordinates. 


<center><img src="/assets/camtracking/reprojection_pose.gif" alt="Pose through Re-Projection Error"></center>