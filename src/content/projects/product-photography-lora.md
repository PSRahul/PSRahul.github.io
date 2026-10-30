---
title: "Product Photography with Stable Diffusion and LoRA"
description: "Fine-tuning Stable Diffusion 1.5 with LoRA for product photos, filtering products with SAM and CLIP, and refining them with ControlNet inpainting."
category: "Generative Models"
featured: true
order: 1
---

**Code:** [github.com/PSRahul/product_photography_with_lora_sd](https://github.com/PSRahul/product_photography_with_lora_sd). The README has the generated images.

The goal was a pipeline that generates realistic product photoshoot visuals, detects whether a given product is in an image, and enhances only that product while leaving the rest of the scene alone. It has three steps.

## 1. Fine-tune Stable Diffusion with LoRA

Product photography is treated as an art style the model can learn. Fully fine-tuning Stable Diffusion is too slow on limited GPUs, so I used [LoRA](https://arxiv.org/abs/2106.09685) on [Stable Diffusion 1.5](https://huggingface.co/runwayml/stable-diffusion-v1-5).

- **Data:** 65 product photos from [Unsplash](https://unsplash.com/), captioned automatically with [BLIP](https://arxiv.org/abs/2201.12086). Every caption also gets an activation tag that switches the learned style on at inference time.
- **Training:** kohya-based notebooks on Google Colab; 6 repeats, batch size 2, 10 epochs (1,950 steps).
- **Inference:** the [Stable Diffusion Web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) with the LoRA checkpoint and a product-photography prompt template.

## 2. Find the product

[Segment Anything](https://github.com/facebookresearch/segment-anything) proposes foreground masks, and [CLIP](https://github.com/openai/CLIP) classifies each one against text prompts for the product classes (hand bag, shoe, car, watch). The script reports which products are present and keeps their masks. Images with no matching product, such as a photo of the moon, are skipped.

## 3. Enhance it

The product mask drives image-to-image inpainting, with a depth [ControlNet](https://github.com/lllyasviel/ControlNet) so that the product's position and the background stay the same while its appearance changes.
