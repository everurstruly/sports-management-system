# Contributing to Sports Management System Monorepo

**Internal Contributor Guide**

This guide is for anyone working on the sports-management-system monorepo. It covers workspace concepts, integration rules, and practical steps for apps and packages. Nothing is assumed—every key detail is stated.


## Workspace: What It Means Here
---

## Contribution Workflow: Step-by-Step

This section explains how to make contributions to the monorepo, including adding new apps, libraries, workspace packages, and vital practices for smooth development.

### 1. Adding a New App

**Goal:** Create a new app (e.g., Next.js, React, Vite) in the monorepo.

**Steps:**
1. Go to the `apps/` directory:
   ```powershell
   cd apps
   ```
2. Scaffold your app (example for Next.js):
   ```powershell
   pnpm create next-app@latest <your-app-name>
   cd <your-app-name>
   ```
3. Add workspace dependencies to `package.json` if you want to use shared code:
   ```json
   "@workspace/ui": "workspace:*"
   ```
4. Add scripts (`dev`, `build`, etc.) to your app’s `package.json`.
5. Return to the repo root and run:
   ```powershell
   pnpm install
   ```
6. Start your app:
   ```powershell
   pnpm --filter ./apps/<your-app-name> dev
   ```

### 2. Adding a New Workspace Package (Shared Library)

**Goal:** Create a reusable package for use across multiple apps.

**Steps:**
1. Go to the `packages/` directory:
   ```powershell
   cd packages
   ```
2. Scaffold your package (example for TypeScript library):
   ```powershell
   mkdir my-lib
   cd my-lib
   pnpm init
   # Add source files, tsconfig.json, etc.
   ```
3. In any app’s `package.json`, add:
   ```json
   "@workspace/my-lib": "workspace:*"
   ```
4. Return to the repo root and run:
   ```powershell
   pnpm install
   ```
5. Import and use your library in your app code.

### 3. Adding a Library to an Individual App

**Goal:** Add a third-party npm package to a specific app.

**Steps:**
1. Go to the app directory (e.g., `apps/web`):
   ```powershell
   cd apps/web
   ```
2. Install the package:
   ```powershell
   pnpm add <library-name>
   ```
3. Use the library in your app code.

### 4. Linking Workspace Packages to Apps

**Goal:** Use shared workspace packages in your app.

**Steps:**
1. In your app’s `package.json`, add the workspace package:
   ```json
   "@workspace/ui": "workspace:*"
   ```
2. Run at the repo root:
   ```powershell
   pnpm install
   ```
3. Import and use the package in your app code.

### 5. Vital Practices & Things to Know

- Always run `pnpm install` at the repo root after adding/removing apps or packages.
- Use workspace dependencies (`workspace:*`) for local packages; use regular versions for npm packages.
- Scripts (`dev`, `build`, etc.) in each app’s `package.json` allow turbo to run tasks in parallel.
- You can move apps out of the monorepo if you remove workspace dependencies and install needed packages from npm.
- Keep shared code in `packages/` for easy reuse and maintenance.
- Document new apps and packages with a README in their folder.
- Use consistent naming for packages and apps for clarity.

---

- We use **pnpm workspaces**. This means:
   - All folders listed in `pnpm-workspace.yaml` (e.g., `apps/*`, `packages/*`) are part of the workspace.
   - Running `pnpm install` at the root links all workspace packages and dependencies together.
   - You can reference any workspace package in another by using:
      ```json
      "@workspace/ui": "workspace:*"
      ```
      in your `package.json` dependencies.

## How Apps and Packages Are Discovered

- Any folder inside `apps/` or `packages/` is auto-detected as a workspace member.
- No manual registration is needed—just put your app/package in the right folder.
- Turborepo (`turbo.json`) runs tasks (dev, build, lint) across all detected apps/packages.

## Creating, Moving, or Removing Apps/Packages

**To create a new app:**
1. Place it in `apps/` (e.g., `apps/my-app`).
2. Add workspace dependencies to its `package.json` as needed (see below).
3. Run `pnpm install` at the root.
4. Add scripts (`dev`, `build`, etc.) so turbo can run tasks for it.

**To move an app out of the monorepo:**
1. Remove any `workspace:*` dependencies from its `package.json`.
2. Install those dependencies from npm or copy the relevant packages.
3. Run `pnpm install` in the app’s new location.

**To remove an app/package:**
1. Delete its folder from `apps/` or `packages/`.
2. Run `pnpm install` at the root to update links.

## Adding Workspace Dependencies (Explicit Example)

Suppose you want your app to use the shared UI package:

In `apps/web/package.json`:
```json
"dependencies": {
   "@workspace/ui": "workspace:*"
}
```
Then run:
```powershell
pnpm install
```
This links the local package from `packages/ui`.

## Making an App Standalone

If you want to move an app out of the monorepo:
- Remove all `workspace:*` dependencies from its `package.json`.
- Install those packages from npm or copy their code into the app.
- The app will then work independently.

## Example Scenarios

**Scenario: Add a new Next.js app that uses shared UI**
1. Create with `pnpm create next-app@latest apps/new-app`.
2. In `apps/new-app/package.json`, add:
    ```json
    "@workspace/ui": "workspace:*"
    ```
