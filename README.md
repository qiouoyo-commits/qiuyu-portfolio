# Qiuyu Portfolio Site

静态作品集站点仓库。当前线上地址：

- GitHub Repo: `https://github.com/qiouoyo-commits/qiuyu-portfolio`
- GitHub Pages: `https://qiouoyo-commits.github.io/qiuyu-portfolio/`

## 项目结构

```text
portfolio-site/
├── index.html
├── index.js
├── lightbox.js
├── project.js
├── data.js
├── styles.css
├── Architecture/
├── Computation/
└── projects/
```

- `data.js`
  站点的核心数据源。项目标题、年份、分类、封面图、详情页图片序列都在这里维护。
- `index.html` + `index.js`
  首页时间线。
- `projects/*.html` + `project.js`
  各个项目详情页。
- `Architecture/`、`Computation/`
  线上实际使用的图片资源目录。图片必须在仓库内，不能只放在仓库外的本地目录。

## 构建指南

这个站点是纯静态站点，没有额外构建步骤，不需要 `npm install` 或打包命令。

### 本地预览

在仓库根目录运行一个静态服务器：

```bash
cd "/Users/grandpapa/Desktop/Personal INFO/portfolio-site"
python3 -m http.server 8000
```

然后打开：

```text
http://localhost:8000/
```

不要只双击 `index.html` 用 `file://` 方式预览，排查路径问题时最好始终用本地服务器。

### 基本修改流程

1. 修改 `data.js`、HTML、CSS 或图片资源。
2. 本地启动静态服务器检查页面。
3. 确认首页、详情页、图片都正常后再提交。
4. 每一次有效更新都必须继续 `git push` 到 `main`，让 GitHub Pages 同步上线；只在本地改完不算完成。

## 推送指南

### 强制规则

每次更新这个站点时，最终步骤都必须包含：

1. 提交改动到 Git
2. 推送到 GitHub 远程仓库 `main`
3. 确认 GitHub Pages 构建完成

也就是说，任何页面、数据、样式、脚本或图片资源的修改，只有在 GitHub Pages 成功更新后，才算真正完成。

### 查看当前状态

```bash
cd "/Users/grandpapa/Desktop/Personal INFO/portfolio-site"
git status --short --branch
```

### 提交并推送

```bash
git add .
git commit -m "Describe the update"
git push
```

### 发布方式

当前 GitHub Pages 配置：

- Branch: `main`
- Folder: `/` root

也就是说，只要把改动 push 到 `main`，GitHub Pages 就会自动重新构建。
以后默认把“更新完成”定义为：本地检查通过，且改动已经 push 到 `main` 并由 GitHub Pages 发布成功。

### 检查 Pages 是否发布完成

```bash
gh api repos/qiouoyo-commits/qiuyu-portfolio/pages
gh api repos/qiouoyo-commits/qiuyu-portfolio/pages/builds/latest
```

如果返回里看到 `status: built`，说明线上版本已经更新。

## 后续修正时要注意的地方

### 1. 不要把上层目录整个推上 GitHub

只维护和推送 `portfolio-site/` 这个目录。  
不要把 `/Users/grandpapa/Desktop/Personal INFO/` 整个目录初始化为站点仓库，否则会把 PDF、原始素材和无关文件一起传上去。

### 2. 图片必须在仓库里

这次最容易出错的点就是图片。

- 线上页面只能访问仓库中的文件。
- `Architecture/` 和 `Computation/` 必须存在于 `portfolio-site/` 内。
- 如果只是本地上层目录里有图，而仓库里没有，GitHub Pages 一定会显示不出来。

### 3. 路径必须留在仓库子路径内

当前脚本会基于当前页面 URL 自动生成站内资源地址，核心逻辑在：

- [index.js](/Users/grandpapa/Desktop/Personal%20INFO/portfolio-site/index.js:22)
- [project.js](/Users/grandpapa/Desktop/Personal%20INFO/portfolio-site/project.js:31)

如果以后再改图片或页面链接，目标必须仍然落在：

