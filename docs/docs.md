# PC Bottleneck Calculator Tool Specification for WordPress

## What This Tool Is

A simple, user-friendly PC bottleneck calculator that helps users determine if their CPU and GPU are well-matched for optimal gaming performance. The tool analyzes the balance between these two critical components and provides clear visual feedback about potential performance limitations (bottlenecks), along with basic upgrade recommendations.

Unlike information-heavy competitors like willitbottleneck.com (which is mostly FAQ content) or overly simplistic ones like bottleneckcalculator.co, this tool will provide actionable insights with professional-looking visuals while remaining easy to use.

## Target Audience
- PC gamers building or upgrading systems
- Beginners who want to understand if their components are balanced
- Users who need quick, clear guidance on potential upgrades

**Design Notes:**
- Clean, modern form layout similar to gamemaxpc.com but simpler
- "Calculate Bottleneck" button that triggers the analysis
- Responsive design that works on mobile devices

# Advanced Features for PC Bottleneck Calculator

Based on competitor analysis and user needs, here's a comprehensive plan for advanced fields that enhance functionality without overwhelming users.

## Advanced Input Fields Structure

### Core Components (Always Visible)
- **CPU**: Searchable dropdown with popular processors
- **GPU**: Searchable dropdown with popular graphics cards
- **Resolution**: 
  - 1080p (1920×1080)
  - 1440p (2560×1440)
  - 4K (3840×2160)
  - Custom Resolution option

### Expandable Advanced Section (Hidden by Default)

**System Specifications:**
- **RAM**: 
  - Input field with dropdown options (8GB, 16GB, 32GB, 64GB)
  - DDR4/DDR5 selection
  - Speed input (3200MHz, 3600MHz, 4000MHz, 4800MHz, 6000MHz)
- **Storage**: 
  - NVMe SSD (Fastest)
  - SATA SSD
  - HDD
  - Multiple drive configuration option

**Usage Profile:**
- **Purpose**: 
  - Gaming (default)
  - Video Editing
  - 3D Rendering
  - Streaming
  - General Productivity
- **Refresh Rate**: 
  - 60Hz
  - 75Hz
  - 120Hz
  - 144Hz
  - 240Hz
  - 360Hz

**Game-Specific Analysis:**
- **Select Game**: 
  - Popular titles categorized by genre
  - CPU-intensive games (CS2, Valorant, MMOs)
  - GPU-intensive games (Cyberpunk, Alan Wake 2)
  - Esports titles
  - AAA games
- **Graphics Settings**: 
  - Low
  - Medium
  - High
  - Ultra
  - RT: Off
  - RT: On (Quality)
  - RT: On (Performance)

**"What If" Scenario Testing:**
- **Test CPU Upgrade**: 
  - Dropdown to select potential CPU upgrade
  - Shows before/after comparison
- **Test GPU Upgrade**: 
  - Dropdown to select potential GPU upgrade
  - Shows before/after comparison

## Implementation Strategy

### User Interface Design
```html
<div class="advanced-toggle">
  <button id="toggle-advanced">Show Advanced Options</button>
</div>

<div id="advanced-fields" class="advanced-fields" style="display:none;">
  <!-- All advanced fields grouped here -->
  <div class="field-group">
    <h4>Memory & Storage</h4>
    <!-- RAM and Storage fields -->
  </div>
  
  <div class="field-group">
    <h4>Usage Profile</h4>
    <!-- Purpose and Refresh Rate -->
  </div>
  
  <div class="field-group">
    <h4>Game-Specific Analysis</h4>
    <!-- Game and Graphics Settings -->
  </div>
  
  <div class="field-group">
    <h4>Upgrade Scenarios</h4>
    <!-- What If: CPU & GPU Upgrade -->
  </div>
</div>
```

### Progressive Disclosure
- Start with essential fields (CPU, GPU, Resolution)
- "Show Advanced Options" button reveals additional fields
- Tooltips (like pcbottleneckcalculator.net) explain technical terms
- Contextual help icons (?) with brief explanations

## Enhanced Results Based on Advanced Inputs

### Dynamic Analysis Factors
The calculator will adjust its analysis based on advanced inputs:

**For RAM:**
- Systems with <16GB RAM: Flag potential memory bottleneck in modern games
- DDR5 vs DDR4: Adjust CPU performance score accordingly
- High-speed RAM: Minor boost for Ryzen/Intel 12th+ gen systems

**For Storage:**
- NVMe: No penalty
- SATA SSD: Note longer loading times but no FPS impact
- HDD: Warn about texture streaming issues and long load times

**For Purpose:**
- **Gaming**: Focus on FPS and 1% lows
- **Video Editing**: Weight CPU and RAM more heavily
- **3D Rendering**: Balance CPU multi-core and GPU compute
- **Streaming**: Emphasize CPU core count and encoding capability

**For Refresh Rate:**
- Match FPS results to refresh rate capabilities
- Suggest minimum FPS targets (e.g., "For 144Hz monitor, aim for 100+ FPS")

