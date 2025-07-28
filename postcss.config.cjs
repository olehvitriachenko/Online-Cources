module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 16, // 1rem = 16px
            propList: ['*'], // всі властивості
            minPixelValue: 1, // мінімальне значення для конвертації
            exclude: /node_modules/i,
        },
        autoprefixer: {},
    },
};