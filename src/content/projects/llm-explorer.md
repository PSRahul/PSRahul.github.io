---
title: "LLM Explorer"
description: "Retrieval-augmented generation with LangChain, synthetic data from TinyLlama, and Hugging Face inference experiments."
category: "Large Language Models"
featured: true
order: 1
---

**Code:** [github.com/PSRahul/LLM-Explorer](https://github.com/PSRahul/LLM-Explorer)

A collection of small experiments with recent LLM tooling.

## Retrieval-augmented generation

`retrieval-augmented-generation.py` builds a retrieval-augmented generation (RAG) pipeline with [LangChain](https://www.langchain.com/) and [Hugging Face](https://huggingface.co/) models. Documents are retrieved for a question and passed to the model as context.

## Synthetic data generation

`generate_synthetic_data.py` generates artificial tabular data from a few example rows, using the [llamafile](https://github.com/Mozilla-Ocho/llamafile) build of TinyLlama-1.1B. Given rows such as `Rahul,India` and `Mark,America`, the model continues the list with new name and region pairs. The output also shows the failure modes of a small model, such as near-duplicate names.

## Model fetcher

`model_fetcher.py` downloads a model from the Hugging Face Hub and runs inference through it, as a quick way to try new checkpoints.
