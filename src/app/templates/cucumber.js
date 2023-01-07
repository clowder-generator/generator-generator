module.exports = {
    default: `src/app/features/**/*.feature`
        + ` --format-options '{"snippetInterface": "synchronous"}'`
        + ` --publish-quiet`
        + ` --require-module ts-node/register`
        + ` --require src/app/features/**/*.spec.ts`
}