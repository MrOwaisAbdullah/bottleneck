# Data File Separation Design Document

## Overview

This document outlines the design for separating the component data from the `index.html` file into the external `data.js` file. Currently, the PC component data (CPUs, GPUs, and games) is embedded directly in the `index.html` file, making it difficult to maintain and update. The goal is to move this data to the external `data.js` file and modify the application to load data from this external source.

## Architecture

### Current Architecture
- Data is embedded directly in `index.html` file within a `<script>` tag
- Data structure contains CPUs, GPUs, and games with their respective properties
- All data is contained within a single `components` object

### Proposed Architecture
- Data will be moved to `data.js` file as an exported module
- `index.html` will load `data.js` as an external script
- Application logic will reference the external data instead of the embedded data
- Data structure will be enhanced with additional properties from the new data file

## Data Structure

### Current Data Structure
```javascript
const components = {
  cpus: [...],
  gpus: [...],
  games: [...]
};
```

### Enhanced Data Structure
The new data structure in `data.js` includes additional properties:
- `freshness`: Indicates how current the component data is
- `release_date`: When the component was released
- `status`: Availability status (available/upcoming)
- `pCoreCount` and `eCoreCount`: For Intel CPUs with performance and efficiency cores
- Enhanced GPU properties including ray tracing and DLSS impacts

## Implementation Plan

### 1. Modify data.js
- Export the components data properly for use in the browser
- Ensure the data structure is compatible with the existing application
- Add `window.components = components;` at the end of the file

### 2. Update index.html
- Remove the embedded data structure (the entire `const components = { ... };` block)
- Add script tag `<script src="data.js"></script>` to load external data
- Ensure the script tag is placed before the main application script

### 3. Update Data Access Logic
- No changes needed to data access logic since we're using the same `components` object name
- All existing references to `components.cpus`, `components.gpus`, and `components.games` will work unchanged

## API Design

### Data Export (data.js)
```javascript
// Export for browser usage
window.components = {
  cpus: [...],
  gpus: [...],
  games: [...]
};
```

### Data Consumption (index.html)
```javascript
// Access data through window.components
const cpus = window.components.cpus;
const gpus = window.components.gpus;
const games = window.components.games;
```

## Implementation Details

### 1. Update data.js
The `data.js` file already contains the enhanced component data. We need to ensure it properly exports the data for browser usage:

```javascript
// At the end of data.js
window.components = components;
```

### 2. Update index.html

#### Add script tag to load data.js:
```html
<!-- Add this before the main script tag -->
<script src="data.js"></script>
```

#### Remove embedded data:
Remove the entire `const components = { ... };` block from the script section (around line 2150).

#### Update data access:
The application logic should automatically use the external data since we're using the same `components` object name.

## Data Models

### CPU Model
| Property | Type | Description |
|----------|------|-------------|
| id | string | Unique identifier |
| name | string | CPU name |
| score | number | Performance score |
| rank | number | Performance rank |
| coreCount | number | Total core count |
| threadCount | number | Thread count |
| baseClock | string | Base clock speed |
| boostClock | string | Boost clock speed |
| tdp | string | Thermal Design Power |
| ddr4_support | boolean | DDR4 memory support |
| ddr5_support | boolean | DDR5 memory support |
| pcie_version | string | PCIe version support |
| freshness | string | Data freshness indicator |
| release_date | string | Release date (YYYY-MM-DD) |
| status | string | Availability status |

### GPU Model
| Property | Type | Description |
|----------|------|-------------|
| id | string | Unique identifier |
| name | string | GPU name |
| score | number | Performance score |
| fps1080 | number | Performance at 1080p |
| fps1440 | number | Performance at 1440p |
| fps4k | number | Performance at 4K |
| rank | number | Performance rank |
| vram | string | VRAM capacity and type |
| busInterface | string | Bus interface |
| tdp | string | Thermal Design Power |
| ray_tracing_multiplier | number | Ray tracing performance factor |
| dlss_impact | number | DLSS performance impact |
| freshness | string | Data freshness indicator |
| release_date | string | Release date (YYYY-MM-DD) |
| status | string | Availability status |

