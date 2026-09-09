// Distribution checks only; plugin development source remains private.
const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
const assert = require('node:assert/strict');

const allowed = new Set([
  '.gitignore', '.github/workflows/release.yml',
  '.github/scripts/verify-release.cjs', 'LICENSE',
  'README.md', 'README.en.md', 'CHANGELOG.md',
  'main.js', 'manifest.json', 'styles.css', 'versions.json',
]);
const files = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'],
  { encoding: 'utf8' }).split('\0').filter(Boolean);
assert(files.every(file => allowed.has(file)),
  'Unexpected public file. Review the distribution allowlist before committing.');

const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
const versions = JSON.parse(fs.readFileSync('versions.json', 'utf8'));
assert.equal(manifest.id, 'harbor');
assert(/^\d+\.\d+\.\d+$/.test(manifest.version));
assert.equal(versions[manifest.version], manifest.minAppVersion);
if (process.env.RELEASE_TAG) assert.equal(process.env.RELEASE_TAG, manifest.version);
for (const file of ['main.js', 'styles.css', 'manifest.json', 'LICENSE']) {
  assert(fs.statSync(file).size > 0, `${file} is empty`);
  const content = fs.readFileSync(file, 'utf8');
  assert(!/sourceMappingURL|sourcesContent/.test(content), `${file}: source map detected`);
  assert(!/(?:secret_|ntn_)[A-Za-z0-9]{20,}|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(content),
    `${file}: possible embedded credential; inspect locally`);
  assert(!/[A-Za-z]:[\\/](?:Users|EIT)[\\/]/i.test(content), `${file}: possible private absolute path`);
}
execFileSync(process.execPath, ['--check', 'main.js']);
console.log(`Harbor ${manifest.version}: distribution checks passed (not an Obsidian UI test).`);
