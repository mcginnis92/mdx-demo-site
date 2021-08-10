const importAll = (r) => {
    return r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
        module: r(fileName)
    }));
}

export const docs = importAll(
    require.context('../pages/components/', true, /\.mdx$/)
);
