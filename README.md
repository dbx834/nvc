# Web Template

Web template is an opionated GatsbyJS Starter kit built for Netlify.

See https://starter.bodhiproject.org/ for more information.

## Get these files

```
cd to/your/directory
git clone https://github.com/bodhi-project/web-template
shopt -s dotglob nullglob
mv -vn web-template/* .
rm -rf web-template
npm install
npm start
```

## Semver Versioning

Remember to update the version in `package.json` before publishing:

```
npm version patch --no-git-tag-version // Add a patch. Ex, goes from 0.0.1 to 0.0.2
npm version minor --no-git-tag-version // Add a minor package version. Ex, goes from 0.0.1 to 0.1.1
npm version major --no-git-tag-version // Add a major package version. Ex, goes from 0.0.1 to 1.0.1
```

## To upgrade package dependencies run --

```
npm-upgrade
npm install --save
```

See https://www.npmjs.com/package/npm-upgrade for more info.

## To check unused dependecies run --

```
depcheck --ignore-dirs=content,data,node_modules,public,static
```

See https://github.com/depcheck/depcheck for more info.
