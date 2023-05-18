export const selectThemeConfig = (state) => state.theme.themeConfig;
export const selectThemeMode = (state) => state.theme.themeConfig.mode;

export default { selectThemeConfig, selectThemeMode };