- `https://qiouoyo-commits.github.io/qiuyu-portfolio/...`

不要手动改成指向仓库外层的地址，否则 GitHub Pages 会再次丢图。

### 4. 资源缓存会让你误以为“没更新”

当前 HTML 对 CSS/JS 使用了版本参数，例如：

- `styles.css?v=20260427-3`
- `data.js?v=20260427-3`
- `lightbox.js?v=20260427-3`

如果你改了 `styles.css`、`index.js`、`project.js`、`data.js`，但线上像没变化：

1. 先强刷浏览器：`Cmd + Shift + R`
2. 如果仍然不更新，就把 HTML 里对应资源的版本号改一下再 push

例如从：

```html
<script defer src="./index.js?v=20260427-3"></script>
```

改成：

```html
<script defer src="./index.js?v=20260427-4"></script>
```

项目页里的 `project.js`、`lightbox.js`、`data.js`、`styles.css` 也要同步改版本号。

### 5. 时间线顺序现在是倒叙

首页和详情页都已经按年份倒叙排列。  
这个逻辑分别存在于：

- [index.js](/Users/grandpapa/Desktop/Personal%20INFO/portfolio-site/index.js:6)
- [project.js](/Users/grandpapa/Desktop/Personal%20INFO/portfolio-site/project.js:6)

如果之后你想改排序方式，不要只改一个文件，否则首页和详情页的顺序会不一致。

### 6. 项目数据只维护一份

新增或修改项目时，优先改 `data.js`，不要把同样的信息分散写在多个地方。

常见要改的字段：

- `title`
- `season`
- `year`
- `category`
- `cover`
- `images`
- `slug`

### 7. Computation 图片现在直接在资源层修正

当前 computation 图片已经直接写回 `Computation/` 目录，不再依赖前端自动翻转。

如果以后还要继续批量做“上下 mirror”，在仓库根目录运行：

```bash
for f in Computation/*.jpg; do
  tmp=$(mktemp /tmp/compflipXXXXXX.jpg)
  sips -f vertical "$f" --out "$tmp" >/dev/null
  mv "$tmp" "$f"
done
```

做完之后一定要本地检查，再 `git add` / `git commit` / `git push`。

### 8. 新增项目的最小步骤

1. 把图片放入 `Architecture/` 或 `Computation/`
2. 在 `data.js` 中新增项目对象
3. 在 `projects/` 中新增对应的 `slug.html`
4. 本地预览首页、详情页、翻页、图片
5. `git add` / `git commit` / `git push`

### 9. 所有图片支持点击放大

当前放大功能由 [lightbox.js](/Users/grandpapa/Desktop/Personal%20INFO/portfolio-site/lightbox.js:1) 提供，并在：

- [index.js](/Users/grandpapa/Desktop/Personal%20INFO/portfolio-site/index.js:25)
- [project.js](/Users/grandpapa/Desktop/Personal%20INFO/portfolio-site/project.js:34)

中绑定。

如果以后新增页面，记得同时引入：

```html
<script defer src="../lightbox.js?v=20260427-3"></script>
```

## 常见排查命令

### 检查工作区

```bash
git status --short --branch
```

### 检查线上 Pages 状态

```bash
gh api repos/qiouoyo-commits/qiuyu-portfolio/pages
gh api repos/qiouoyo-commits/qiuyu-portfolio/pages/builds/latest
```

### 检查本地是否存在图片

```bash
find Architecture Computation -maxdepth 1 -type f | sort
```

### 检查 HTML 是否引用了正确版本号

```bash
rg -n 'styles.css|data.js|index.js|project.js' index.html projects/*.html
```

## 推荐习惯

- 每次改完先本地看首页和至少一个项目详情页。
- 每次改动都必须 push 到 GitHub Pages，不要把“只改了本地”当作完成状态。
- 每次推送后等 Pages 变成 `built` 再验证线上页面。
- 改路径、图片、排序逻辑时，优先检查首页和详情页是否同时一致。
- 做结构性修改前先提交一个小版本，方便回看。
