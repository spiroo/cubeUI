const glob = require("glob");
const pageConfig = require("./src/pages/page.js");
let entries;

try {
  entries = glob('src/pages/*/main.js', { sync: true });
} catch (err) {
  entries = [];
  console.log('读取目录出错！');
  throw err;
}

let pages = {};
let commonConfig = {
  template: 'public/index.html',
};

entries.forEach(page => {
  console.log('page = ', page);
  let name = page.split('/')[2];
  pages[name] = {
    entry: 'src/pages/' + name + '/main.js',
    filename: name + '.html',
    title: pageConfig.hasOwnProperty(name) ? pageConfig[name].title : '',
    ...commonConfig
  };
});

console.log('pages == ', pages);

module.exports = pages;