### "What If" Scenario Results
When testing upgrades:
- Show side-by-side comparison charts
- Display cost-to-performance ratio
- Update bottleneck percentage in real-time
- Visual slider showing balance improvement

## Data Requirements for Advanced Features

### Component Database Enhancements
```json
{
  "cpus": [
    {
      "id": "ryzen-7-5700x",
      "name": "AMD Ryzen 7 5700X",
      "gaming_score": 15800,
      "productivity_score": 28500,
      "ddr4_support": true,
      "ddr5_support": false,
      "pcie_version": "4.0",
      "core_count": 8,
      "thread_count": 16
    }
  ],
  "gpus": [
    {
      "id": "rtx-4060",
      "name": "NVIDIA GeForce RTX 4060",
      "performance_score": 12500,
      "1080p_score": 145,
      "1440p_score": 115,
      "4k_score": 65,
      "vram": "8GB",
      "ray_tracing_multiplier": 0.7,
      "dlss_impact": 1.4
    }
  ],
  "games": [
    {
      "id": "cyberpunk-2077",
      "name": "Cyberpunk 2077",
      "cpu_intensity": 0.8,
      "gpu_intensity": 0.95,
      "ray_tracing_support": true,
      "recommended_cpu": "i5-12600K",
      "recommended_gpu": "RTX 3070"
    }
  ]
}
```

## User Experience Improvements Over Competitors

While competitors like **gamemaxpc.com** offer basic calculators and **willitbottleneck.com** is just an FAQ, your tool can stand out by:

1. **Smart Defaults**: Pre-fill common configurations based on user's initial selections
2. **Contextual Help**: Tooltips explaining technical terms (like willitbottleneck.com's FAQ content but integrated)
3. **Real-time Updates**: As users change advanced settings, update results dynamically
4. **Performance Profiles**: Apply different weightings based on selected purpose

## Implementation in WordPress

### Enhanced Shortcode Attributes
```php
[pc_bottleneck_calculator show_advanced="true" default_resolution="1440"]
```

### JavaScript Logic
```javascript
// Update analysis when advanced fields change
document.querySelectorAll('#advanced-fields select, #advanced-fields input').forEach(field => {
    field.addEventListener('change', function() {
        if (cpuSelected && gpuSelected) {
            updateAnalysis();
        }
    });
});

function updateAnalysis() {
    const purpose = document.getElementById('purpose').value;
    const resolution = document.getElementById('resolution').value;
    const game = document.getElementById('game').value;
    const ram = document.getElementById('ram').value;
    
    // Adjust calculation based on these factors
    let bottleneck = calculateBaseBottleneck();
    
    // Apply modifiers based on advanced settings
    if (purpose === 'gaming' && game) {
        bottleneck = applyGameSpecificModifiers(bottleneck, game, resolution);
    }
    
    if (ram < 16) {
        bottleneck += 5; // Small penalty for low RAM
    }
    
    updateResults(bottleneck);
}
```

## Results Output

The results section will display:

**1. Current Configuration Summary:**
```
CPU: [Selected CPU]
GPU: [Selected GPU]  
Resolution: [Selected Resolution]
```

**2. Analysis Results (Main Visual Components):**

**A. Dual Gauges (Side by Side):**
- **CPU Bottleneck Gauge**: Percentage showing how much the CPU limits the GPU
- **GPU Bottleneck Gauge**: Percentage showing how much the GPU limits the CPU
- Visual design: Half-circle gauges with color coding:
  - 0-10%: Green (Balanced)
  - 11-25%: Yellow (Mild bottleneck)
  - 26%+ : Red (Significant bottleneck)

**B. Performance Metrics:**
- **Avg FPS**: Estimated average frames per second at the selected resolution
- **Max FPS**: Estimated maximum frames per second

**C. Simple Balance Chart:**
- Horizontal bar chart showing CPU vs GPU relative performance
- Visual representation of which component is stronger/weaker

**3. Optimization Recommendations:**
- 1-3 simple text recommendations based on the results:
  - "Your CPU is bottlenecking your GPU by X%. Consider upgrading to [CPU recommendation] for better performance."
  - "Your GPU is bottlenecking your CPU by X%. Consider upgrading to [GPU recommendation] to fully utilize your processor."
  - "Your system is well-balanced! Both components are working efficiently together."

## Technologies & Implementation

### Frontend Technologies
- **HTML5**: Semantic structure for accessibility
- **CSS3**: Custom styling (no heavy frameworks) with responsive design
- **JavaScript**: Vanilla JavaScript for interactivity
- **Chart.js**: Lightweight (11KB gzipped) library for creating professional-looking gauges and charts, bars, etc.

### Backend (WordPress Implementation)
- **WordPress Plugin**: Custom plugin using WP Code plugin
- **PHP**: For backend processing and data management
- **JSON Data File**: Store CPU and GPU performance metrics
- **WordPress Shortcode**: `[pc_bottleneck_calculator]` to embed on any page/post