### Game Model
| Property | Type | Description |
|----------|------|-------------|
| id | string | Unique identifier |
| name | string | Game name |
| cpu_intensity | number | CPU workload intensity (0-1) |
| gpu_intensity | number | GPU workload intensity (0-1) |
| ray_tracing_support | boolean | Ray tracing support |
| recommended_cpu | string | Recommended CPU ID |
| recommended_gpu | string | Recommended GPU ID |
| esports_suitable | boolean | Suitable for esports |
| aaa_title | boolean | AAA title |

## Business Logic

### Data Loading Sequence
1. HTML page loads
2. data.js script is loaded and executed
3. Components data is attached to window object
4. Main application script runs and accesses data through window.components

### Data Access Patterns
- Dropdown population for CPU and GPU selection
- Component lookup by ID during calculations
- Game data access for specific game analysis

## Testing

### Unit Tests
- Verify data.js loads correctly in browser
- Check that all components are accessible through window.components
- Validate data structure matches expected format
- Ensure new properties are accessible

### Integration Tests
- Test dropdown population with external data
- Verify bottleneck calculations work with new data
- Check that all UI elements display correctly with new data

### Validation Process
1. Open the index.html file in a browser
2. Verify that CPU and GPU dropdowns are populated with components from data.js
3. Select a CPU and GPU combination
4. Perform a bottleneck calculation
5. Verify that results reflect the new data entries (e.g., newer CPUs/GPUs have appropriate scores)
6. Check browser console for any JavaScript errors

### Expected Results
- All dropdowns should populate with the full list of components from data.js
- Newer components (like Ryzen 9 9950X3D or RTX 5090) should appear in the dropdowns
- Calculations should reflect the updated performance scores
- No JavaScript errors should appear in the console

## Deployment

### File Changes
1. Update data.js to properly export components data
2. Modify index.html to:
   - Remove embedded components data
   - Add script tag for data.js
   - Update data access logic

### Backward Compatibility
- Ensure existing functionality remains unchanged
- Maintain the same data access patterns
- Preserve all existing component IDs

### Error Handling
- Add error handling for cases where data.js fails to load
- Implement fallback mechanism to ensure application still functions
- Display user-friendly error message if data loading fails

```javascript
// Add to index.html script section
window.addEventListener('error', function(e) {
  if (e.target.tagName === 'SCRIPT' && e.target.src.includes('data.js')) {
    console.error('Failed to load data.js, using fallback data');
    // Initialize with minimal fallback data or show error message
  }
}, true);
```

## Benefits

### Maintainability
- Component data can be updated independently of the main application code
- Easier to manage and version control component data
- Simplifies the main HTML file by removing large data blocks

### Collaboration
- Data updates can be managed by non-developers
- Clear separation between application logic and data
- Reduces merge conflicts in version control

### Performance Considerations

#### Loading Performance
- External data file will require additional HTTP request
- Data.js is approximately 9.5KB, minimal impact on load time
- Browser caching will mitigate repeated load times

#### Memory Usage
- Data structure remains the same size
- No additional memory overhead
- Potential for future lazy loading of data subsets

## Security Considerations

### Data Integrity
- Data is static and not user-modifiable
- No external data sources or APIs involved
- Client-side only implementation

### XSS Prevention
- No user input in data files
- Static data reduces attack surface
- Standard Content Security Policy applies

## Conclusion

This design separates the component data from the main HTML file into an external JavaScript file, improving maintainability and making it easier to update component information. The implementation maintains backward compatibility while leveraging the enhanced data structure with additional properties like release dates, statuses, and more detailed specifications. The changes are minimal and focused, reducing the risk of introducing bugs while providing a cleaner architecture for future enhancements.