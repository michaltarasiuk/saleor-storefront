import * as stylex from '@stylexjs/stylex';

export const baseColors = stylex.defineVars({
  background: stylex.types.color('#FFFFFF'),
  backgroundSubdued: stylex.types.color('#F5F5F5'),
  border: stylex.types.color('#DEDEDE'),
  icon: stylex.types.color('#707070'),
  text: stylex.types.color('#000000'),
  textSubdued: stylex.types.color('#707070'),
  textContrast: stylex.types.color('#FFFFFF'),
  accent: stylex.types.color('#197CBD'),
  accentContrast: stylex.types.color('#FFFFFF'),
  decorative: stylex.types.color('#1773B0'),
});

export const controlColors = stylex.defineVars({
  background: stylex.types.color('#FFFFFF'),
  backgroundSubdued: stylex.types.color('#F5F5F5'),
  border: stylex.types.color('#DEDEDE'),
  icon: stylex.types.color('#707070'),
  text: stylex.types.color('#000000'),
  textSubdued: stylex.types.color('#707070'),
  textContrast: stylex.types.color('#FFFFFF'),
  accent: stylex.types.color('#1773B0'),
  accentContrast: stylex.types.color('#FFFFFF'),
  decorative: stylex.types.color('#1773B0'),
});

export const controlSelectedColors = stylex.defineVars({
  background: stylex.types.color('#EFF5FF'),
  backgroundSubdued: stylex.types.color('#E0ECFF'),
  border: stylex.types.color('#1773B0'),
  icon: stylex.types.color('#1773B0'),
  text: stylex.types.color('#000000'),
  textSubdued: stylex.types.color('#707070'),
  textContrast: stylex.types.color('#FFFFFF'),
  accent: stylex.types.color('#1773B0'),
  accentContrast: stylex.types.color('#FFFFFF'),
  decorative: stylex.types.color('#1773B0'),
});

export const primaryButtonColors = stylex.defineVars({
  background: stylex.types.color('#1773B0'),
  backgroundSubdued: stylex.types.color('#1773B0'),
  border: stylex.types.color('#1773B0'),
  icon: stylex.types.color('#FFFFFF'),
  text: stylex.types.color('#FFFFFF'),
  textSubdued: stylex.types.color('#FFFFFF'),
  textContrast: stylex.types.color('#000000'),
  accent: stylex.types.color('#FFFFFF'),
  accentContrast: stylex.types.color('#000000'),
  decorative: stylex.types.color('#FFFFFF'),
});

export const primaryButtonHoverColors = stylex.defineVars({
  background: stylex.types.color('#105989'),
  backgroundSubdued: stylex.types.color('#1773B0'),
  border: stylex.types.color('#105989'),
  icon: stylex.types.color('#FFFFFF'),
  text: stylex.types.color('#FFFFFF'),
  textSubdued: stylex.types.color('#FFFFFF'),
  textContrast: stylex.types.color('#000000'),
  accent: stylex.types.color('#FFFFFF'),
  accentContrast: stylex.types.color('#000000'),
  decorative: stylex.types.color('#FFFFFF'),
});

export const secondaryButtonColors = stylex.defineVars({
  background: stylex.types.color('#FFFFFF'),
  backgroundSubdued: stylex.types.color('#FFFFFF'),
  border: stylex.types.color('#DEDEDE'),
  icon: stylex.types.color('#1773B0'),
  text: stylex.types.color('#1773B0'),
  textSubdued: stylex.types.color('#1773B0'),
  textContrast: stylex.types.color('#FFFFFF'),
  accent: stylex.types.color('#1773B0'),
  accentContrast: stylex.types.color('#FFFFFF'),
  decorative: stylex.types.color('#1773B0'),
});

export const secondaryButtonHoverColors = stylex.defineVars({
  background: stylex.types.color('#FFFFFF'),
  backgroundSubdued: stylex.types.color('#FFFFFF'),
  border: stylex.types.color('#DEDEDE'),
  icon: stylex.types.color('#1773B0'),
  text: stylex.types.color('#105989'),
  textSubdued: stylex.types.color('#1773B0'),
  textContrast: stylex.types.color('#FFFFFF'),
  accent: stylex.types.color('#1773B0'),
  accentContrast: stylex.types.color('#FFFFFF'),
  decorative: stylex.types.color('#1773B0'),
});

export const criticalColors = stylex.defineVars({
  critical: stylex.types.color('#DD1D1D'),
  background: stylex.types.color('#FEF6F6'),
  backgroundSubdued: stylex.types.color('#FEECEC'),
  border: stylex.types.color('#FDD8D8'),
  icon: stylex.types.color('#E92020'),
  text: stylex.types.color('#420000'),
  textSubdued: stylex.types.color('#640707'),
  textContrast: stylex.types.color('#FFFFFF'),
});

export const infoColors = stylex.defineVars({
  info: stylex.types.color('#000000'),
  background: stylex.types.color('#F5F5F5'),
  backgroundSubdued: stylex.types.color('#F2F2F2'),
  border: stylex.types.color('#E3E3E3'),
  icon: stylex.types.color('#787878'),
  text: stylex.types.color('#1C1C1C'),
  textSubdued: stylex.types.color('#303030'),
});

export const warningColors = stylex.defineVars({
  warning: stylex.types.color('#8F6900'),
  background: stylex.types.color('#FFF5EB'),
  backgroundSubdued: stylex.types.color('#FFEEDB'),
  border: stylex.types.color('#FFDEB2'),
  icon: stylex.types.color('#997000'),
  text: stylex.types.color('#241700'),
  textSubdued: stylex.types.color('#423100'),
});

export const successColors = stylex.defineVars({
  success: stylex.types.color('#4D7A50'),
  background: stylex.types.color('#EAFBEA'),
  backgroundSubdued: stylex.types.color('#DDF8DE'),
  border: stylex.types.color('#B1F2B4'),
  icon: stylex.types.color('#528456'),
  text: stylex.types.color('#101E11'),
  textSubdued: stylex.types.color('#528456'),
});
