import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,d as s}from"./app-AuAuVshg.js";const a={},d=s(`<h2 id="配-置" tabindex="-1"><a class="header-anchor" href="#配-置" aria-hidden="true">#</a> 配 置</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 列举所有配置
$ git config <span class="token operator">-</span>l

# 为命令配置别名，个人感觉<span class="token class-name">Git</span>命令挺好记忆的，可以不用设置别名
$ git config <span class="token operator">--</span>global alias<span class="token punctuation">.</span>co checkout

$ git config <span class="token operator">--</span>global alias<span class="token punctuation">.</span>ci commit

$ git config <span class="token operator">--</span>global alias<span class="token punctuation">.</span>st status

$ git config <span class="token operator">--</span>global alias<span class="token punctuation">.</span>br branch

# 设置提交代码时的用户信息
$ git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>name <span class="token string">&quot;[name]&quot;</span>
$ git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>email <span class="token string">&quot;[email address]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增删文件" tabindex="-1"><a class="header-anchor" href="#增删文件" aria-hidden="true">#</a> 增删文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 添加当前目录的所有文件到暂存区
$ git add .

# 添加指定文件到暂存区
$ git add &lt;file1&gt; &lt;file2&gt; ...

# 添加指定目录到暂存区，包括其子目录
$ git add &lt;dir&gt;

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file_original] [file_renamed]

把文件名 file1 添加到 .gitignore 文件里，Git 会停止跟踪 file1 的状态。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分-支" tabindex="-1"><a class="header-anchor" href="#分-支" aria-hidden="true">#</a> 分 支</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 列出所有本地分支
$ git branch

# 列出所有本地分支和远程分支
$ git branch -a

# 通过当前分支的内容，新建一个分支，但依然停留在当前分支
$ git branch [branch_name]

# 从远程拉取一个分支，并停留在当前分支
$ git branch branch_name origin/remote_branch_name

 
# 切换到指定分支，并更新工作区
$ git checkout [branch_name]

# 新建一个分支，并切换到该分支，origin/remote_branch_name非必填，不填情况下从当前分支创建本地分支，填写情况下按照填写的远程分支 remote_branch_name创建本地分支，等效于git branch &amp;&amp; git checkout，常用命令
$ git checkout -b [branch_name] [origin/remote_branch_name]


# 新建分支推送到同名的远程分支，没有远程分支会新建
$ git push origin HEAD

# 分支推送到某一远程分支
$ git push origin HEAD:[remote_branch_name]

# 本地分支与远程分支关联（不推荐使用）
$ git branch --set-upstream-to=origin/[remote_branch_name] [branch_name]

# 删除本地分支，-D 参数强制删除分支，常用命令
$ git branch -d [branch_name]

# 批量删除本地分支，xxx 要替换成分支名称的搜索关键词。
$ git branch | grep &#39;xxx&#39; | xargs git branch -D


# 删除远程分支
$ git push origin :[remote_branch_name]

 
或者：

$ git push origin --delete [remote_branch_name]

# 批量删除远程分支，xxx 要替换成分支名称的搜索关键词。
git branch -r | grep  &#39;xxx&#39; | sed &#39;s/origin\\///g&#39; | xargs -I {} git push origin :{}


# 上传本地指定分支到远程仓库（推送）
$ git push

# 推送到指定分支并关联上远程分支，远程分支没有时会自动创建后推送
$ git push --set-upstream origin remote_branch_name

 

# 查看某次提交所属的分支
# -l表示--list本地，-r表示--remotes远端，-a表示--all全部

# 查找本地对应的分支
git branch --contains [commit_id]
git branch --contains [commit_id] -l
git branch --contains [commit_id] --list

# 查找远程的分支
git branch --contains [commit_id] -r
git branch --contains [commit_id] --remotes

# 查找本地与远程对应的分支,是否添加-r都可以
git branch --contains [commit_id] -a 
git branch --contains [commit_id] --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提-交" tabindex="-1"><a class="header-anchor" href="#提-交" aria-hidden="true">#</a> 提 交</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>提交代码不建议使用命令，用IDEA工具，方便冲突解决

# 提交暂存区到仓库区
$ git commit -m &quot;message，任务号：描述&quot;

# 提交工作区与暂存区的变化直接到仓库区
$ git commit -a

# 提交时显示所有 diff 信息
$ git commit -v

# 提交暂存区修改到仓库区，合并到上次修改，并修改上次的提交信息
$ git commit --amend -m [message]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库" aria-hidden="true">#</a> 仓库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在本地目录下关联远程repository
git remote add origin XX

# 取消本地关联的远程repository
git remote remove origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拉-取" tabindex="-1"><a class="header-anchor" href="#拉-取" aria-hidden="true">#</a> 拉 取</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>拉取代码不建议使用命令，用IDEA工具，方便
# 下载远程仓库的所有变动 (Git only)
$ git fetch [remote]

# 显示所有远程仓库 (Git only)
$ git remote -v

# 显示某个远程仓库的信息 (Git only)
$ git remote show [remote]

# 增加一个新的远程仓库，并命名 (Git only)
$ git remote add [remote_name] [url]

# 取回远程仓库的变化（更新），并与本地分支合并，(Git only)
$ git pull [remote] [branch_name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤-销" tabindex="-1"><a class="header-anchor" href="#撤-销" aria-hidden="true">#</a> 撤 销</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>比较少用到，当提交错误时可能需要

# 恢复暂存区的指定文件到工作区
$ git checkout -- [file]

# 恢复暂存区当前目录的所有文件到工作区
$ git checkout -- .

# 恢复工作区到指定 commit
$ git checkout -- [commit]

# 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次 commit 保持一致
$ git reset --hard

# 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定 commit，同时重置暂存区和工作区，与指定 commit 一致
$ git reset --hard [commit]

# 新建一个 commit，用于撤销指定 commit
$ git revert [commit]

# 取消回滚
$ git revert --abort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="暂-存" tabindex="-1"><a class="header-anchor" href="#暂-存" aria-hidden="true">#</a> 暂 存</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 保存所有未提交的修改
$ git stash

# 将最新一个或者是某一个储藏区的内容恢复到当前工作区
$ git stash pop [stash@{n}]

# 查看现有stash
$ git stash list

# 移除stash，其中n&gt;=0
git stash drop stash@{n} 

或者使用git stash clear命令，删除所有缓存的stash。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查-询" tabindex="-1"><a class="header-anchor" href="#查-询" aria-hidden="true">#</a> 查 询</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看工作区文件修改状态
$ git status 

# 查看工作区文件修改具体内容 
$ git diff [file]

# 查看暂存区文件修改内容
$ git diff --cached [file] 

# 查看版本库修改记录，默认为当前分支，可以查看特定branch_name的提交记录
$ git log [origin/][branch_name]

# 查看某人提交记录
$ git log --author=someone 

# 查看某个文件的历史具体修改内容
$ git log -p [file]

 
# 查看某次提交具体修改内容，可以看出某次提交对应的分支
$ git show [commitID]


查看最近n条更新日志，并且简单显示出所涉及的文件，可以看出某次提交对应的分支
git log -n --stat
或者：
git show commitID --stat

显示格式为
commit [commitID] [branch_name]，有本地分支显示branch_name

仅在提交信息后显示已修改的文件清单。
git log --name-only

# 每条日志显示1行，commitID只会显示8个字符
git log --oneline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合-并" tabindex="-1"><a class="header-anchor" href="#合-并" aria-hidden="true">#</a> 合 并</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>最常用，合并代码建议用命令，如果有冲突用IDEA工具解决冲突提交
# 合并指定（远程）分支到当前分支，常用
$ git merge --no-ff [origin/][branch_name]

# 选择一个 commit，合并进当前分支
$ git cherry-pick [commit]

# 一个命令完成所有合并，常用
$ git pull &amp;&amp; git merge -no-ff origin/[branch_name] &amp;&amp; git push

# 取消合并
$ git merge --abort

# 取消cherry-pick
$ git cherry-pick abort/skip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多命令" tabindex="-1"><a class="header-anchor" href="#多命令" aria-hidden="true">#</a> 多命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用 &amp;&amp; 连接多个命令
git pull &amp;&amp; git push 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># master|REBASE 1/2 rebase解决方式
git rebase --abort 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,24),l=[d];function r(v,c){return n(),e("div",null,l)}const u=i(a,[["render",r],["__file","Git常用命令.html.vue"]]);export{u as default};
