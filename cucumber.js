module.exports = {
    default: `src-bis/app/features/**/*.feature`
        + ` --format-options '{"snippetInterface": "synchronous"}'`
        + ` --publish-quiet`
        + ` --require-module ts-node/register`
        + ` --require src-bis/app/features/**/*.spec.ts`
}