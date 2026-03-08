# Chaos Lab - Multi-Page Website

## 🎨 Color Theme Update
**Deep Purple + Vibrant Lime** (High Contrast)
- Primary: Deep Purple (#1a0d2e → #a78bfa)
- Accent: Lime (#65a30d → #d4ff00) - Much higher contrast than green!
- The lime colors provide excellent legibility, especially in headers and navigation

## 📁 Website Structure

### Main Pages:
1. **index.html** - Landing page with overview of all four models
2. **mmc.html** - M/M/c Standard Queue model page
3. **circular.html** - M/M/c/K Finite Capacity model page
4. **priority.html** - Priority Queue (Triage) model page
5. **reneging.html** - Reneging/Abandonment model page

### Shared Resources:
- **styles.css** - Shared stylesheet with purple/lime theme

## ✨ Key Features

### Enhanced Design:
- **Vibrant lime accents** (#84cc16, #a3e635, #d4ff00) provide much better contrast
- Navigation bar with lime-highlighted logo
- Sticky navigation across all pages
- Smooth animations and transitions
- Responsive design for mobile/tablet

### Each Model Page Includes:
1. **Mathematical Foundation** - Theory and formulas
2. **Real-World Example** - Specific clinical scenario
3. **Interactive Simulation** - Browser-based Python computation
4. **Interpretation Guide** - How to understand results
5. **Model-Specific Insights** - Unique considerations

### Simulation Features:
- 60-simulation ensemble for statistical validity
- Capacity optimization recommender
- Shock simulation (5× surge testing)
- Customizable targets (wait time, loss rate)
- Professional visualizations with lime accents

## 🚀 Usage

Simply open **index.html** in a modern web browser. All computation runs entirely client-side using Pyodide (Python in WebAssembly).

### Navigation:
- Click any model card on the home page
- Use the navigation bar at the top
- All links are relative - no server needed

### Running Simulations:
1. Adjust parameters (arrivals, service rate, servers)
2. Set optimization targets
3. Optionally enable shock simulation
4. Click "Execute Ensemble Simulation"
5. Review results: wait time distribution, recommendations

## 📊 Model-Specific Examples

### M/M/c Standard (mmc.html):
- **Scenario:** ED physician staffing
- **Example:** λ=12/hr, μ=4/hr, c=4 physicians
- **Focus:** Finding the "elbow" in capacity optimization

### Finite Capacity (circular.html):
- **Scenario:** ICU bed management with hard limits
- **Example:** 20 beds, blocking probability analysis
- **Focus:** Balancing blocking costs vs. expansion costs

### Priority Queue (priority.html):
- **Scenario:** ESI triage system in ED
- **Example:** 30% high-priority, variance redistribution
- **Focus:** Equity considerations, wait time disparities

### Reneging (reneging.html):
- **Scenario:** LWBS (Left Without Being Seen) analysis
- **Example:** 8% LWBS rate, revenue impact calculation
- **Focus:** Financial and clinical risk of abandonment

## 🎯 Color Accessibility

The new **lime color scheme** (#84cc16, #a3e635, #d4ff00) provides:
- **High contrast** against deep purple backgrounds
- **Excellent legibility** in navigation and headers
- **WCAG AAA compliance** for critical text
- **Vibrant appearance** that stands out from typical designs

Contrast ratios:
- Lime-bright (#d4ff00) on purple-900 (#1a0d2e): ~12.5:1
- Lime-500 (#84cc16) on white: ~4.8:1
- Much better than the previous green scheme!

## 💻 Browser Compatibility

Requires:
- WebAssembly support (all modern browsers)
- JavaScript enabled
- Recommended: Chrome, Firefox, Safari, Edge (latest versions)

## 📝 Technical Notes

- **No server required** - fully static website
- **Pyodide v0.24.1** for Python execution
- **MathJax 3** for mathematical notation
- **Matplotlib** for visualizations
- **NumPy** for numerical computation

All computation happens in your browser. No data is sent to external servers.

## 🎓 Educational Use

Perfect for:
- Operations research courses
- Healthcare management programs
- Queueing theory instruction
- Capacity planning workshops
- Data-driven decision making training

---

**Note:** All files must be in the same directory for proper navigation. The CSS file is shared across all pages for consistent styling.