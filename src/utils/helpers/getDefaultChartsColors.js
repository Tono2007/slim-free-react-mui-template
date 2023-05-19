import palette from '@/utils/theme/palette';

const COLORS = {
	1: [palette()?.cuaternary.main, palette()?.primary.main, palette()?.secondary.secondary],
	2: [palette()?.secondary.main, palette()?.cuaternary.main, palette()?.primary.main],
	3: [palette()?.cuaternary.main, palette()?.tertiary.main, palette()?.primary.main],
	4: [palette()?.tertiary.main, palette()?.secondary.main, palette()?.primary.main],
	5: [palette()?.primary.main, palette()?.secondary.main, palette()?.cuaternary.main],
};

function getColors(type) {
	return COLORS[type] || COLORS['1'];
}
export default getColors;
