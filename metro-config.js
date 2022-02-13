// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// extra config is needed to enable `react-native-svg-transformer`
module.exports = (async () => {
  const {
    transformer,
    resolver: { sourceExts, assetExts, ...resolver },
    ...config
  } = await getDefaultConfig(__dirname);
  return {
    ...config,
    transformer: {
      ...transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      ...resolver,
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    },
  };
})();