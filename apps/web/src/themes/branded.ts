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
  background: stylex.types.color('#F7FAF5'),
  backgroundSubdued: stylex.types.color('#EBF3E6'),
  border: stylex.types.color('#DCE9D3'),
  icon: stylex.types.color('#44691E'),
  text: stylex.types.color('#44691E'),
  textSubdued: stylex.types.color('#93A97C'),
  textContrast: stylex.types.color('#FFFFFF'),
  accent: stylex.types.color('#44691E'),
  accentContrast: stylex.types.color('#FFFFFF'),
  decorative: stylex.types.color('#44691E'),
});

const brandedControlColors = stylex.createTheme(controlColors, {
  background: stylex.types.color('#F7FAF5'),
  backgroundSubdued: stylex.types.color('#EAF4E6'),
  border: stylex.types.color('#70815F'),
  icon: stylex.types.color('#44691E'),
  text: stylex.types.color('#44691E'),
  textSubdued: stylex.types.color('#93A97C'),
  textContrast: stylex.types.color('#FFFFFF'),
  accent: stylex.types.color('#44691E'),
  accentContrast: stylex.types.color('#F7FAF5'),
  decorative: stylex.types.color('#44691E'),
});

const brandedControlSelectedColors = stylex.createTheme(controlSelectedColors, {
  background: stylex.types.color('#44691E'),
  backgroundSubdued: stylex.types.color('#44691E'),
  border: stylex.types.color('#44691E'),
  icon: stylex.types.color('#44691E'),
  text: stylex.types.color('#F7FAF5'),
  textSubdued: stylex.types.color('#F7FAF5'),
  textContrast: stylex.types.color('#44691E'),
  accent: stylex.types.color('#44691E'),
  accentContrast: stylex.types.color('#44691E'),
  decorative: stylex.types.color('#F7FAF5'),
});

const brandedPrimaryButtonColors = stylex.createTheme(primaryButtonColors, {
  background: stylex.types.color('#44691E'),
  backgroundSubdued: stylex.types.color('#44691E'),
  border: stylex.types.color('#44691E'),
  icon: stylex.types.color('#F7FAF5'),
  text: stylex.types.color('#F7FAF5'),
  textSubdued: stylex.types.color('#F7FAF5'),
  textContrast: stylex.types.color('#000000'),
  accent: stylex.types.color('#F7FAF5'),
  accentContrast: stylex.types.color('#000000'),
  decorative: stylex.types.color('#F7FAF5'),
});

const brandedPrimaryButtonHoverColors = stylex.createTheme(
  primaryButtonHoverColors,
  {
    background: stylex.types.color('#395918'),
    backgroundSubdued: stylex.types.color('#44691E'),
    border: stylex.types.color('#395918'),
    icon: stylex.types.color('#F7FAF5'),
    text: stylex.types.color('#F7FAF5'),
    textSubdued: stylex.types.color('#F7FAF5'),
    textContrast: stylex.types.color('#000000'),
    accent: stylex.types.color('#F7FAF5'),
    accentContrast: stylex.types.color('#000000'),
    decorative: stylex.types.color('#F7FAF5'),
  }
);

const brandedSecondaryButtonColors = stylex.createTheme(secondaryButtonColors, {
  background: stylex.types.color('#F7FAF5'),
  backgroundSubdued: stylex.types.color('#44691E'),
  border: stylex.types.color('#44691E'),
  icon: stylex.types.color('#44691E'),
  text: stylex.types.color('#44691E'),
  textSubdued: stylex.types.color('#44691E'),
  textContrast: stylex.types.color('#FFFFFF'),
  accent: stylex.types.color('#44691E'),
  accentContrast: stylex.types.color('#FFFFFF'),
  decorative: stylex.types.color('#44691E'),
});

const brandedSecondaryButtonHoverColors = stylex.createTheme(
  secondaryButtonHoverColors,
  {
    background: stylex.types.color('#F7FAF5'),
    backgroundSubdued: stylex.types.color('#44691E'),
    border: stylex.types.color('#44691E'),
    icon: stylex.types.color('#44691E'),
    text: stylex.types.color('#395918'),
    textSubdued: stylex.types.color('#44691E'),
    textContrast: stylex.types.color('#FFFFFF'),
    accent: stylex.types.color('#44691E'),
    accentContrast: stylex.types.color('#FFFFFF'),
    decorative: stylex.types.color('#44691E'),
  }
);
