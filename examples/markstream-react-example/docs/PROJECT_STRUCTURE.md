# 🗄️ Project Structure

This project follows a Feature-Based Architecture, inspired by the principles of Screaming Architecture and Domain-Driven Design (DDD). The main goal is to organize code around business capabilities rather than technical concerns, making the codebase more maintainable and scalable.

## Architecture Overview

The codebase is organized into two main categories:

1. **Shared Infrastructure** (`src/` root level)
2. **Feature Modules** (`src/features/`)

### Shared Infrastructure

The root level of `src/` contains shared resources used across multiple features:

```sh
src
|
+-- components # shared components used across the entire application
|
+-- features # feature-based modules (MOST IMPORTANT!)
|
+-- hooks # shared hooks used across the entire application
|
+-- layouts # shared layouts used across the entire application
|
+-- libs # shared libs used across the entire application
|
+-- pages # shared pages used across the entire application
|
+-- providers # all of the application providers
|
+-- routes # all of the application routes
|
+-- services # shared services used across the entire application
|
+-- store # global state stores
|
+-- theme # shared theme used across the entire application
|
+-- utils # shared helpers used across the entire application
```

### Feature Modules

Each feature is a self-contained module that encapsulates all the code related to a specific business capability. This follows the principles of:

- **High Cohesion**: All related code is kept together
- **Low Coupling**: Features interact through well-defined interfaces
- **Domain-Driven Design**: Code organization reflects business capabilities
- **Screaming Architecture**: The structure "screams" the intent of the application

A feature module structure:

```sh
src/features/awesome-feature
|
+-- assets # assets used only in this feature
|
+-- components # components used only in this feature
|
+-- hooks # hooks used only in this feature
|
+-- providers # providers used only in this feature
|
+-- services # services used only in this feature
|
+-- store # stores used only in this feature
|
+-- theme # theme used only in this feature
|
+-- utils # helpers used only in this feature
|
+-- index.ts # public API of the feature
```

## Key Principles

1. **Feature Encapsulation**

   - Each feature is a self-contained module
   - Features should not depend on the internal structure of other features
   - All feature exports should go through the `index.ts` file

2. **Public API**

   - Features expose their functionality through a public API (`index.ts`)
   - Other parts of the application should only import from the feature's root:

   ```typescript
   // ✅ Good
   import { AwesomeComponent } from '@/features/awesome-feature';

   // ❌ Bad
   import { AwesomeComponent } from '@/features/awesome-feature/components/AwesomeComponent';
   ```

3. **Import Rules**
   To enforce these principles, you can add the following ESLint rule:

   ```js
   {
       rules: {
           'no-restricted-imports': [
               'error',
               {
                   patterns: ['@/features/*/*'],
               },
           ],
       }
   }
   ```

## Benefits

1. **Maintainability**: Changes to a feature are isolated and don't affect other parts of the application
2. **Scalability**: New features can be added without modifying existing code
3. **Clarity**: The codebase structure clearly communicates the application's business capabilities
4. **Reusability**: Features can be reused across different parts of the application
5. **Testability**: Features can be tested in isolation

## Best Practices

1. Keep features focused on a single business capability
2. Minimize dependencies between features
3. Use the shared infrastructure for common functionality
4. Document the public API of each feature
5. Keep feature-specific code within the feature module
