# ci-github-workflow

A minimal Express API with automated tests and GitHub Actions CI workflow.

## API Endpoint

### `GET /api/hello`
Returns a JSON response indicating the API is healthy and running.

**Example Request:**
```bash
curl http://localhost:3000/api/hello
```

**Example Response:**
```json
{
  "message": "Hello, World! API is up and running.",
  "status": "success",
  "timestamp": "2026-10-06T10:39:11.000Z"
}
```

## Running Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the API Server:**
   ```bash
   npm start
   ```

3. **Run Automated Tests:**
   ```bash
   npm test
   ```

## Continuous Integration (CI)

The GitHub Actions workflow is located at [`.github/workflows/ci.yml`](.github/workflows/ci.yml).
- **Trigger**: Manual trigger only via GitHub Actions (`workflow_dispatch`). No automatic triggers on branch push or pull request.
- **Jobs**: Sets up Node.js (20.x, 22.x), installs dependencies using `npm ci`, and runs automated tests with `npm test`.
