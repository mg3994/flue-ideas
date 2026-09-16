import fs from 'node:fs';
import path from 'node:path';

const SKILLS_DIR = path.resolve(process.cwd(), 'skills');

if (!fs.existsSync(SKILLS_DIR)) {
  console.error(`Skills directory not found at ${SKILLS_DIR}`);
  process.exit(1);
}

const skillDirectories = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${skillDirectories.length} skill directories to validate.`);

let errorCount = 0;

for (const skillName of skillDirectories) {
  const dirPath = path.join(SKILLS_DIR, skillName);
  const skillFile = path.join(dirPath, 'SKILL.md');

  // Directory name checks
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(skillName)) {
    console.error(`❌ [${skillName}] Invalid directory name format. Must be lowercase alphanumeric with single hyphens.`);
    errorCount++;
  }

  if (!fs.existsSync(skillFile)) {
    console.error(`❌ [${skillName}] Missing required SKILL.md file.`);
    errorCount++;
    continue;
  }

  const content = fs.readFileSync(skillFile, 'utf-8');
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!frontmatterMatch) {
    console.error(`❌ [${skillName}] SKILL.md missing valid YAML frontmatter.`);
    errorCount++;
    continue;
  }

  const frontmatterRaw = frontmatterMatch[1];
  const nameMatch = frontmatterRaw.match(/^name:\s*(.+)$/m);
  const descMatch = frontmatterRaw.match(/^description:\s*(.+)$/m);

  if (!nameMatch) {
    console.error(`❌ [${skillName}] Frontmatter missing 'name' field.`);
    errorCount++;
  } else {
    const parsedName = nameMatch[1].trim();
    if (parsedName !== skillName) {
      console.error(`❌ [${skillName}] Frontmatter 'name' (${parsedName}) does not match directory name (${skillName}).`);
      errorCount++;
    }
  }

  if (!descMatch) {
    console.error(`❌ [${skillName}] Frontmatter missing 'description' field.`);
    errorCount++;
  } else {
    const parsedDesc = descMatch[1].trim();
    if (parsedDesc.length < 10 || parsedDesc.length > 1024) {
      console.error(`❌ [${skillName}] Frontmatter 'description' length (${parsedDesc.length}) outside range [10, 1024].`);
      errorCount++;
    }
  }

  console.log(`✅ [${skillName}] Passed custom specification check.`);
}

if (errorCount > 0) {
  console.error(`\nValidation failed with ${errorCount} errors.`);
  process.exit(1);
} else {
  console.log('\nAll Agent Skills passed validation successfully!');
}
