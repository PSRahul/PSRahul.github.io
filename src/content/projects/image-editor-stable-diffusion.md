---
title: "Object Pose Editor with Stable Diffusion"
description: "Changing an object's pose in a photo: text-prompted segmentation, diffusion inpainting and novel-view synthesis."
category: "Generative Models"
order: 2
---

**Code:** [github.com/PSRahul/image-editor-stable-diffusion](https://github.com/PSRahul/image-editor-stable-diffusion). The README has the input and output images.

Given a photo and an object class such as "chair", the task was to rotate that object while keeping the rest of the scene. It assumes one instance of a common object class per image.

## Pipeline

1. **Mask the object.** [Language Segment-Anything](https://github.com/luca-medeiros/lang-segment-anything) combines [GroundingDINO](https://github.com/IDEA-Research/GroundingDINO) for open-set detection from a text prompt with [Segment Anything](https://segment-anything.com/) for the mask.
2. **Remove it.** The Stable Diffusion inpainting checkpoint fills the masked region with background.
3. **Render a new view.** [Zero-1-to-3](https://github.com/cvlab-columbia/zero123) synthesises the cropped object from new azimuth and polar angles, for example rotated 45° in azimuth.
4. **Put it back.** The novel view is resized and overlaid on the inpainted image, centred on the original bounding box.

## What didn't work

Inpainting with a plain "background" prompt worked for the chair image but not for the other samples. Zero-1-to-3 wouldn't run locally in the time available, so the novel view came from a hosted Hugging Face Space. Reconciling CUDA and package versions across several research repositories took a lot of the time, and in the end the masking step ran on CPU.
