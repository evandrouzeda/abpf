import path from 'path'

const __dirname = path.resolve(path.dirname(''))

export default {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'public/_js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.ts$/, use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    mode: "development",
};