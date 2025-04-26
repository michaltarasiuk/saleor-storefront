import {
  baseColors,
  controlColors,
  controlSelectedColors,
  primaryButtonColors,
  primaryButtonHoverColors,
  secondaryButtonColors,
  secondaryButtonHoverColors,
} from '@repo/ui/variables/colors.stylex';
import * as stylex from '@stylexjs/stylex';

export function brandedTheme() {
  return [
    brandedBaseColors,
    brandedControlColors,
    brandedControlSelectedColors,
    brandedPrimaryButtonColors,
    brandedPrimaryButtonHoverColors,
    brandedSecondaryButtonColors,
    brandedSecondaryButtonHoverColors,
  ] as const;
}

const brandedBaseColors = stylex.createTheme(baseColors, {
  background: '#F7FAF5',
  backgroundSubdued: '#EBF3E6',
  border: '#DCE9D3',
  icon: '#44691E',
  text: '#44691E',
  textSubdued: '#93A97C',
  textContrast: '#FFFFFF',
  accent: '#44691E',
  accentContrast: '#FFFFFF',
  decorative: '#44691E',
});

const brandedControlColors = stylex.createTheme(controlColors, {
  background: '#F7FAF5',
  backgroundSubdued: '#EAF4E6',
  border: '#70815F',
  icon: '#44691E',
  text: '#44691E',
  textSubdued: '#93A97C',
  textContrast: '#FFFFFF',
  accent: '#44691E',
  accentContrast: '#F7FAF5',
  decorative: '#44691E',
});

const brandedControlSelectedColors = stylex.createTheme(controlSelectedColors, {
  background: '#44691E',
  backgroundSubdued: '#44691E',
  border: '#44691E',
  icon: '#44691E',
  text: '#F7FAF5',
  textSubdued: '#F7FAF5',
  textContrast: '#44691E',
  accent: '#44691E',
  accentContrast: '#44691E',
  decorative: '#F7FAF5',
});

const brandedPrimaryButtonColors = stylex.createTheme(primaryButtonColors, {
  background: '#44691E',
  backgroundSubdued: '#44691E',
  border: '#44691E',
  icon: '#F7FAF5',
  text: '#F7FAF5',
  textSubdued: '#F7FAF5',
  textContrast: '#000000',
  accent: '#F7FAF5',
  accentContrast: '#000000',
  decorative: '#F7FAF5',
});

const brandedPrimaryButtonHoverColors = stylex.createTheme(
  primaryButtonHoverColors,
  {
    background: '#44691E',
    backgroundSubdued: '#44691E',
    border: '#44691E',
    icon: '#F7FAF5',
    text: '#F7FAF5',
    textSubdued: '#F7FAF5',
    textContrast: '#000000',
    accent: '#F7FAF5',
    accentContrast: '#000000',
    decorative: '#F7FAF5',
  }
);

const brandedSecondaryButtonColors = stylex.createTheme(secondaryButtonColors, {
  background: '#F7FAF5',
  backgroundSubdued: '#44691E',
  border: '#44691E',
  icon: '#44691E',
  text: '#44691E',
  textSubdued: '#44691E',
  textContrast: '#FFFFFF',
  accent: '#44691E',
  accentContrast: '#FFFFFF',
  decorative: '#44691E',
});

const brandedSecondaryButtonHoverColors = stylex.createTheme(
  secondaryButtonHoverColors,
  {
    background: '#F7FAF5',
    backgroundSubdued: '#44691E',
    border: '#44691E',
    icon: '#44691E',
    text: '#44691E',
    textSubdued: '#44691E',
    textContrast: '#FFFFFF',
    accent: '#44691E',
    accentContrast: '#FFFFFF',
    decorative: '#44691E',
  }
);
