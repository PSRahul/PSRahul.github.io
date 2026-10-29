---
title: "Camera Tracking and Pose Estimation"
description: "Recovering object pose from image sequences with PnP, SIFT, RANSAC and reprojection-error optimisation."
category: "Traditional Computer Vision"
order: 1
---

**Code:** [github.com/PSRahul/camtracking](https://github.com/PSRahul/camtracking)

The project aimed to find the pose and position of a visually feature-rich object from a series of images.

## Task 1 — Perspective-n-Point

In the first task, the positions of the rotating camera (indicated by the blue arrows) need to be figured out using the Perspective-n-Point (PnP) algorithm. PnP uses the correspondences between the real-world dimensions of the boxes and the pixel positions of the visible corners of the boxes in the image.

![Camera poses estimated with PnP from box corner correspondences](/assets/images/camtracking/pnp.webp)

## Task 2 — SIFT correspondences

In this task, instead of using visible corner points as inputs for PnP, SIFT keypoints are used to establish correspondences. To find the 3D world coordinates of the SIFT descriptor points, a ray–box intersection technique is used. The red points in the image below show the SIFT descriptor points verified by back-projecting the 3D coordinates from the ray–box intersection method.

![SIFT keypoints back-projected onto the object](/assets/images/camtracking/sift_matching.webp)

## Task 3 — RANSAC

As an alternative to PnP, Random Sample Consensus (RANSAC) is used to find the poses of the object. A database of SIFT points and the 3D correspondences obtained in Task 2 is used as input for RANSAC.

![Object poses estimated with RANSAC](/assets/images/camtracking/ransac.webp)

## Task 4 — Reprojection error

In the final task, the object poses are found from first principles using the reprojection error. The RANSAC-based solution initialises the first image of the sequence. The poses are obtained by second-order iterative optimisation of the loss between the SIFT descriptor points and the SIFT points reprojected from 3D world coordinates.

![Object poses recovered by minimising reprojection error](/assets/images/camtracking/reprojection_pose.webp)
