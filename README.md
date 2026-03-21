# Data Engineering Project

Personal data engineering workspace: ingestion, transformation, and orchestration experiments. This repository tracks configuration, progress, and dependencies for the work under [`Data_Enginering_Project/`](Data_Enginering_Project/).

**Remote:** [github.com/chien-se/data-engineering-project](https://github.com/chien-se/data-engineering-project)

## Repository layout

| Path | Purpose |
|------|---------|
| [`Data_Enginering_Project/PROGRESS.md`](Data_Enginering_Project/PROGRESS.md) | Milestones, session log, and next steps |
| [`Data_Enginering_Project/requirements.txt`](Data_Enginering_Project/requirements.txt) | Python dependencies (add pins as tools are chosen) |
| [`Data_Enginering_Project/.gitignore`](Data_Enginering_Project/.gitignore) | Ignores for Python, venv, data files, dbt, Airflow, secrets |

## Quick start

```bash
git clone https://github.com/chien-se/data-engineering-project.git
cd data-engineering-project
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate
pip install -r Data_Enginering_Project/requirements.txt
```

Add packages to `Data_Enginering_Project/requirements.txt` as the stack is finalized (e.g. dbt, Airflow SDKs, drivers).

## Status

Initialization is complete: GitHub remote, `.gitignore`, and progress log are in place. Folder structure, data sources, and pipeline design are still to be defined—see `PROGRESS.md`.
