import sharp from "sharp";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const distDir = path.join(root, "dist");
const outputDir = path.join(distDir, "optimized");

const images = [
  { file: "kshitij-portrait.webp", width: 1000, quality: 78 },
  { file: "work/lace-different-01.webp", width: 1200, quality: 78 },
  { file: "work/lace-different-02.webp", width: 1200, quality: 78 },
  { file: "work/lace-different-03.webp", width: 1200, quality: 78 },
  { file: "work/lace-different-04.webp", width: 1200, quality: 78 },
  { file: "work/lace-different-05.webp", width: 1200, quality: 78 },
];

await mkdir(outputDir, { recursive: true });

for (const image of images) {
  const inputPath = path.join(publicDir, image.file);
  const outputPath = path.join(outputDir, path.basename(image.file));
  await sharp(inputPath)
    .rotate()
    .resize({ width: image.width, withoutEnlargement: true })
    .webp({ quality: image.quality, effort: 6 })
    .toFile(outputPath);

  // Remove the unoptimized copy from the published site.
  await rm(path.join(distDir, image.file), { force: true });
  const original = await sharp(inputPath).metadata();
  const optimized = await sharp(outputPath).metadata();
  console.log(`Optimized ${image.file}: ${original.width}x${original.height} -> ${optimized.width}x${optimized.height}`);
}
