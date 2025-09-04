# WordPress PC Bottleneck Calculator Tool Design

## 1. Overview

The PC Bottleneck Calculator is a WordPress plugin tool that helps users analyze the balance between their CPU and GPU to optimize gaming performance and identify hardware limitations. This tool will be embedded in WordPress pages using the WP Code plugin with a clean, dark-themed interface featuring animated gauges, meters, and progress bars.

## 2. Technology Stack & Dependencies

- **Frontend**: HTML5, CSS3 (with `pcb` prefix for all classes), Vanilla JavaScript
- **Charting Library**: Chart.js (v3.9.1) for gauges and visualizations
- **WordPress Integration**: Shortcode `[pc_bottleneck_calculator]` for embedding
- **Data Management**: JSON-based component database for easy updates
- **Animation Library**: CSS3 transitions and JavaScript for smooth animations
- **Responsive Design**: Mobile-first approach with media queries

## 3. Component Architecture

### 3.1 Component Definition

The tool consists of the following main components:

1. **Configuration Form**
   - CPU Selection Dropdown
   - GPU Selection Dropdown
   - Resolution Selection
   - Advanced Options Toggle
   - Advanced Configuration Fields
   - Calculate Button

2. **Results Display**
   - Configuration Summary
   - Performance Gauges (CPU/GPU Bottleneck)
   - Performance Metrics (FPS)
   - Balance Meter
   - Optimization Recommendations
   - Recommended Builds

3. **Data Management**
   - Component Database (CPU/GPU/Game specifications)
   - Calculation Engine
   - Recommendation Engine

### 3.2 Component Hierarchy

```
PCBottleneckCalculator
├── ConfigurationForm
│   ├── ComponentSelector (CPU/GPU)
│   ├── ResolutionSelector
│   ├── AdvancedToggle
│   └── AdvancedOptions
│       ├── MemoryStorageConfig
│       ├── UsageProfile
│       └── GameSpecificAnalysis
├── CalculateButton
├── ResultsDisplay
│   ├── ConfigSummary
│   ├── PerformanceGauges
│   ├── PerformanceMetrics
│   ├── BalanceMeter
│   ├── ComponentAnalysis
│   ├── SystemAnalysis
│   ├── Recommendations
│   ├── GamingPrediction
│   └── RecommendedBuilds
└── DataEngine
    ├── ComponentDatabase
    ├── CalculationEngine
    └── RecommendationEngine
```

### 3.3 Props/State Management

**Props:**
- `theme` (string): Color scheme for the tool (default: "dark")
- `showAdvanced` (boolean): Whether to show advanced options by default
- `defaultResolution` (string): Default resolution setting

**State:**
- `selectedCPU` (object): Currently selected CPU component
- `selectedGPU` (object): Currently selected GPU component
- `selectedResolution` (string): Currently selected resolution
- `advancedOptionsVisible` (boolean): Visibility state of advanced options
- `calculationResults` (object): Results from bottleneck calculation
- `isLoading` (boolean): Loading state during calculations

### 3.4 Lifecycle Methods/Hooks

1. **Initialization**
   - Load component database
   - Populate dropdowns with CPU/GPU options
   - Set default values for form fields
   - Initialize event listeners

2. **User Interaction**
   - Handle component selection changes
   - Toggle advanced options visibility
   - Trigger calculations on button click
   - Update UI with results

3. **Results Display**
   - Render performance gauges
   - Display metrics and recommendations
   - Animate value transitions
   - Handle responsive layout adjustments

## 4. Implementation Details

### 4.1 HTML Structure

The tool follows a semantic HTML structure with properly prefixed CSS classes:

```html
<div class="pcb-container">
  <div class="pcb-header">
    <h1>PC Bottleneck Calculator</h1>
    <p>Description of the tool</p>
  </div>
  
  <div class="pcb-calculator">
    <div class="pcb-form-section">
      <!-- Form elements with pcb- prefix -->
      <div class="pcb-form-grid">
        <div class="pcb-form-group">
          <label for="pcb-cpu">Processor *</label>
          <select id="pcb-cpu"></select>
        </div>
        
        <div class="pcb-form-group">
          <label for="pcb-gpu">Graphics Card *</label>
          <select id="pcb-gpu"></select>
        </div>
        
        <div class="pcb-form-group">
          <label for="pcb-resolution">Resolution</label>
          <select id="pcb-resolution"></select>
        </div>
      </div>
      
      <div class="pcb-advanced-toggle">
        <button type="button" class="pcb-toggle-btn" id="pcb-toggle-btn">
          Show Advanced Options
        </button>
      </div>
      
      <div class="pcb-advanced-fields" id="pcb-advanced-fields">
        <!-- Advanced options -->
      </div>
      
      <button type="button" class="pcb-calculate-btn" id="pcb-calculate-btn">
        <div class="pcb-spinner" id="pcb-spinner"></div>
        <span class="pcb-btn-text">Analyze Build</span>
      </button>
    </div>
    
    <div class="pcb-results-section" id="pcb-results-section">
      <!-- Results display -->
    </div>
  </div>
</div>
```

