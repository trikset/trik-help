# TRIK Help Docusaurus Preview

Temporary Docusaurus migration repository for TRIK Help.

- Preview: https://help-new.trikset.com
- Source GitBook repo: https://github.com/trikset/trik-help (`main-ru`)
- Intended final home: `trikset/trik-help` or another TRIK org repository after access is available.

## Development

```bash
npm ci
npm run start
npm run build
```

## Deployment

`.github/workflows/deploy-preview.yml` builds the site and deploys `build/` to Bender via rsync.

Required GitHub Actions secrets:

- `BENDER_HOST`
- `BENDER_USER`
- `BENDER_SSH_KEY`
- `BENDER_PATH`
- `BENDER_PORT` (optional, defaults to 22 in workflow env if absent)

Production `help.trikset.com` is not switched by this repository.