3. Run `pnpm install` at the root.
4. Add scripts (`dev`, `build`, etc.) to `package.json`.

**Scenario: Remove an app**
1. Delete `apps/old-app`.
2. Run `pnpm install` at the root.

**Scenario: Move an app out**
1. Copy `apps/web` to a new location.
2. Remove `workspace:*` dependencies from its `package.json`.
3. Install those dependencies from npm.
4. Run `pnpm install` in the new location.

---

## Workspace Concepts & Integration

- **Monorepo Structure:**
   - All apps live in `apps/`, shared code/packages in `packages/`.
   - The workspace is managed by pnpm (`pnpm-workspace.yaml`) and Turborepo (`turbo.json`).
- **Automatic Integration:**
   - Any app or package placed in the correct folder is auto-detected by pnpm and turbo.
   - No registration needed—just follow folder conventions.
- **Workspace Dependencies:**
   - To use shared code, add lines like `"@workspace/ui": "workspace:*"` to your app's `package.json`.
   - After adding or updating workspace dependencies, run `pnpm install` at the root to link everything.
- **App Portability:**
   - Apps are independent unless they use workspace packages. You can move an app out of the monorepo if you remove/replace workspace dependencies.
   - Shared packages can also be published to npm if needed for external use.
- **Manual Steps for New Apps:**
   - After creating a new app (e.g., with `create-next-app`), manually add workspace dependencies to its `package.json`.
   - See the section below for step-by-step instructions.

---

## Prerequisites
- Node.js >= 20
- pnpm (recommended version: 10.4.1)
- Git

## Setup
1. **Clone the repository:**
   ```powershell
   git clone <repo-url>
   cd sports-management-system
   ```
2. **Install pnpm (if not installed):**
   ```powershell
   npm i -g pnpm@10.4.1
   ```
3. **Install dependencies:**
   ```powershell
   pnpm install
   ```

## Development Workflow
- **Start all apps in dev mode:**
  ```powershell
  pnpm run dev
  ```
- **Run a single app (example for apps/team):**
  ```powershell
  pnpm --filter ./apps/team dev
  ```
- **Build all apps:**
  ```powershell
  pnpm run build
  ```
- **Build and start a single app (example for apps/web):**
  ```powershell
  cd apps/web
  pnpm run build
  pnpm run start
  ```

## Linting & Formatting
- **Lint all packages:**
  ```powershell
  pnpm run lint
  ```
- **Format codebase:**
  ```powershell
  pnpm run format
  ```

## Best Practices
- Make changes in a new branch, following the repo's branch naming conventions.
- Run lint and format before committing.
- Add tests for new features or bug fixes.
- Document any new environment variables or configuration in the relevant README.
- For app-specific changes, update the corresponding app's README if needed.

## Troubleshooting
- **Node/pnpm version issues:**
  - Check your versions: `node -v`, `pnpm -v`
- **Dependency issues:**
  - Run `pnpm install` at the repo root.
- **Port conflicts:**
  - Change the port via environment variable or CLI flag.

## Need Help?
- Open an issue in the repository.
- Tag maintainers in your PR for review.

## Creating a New App

You can add new apps to the monorepo using popular tools like `shadcn-ui` CLI or `create-react-app`. Follow these steps:

### 1. Using shadcn-ui CLI (Next.js)

1. **Navigate to the apps directory:**
   ```powershell
   cd apps
   ```
2. **Create a new Next.js app (recommended):**
   ```powershell
   pnpm create next-app@latest <your-app-name>
   cd <your-app-name>
   ```
3. **Initialize shadcn-ui:**
   ```powershell
   pnpm dlx shadcn-ui@latest init
   # Follow the prompts to set up UI components
   ```
4. **Update workspace config:**
   - Ensure `apps/<your-app-name>` is included in `pnpm-workspace.yaml` (already matches `apps/*`).
   - Add any custom scripts to your new app's `package.json` as needed.
5. **Install dependencies:**
   ```powershell
   pnpm install
   ```
6. **Run your new app:**
   ```powershell
   pnpm --filter ./apps/<your-app-name> dev
   ```

### 2. Using create-react-app

1. **Navigate to the apps directory:**
   ```powershell
   cd apps
   ```
2. **Create a new React app:**
   ```powershell
   pnpm create react-app <your-app-name>
   cd <your-app-name>
   ```
3. **Update workspace config:**
   - Ensure `apps/<your-app-name>` is included in `pnpm-workspace.yaml` (already matches `apps/*`).
   - Add any custom scripts to your new app's `package.json` as needed.
4. **Install dependencies:**
   ```powershell
   pnpm install
   ```
5. **Run your new app:**
   ```powershell
   pnpm --filter ./apps/<your-app-name> start
   ```

### 3. General Notes
- All new apps should be placed in the `apps/` directory.
- Use `pnpm install` at the root after adding a new app to link dependencies.
- Add any shared packages to `packages/` and reference them in your app's `package.json` as `workspace:*`.
- For Next.js apps, prefer using the latest Next.js and shadcn-ui for UI components.
- For React apps, you can use CRA or Vite as a starter.
- Update documentation and add a README in your new app folder.

---

Happy coding!