### 4.2 CSS Implementation

The CSS implementation uses CSS custom properties for consistent theming and all classes are prefixed with `pcb-` to avoid conflicts:

```css
:root {
  --pcb-primary-bg: #1a1a1a;
  --pcb-secondary-bg: #2d2d2d;
  --pcb-card-bg: #333333;
  --pcb-text-primary: #ffffff;
  --pcb-text-secondary: #cccccc;
  --pcb-border: #444444;
  --pcb-green: #4CAF50;
  --pcb-amber: #FFB300;
  --pcb-red: #E53935;
  --pcb-blue: #3498db;
  --pcb-gradient-start: #667eea;
  --pcb-gradient-end: #764ba2;
}

.pcb-container {
  /* Container styles */
}

.pcb-calculator {
  /* Calculator styles */
}

/* All other styles with pcb- prefix */
```

### 4.3 JavaScript Implementation

The JavaScript implementation includes:

1. **Component Database**: JSON structure with CPU, GPU, and game data
2. **DOM Element References**: Properly prefixed element selectors
3. **Dropdown Population**: Function to populate CPU and GPU dropdowns
4. **Advanced Toggle**: Functionality to show/hide advanced options
5. **Calculation Engine**: Core bottleneck calculation logic
6. **Results Display**: Function to render results with animations
7. **Gauge Creation**: Chart.js implementation for performance gauges
8. **Recommendation Engine**: Logic to generate personalized recommendations

Key improvements in the JavaScript implementation:

- Fixed syntax errors in the Chart.js implementation
- Added proper error handling for form validation
- Implemented loading spinner during calculations
- Fixed dropdown population issues
- Enhanced advanced toggle functionality
- Improved animation performance with requestAnimationFrame
- Added proper data cleanup for chart recreation

### 4.4 Data Structure

The component database uses a structured JSON format:

```javascript
const components = {
  cpus: [
    { 
      id: "ryzen-5-5600", 
      name: "AMD Ryzen 5 5600", 
      score: 14500, 
      rank: 12 
    }
    // Additional CPUs
  ],
  gpus: [
    { 
      id: "rtx-3060", 
      name: "NVIDIA RTX 3060", 
      score: 12500, 
      fps1080: 145, 
      fps1440: 115, 
      fps4k: 65, 
      rank: 25 
    }
    // Additional GPUs
  ],
  games: [
    { 
      id: "cyberpunk-2077", 
      name: "Cyberpunk 2077", 
      cpu_intensity: 0.8, 
      gpu_intensity: 0.95 
    }
    // Additional games
  ]
};
```

### 4.5 Calculation Algorithm

The bottleneck calculation algorithm follows these steps:

1. **Base Score Adjustment**
   - Adjust CPU/GPU scores based on resolution factors
   - Apply game-specific intensity modifiers
   - Apply graphics settings multipliers
   - Adjust for RAM capacity

2. **Bottleneck Percentage Calculation**
   - Calculate total performance score (CPU + GPU)
   - Determine CPU/GPU percentage contribution
   - Compare against ideal balance (45% CPU / 55% GPU)
   - Calculate bottleneck percentages

3. **FPS Estimation**
   - Base FPS from GPU performance at resolution
   - Apply bottleneck effects
   - Adjust for refresh rate limitations

### 4.6 WordPress Integration

To integrate with WordPress using the WP Code plugin:

1. **Shortcode Implementation**
   ```php
   [pc_bottleneck_calculator show_advanced="true" default_resolution="1440"]
   ```

2. **Plugin Structure**
   - Create a custom plugin directory
   - Add main plugin file with proper WordPress hooks
   - Enqueue Chart.js library
   - Register shortcode
   - Include HTML/CSS/JavaScript in shortcode output

