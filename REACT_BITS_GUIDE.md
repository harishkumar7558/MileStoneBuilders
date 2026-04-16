# React Bits Installation Guide
## For JS + Tailwind + shadcn Setup

## ✅ Current Setup

You have successfully installed:
- **Tailwind CSS v3.4.18** with PostCSS and Autoprefixer
- **shadcn/ui** (New York style, Zinc color scheme)
- **shadcn Button component** at `src/components/ui/button.jsx`
- **React Bits AnimatedContent** at `src/components/AnimatedContent.jsx`

## 📦 How to Install React Bits Components

### Method 1: Using shadcn CLI (Recommended)
```bash
pnpm dlx shadcn@latest add <component-name>
```

### Method 2: Using jsrepo directly
```bash
# List all available components
npx jsrepo add --registry https://reactbits.dev/r

# Then select the component you want from the interactive list
```

## 🎯 Available React Bits Components (JS + Tailwind)

Visit https://reactbits.dev to browse all components. Look for components with `-JS-TW` suffix.

### Popular Components to Try:

1. **AnimatedContent** ✅ (Already installed)
   - Scroll-triggered animations
   - Customizable direction, distance, and easing

2. **AnimatedButton**
   - Interactive button animations
   - Hover and click effects

3. **Aurora**
   - Animated gradient background effect
   - Perfect for hero sections

4. **GradientText**
   - Animated gradient text effects
   - Eye-catching headings

5. **MagneticButton**
   - Button that follows cursor movement
   - Premium interactive feel

6. **TextReveal**
   - Text reveal animations on scroll
   - Great for storytelling

## 📝 Usage Example: AnimatedContent

```jsx
import AnimatedContent from '@/components/AnimatedContent';

function MyComponent() {
  return (
    <AnimatedContent
      direction="vertical"
      distance={100}
      duration={0.8}
      ease="power3.out"
      threshold={0.1}
    >
      <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
        <h2 className="text-3xl font-bold text-white">
          This content animates on scroll!
        </h2>
      </div>
    </AnimatedContent>
  );
}
```

## 🎨 AnimatedContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Animation direction |
| `distance` | `number` | `100` | Distance to travel (px) |
| `reverse` | `boolean` | `false` | Reverse animation direction |
| `duration` | `number` | `0.8` | Animation duration (seconds) |
| `ease` | `string` | `'power3.out'` | GSAP easing function |
| `initialOpacity` | `number` | `0` | Starting opacity |
| `animateOpacity` | `boolean` | `true` | Whether to animate opacity |
| `scale` | `number` | `1` | Initial scale |
| `threshold` | `number` | `0.1` | Scroll trigger threshold (0-1) |
| `delay` | `number` | `0` | Animation delay (seconds) |
| `disappearAfter` | `number` | `0` | Auto-hide after X seconds |
| `container` | `string \| HTMLElement` | `null` | Custom scroll container |
| `onComplete` | `function` | - | Callback when animation completes |

## 🚀 Next Steps

1. **Browse React Bits**: Visit https://reactbits.dev
2. **Pick Components**: Choose components that fit your design
3. **Install**: Use `pnpm dlx shadcn@latest add <component-name>`
4. **Import & Use**: Import from `@/components/<ComponentName>`

## 💡 Tips

- All React Bits components use **GSAP** for animations (already installed)
- Components are **fully customizable** via props
- Works seamlessly with **Tailwind CSS** utility classes
- Compatible with **shadcn/ui** components
- **TypeScript** types are included (if using TS)

## 🐛 Troubleshooting

### Component not found error
- Make sure you're using the correct component name with `-JS-TW` suffix
- Check https://reactbits.dev/r for the exact component name

### Animation not working
- Ensure GSAP is installed: `pnpm add gsap`
- Check if ScrollTrigger plugin is registered (AnimatedContent does this automatically)

### Styling conflicts
- React Bits components use Tailwind classes
- You can override styles using `className` prop
- Use `!important` or increase specificity if needed
