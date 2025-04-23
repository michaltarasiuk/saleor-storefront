export type AccessibilityVisibility = 'hidden';

export type AccessibilityRole =
  | 'main'
  | 'header'
  | 'footer'
  | 'section'
  | 'complementary'
  | 'navigation'
  | 'orderedList'
  | 'listItem'
  | 'unorderedList'
  | 'separator'
  | 'status'
  | 'alert'
  | 'decorative'
  | 'presentation';

export type NonPresentationalAccessibilityRole = Exclude<
  AccessibilityRole,
  'decorative' | 'presentation'
>;