3. **Data Management**
   - Store component database in JSON format
   - Allow easy updates through WordPress admin
   - Implement caching for better performance

### 4.7 Performance Optimizations

1. **DOM Manipulation**
   - Minimize direct DOM access
   - Use document fragments for batch updates
   - Cache DOM element references

2. **Animation Performance**
   - Use CSS transforms instead of changing layout properties
   - Limit simultaneous animations
   - Use requestAnimationFrame for smooth transitions

3. **Chart.js Optimization**
   - Destroy old charts before creating new ones
   - Limit chart updates to necessary changes
   - Use appropriate chart configurations for performance

4. **Memory Management**
   - Clean up event listeners
   - Destroy chart instances properly
   - Remove references to avoid memory leaks

## 4. Data Models

### 4.1 CPU Model
```javascript
{
  id: string,
  name: string,
  score: number,
  rank: number,
  coreCount: number,
  threadCount: number,
  baseClock: number,
  boostClock: number
}
```

### 4.2 GPU Model
```javascript
{
  id: string,
  name: string,
  score: number,
  fps1080: number,
  fps1440: number,
  fps4k: number,
  rank: number,
  vram: string,
  baseClock: number,
  boostClock: number
}
```

### 4.3 Game Model
```javascript
{
  id: string,
  name: string,
  cpuIntensity: number (0-1),
  gpuIntensity: number (0-1)
}
```

## 5. Business Logic Layer

### 5.1 Bottleneck Calculation Algorithm

The calculation algorithm determines the balance between CPU and GPU performance:

1. **Base Score Adjustment**
   - Adjust CPU/GPU scores based on resolution
   - Apply game-specific intensity modifiers
   - Apply graphics settings multipliers

2. **Bottleneck Percentage Calculation**
   - Calculate total performance score (CPU + GPU)
   - Determine CPU/GPU percentage contribution
   - Compare against ideal balance (45% CPU / 55% GPU)
   - Calculate bottleneck percentages

3. **FPS Estimation**
   - Base FPS from GPU performance at resolution
   - Apply bottleneck effects
   - Adjust for refresh rate limitations

### 5.2 Recommendation Engine

Generates personalized recommendations based on:
- Bottleneck severity
- Component pairing
- Usage profile
- Game selection
- System specifications

## 6. UI/UX Design Specifications

### 6.1 Color Palette (Dark Theme)
- Primary Background: #1a1a1a
- Secondary Background: #2d2d2d
- Card Background: #333333
- Text Primary: #ffffff
- Text Secondary: #cccccc
- Accent Colors:
  - Green (Balanced): #4CAF50
  - Amber (Mild Bottleneck): #FFB300
  - Red (Severe Bottleneck): #E53935
  - Blue (Interactive): #3498db

### 6.2 Typography
- Primary Font: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
- Font Sizes:
  - Headers: 1.5rem - 2.5rem
  - Body Text: 1rem
  - Labels: 0.875rem
  - Metrics: 2rem - 3rem

### 6.3 Spacing System
- Base Unit: 8px
- Small: 8px
- Medium: 16px
- Large: 24px
- XL: 32px

### 6.4 Component Design

#### Form Elements
- Rounded corners: 8px
- Border: 2px solid #444444
- Focus state: Blue glow effect
- Padding: 14px 16px

#### Buttons
- Primary Button: Gradient background with hover effect
- Toggle Button: Subtle background with icon
- Loading State: Animated spinner

#### Gauges
- Half-circle design with center value display
- Color-coded based on bottleneck severity
- Smooth value transition animations
- Status text below gauge

#### Cards
- Rounded corners: 12px
- Subtle shadow: 0 4px 20px rgba(0,0,0,0.3)
- Padding: 20px
- Hover effect: Slight elevation

## 7. API Integration Layer

### 7.1 Data Loading
- Component data loaded from embedded JSON
- Game data loaded from embedded JSON
- No external API dependencies

### 7.2 Calculation Interface
```javascript
function calculateBottleneck(cpu, gpu, options) {
  // Returns results object with:
  // - cpuBottleneck: percentage
  // - gpuBottleneck: percentage
  // - avgFPS: number
  // - maxFPS: number
  // - onePercentLows: number
}
```

## 8. Performance Considerations

### 8.1 Optimization Guidelines
- Minimize DOM manipulation
- Use CSS transforms for animations
- Debounce expensive calculations
- Lazy load non-critical components
- Cache calculation results when possible

