import { getAssetUrl } from '../utils/assetUrl';

export const projects = [
  {
    id: "tcga-coad",
    title: "TCGA-COAD RNA-seq and DNA Methylation Multi-omics",
    description: "Integrated cancer bioinformatics analysis of TCGA colon adenocarcinoma cohorts using RNA-seq and DNA methylation data to study age-stratified tumor biology across normal, young, middle-age, and old tumor groups.",
    tags: ["TCGA", "RNA-seq", "DNA methylation", "multi-omics", "limma", "edgeR", "pathway analysis"],
    image: getAssetUrl("/images/coad_pca.png"),
    category: "Multi-omics"
  },
  {
    id: "scrna-pbmc",
    title: "Single-cell RNA-seq PBMC Analysis",
    description: "Single-cell transcriptomics analysis using Seurat, including quality control, feature filtering, dimensionality reduction, clustering, UMAP visualization, marker gene detection, and cell population exploration.",
    tags: ["scRNA-seq", "Seurat", "UMAP", "clustering", "PBMC", "QC"],
    image: getAssetUrl("/images/scrna_umap_clusters.png"),
    category: "Single-cell"
  },
  {
    id: "akt-docking",
    title: "AKT Protein–AKT8 Docking for Antiviral Host-Signaling Inhibition",
    description: "Computational docking analysis of AKT protein with AKT8 ligand to explore host-signaling inhibition as a potential strategy for limiting viral replication. The project includes 3D protein–ligand binding pose visualization and 2D residue-level interaction mapping.",
    tags: ["AKT pathway", "AKT8", "molecular docking", "antiviral hypothesis", "protein-ligand interaction"],
    image: getAssetUrl("/images/akt8_docking_3d.png"),
    category: "Docking"
  },
  {
    id: "wet-lab",
    title: "Wet-lab Validation and Cell Culture Experience",
    description: "Hands-on laboratory exposure in aseptic cell culture handling, pipetting, microplate-based assay setup, flask handling, and biosafety cabinet workflows supporting dry-lab prediction and experimental validation planning.",
    tags: ["Cell culture", "biosafety cabinet", "microplate assay", "MTT assay", "RT-PCR", "wet-lab validation"],
    image: getAssetUrl("/images/wetlab_cell_culture_02.png"),
    category: "Wet-lab"
  },
  {
    id: "neuroscan-ai",
    title: "NeuroScan-AI MRI Brain Tumor Classification",
    description: "Deep learning project for MRI brain tumor classification using EfficientNet V2 Large test predictions across No tumor, meningioma, glioma, and pituitary tumor classes. Presented as an academic research poster.",
    tags: ["Deep learning", "MRI", "EfficientNet V2", "medical AI", "classification"],
    image: getAssetUrl("/images/neuroscan_efficientnet_predictions.png"),
    category: "Deep Learning"
  },
  {
    id: "leishmaniasis",
    title: "Cutaneous Leishmaniasis Transcriptomics",
    description: "Bulk RNA-seq analysis of cutaneous leishmaniasis samples to identify differentially expressed genes and enriched biological pathways associated with host response and disease biology.",
    tags: ["RNA-seq", "DESeq2", "limma", "DEG analysis", "g:Profiler", "pathway enrichment"],
    image: getAssetUrl("/images/leishmaniasis_volcano.png"),
    category: "Bulk RNA-seq"
  },
  {
    id: "bulk-pipeline",
    title: "Bulk Transcriptomics Pipeline",
    description: "Snakemake/R workflow for bulk RNA-seq analysis including raw data processing, quantification, tximport summarization, differential expression analysis, PCA, clustering, and enrichment analysis.",
    tags: ["Snakemake", "R", "Kallisto", "tximport", "DESeq2", "limma", "RNA-seq pipeline"],
    image: getAssetUrl("/images/leishmaniasis_gprofiler.png"),
    github: "https://github.com/Mr-Sarmad/Bulk-Transcriptomics-Pipeline",
    category: "Pipelines"
  }
];