### 8.2 Animation Performance
- Use `transform` and `opacity` for animations
- Limit active animations to 2-3 at a time
- Use `requestAnimationFrame` for smooth transitions
- Optimize chart rendering with Chart.js configuration

## 9. Extensibility & Maintenance

### 9.1 Adding New Components
1. Add new CPU/GPU entries to the component database
2. Update benchmark scores and rankings
3. No code changes required for basic additions

### 9.2 Customizing Calculations
- Modify calculation algorithms in the business logic layer
- Adjust weighting factors for different scenarios
- Add new parameters to the calculation engine

### 9.3 Theme Customization
- All CSS classes prefixed with `pcb-` for isolation
- Color variables defined in CSS custom properties
- Easy to modify theme by updating CSS variables

## 10. Testing Strategy

### 10.1 Unit Testing
- Component rendering tests
- Calculation algorithm validation
- Form interaction tests
- Results display accuracy

### 10.2 Integration Testing
- Data flow from form to results
- Advanced options functionality
- Responsive design behavior
- Cross-browser compatibility

### 10.3 User Experience Testing
- Form usability assessment
- Results clarity evaluation
- Performance timing measurements
- Accessibility compliance check

## 11. Testing Strategy

### 11.1 Unit Testing

- **Component Rendering Tests**: Verify all UI components render correctly
- **Calculation Algorithm Validation**: Test bottleneck calculations with known values
- **Form Interaction Tests**: Validate form submission and validation
- **Results Display Accuracy**: Ensure results are displayed correctly

### 11.2 Integration Testing

- **Data Flow Testing**: Verify data flows correctly from form to results
- **Advanced Options Functionality**: Test show/hide functionality
- **Responsive Design Testing**: Check layout on different screen sizes
- **Cross-browser Compatibility**: Test on major browsers

### 11.3 User Experience Testing

- **Form Usability Assessment**: Evaluate form ease of use
- **Results Clarity Evaluation**: Ensure results are understandable
- **Performance Timing Measurements**: Check loading and calculation times
- **Accessibility Compliance Check**: Verify WCAG compliance

## 12. Deployment Considerations

### 12.1 WordPress Integration
- **WordPress Plugin**: Custom plugin using WP Code plugin
- **PHP**: For backend processing and data management
- **JSON Data File**: Store CPU and GPU performance metrics
- **WordPress Shortcode**: `[pc_bottleneck_calculator]` to embed on any page/post

### 12.2 Performance Optimization
- **Minified CSS and JavaScript**: Reduce file sizes
- **Efficient DOM structure**: Optimize rendering
- **Lazy loading**: For non-critical assets
- **Optimized chart rendering**: Efficient Chart.js usage

### 12.3 Browser Compatibility
- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Responsive design**: Mobile device support
- **Graceful degradation**: Older browser support

## 13. Maintenance and Updates

### 13.1 Component Database Updates

- **Adding New CPUs/GPUs**: Simple JSON additions
- **Updating Benchmark Scores**: Modify existing entries
- **Adding New Games**: Extend game database

### 13.2 Feature Enhancements

- **New Calculation Parameters**: Extend algorithm capabilities
- **Additional Visualization Options**: Add new chart types
- **Enhanced Recommendation Engine**: Improve suggestion quality

### 13.3 Theme Customization

- **CSS Custom Properties**: Easy theme color modifications
- **Layout Adjustments**: Responsive design tweaks
- **Brand Integration**: Company-specific styling

## 14. Conclusion

The PC Bottleneck Calculator provides a comprehensive solution for analyzing CPU and GPU balance in gaming systems. With its dark-themed interface, animated visualizations, and detailed recommendations, it offers users valuable insights into their system's performance limitations. The tool is designed for easy integration into WordPress sites using the WP Code plugin and follows modern web development best practices for performance and maintainability.

Key features of the implementation include:

- **User-Friendly Interface**: Intuitive form with progressive disclosure of advanced options
- **Accurate Calculations**: Industry-standard algorithms for bottleneck analysis
- **Visual Feedback**: Animated gauges and metrics for clear performance visualization
- **Personalized Recommendations**: Actionable advice based on system configuration
- **Responsive Design**: Works on desktop and mobile devices
- **Easy Maintenance**: JSON-based component database for simple updates
- **Performance Optimized**: Efficient code with smooth animations and transitions

This tool will help gamers make informed decisions about system upgrades and optimizations, ultimately improving their gaming experience.